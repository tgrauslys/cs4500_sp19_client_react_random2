import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from "react-router-dom";
import FAQAnswers from "../components/FAQAnswers";


class FAQAnswerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.faqAnswerService = this.props.service;
        this.page = this.props.page;
        this.itemCount = this.props.itemCount;
        this.optionValues = this.props.optionValues;
        this.state = {
            faqAnswers: [],
            faqAnswer: {
                question: '',

                answer: '',
            },
            totalPages: 0
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
        this.faqAnswerService.findFAQAnswerPage(this.state.page, this.state.itemCount).then(faqAnswers => {
            this.setState(
                {
                    faqAnswers: faqAnswers.content,
                    totalPages: faqAnswers.totalPages
                })
        })


    setPage = (e, pageNumber) => {
        const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
        const newPageNumber = (typeof pageNumber === "number") ? pageNumber : 0
        this.faqAnswerService.findFAQAnswerPage(newPageNumber, itemCount)
            .then(frequentlyAskedAnswers => {
                this.setState({
                    faqAnswers: frequentlyAskedAnswers.content,
                    currentPage: newPageNumber,
                    itemCount: itemCount,
                    totalPages: frequentlyAskedAnswers.totalPages
                })
            })
    }


    selectFAQAnswer = id => this.faqAnswerService.findFAQAnswerById(id).then(
        faqAnswer => this.setState({faqAnswer: faqAnswer})
    )

    deleteFAQAnswer = id => this.faqAnswerService.deleteFAQAnswers(id).then(this.findFAQAnswers())

    createFAQAnswer = () => this.faqAnswerService.createFAQAnswers(this.state.faqAnswer).then(this.findFAQAnswers())


    componentDidMount() {
        this.findFAQAnswers()
    }


    render() {
        return (
            <div>
                <FAQAnswers
                    selectFaqAnswer={this.selectFAQAnswer}
                    updateFaqAnswer={this.updateAnswer}
                    deleteFAQAnswer={this.deleteFAQAnswer}
                    createFaqAnswer={this.createFAQAnswer}
                    setPage={this.setPage}
                    updateAnswer={this.updateAnswer}
                    updateQuestion={this.updateQuestion}
                    currentPage={this.state.page}
                    totalPages={this.state.totalPages}
                    faqAnswers={this.state.faqAnswers}
                    faqAnswer={this.state.faqAnswer}
                    optionValues={[1, 2, 5, 10, 25, 50]}
                    itemCount={10}
                />
            </div>
        )
    }


}


export default FAQAnswerContainer




