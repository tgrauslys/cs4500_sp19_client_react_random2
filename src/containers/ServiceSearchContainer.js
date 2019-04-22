import React from 'react'
import ServiceSearchBar from '../components/ServiceSearchBar';
import ServiceSearchResults from '../components/ServiceSearchResults';
import ServiceSearchFilters from '../components/ServiceSearchFilters';

class ServiceSearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = this.props.serviceService
        this.userService = this.props.userService
        this.questionService = this.props.questionService
        if (this.props.match !== undefined) {
            this.serviceId = this.props.match.params.id
        }
        this.state = {
            serviceCategory: "",
            serviceQuestions: [],
            activeFilters: [],
            filterQuestions: [],
            searchResults: [],
            username: "",
            zipcode: ""
        }
    }
    
    componentDidMount() {
        if (this.serviceId !== undefined) {
        this.userService
            .filterUsersByService(this.serviceId, this.state.username, this.state.zipcode, [])
            .then(searchResults => {
                if (searchResults !== undefined) {
                    this.setState({
                        searchResults: searchResults
                    })
                }
            })
        this.serviceService
            .findServiceById(this.serviceId)
            .then(service => {
                let mappedQuestions = service.serviceQuestions.map(serviceQuestion => {
                        let displayedQuestion = {}
                        displayedQuestion["id"] = serviceQuestion.id
                        displayedQuestion["type"]= serviceQuestion.type
                        displayedQuestion["question"]= serviceQuestion.question
                        displayedQuestion["choices"]= serviceQuestion.choices.split(',')
                        return displayedQuestion
                    })
                this.setState({
                    serviceQuestions: service.serviceQuestions,
                    filterQuestions: mappedQuestions
                })
            })
        } else {
            this.userService
                .filterUsers(this.state.username, this.state.zipcode)
                .then(searchResults => {
                    if (searchResults !== undefined){
                        this.setState({
                            searchResults: searchResults
                        })
                    }
                })
        }
    } 
    handleSubmit = () => {
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
            .filterUsers(this.serviceId, this.state.username, this.state.zipcode, searchPredicates)
            .then(searchResults => {
                if (searchResults !== undefined) {
                    this.setState({
                        searchResults: searchResults
                    })
                }
            })
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
        let updatedFilters = this.state.activeFilters
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
            
        this.setState({
            activeFilters: updatedFilters
        }, this.handleSubmit())
    }
    render() {
        
        return (
            <div>
                <ServiceSearchBar 
                    handleSubmit={this.handleSubmit}
                    updateUsername={this.updateUserName}
                    updateZipcode={this.updateZipcode}/>
                {this.serviceId !== undefined && <ServiceSearchFilters
                    serviceSearchFilters= {this.state.filterQuestions}
                    handleSelection = {this.updateFilter}/>}
                <ServiceSearchResults
                    searchResults={this.state.searchResults}/>
            </div>
        )
    }
}

export default ServiceSearchContainer