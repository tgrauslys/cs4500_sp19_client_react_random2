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
            page: 0,
            totalPages: 0,
            elementsPerPage: 5
        }

    }

    updateForm = e => this.setState({
        editForm: {
            question: this.state.editForm.question,
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



    selectPage = id => this.setState({page: totalPages})

    componentDidMount() {

    }


}


export default FAQAnswerContainer




