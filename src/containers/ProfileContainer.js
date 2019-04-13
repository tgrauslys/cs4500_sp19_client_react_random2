import React from 'react'
import Profile from '../components/Profile/Profile';
import UserService from '../services/UserService';
import ProfileService from '../services/ProfileService';


class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.UserService = UserService.getInstance();
        this.id = this.props.id;
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
        console.log(this.state.user);
        this.UserService.updateUserProfile(this.state.user);
    };


    // deleteUserProfile = e => {
    //     this.UserService.delet (this.state.user.id).then(this.setState({
    //         FAQAnswer: {
    //             first_name: '',
    //             last_name: '',
    //             day: ''
    //             month: ''
    //             year: ''
    //             street: ''
    //             city: ''
    //             state: ''
    //             zipcode: ''
    //             email: ''
    //             id: ''
    //         }
    //     }));
    // };

    handleChange =e=> {
        let newUser = this.state.user;
        newUser[e.target.name] = e.target.value;
        this.setState({user: newUser});
    };

    componentDidMount() {

        const id = window.location.pathname.split('/')[2];

        this.UserService.findUserById(id)
            .then(user => {
                this.setState(
                    {
                        user: user
                    }
                )
            })
    }

    render() {
        return(
            <div>
                <Profile
                    user={this.state.user}
                    updateUserProfile={this.updateUserProfile}
                    handleChange={this.handleChange}
                    // deleteUserProfile={this.deleteUserProfile()}
                />
            </div>
        )
    }


}

export default ProfileContainer;