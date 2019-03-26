import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            currentPage:0,
            itemCount: 10
        }
    }
    changeItemCount(e) { 
		this.serviceQuestionService.findQuestionPage(this.state.currentPage, e.target.value)
			.then(serviceQuestions => 
				this.setState({
                    serviceQuestions: serviceQuestions.content
                })
			)
		this.setState({
			itemCount: e.target.value
		})
    }
    changePage(e, pageNumber) {
		console.log("CurrentPage:" + this.state.currentPage)
		console.log(e)
		const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
		console.log(itemCount)
		console.log("--------------------------------------------------")
		this.serviceQuestionService.findQuestionPage(pageNumber, itemCount)
			.then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions.content,
					currentPage: pageNumber,
					itemCount: itemCount
                }))
				
		console.log(this.state.currentPage)
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
                                <select defaultValue="10" onChange={e => this.changeItemCount(e)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </select>
                                <label style={{margin: '10px'}}>Page: {this.state.currentPage}</label>
                                <button
                                    onClick= {(e) => this.changePage(e, this.state.currentPage - 1)}
                                    type="button" className="btn btn-primary">Prev</button>
                                <button
                                    onClick= {(e) => this.changePage(e, this.state.currentPage + 1)} 
                                    type="button" className="btn btn-primary">Next</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceQuestions