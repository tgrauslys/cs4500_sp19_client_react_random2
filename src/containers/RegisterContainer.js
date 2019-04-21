import React from 'react'
import Register from '../components/Register/Register';
import {withRouter} from 'react-router-dom'

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = this.props.userService
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            isErrorMessageOn: false
        }
    }

    componentDidMount() {}
    register = e => {
        e.preventDefault()
        const firstName = this.state.firstName
        const lastName = this.state.lastName
        const username = this.state.username
        const password = this.state.password
        this.userService.register({firstName, lastName, username, password}).then(isRegistered => {
            if (isRegistered) {
                this.props.history.push('/profile')
            } else {
                this.setState({
                    isErrorMessageOn: true
                })
            }
        })
    }
    updateFirstName = e => {
        this.setState({
            firstName: e.target.value
        })
    }
    updateLastName = e => {
        this.setState({
            lastName: e.target.value
        })
    }
    updateUsername = e => {
        this.setState({
            username: e.target.value
        })
    }
    updatePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return(
            <div>
                <Register
                    register={this.register}
                    updateFirstName={this.updateFirstName}
                    updateLastName={this.updateLastName}
                    updateUsername={this.updateUsername}
                    updatePassword={this.updatePassword}
                    isErrorMessageOn={this.state.isErrorMessageOn}
                />
            </div>
        )
    }
}

export default withRouter(RegisterContainer)