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
            serviceId: 302,
            serviceQuestions: [],
            activeFilters: [],
            filterQuestions: [],
            searchResults: [],
            username: "",
            zipcode: ""
        }
    }
    
    componentDidMount() {
        this.userService
            .filterUsers(this.state.serviceId, this.state.username, this.state.zipcode, [])
            .then(searchResults => {
                this.setState({
                    searchResults: searchResults
                })}
            )
        this.serviceService
            .findServiceById(this.state.serviceId)
            .then(service => {
                var mappedQuestions = service.serviceQuestions.map(serviceQuestion => {
                        var displayedQuestion = {}
                        displayedQuestion["id"] = serviceQuestion.id
                        displayedQuestion["type"]= serviceQuestion.type
                        displayedQuestion["question"]= serviceQuestion.question
                        displayedQuestion["choices"]= serviceQuestion.choices.split(',')
                        return displayedQuestion
                    })
                console.log(service.serviceQuestions)
                this.setState({
                    serviceQuestions: service.serviceQuestions,
                    filterQuestions: mappedQuestions
                })
            })
    } 
    handleSubmit = e => {
        e.preventDefault()
        const searchPredicates = []
        this.state.activeFilters.forEach(activeFilter => {
            const serviceQuestion = {}
            serviceQuestion["type"] = activeFilter.serviceQuestion["type"]
            serviceQuestion["question"]= activeFilter.serviceQuestion["question"]
            serviceQuestion["choices"]= activeFilter.serviceQuestion["choices"]
            const searchPredicate = {
                serviceQuestion,
                serviceAnswer: activeFilter.serviceAnswer
            }
            searchPredicates.push(searchPredicate)
        })
        this.userService
            .filterUsers(this.state.serviceId, this.state.username, this.state.zipcode, searchPredicates)
            .then(searchResults => 
                this.setState({
                    searchResults: searchResults
                }, 
                console.log("SEARCH RESULT:" + this.state.searchResults)))
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
        let questionFound = false
        for (let i = 0; i < updatedFilters.length; i++) {
            let {serviceQuestion, serviceAnswer} = updatedFilters[i]
            if (serviceQuestion.id == name) {
                questionFound = true
                switch(serviceQuestion.type) {
                    case "TrueFalse":
                        serviceAnswer["trueFalseAnswer"] = value
                        break
                    case "Range":
                        serviceAnswer["minRangeAnswer"] = value
                        serviceAnswer["maxRangeAnswer"] = value
                        break
                    case "MultipleChoice":
                        serviceAnswer["choiceAnswer"] = value
                        break
                }
            }
        }
        if (!questionFound) {
            const serviceAnswer = {}
            let serviceQuestion = null
            for (let i = 0; i < this.state.serviceQuestions.length; i++) {
                if (this.state.serviceQuestions[i].id == name) {
                    serviceQuestion = this.state.serviceQuestions[i]
                    break
                }
            }
            console.log(value)
            switch(serviceQuestion.type) {
                case "TrueFalse":
                    serviceAnswer["trueFalseAnswer"] = value
                    break
                case "Range":
                    serviceAnswer["minRangeAnswer"] = value
                    serviceAnswer["maxRangeAnswer"] = value
                    break
                case "MultipleChoice":
                    serviceAnswer["choiceAnswer"] = value
                    break
            }
            updatedFilters.push({
                serviceQuestion,
                serviceAnswer
            })

        }
        console.log(updatedFilters)
            
        this.setState({
            activeFilters: updatedFilters
        }, this.handleSubmit(e))
        
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