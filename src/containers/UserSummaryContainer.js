import React from 'react'
import UserService from "../services/UserService";
import Users from "../components/Users";

// Component that creates a list of ServiceCategories
class UserSummaryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.currentPage = this.props.currentPage;
        this.itemCount = this.props.itemCount;
        this.optionValues = this.props.optionValues;
        this.userService = UserService.getInstance();
        this.state = {
            users: [],
            optionValues: [],
            currentPage: 0,
            itemCount: 0,
            totalPages: 0
        }
    }

    setPage = (e, pageNumber) => {
        const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
        const newPageNumber = (typeof pageNumber === "number") ? pageNumber : 0
        this.userService.findUserPage(newPageNumber, itemCount)
            .then(servCat => {
                this.setState({
                                  serviceCategories: servCat.content,
                                  currentPage: newPageNumber,
                                  itemCount: itemCount,
                                  totalPages: servCat.totalPages
                              })
            })
    }

    findAllUsers() {
        return this.userService
            .findUserPage(this.currentPage, this.itemCount)
            .then(userPage =>
                      this.setState({
                                        users: userPage.content,
                                        optionValues: this.optionValues,
                                        currentPage: userPage.pageable
                                                     && userPage.pageable.pageNumber,
                                        itemCount: userPage.size,
                                        totalPages: userPage.totalPages
                                    })
            )
    }

    componentDidMount() {
        this.findAllUsers()
    }

    createUser = () => {
        return this.userService.createUser().then((response) => {
            this.props.props.history.push(`/admin/users/${response['id']}`);
        });
    };

    deleteUser = (id) =>
        this.userService.deleteUserById(id)
            .then(() => this.findAllUsers());

    render() {
        if(this.state.users) {
            return (
                <div>
                    <Users
                        users={this.state.users}
                        createUser={this.createUser}
                        deleteUser={this.deleteUser}
                        optionValues={this.state.optionValues}
                        currentPage={this.state.currentPage}
                        itemCount={this.state.itemCount}
                        totalPages={this.state.totalPages}
                        setPage={this.setPage}/>
                </div>

            )
        } else {
            return (<div>Loading...</div>)
        }
    }
}

export default UserSummaryContainer