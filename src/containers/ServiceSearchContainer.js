import React from 'react'
import ServiceSearchBar from '../components/ServiceSearchBar';
import ServiceSearchResults from '../components/ServiceSearchResults';
import ServiceSearchFilters from '../components/ServiceSearchFilters';

class ServiceSearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.service = this.props.service
        this.serviceService = this.props.serviceService
        this.userService = this.props.userService
        this.questionService = this.props.questionService
        this.state = {
            serviceCategory: "",
            serviceId: 202,
            serviceQuestions: [],
            filterQuestions: [],
            searchResults: [],
            username: "",
            zipcode: ""
        }
    }
    
    componentDidMount() {
        this.userService
            .filterUsers(this.state.username, this.state.zipcode)
            .then(searchResults => {
                this.setState({
                    //searchResults: searchResults
                })}
            )
        this.serviceService
            .findServiceById(this.state.serviceId)
            .then(service => {
                var initFilters = {}
                var mappedQuestions = service.serviceQuestions.map(serviceQuestion => {
                        var displayedQuestion = {}
                        displayedQuestion["id"] = serviceQuestion.id
                        displayedQuestion["type"]= serviceQuestion.type
                        displayedQuestion["question"]= serviceQuestion.question
                        displayedQuestion["choices"]= serviceQuestion.choices.split(',')
                        return displayedQuestion
                    })
                    service.serviceQuestions.forEach(serviceQuestion =>
                    initFilters[serviceQuestion.id] = null
                    )
                this.setState({
                    filterQuestions: mappedQuestions,
                    activeFilters: initFilters
                })
            })
    } 
    handleSubmit = e => {
        e.preventDefault()
        this.userService
            .filterUsers(this.state.username, this.state.zipcode, this.state.activeFilters)
            .then(searchResults => 
                this.setState({
                    searchResults: searchResults
                }))
    }
    updateUserName = e => {
        this.setState({
            username: e.target.value
        })
    }
    updateZipcode = e => {
        this.setState({
            zipcode: e.target.value
        })
    }
    updateFilter = e => {
        let {value, name} = e.target
        var updatedFilters = this.state.activeFilters
        for (var q in this.state.activeFilters) {
            if (q === name) {
                updatedFilters[name] = value
            }
        }
        this.setState({
            activeFilters: updatedFilters
        }
        
        //this.handleSubmit(e)
    }
    render() {
        
        return (
            <div>
                <ServiceSearchBar 
                    handleSubmit={this.handleSubmit}
                    updateUsername={this.updateUserName}
                    updateZipcode={this.updateZipcode}/>
                <ServiceSearchFilters
                    serviceSearchFilters= {this.state.filterQuestions}
                    handleSelection = {this.updateFilter}/>
                <ServiceSearchResults
                    searchResults={this.state.searchResults}/>
            </div>
        )
    }
}

export default ServiceSearchContainer