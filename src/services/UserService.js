export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findUserById = userId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users`)
            .then(response => response.json())
    filterUserByUsername = username =>
        fetch(`http://localhost:8080/api/users/filtered?username=${username}`)
            .then(response => response.json())
}
