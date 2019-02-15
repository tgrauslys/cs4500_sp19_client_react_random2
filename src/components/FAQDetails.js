import React from 'react'
import FAQService from '../services/FAQService'
class FAQDetails extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = FAQService.getInstance()
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
                    this.props.history.push("/admin/faqs/" + faqs[0].id)
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
                    this.props.history.push("/admin/faqs/" + id)
                    this.setState({
                        faq: faq
                    })
                }
            )
    render() {
        return(
            <div>
                <h3>Service Answer Details</h3>
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
                <label>Service Answer Answer</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.faq.title}/>
            </div>
        )
    }
}

export default FAQDetails