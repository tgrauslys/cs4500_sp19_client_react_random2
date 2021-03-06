export default class UserService {
    static instance = null;

    static getInstance() {
        if (UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }

    login = user =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/login`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .catch(reject => {console.log(reject)});

    register = user =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/register`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .catch(err => console.error(err));
    logout = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/logout`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());


    profile = () => {
        return fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/profile`,
            {
                credentials: "include"
            })
            .then(response => response.json());
    };

    findUserById = userId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/${userId}`)
            .then(response => response.json())
            .catch(reject => console.error(reject));
    findAllUsers = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users`)
            .then(response => response.json());

    filterUsersByService = (serviceId, username, zipcode, filters) => {
        return fetch(
            `${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/filtered/${serviceId}?username=${username}&zipcode=${zipcode}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filters)
            })
            .then(response => response.json())
            .catch(reject => console.error(reject));
        }
    filterUsers = (username, zipcode) => {
        return fetch(
            `${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/filtered?username=${username}&zipcode=${zipcode}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .catch(reject => console.error(reject));
        }

    deleteUserById = userId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

    findUserPage = (page, elements) =>
        fetch(
            `${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/paged?page=${page}&count=${elements}`)
            .then(response => response.json());

    updateUser = user =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

    createUser = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
                reviews: []
            })
        }).then(response => response.json());

    createUserFromDict = (dict) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: dict.username,
                password: dict.password,
                firstName: dict.firstName,
                lastName: dict.lastName,
                role: dict.role,
                description: dict.description,
                rating: dict.rating,
                startDate: dict.startDate,
                employees: dict.employees,
                backgroundChecked: dict.backgroundChecked,
                hires: dict.hires,
                paymentMethods: dict.paymentMethods,
                zipcode: dict.zipcode,
                services: dict.services,
                serviceAnswers: dict.serviceAnswers,
                reviews: dict.reviews
            })
        }).then(response => response.json());

    linkUserToServiceAnswer = (userId, answerId) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/users/${userId}/answers/${answerId}`, {
            method: "PUT"
        })
            .then(response => response.json());
}
