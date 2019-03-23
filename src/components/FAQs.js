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

    deleteFAQs = (id) => {
        this.faqService
            .deleteFAQs(id).then(()=>{
            this.faqService.findAllFAQs()
                .then(faqs =>
                    this.setState({
                        faqs: faqs,
                        editForm: {
                            question: "",
                        }
                    })
                )
        })
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
                                        <a className="btn btn-danger btn-lg active" role="button"
                                           onClick={() => {
                                               this.deleteFAQAnswers(faq.id)
                                           }}
                                        >X</a>
                                    </td>
                                    <Link to={`/admin/faqs/${faq.id}`}>
                                        <button type="button" className="btn btn-warning">Edit</button>
                                    </Link>
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