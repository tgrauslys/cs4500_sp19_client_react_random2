import React from 'react'
import Profile from '../components/Profile/Profile';
import UserService from '../services/UserService';


class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.UserService = UserService.getInstance();
        this.state = {
            user: {
                id: 1,
                firstName: '',
                lastName: '',
                day: 1,
                month: 1,
                year: 1,
                street: '',
                city: '',
                state: '',
                zipcode: '',
                email: ''
            }
        }
    }

    updateUserProfile =e=> {
        this.UserService.updateUser(this.state.user);
    };


    deleteUserProfile =e=> {
        this.UserService.deleteUserById(this.state.user.id);
    };

    handleChange =e=> {
        let newUser = this.state.user;
        newUser[e.target.name] = e.target.value;
        this.setState({user: newUser});
        console.log(this.state.user);
    };

    componentDidMount() {




        this.UserService.profile()
            .then(user => {
                this.setState(
                    {
                        user: user
                    }
                )
            })
            .catch(reject => {
               console.error(reject);
            });
    }

    render() {
        return(
            <div>
                <Profile
                    user={this.state.user}
                    updateUserProfile={this.updateUserProfile}
                    handleChange={this.handleChange}
                    deleteUserProfile={this.deleteUserProfile}
                />
            </div>
        )
    }


}

export default ProfileContainer;