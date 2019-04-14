import React from 'react'
import Login from '../components/Login/Login';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = this.props.userService
        this.state = {
            username: "",
            password: "",
            isErrorMessageOn: false
        }
    }

    componentDidMount() {}
    login = e => {
        e.preventDefault()
        const username = this.state.username
        const password = this.state.password
        const isLoggedIn = this.userService.login({username, password})
        if (isLoggedIn) {
            // Redirect to Profile Screen
        } else {
            this.setState({
                isErrorMessageOn: true
            })
        }
    };
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
                <Login
                    login={this.login}
                    updateUsername={this.updateUsername}
                    updatePassword={this.updatePassword}
                    isErrorMessageOn={this.state.isErrorMessageOn}
                />
            </div>
        )
    }
}

export default LoginContainer;