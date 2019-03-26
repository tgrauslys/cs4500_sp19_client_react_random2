import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
import {Link} from 'react-router-dom'
class ServiceAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            editForm: {
                question: "",
                answer: "",
            }
        }
    }

    updateFormAnswer =e=> this.setState({
        editForm: {
            question: this.state.editForm.question,
            answer: e.target.value}})

    updateFormQuestion =e=> this.setState( {
        editForm: {
            question: e.target.value,
            answer: this.state.editForm.answer
        }
    })
	addQuestionAnswer(e) {
		this.serviceAnswerService.createServiceAnswer()
		let {name, value} = e.target
		this.setState({
			editForm: {
				//question: e.target.value,
				//answer: e.target.value
				[name]: value
			}
		})
		this.serviceAnswer.updateServiceAnswer(e.target.value, e.target.value)
	}
    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceAnswers()
            .then(serviceAnswers =>
                this.setState({
                    serviceAnswers: serviceAnswers
                })
            )
    }
    render() {
        return(
            <div>
                <h3>Service Answers</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <th> Question </th>
                        <th> Answer </th>
                    </tr>
                    <tr>
                        <td>
							<form method="post">
								<input name="question" value={this.state.editForm.question}
									onChange= {e=> this.updateFormQuestion(e)}
								/>
								<input name="answer" value={this.state.editForm.answer}
									onChange= {e=> this.updateFormAnswer(e)}
								/>
								<button
									onClick={(e) => this.addQuestionAnswer(e)}
									type="submit" className="btn btn-primary">+</button>
							</form>
                        </td>

                        <td>
                            <button
                                onClick={(e) => this.addQuestionAnswer(e)}
                                type="submit" className="btn btn-primary">-</button>
                        </td>
                        <td>
                            <button
                                type="button" className="btn btn-success">Search</button>
                        </td>


                    </tr>
                    {
                        this.state.serviceAnswers
                            .map(serviceAnswer =>
                                <tr key={serviceAnswer.id}>
                                    <td>
                                        <Link to={`/admin/answers/${serviceAnswer.id}`}>
                                            {serviceAnswer.answer}
                                        </Link>
                                    </td>
                                    <td>
                                        <button
											onClick= {() => this.serviceAnswerService.deleteServiceAnswer(serviceAnswer.id)}
											type="button" className="btn btn-danger">X</button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceAnswers