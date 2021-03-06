import React from 'react'
import ServicesService from "../services/ServicesService";
import UserService from "../services/UserService";
import UserDetails from "../components/UserDetails";

class UserDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.serviceService = ServicesService.getInstance();
        this.state = {
            enteredUsername: true,
            isNewUser: false,
            users: [],
            // Empty user
            user: {
                id: props.match.params.id,
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                role: "",
                description: "",
                rating: 0.0,
                startDate: "",
                employees: "",
                backgroundChecked: false,
                hires: 0,
                paymentMethods: "",
                zipcode: "",
                services: [],
                serviceAnswers: [],
                reviews: [],
                day: "",
                month: "",
                year: "",
                street: "",
                city: "",
                state: "",
                email: ""
            },
        }
    }

    componentDidMount() {
        this.userService.findUserById(this.state.user.id)
            .then(user => this.setState({
                                            user: user,
                                            isNewUser: ("" === user.username.trim())
                                        }));
    }

    saveUser = () => {
        if (this.state.user.username.trim() === "") {
            this.setState({enteredUsername: false})
        } else {
            this.userService.updateUser(this.state.user)
                .then(setTimeout(() => {
                    this.props.history.push("/admin/users")
                }, 800));
        }
    };

    promiseOptions = input => {
        return new Promise(resolve => {
                               setTimeout(() =>
                                              resolve(this.serviceService.searchService(input)
                                                          .then(result => result.map(
                                                              service => {
                                                                  let opt = {};
                                                                  opt.label = service.serviceName;
                                                                  opt.value = service.id;
                                                                  opt.serv = service;
                                                                  return opt;
                                                              })))

                                   , 1000)
                           }
        )
    };

    goBack = () => {
        if (this.state.isNewUser) {
            this.userService.deleteUserById(this.state.user.id)
                .then(setTimeout(() => {
                    this.props.history.push("/admin/users")
                }, 800));
        } else {
            this.props.history.push("/admin/users");
        }
    };

    deleteUser = () => {
        this.userService.deleteUserById(this.state.user.id)
            .then(setTimeout(() => {
                this.props.history.push("/admin/users")
            }, 800));
    };

    handleEvents = (e, type) => {
        let newUser = this.state.user;
        switch (type) {
            case "user-services":
                newUser.services = e.map(elem => elem.serv);
                break;
            case "user-username":
                newUser.username = e.target.value;
                break;
            case "user-firstname":
                newUser.firstName = e.target.value;
                break;
            case "user-lastname":
                newUser.lastName = e.target.value;
                break;
            case "user-role":
                newUser.role = e.value;
                break;
            case "user-description":
                newUser.description = e.target.value;
                break;
            case "user-startDate":
                newUser.startDate = e.target.value;
                break;
            case "user-rating":
                newUser.rating = parseFloat(e.target.value);
                break;
            case "user-backgroundChecked":
                newUser.backgroundChecked = e.value;
                break;
            case "user-hires":
                newUser.hires = e.target.value;
                break;
            case "user-employees":
                newUser.employees = parseInt(e.target.value);
                break;
            case "user-paymentMethods":
                newUser.paymentMethods = e.target.value;
                break;
            case "user-zipcode":
                newUser.zipcode = e.target.value;
                break;
            case "user-day":
                newUser.day = e.target.value;
                break;
            case "user-month":
                newUser.month = e.target.value;
                break;
            case "user-year":
                newUser.year = e.target.value;
                break;
            case "user-street":
                newUser.street = e.target.value;
                break;
            case "user-city":
                newUser.city = e.target.value;
                break;
            case "user-state":
                newUser.state = e.target.value;
                break;
            case "user-email":
                newUser.email = e.target.value;
                break;
        }

        this.setState({
                          user: newUser,
                      });
    };

    selectUser = (id) =>
        this.userService
            .findUserById(id)
            .then(user => {
                      this.props.history.push("/admin/users/" + id)
                      this.setState({
                                        user: user
                                    })
                  }
            );

    render() {
        return (
            <div>
                <UserDetails
                    user={this.state.user}
                    services={this.state.user.services}
                    handleEvents={this.handleEvents}
                    promiseOptions={this.promiseOptions}
                    saveUser={this.saveUser}
                    selectUser={this.selectUser}
                    goBack={this.goBack}
                    deleteUser={this.deleteUser}
                    enteredUsername={this.state.enteredUsername}/>
            </div>
        )
    }
}

export default UserDetailsContainer