import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from 'react-router-dom'
import FAQAnswerDetails from "../components/FAQAnswerDetails";

class FaqAnswerDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.faqAnswerService = FAQAnswerService.getInstance();
        this.state = {
            faqAnswers: [],
            faqAnswer: {
                choiceAnswer: '',
                id: 1
            }
        }
    }

    updateFormAnswer =e=> this.setState({
        faqAnswer: {
            id: this.state.faqAnswer.id,
            question: this.state.faqAnswer.question,
            answer: e.target.value}});

    selectFAQAnswer = id =>
        this.faqAnswerService
            .findFAQAnswerById(id)
            .then(faqAnswer => {
                    // this.props.history.push("/admin/faq-answers/" + id)
                    this.setState({
                        faqAnswer: faqAnswer
                    })
                }
            );

    navigateBack() {
        // this.props.history.push("/admin/faq-answers");

    };

    editAnswer() {

        this.faqAnswerService.updateFAQAnswers(this.state.faqAnswer)
            .then(this.navigateBack());
    };

    findAllFAQAnswers = () => this.faqAnswerService.findAllFAQAnswers();

    findFAQAnswerById = id => this.faqAnswerService.findFAQAnswerById(id);


    componentDidMount() {
        const id = window.location.pathname.split('/')[3];

        this.findFAQAnswerById(id)
            .then(faqAnswer => {
                this.setState({
                    faqAnswer: faqAnswer
                })
                return this.findAllFAQAnswers()
            })
            .then(answers => this.setState({
                faqAnswers: answers
            }))
    }

    render() {
        return (
            <div>
                <FAQAnswerDetails
                    navigateBack={this.navigateBack.bind(this)}
                    editAnswer={this.editAnswer.bind(this)}
                    updateFormAnswer={this.updateFormAnswer}
                    selectFAQAnswer={this.selectFAQAnswer}
                    faqAnswers={this.state.faqAnswers}
                    faqAnswer={this.state.faqAnswer}
                />
            </div>
        )
    }

}

export default FaqAnswerDetailsContainer
