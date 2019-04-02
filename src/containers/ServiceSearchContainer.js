import React from 'react'
import ServiceSearchBar from '../components/ServiceSearchBar';
import ServiceSearchResults from '../components/ServiceSearchResults';
class ServiceSearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.serviceUserService = this.props.service
        this.state = {
            searchResults: [],
            username: ""
        }
    }
    componentDidMount() {
        this.serviceUserService
            .filterUserByUsername(this.state.username)
            .then(searchResults =>
                this.setState({
                    searchResults: searchResults
                })
            )
    } 
    handleSubmit = e => {
        e.preventDefault()
        this.serviceUserService.filterUserByUsername(this.state.username)
            .then(searchResults => {
                console.log(searchResults)
                this.setState({
                    searchResults: searchResults
                })})
    
    }
    updateUserName = e => {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        return (
            <div>
                <ServiceSearchBar handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default ServiceSearchContainer