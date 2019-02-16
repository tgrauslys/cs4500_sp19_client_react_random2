import React from 'react'
import FAQService from '../services/FAQService'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class FAQDetails extends React.Component {
    constructor(props) {
        super(props);
        this.faqService = FAQService.getInstance();
        this.state = {
            faqs: [],
            faq: {
                choiceAnswer: '',
                id: 1
            }
        }
    }

    componentDidMount() {
        this.faqService
            .findAllFAQs()
            .then(faqs => {
                    this.props.history.push("/admin/faqs/" + faqs[0].id);
                    this.setState({
                        faqs: faqs,
                        faq: faqs[0]
                    })
                }
            )
    }

    selectFAQ = id =>
        this.faqService
            .findFAQById(id)
            .then(faq => {
                    this.props.history.push("/admin/faqs/" + id);
                    this.setState({
                        faq: faq
                    })
                }
            );

    render() {
        return (
            <div>
                <h3>Frequently Asked Questions Details</h3>
                <select
                    value={this.state.faq.id}
                    onChange={(e) => this.selectFAQ(e.target.value)}
                    className="form-control">
                    {
                        this.state.faqs
                            .map(faq =>
                                <option
                                    value={faq.id}
                                    key={faq.id}>
                                    {faq.id}
                                </option>
                            )
                    }
                </select>
                <label>Frequently Asked Question Answer</label><br/>
                Title: <input
                onChange={() => {
                }}
                className="form-control"
                value={this.state.faq.title}/>
                Question: <input
                onChange={() => {
                }}
                className="form-control"
                value={this.state.faq.question}/>

                Answers:

                    if(this.state.faq.answers){
                        this.state.faq.answers
                        .map(answer =>
                        <Link to={"/admin/faq-answers/" + answer.id}>answer.answer</Link>
                        // <Route
                        //     path="/admin/faq-answers/:id"
                        //     exact
                        //     component={FAQAnswerDetails}/>
                        )
                    } else {
                        <input
                        onChange={() => {}}
                        className="form-control"
                        value={this.state.faq.answers}/>
                    }


                


            </div>
        )
    }
}

export default FAQDetails