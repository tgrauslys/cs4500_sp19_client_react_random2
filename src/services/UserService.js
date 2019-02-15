export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findUserById = userId =>
        fetch(`http://localhost:8080/api/users/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch("http://localhost:8080/api/users")
            .then(response => response.json())
}
