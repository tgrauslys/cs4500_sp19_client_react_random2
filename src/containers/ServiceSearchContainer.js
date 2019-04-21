import React from 'react'
import ServiceSearchBar from '../components/ServiceSearchBar';
import ServiceSearchResults from '../components/ServiceSearchResults';
class ServiceSearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.userService = this.props.service
        this.state = {
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
                    searchResults: searchResults
                })}
            )
    } 
    handleSubmit = async e => {
        e.preventDefault()
        return new Promise((resolve, reject) => {
            this.userService.filterUsers(this.state.username, this.state.zipcode)
            .then(searchResults => 
                this.setState({
                    searchResults: searchResults
                }, resolve()))
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
    render() {
        return (
            <div>
                <ServiceSearchBar 
                    handleSubmit={this.handleSubmit}
                    updateUsername={this.updateUserName}
                    updateZipcode={this.updateZipcode}/>
                <ServiceSearchResults
                    searchResults={this.state.searchResults}/>
            </div>
        )
    }
}

export default ServiceSearchContainer