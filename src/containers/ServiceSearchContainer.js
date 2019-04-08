import React from 'react'
import ServiceSearchBar from '../components/ServiceSearchBar';
import ServiceSearchResults from '../components/ServiceSearchResults';
import ServiceSearchFilters from '../components/ServiceSearchFilters';
class ServiceSearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.userService = this.props.service
        this.state = {
            searchResults: [],
            username: "",
            zipcode: "",
            activeFilters: {
                "hello" : null,
                "world" : null
            }
        }
    }
    componentDidMount() {
        this.userService
            .filterUsers(this.state.username, this.state.zipcode)
            .then(searchResults => {
                this.setState({
                    searchResults: searchResults
                })}
            )
    } 
    handleSubmit = e => {
        e.preventDefault()
        this.userService.filterUsers(this.state.username, this.state.zipcode)
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
        for (var q in this.state.activeFilters) {
            if (q === name) {
                var updatedFilters = this.state.activeFilters
                updatedFilters[name] = value
                this.setState({
                    activeFilters: updatedFilters
                },
                () => {console.log(this.state.activeFilters[name])})
            }
        }
    }
    render() {
        return (
            <div>
                <ServiceSearchBar 
                    handleSubmit={this.handleSubmit}
                    updateUsername={this.updateUserName}
                    updateZipcode={this.updateZipcode}/>
                <ServiceSearchFilters serviceSearchFilters={[
                    {
                        id : "hello",
                        type : "choiceAnswer",
                        question : "What's up?",
                        choices : ["What", "Is", "Up"]
                },
                    {
                        id : "world",
                        type : "choiceAnswer",
                        question : "What's down?",
                        choices : ["What", "Is", "Down"]
                }]}
                handleSelection = {this.updateFilter}/>
                <ServiceSearchResults
                    searchResults={[
                        {
                            id: 1,
                            username: "Ralph's Wreckage",
                            rating: 4,
                            reviews: ["This guy wrecks", "He doesn't"],
                            yearsInBusiness: 3,
                            hires: 7
                        }
                    ]}/>
            </div>
        )
    }
}

export default ServiceSearchContainer