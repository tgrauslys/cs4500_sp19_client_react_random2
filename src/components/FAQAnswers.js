import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from "react-router-dom";
class FAQAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: []
        }
    }
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
                    <tbody>
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

            // <div>
            //     <h3>FAQ Answers</h3>
            //     <table className="table">
            //         <tbody>
            //         {
            //             this.state.faqAnswers
            //                 .map(faqAnswer =>
            //                     <tr key={faqAnswer.id}>
            //                         {/*<td>{faqAnswer.question}</td>*/}
            //                         <Link to={`/admin/faq-answers/${faqAnswer.id}`}>
            //                             <td>{faqAnswer.answer}</td>
            //                         </Link>
            //                     </tr>
            //                 )
            //         }
            //         </tbody>
            //     </table>
            // </div>


        )
    }
}

export default FAQAnswers