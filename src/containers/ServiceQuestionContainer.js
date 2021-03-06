import React from 'react'
import ServiceQuestions from '../components/ServiceQuestions'
import ServiceSearchBar from '../components/ServiceSearchBar';
import {withRouter} from 'react-router-dom'
class ServiceQuestionContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = this.props.service
        this.currentPage = this.props.currentPage
        this.itemCount = this.props.itemCount
        this.optionValues = this.props.optionValues
        this.state = {
            serviceQuestions: [],
            optionValues: [],
            currentPage: 0,
            itemCount: 0,
            first: true,
            last: false
        }
    }
    setPage = async (e, pageNumber) => {
        const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
        const newPageNumber = (typeof pageNumber === "number") ? pageNumber : 0
        return new Promise((resolve, reject) => {
            this.serviceQuestionService.findQuestionPage(newPageNumber, itemCount)
            .then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions.content,
					currentPage: newPageNumber,
                    itemCount: itemCount,
                    first: serviceQuestions.first,
                    last: serviceQuestions.last
                }, resolve()))
        })
    }
    componentDidMount() {
        this.serviceQuestionService
            .findQuestionPage(this.currentPage, this.itemCount)
            .then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions.content,
                    optionValues: this.optionValues,
                    currentPage: serviceQuestions.pageable && serviceQuestions.pageable.pageNumber,
                    itemCount: serviceQuestions.size,
                    first: serviceQuestions.first,
                    last: serviceQuestions.last
                })
            )
    }
    handleRedirect = questionId => this.props.history.push(`/admin/questions/${questionId}`)
    render() {
        return (
            <div>
                <ServiceSearchBar/>
                <ServiceQuestions
                    serviceQuestions={this.state.serviceQuestions}
                    optionValues={this.state.optionValues}
                    currentPage={this.state.currentPage}
                    itemCount={this.state.itemCount}
                    first={this.state.first}
                    last={this.state.last}
                    setPage={this.setPage}
                    handleRedirect={this.handleRedirect}/>
            </div>
        )
    }
}

export default withRouter(ServiceQuestionContainer)