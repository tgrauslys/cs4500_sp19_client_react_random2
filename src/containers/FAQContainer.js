import React from 'react'
import FAQService from '../services/FAQService'
import FAQs from "../components/FAQs";

class FAQContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqService = this.props.service //FAQService.getInstance()
        this.state = {
            faqs: [],
            faq: {
                question: "",
            }
        }

    }

    componentWillMount() {

    }

    componentDidMount() {
        this.faqService.findFAQPage(this.state.page, this.state.elementsInPage).then(faqs =>
            this.setState({
                faqs: faqs.content,
                lastPage: faqs.last,
            })
        )

    }

    findAllFAQs = () =>
        this.faqService
            .findAllFAQs()
            .then(faqs => {
                    this.setState({
                        faqs: faqs
                    })
                }
            )

    updateForm = e =>
        this.setState({
            faq: {
                id: this.state.faq.id,
                question: e.target.value
            }
        })

    createFAQ = () =>
        this.faqService
            .createFAQ(this.state.faq)
            .then(this.findAllFAQs)

    deleteFAQ = id =>
        this.faqService
            .deleteFAQ(id)
            .then(this.findAllFAQs)

    selectFAQ = id =>
        this.faqService
            .findFAQById(id)
            .then(faq => this.setState({
                faq: faq
            }))

    updateFAQ = () =>
        this.faqService
            .updateFAQ(this.state.faq)
            .then(this.findAllFAQs)

    render() {
        return (
            <div>
                <FAQs
                    updateFAQ={this.updateFAQ}
                    selectFAQ={this.selectFAQ}
                    deleteFAQ={this.deleteFAQ}
                    createFAQ={this.createFAQ}
                    updateForm={this.updateForm}
                    faq={this.state.faq}
                    faqs={this.state.faqs}/>
            </div>


        )
    }
}

export default FAQContainer