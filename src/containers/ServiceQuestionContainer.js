import React from 'react'
import ServiceQuestions from '../components/ServiceQuestions'
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
            totalPages: 0
        }
    }
    setPage = (e, pageNumber) => {
        const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
        const newPageNumber = (typeof pageNumber === "number") ? pageNumber : 0
		this.serviceQuestionService.findQuestionPage(newPageNumber, itemCount)
            .then(serviceQuestions => {
                this.setState({
                    serviceQuestions: serviceQuestions.content,
					currentPage: newPageNumber,
                    itemCount: itemCount,
                    totalPages: serviceQuestions.totalPages
                })})
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
                    totalPages: serviceQuestions.totalPages
                })
            )
    }
    render() {
        return (
            <div>
                <ServiceQuestions
                    serviceQuestions={this.state.serviceQuestions}
                    optionValues={this.state.optionValues}
                    currentPage={this.state.currentPage}
                    itemCount={this.state.itemCount}
                    totalPages={this.state.totalPages}
                    setPage={this.setPage}/>
            </div>
        )
    }
}

export default ServiceQuestionContainer