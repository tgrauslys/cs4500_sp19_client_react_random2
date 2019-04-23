import React from 'react'
import FAQAnswers from "../components/FAQAnswers";

class FAQAnswerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.AnswerService = this.props.AnswerService;
        this.FAQService = this.props.FAQService;
        this.UserService = this.props.UserService;
        this.currentPage = this.props.currentPage;
        this.itemCount = this.props.itemCount;
        this.optionValues = this.props.optionValues;
        this.state = {
            FAQAnswers: [],

            FAQAnswer: {
                question: '',
                answer: ''
            },
            FAQ: {
                question: '',
                id: 1
            },
            FAQs: [],
            User: {},
            Users: [],
            optionValues: [],
            currentPage: 0,
            itemCount: 0,
            totalPages: 0
        }
    }

    setPage = (e, pageNumber) => {
        const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
        const newPageNumber = (typeof pageNumber === "number") ? pageNumber : 0
        this.AnswerService.findFAQAnswerPage(newPageNumber, itemCount)
            .then(FAQAnswers => {
                this.setState({
                    FAQAnswers: FAQAnswers.content,
                    currentPage: newPageNumber,
                    itemCount: itemCount,
                    totalPages: FAQAnswers.totalPages
                })
            })
    };

    componentDidMount() {
        this.findFAQAnswers();
        this.FAQService.findAllFAQs().then(FAQs => this.setState({
            FAQs: FAQs
        }));
        this.UserService.findAllUsers().then(Users => this.setState({
            Users: Users
        }));

    }

    updateForm = e => {
        this.setState({
            FAQAnswer: {
                question: this.state.FAQAnswer.question,
                id: this.state.FAQAnswer.id,
                answer: e.target.value
            }
        })
    };

    createFAQAnswer = e => {
        this.AnswerService.createFAQAnswer(this.state.FAQ, this.state.FAQAnswer).then(FAQAnswer => this.AnswerService.updateUser(FAQAnswer, this.state.User));

    };

    deleteFAQAnswer = e => {
        this.AnswerService.deleteFAQAnswers(this.state.FAQAnswer.id).then(this.setState({
            FAQAnswer: {
                question: '',
                answer: '',
                id: ''
            }
        }));
        this.findFAQAnswers()
    };

    findFAQAnswers = () => {
        this.AnswerService
            .findFAQAnswerPage(this.currentPage, this.itemCount)
            .then(FAQAnswers =>
                this.setState({
                    FAQAnswers: FAQAnswers.content,
                    optionValues: this.optionValues,
                    currentPage: FAQAnswers.pageable && FAQAnswers.pageable.pageNumber,
                    itemCount: FAQAnswers.size,
                    totalPages: FAQAnswers.totalPages
                })
            );
    };

    selectFAQAnswer = id => {
        this.AnswerService.findFAQAnswerById(id).then(FAQAnswer => this.setState({FAQAnswer: FAQAnswer}))
    };

    selectFAQ = id => {
        this.FAQService.findFAQById(id.target.value).then(FAQ => this.setState({
            FAQ: FAQ,
            FAQAnswer: {
                question: FAQ.question,
                id: this.state.FAQAnswer.id,
                answer: this.state.FAQAnswer.answer,

            }
        }))
    };

    selectUser = id => {
        this.UserService.findUserById(id.target.value).then(User => this.setState({User: User}))
    };

    render() {
        return (
            <div>
                <FAQAnswers
                    faqAnswers={this.state.FAQAnswers}
                    faqAnswer={this.state.FAQAnswer}
                    faqs={this.state.FAQs}
                    faq={this.state.FAQ}
                    users={this.state.Users}
                    user={this.state.User}
                    optionValues={this.state.optionValues}
                    currentPage={this.state.currentPage}
                    itemCount={this.state.itemCount}
                    totalPages={this.state.totalPages}
                    createFaqAnswer={this.createFAQAnswer}
                    deleteFAQAnswer={this.deleteFAQAnswer}
                    setPage={this.setPage}
                    selectFAQ={this.selectFAQ}
                    selectFAQAnswer={this.selectFAQAnswer}
                    selectUser={this.selectUser}
                    updateForm={this.updateForm}
                />
            </div>
        )
    }
}

export default FAQAnswerContainer