import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestionDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            serviceQuestion: {
                question: '',
                id: props.match.params.id
            }
        }
    }
    componentDidMount() {
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions => {
                    this.props.history.push("/admin/questions/" + serviceQuestions[0].id)
                    let desiredIndex = serviceQuestions.findIndex((question) => {
                        return parseInt(question.id) === parseInt(this.state.serviceQuestion.id)
                    })
                    this.setState({
                        serviceQuestions,
                        serviceQuestion: desiredIndex === -1 ? serviceQuestions[0] : serviceQuestions[desiredIndex]
                    })
                }
            )
    }
    selectServiceQuestion = id =>
        this.serviceQuestionService
            .findServiceQuestionById(id)
            .then(serviceQuestion => {
                    this.props.history.push("/admin/questions/" + id)
                    this.setState({
                        serviceQuestion: serviceQuestion
                    })
                }
            )
    render() {
        return(
            <div>
                <h3>Service Question Details</h3>
                <label>Please select a title: </label>
                <select
                    value={this.state.serviceQuestion.id}
                    onChange={(e) => this.selectServiceQuestion(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <option
                                    value={serviceQuestion.id}
                                    key={serviceQuestion.id}>
                                    {serviceQuestion.question}
                                </option>
                            )
                    }
                </select>
                <label>Service Question Title</label>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.serviceQuestion.question}/>
            </div>
        )
    }
}

export default ServiceQuestionDetails