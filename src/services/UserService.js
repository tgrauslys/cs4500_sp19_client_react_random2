export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findUserById = userId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/users/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/users`)
            .then(response => response.json())
    filterUsers = (username, zipcode, filters) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/users/filtered?username=${username}&zipcode=${zipcode}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filters)
        })
            .then(response => response.json())
}
