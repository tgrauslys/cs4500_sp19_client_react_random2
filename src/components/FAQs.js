import React from 'react'
import FAQService from '../services/FAQService'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
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
                                <tr key={faq.id}>
                                    <td>
                                        <Link to={`/admin/faqs/${faq.id}`}>
                                            {faq.question}
                                        </Link>
                                    </td>
                                    <td>
                                        <a class="btn btn-danger">X</a>
                                        {/*<a>*/}
                                            {/*<span class="pull-right glyphicon glyphicon-search"></span>*/}
                                        {/*</a>*/}
                                    </td>
                                    <td>
                                        <a className="btn btn-warning">Edit</a>
                                    </td>

                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
            //
            // <div>
            //     <h3>Frequently Asked Questions</h3>
            //     <table className="table">
            //         <tbody>
            //         {
            //             this.state.faqs
            //                 .map(faq =>
            //
            //                         <tr key={faq.id}>
            //                             <td>{faq.title}</td>
            //                             <Link to={"/admin/faqs/" + faq.id}>
            //                             <td>{faq.question}</td>
            //                             </Link>
            //                         </tr>
            //
            //
            //
            //                 )
            //         }
            //         </tbody>
            //     </table>
            // </div>
        )
    }
}

export default FAQs
