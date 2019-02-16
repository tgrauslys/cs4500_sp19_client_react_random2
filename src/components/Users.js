import React from 'react'
import UserService from '../services/UserService'
class Users extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.userService
            .findAllUsers()
            .then(users =>
                this.setState({
                    users: users
                })
            )
    }
    render() {
        return(
            <div>
                <h3>Users</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.users
                            .map(user =>
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users
