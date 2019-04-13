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
    filterUsers = (username, zipcode) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/filtered?username=${username}&zipcode=${zipcode}`)
            .then(response => response.json())

    updateUserProfile = user =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
}
