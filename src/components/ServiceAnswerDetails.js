import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            serviceAnswer: {
                choiceAnswer: '',
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
        return(
            <div>
                <h3>Service Answer Details</h3>
                <label>Select an Answer: </label>
                <select
                    value={this.state.serviceAnswer.id}
                    onChange={(e) => this.selectServiceAnswer(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceAnswers
                            .map(serviceAnswer =>
                                <option
                                    value={serviceAnswer.id}
                                    key={serviceAnswer.id}>
                                    {serviceAnswer.choiceAnswer}
                                </option>
                            )
                    }
                </select>
                <br/><label>Service Answer Answer</label>
                <input
                    type="text"
                    onChange={() => {}}
                    className="form-control"
                    defaultValue=""
                    value={this.state.serviceAnswer.choiceAnswer}/>
            </div>
        )
    }
}

export default ServiceAnswerDetails