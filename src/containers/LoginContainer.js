import React from 'react'
import Login from '../components/Login/Login';
import {withRouter} from 'react-router-dom'

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
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.userService.login({username, password}).then(isLoggedIn => {

            if (isLoggedIn) {
                this.props.history.push('/profile')
            } else {
                this.setState({
                    isErrorMessageOn: true
                })
            }
        })
    };

    updateUsername = e => {
        this.setState({
            username: e.target.value
        })
    };

    updatePassword = e => {
        this.setState({
            password: e.target.value
        })
    };

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

export default withRouter(LoginContainer);