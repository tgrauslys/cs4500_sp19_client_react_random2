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

    updateFormAnswer =e=> this.setState({
        faqAnswer: {
            id: this.state.faqAnswer.id,
            question: this.state.faqAnswer.question,
            answer: e.target.value}})


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

    navigateBack() {
        this.props.history.push("/admin/faq-answers")
    }

    editAnswer() {

        this.faqAnswerService.updateFAQAnswers(this.state.faqAnswer)
            .then(this.navigateBack());
    }

    render() {
        return(
            <div>
                <h3>FAQ Answer Details</h3>
                <select
                    value={this.state.faqAnswer.id}
                    // onChange={(e) => this.selectFAQAnswer(e.target.value)}
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
                    className="form-control"
                    value={this.state.faqAnswer.question}/>
                <label>FAQ Answer Answer</label><br/>
                <input
                    onChange={e => this.updateFormAnswer(e)}
                    className="form-control"
                    value={this.state.faqAnswer.answer}/>
                <br></br>
                <td>
                    <a role="button" class="btn btn-danger btn-lg active"
                    onClick={() => this.navigateBack()}>Cancel</a>
                </td>

                <td>
                    <a role="button" class="btn btn-warning btn-lg"
                    onClick={() => this.editAnswer()}>Edit</a>
                </td>
            </div>
        )
    }
}

export default FAQAnswerDetails