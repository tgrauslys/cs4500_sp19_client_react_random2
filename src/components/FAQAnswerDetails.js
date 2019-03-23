import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
class FAQAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: [],
            faqAnswer: {
                choiceAnswer: '',
                id: props.match.params.id
            }
        }
    }
    componentDidMount() {
        this.faqAnswerService
            .findAllFAQAnswers()
            .then(faqAnswers => {
                    this.props.history.push("/admin/faq-answers/" + faqAnswers[0].id)
                    const desiredIndex = faqAnswers.findIndex((question) => {
                        return parseInt(question.id) === parseInt(this.state.faqAnswer.id)
                    })
                    this.setState({
                        faqAnswers: faqAnswers,
                        faqAnswer: desiredIndex === -1 ? faqAnswers[0] : faqAnswers[desiredIndex]
                    })
                }
            )
    }
    selectFAQAnswer = id =>
        this.faqAnswerService
            .findFAQAnswerById(id)
            .then(faqAnswer => {
                    this.props.history.push("/admin/faq-answers/" + id)
                    this.setState({
                        faqAnswer: faqAnswer
                    })
                }
            )
    render() {
        return(
            <div>
                <h3>FAQ Answer Details</h3>
                <select
                    value={this.state.faqAnswer.id}
                    onChange={(e) => this.selectFAQAnswer(e.target.value)}
                    className="form-control">
                    {
                        this.state.faqAnswers
                            .map(faqAnswer =>
                                <option
                                    value={faqAnswer.id}
                                    key={faqAnswer.id}>
                                    {faqAnswer.id}
                                </option>
                            )
                    }
                </select>
                <label>FAQ Answer Question</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.faqAnswer.question}/>
                <label>FAQ Answer Answer</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.faqAnswer.answer}/>
                <br></br>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                </td>
            </div>
        )
    }
}

export default FAQAnswerDetails