export default class ProfileService {
    static instance = null;

    static getInstance() {
        if (ProfileService.instance === null) {
            ProfileService.instance = new ProfileService()
        }
        return this.instance
    }

    updateProfile = userProfile =>
        // fetch(`http://localhost:8080/api/faq-answer/${frequentlyAskedAnswer.id}`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/profile/${userProfile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(userProfile), // body data type must match "Content-Type" header
        })
            .then(response => response.json());


    deleteProfile = id =>
        // fetch(`http://localhost:8080/api/faq-answer/${id}`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/profile/${id}`, {
            method: "DELETE",

        });

}