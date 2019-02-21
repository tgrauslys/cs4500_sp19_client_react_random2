import React from 'react'
import FAQService from '../services/FAQService'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import FAQDetails from "./FAQDetails";

class FAQs extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
        this.state = {
            faqs: []
        }
    }

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
        return (
            <div>
                <h3>Frequently Asked Questions</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.faqs
                            .map(faq =>
                                <Link to={"/admin/faqs/" + faq.id}>
                                    <tr key={faq.id}>
                                        <td>{faq.title}</td>
                                        <td>{faq.question}</td>
                                    </tr>
                                    <Route
                                        path="/admin/faqs/:id"
                                        exact
                                        component={FAQDetails}/>
                                </Link>


                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FAQs
