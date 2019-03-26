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
		console.log(this.state.serviceQuestions)
		this.serviceQuestionService.findQuestionPage(this.state.currentPage, e.target.value)
			.then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions.content
                }))
		setTimeout(() => console.log(Object.keys(this.state.serviceQuestions)), 3000)
		setTimeout(() => console.log(this.state.serviceQuestions), 3000)
		// console.log(this.state.serviceQuestions)
    }
    changePage(e, pageNumber) {
		console.log(this.state.serviceQuestions)
		this.setState({
			currentPage: pageNumber
		})
		this.serviceQuestionService.findQuestionPage(this.state.currentPage, e.target.value)
			.then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions.content
                }))
    }
    componentDidMount() {
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions
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