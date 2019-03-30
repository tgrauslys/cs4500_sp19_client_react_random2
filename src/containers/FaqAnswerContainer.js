import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from "react-router-dom";
import FAQAnswers from "../components/FAQAnswers";


class FAQAnswerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = FAQAnswerService.getInstance()
        this.state = {
            faqAnswers: [],
            faqAnswer: {
                question: '',
                answer: '',
            },
            page: 0,
            totalPages: 0,
            elementsPerPage: 1
        }

    }

    updateQuestion = e => this.setState({
        faqAnswer: {
            id: this.state.faqAnswer.id,
            question: e.target.value,
            answer: this.state.faqAnswer.answer
        }
    })

    updateAnswer = e => this.setState({
        faqAnswer: {
            id: this.state.faqAnswer.id,
            question: this.state.question,
            answer: e.target.value
        }
    })

    findFAQAnswers = () =>
        this.faqAnswerService.findFAQAnswerPage(this.state.page, this.state.elementsPerPage).then(faqAnswers => {
            this.setState(
                {faqAnswers: faqAnswers.content,
                    totalPages: faqAnswers.totalPages
                })
        })



    selectPage = id => this.setState({page: id})


    selectFAQAnswer = id => this.faqAnswerService.findFAQAnswerById(id).then(
        faqAnswer => this.setState({faqAnswer : faqAnswer})
    )

    deleteFAQAnswer = id => this.faqAnswerService.deleteFAQAnswers(id).then(this.findFAQAnswers())

    createFAQAnswer = () => this.faqAnswerService.createFAQAnswers(this.state.faqAnswer).then(this.findFAQAnswers())



    componentDidMount() {
        this.findFAQAnswers()
    }



    render() {
        return(
            <div>
                <FAQAnswers
                    selectFaqAnswer={ this.selectFAQAnswer}
                    updateFaqAnswer={ this.updateAnswer}
                    deleteFAQAnswer={ this.deleteFAQAnswer}
                    createFaqAnswer={ this.createFAQAnswer}
                    selectPage={ this.selectPage}
                    updateAnswer={this.updateAnswer}
                    updateQuestion={this.updateQuestion}
                    faqAnswers={ this.state.faqAnswers}
                    faqAnswer = {this.state.faqAnswer}

                />
            </div>
        )
    }


}


export default FAQAnswerContainer




