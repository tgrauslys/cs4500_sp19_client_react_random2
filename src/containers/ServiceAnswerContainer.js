import React from 'react'
import ServiceAnswers from '../components/ServiceAnswers'
import ServiceSearchBar from '../components/ServiceSearchBar';
import {withRouter} from 'react-router-dom'
class ServiceAnswerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = this.props.service
        this.currentPage = this.props.currentPage
        this.itemCount = this.props.itemCount
        this.optionValues = this.props.optionValues
        this.state = {
            serviceAnswers: [],
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
            this.serviceAnswerService.findAnswerPage(newPageNumber, itemCount)
            .then(serviceAnswers =>
                this.setState({
                    serviceAnswers: serviceAnswers.content,
					currentPage: newPageNumber,
                    itemCount: itemCount,
                    first: serviceAnswers.first,
                    last: serviceAnswers.last
                }, resolve()))
        })
    }
    componentDidMount() {
        this.serviceAnswerService
            .findAnswerPage(this.currentPage, this.itemCount)
            .then(serviceAnswers =>
                this.setState({
                    serviceAnswers: serviceAnswers.content,
                    optionValues: this.optionValues,
                    currentPage: serviceAnswers.pageable && serviceAnswers.pageable.pageNumber,
                    itemCount: serviceAnswers.size,
                    first: serviceAnswers.first,
                    last: serviceAnswers.last
                })
            )
    }
    handleRedirect = answerId => this.props.history.push(`/admin/answers/${answerId}`)
    render() {
        return (
            <div>
                <ServiceSearchBar/>
                <ServiceAnswers
                    serviceAnswers={this.state.serviceAnswers}
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

export default withRouter(ServiceAnswerContainer)