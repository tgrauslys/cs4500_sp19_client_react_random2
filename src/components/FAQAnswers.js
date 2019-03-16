import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from "react-router-dom";
class FAQAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: [],
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
    componentDidMount() {
        this.faqAnswerService
            .findAllFAQAnswers()
            .then(faqAnswers =>
                this.setState({
                    faqAnswers: faqAnswers
                })
            )
    }
    render() {
        return(
            <div>
                <h3>FAQ Answers</h3>
                <table className="table">
                    <tr>
                        <th> Question </th>
                        <th> Answer </th>
                    </tr>
                    <tbody>
                    
                    <tr>
                        <td>
                            <input
                                onChange= {e=> this.updateFormQuestion(e)}
                            />
                        </td>
                        <td>
                            <input
                                onChange= {e=> this.updateFormAnswer(e)}
                            />
                        </td>
                    </tr>

                    {
                        this.state.faqAnswers
                            .map(faqAnswer =>
                                <tr key={faqAnswer.id}>
                                    <td>
                                        <Link to={`/admin/faq-answers/${faqAnswer.id}`}>
                                            {faqAnswer.answer}
                                        </Link>
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

export default FAQAnswers