import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            optionValues: [1, 2, 5, 10, 25, 50],
            currentPage: 0,
            itemCount: 10,
            totalPages: 1
        }
    }
    setPage(e, pageNumber) {
        console.log(this.state.serviceQuestions)
		const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
		this.serviceQuestionService.findQuestionPage(pageNumber, itemCount)
            .then(serviceQuestions => {
                console.log(serviceQuestions)
                this.setState({
                    serviceQuestions: serviceQuestions.content,
					currentPage: pageNumber,
                    itemCount: itemCount,
                    totalPages: serviceQuestions.totalPages
                })})
    }
    componentDidMount() {
        this.serviceQuestionService
            .findQuestionPage(0, 10)
            .then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions.content
                })
            )
    }
    render() {
        const isFirstPage = this.state.currentPage === 0;
        const isLastPage = this.state.currentPage >= this.state.totalPages - 1;

        let previousButton = <button onClick= {(e) => this.setPage(e, this.state.currentPage - 1)}
                                style={{margin: '2px'}}
                                // &#60; displays "<"
                                type="button" className="btn btn-secondary">&#60;</button>
        let previousPageButton = <button onClick= {(e) => this.setPage(e, this.state.currentPage - 1)}
                                    style={{margin: '2px'}}
                                    type="button" className="btn btn-primary">{this.state.currentPage}</button>
        let nextButton = <button onClick= {(e) => this.setPage(e, this.state.currentPage + 1)}
                                style={{margin: '2px'}}
                                // &#62; displays ">"
                                type="button" className="btn btn-secondary">&#62;</button>
        let nextPageButton = <button onClick= {(e) => this.setPage(e, this.state.currentPage + 1)}
                                    style={{margin: '2px'}}
                                    type="button" className="btn btn-primary">{this.state.currentPage + 2}</button>

        if (isFirstPage) {
            previousButton = ''
            previousPageButton = ''
        } 
        if (isLastPage) {
            nextButton = ''
            nextPageButton = ''
        }

        return(
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>
                                        <Link to={`/admin/questions/${serviceQuestion.id}`}>
                                            {serviceQuestion.question}
                                        </Link>
                                    </td>
                                    
                                </tr>
                            )
                    }
                    <tr>
                            <td>
                                <select defaultValue={this.state.itemCount} onChange={e => this.setPage(e, this.state.currentPage)}>
                                    {
                                        this.state.optionValues.map(itemCount => 
                                            <option key={itemCount} value={itemCount}>{itemCount}</option>)
                                    }
                                </select>
                                {previousButton}
                                {previousPageButton}
                                <button
                                    style={{margin: '2px'}}
                                    type="button" className="btn btn-primary" disabled>{this.state.currentPage + 1}</button>
                                {nextPageButton}
                                {nextButton}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceQuestions