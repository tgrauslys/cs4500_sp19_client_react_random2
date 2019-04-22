import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            serviceAnswer: {
                id: props.match.params.id
            }
        }
    }
    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceAnswers()
            .then(serviceAnswers => {
                this.props.history.push("/admin/answers/" + serviceAnswers[0].id)
                const desiredIndex = serviceAnswers.findIndex((answer) => {
                    return parseInt(answer.id) === parseInt(this.state.serviceAnswer.id)
                })
                this.setState({
                    serviceAnswers,
                    serviceAnswer: desiredIndex === -1 ? serviceAnswers[0] : serviceAnswers[desiredIndex]
                })
            }
            )
    }
    selectServiceAnswer = id =>
        this.serviceAnswerService
            .findServiceAnswerById(id)
            .then(serviceAnswer => {
                this.props.history.push("/admin/answers/" + id)
                this.setState({
                    serviceAnswer: serviceAnswer
                })
            }
            )
    render() {
        return (
            <div>
                <h3>Service Answer Details</h3>
                <label>Select an Answer: </label>
                <select
                    value={this.state.serviceAnswer.id}
                    onChange={(e) => this.selectServiceAnswer(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceAnswers
                            .map(serviceAnswer => {
                                return ((this.state.serviceAnswer.trueFalseAnswer != null &&
                                    <option
                                        value={serviceAnswer.id}
                                        key={serviceAnswer.id}>
                                        {this.state.serviceAnswer.trueFalseAnswer}</option>) ||
                                    (this.state.serviceAnswer.minRangeAnswer != null &&

                                        <option
                                            value={serviceAnswer.id}
                                            key={serviceAnswer.id}>
                                            {this.state.serviceAnswer.minRangeAnswer}</option>) ||
                                    (this.state.serviceAnswer.maxRangeAnswer != null &&
                                        <option
                                            value={serviceAnswer.id}
                                            key={serviceAnswer.id}>
                                            {this.state.serviceAnswer.maxRangeAnswer}</option>) ||
                                    (this.state.serviceAnswer.choiceAnswer != null &&
                                        <option
                                            value={serviceAnswer.id}
                                            key={serviceAnswer.id}>
                                            {this.state.serviceAnswer.choiceAnswer}</option>))
                            })
                    }
                </select>
                <label>Service Answer</label>
                {
                    (this.state.serviceAnswer.trueFalseAnswer != null &&
                        <input
                            onChange={() => { }}
                            className="form-control"
                            value={this.state.serviceAnswer.trueFalseAnswer} />) ||
                    (this.state.serviceAnswer.minRangeAnswer != null &&
                        <input
                            onChange={() => { }}
                            className="form-control"
                            value={this.state.serviceAnswer.minRangeAnswer} />) ||
                    (this.state.serviceAnswer.maxRangeAnswer != null &&
                        <input
                            onChange={() => { }}
                            className="form-control"
                            value={this.state.serviceAnswer.maxRangeAnswer} />) ||
                    (this.state.serviceAnswer.choiceAnswer != null &&
                        <input
                            onChange={() => { }}
                            className="form-control"
                            value={this.state.serviceAnswer.choiceAnswer} />)
                }
            </div>
        )
    }
}

export default ServiceAnswerDetails