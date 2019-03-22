import React from 'react'
import FAQService from '../services/FAQService'
import {Link} from "react-router-dom";
class FAQAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: [],
            editForm: {
                question: "",
            }
        }

    }

    updateFormQuestion =e=> this.setState( {
        editForm: {
            question: e.target.value,
        }
    })
    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(faqs =>
                this.setState({
                    faqs: faqs
                })
            )
    }
    render() {
        return(
            <div>
                <h3>Frequently Asked Questions</h3>
                <table className="table">
                    <tr>
                        <th> Question </th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>
                            <input
                                onChange= {e=> this.updateFormQuestion(e)}
                            />
                        </td>

                        <td>
                            <button
                                type="button" className="btn btn-primary">+</button>
                        </td>

                        <td>
                            <button
                                type="button" className="btn btn-success">Search</button>
                        </td>


                    </tr>

                    {
                        this.state.faqs
                            .map(faq =>
                                <tr key={faq.id}>
                                    <Link to={`/admin/faqs/${faq.id}`}>
                                        <td>{faq.question}</td>
                                    </Link>
                                    <td>
                                        <button
                                            // onClick={this.faqAnswerService.deleteFAQAnswers(faqAnswer.id)}

                                            type="button" className="btn btn-danger">X</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-warning">Edit</button>
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