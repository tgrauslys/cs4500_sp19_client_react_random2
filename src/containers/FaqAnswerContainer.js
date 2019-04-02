import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from "react-router-dom";


class FAQAnswerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: [],
            editForm: {
                question: "",
                answer: "",
            },
        }

    }

    updateFormAnswer = e => this.setState({
        editForm: {
            question: this.state.editForm.question,
            answer: e.target.value
        }
    })

    updateFormQuestion = e => this.setState({
        editForm: {
            question: e.target.value,
            answer: this.state.editForm.answer
        }
    })


    componentWillMount() {

    }

    componentDidMount() {
        this.faqAnswerService.findFAQAnswerPage(this.state.page, this.state.elementsInPage).then(faqAnswers =>
            this.setState({
                faqAnswers: faqAnswers.content,
                lastPage: faqAnswers.last,
            })
        )

    }


    deleteFAQAnswers = (id) => {
        this.faqAnswerService
            .deleteFAQAnswers(id).then(()=>{

        })
    }

    // deleteFAQAnswers = (id) => {
    //     this.faqAnswerService
    //         .deleteFAQAnswers(id).then(()=>{
    //         window.location.href='/admin/faq-answers';
    //     });
    // };

    render() {
        return (
            <div>
                <h3>FAQ Answers</h3>
                <table className="table">
                    <tr>
                        <th> Question</th>
                        <th> Answer</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>
                            <input
                                onChange={e => this.updateFormQuestion(e)}
                            />
                        </td>
                        <td>
                            <input
                                onChange={e => this.updateFormAnswer(e)}
                            />
                        </td>

                        <td>
                            <button
                                type="button" className="btn btn-primary"
                                onClick={() => {
                                    this.faqAnswerService.createFAQAnswers(this.state.editForm)
                                }}
                            >+
                            </button>
                        </td>

                        <td>
                            <button
                                type="button" className="btn btn-success">Search
                            </button>
                        </td>


                    </tr>

                    {
                        this.state.faqAnswers
                            .map(faqAnswer =>
                                <tr key={faqAnswer.id}>
                                    <td>{faqAnswer.question}</td>
                                    <td>
                                        <Link to={`/admin/faq-answers/${faqAnswer.id}`}>
                                            {faqAnswer.answer}
                                        </Link>
                                    </td>
                                    <td>
                                        <a class="btn btn-danger btn-lg active" role="button" aria-pressed="true"
                                           onClick={() => {
                                               this.deleteFAQAnswers(faqAnswer.id)
                                           }}
                                        >X</a>
                                    </td>
                                    <td>
                                        {/*<button type="button" className="btn btn-warning">Edit</button>*/}
                                        <a class="btn btn-outline-warning btn-lg active" role="button"
                                        >Edit</a>
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


export default FAQAnswerContainer



