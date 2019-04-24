export default class FAQAnswerService {
    static instance = null;

    static getInstance() {
        if (FAQAnswerService.instance === null) {
            FAQAnswerService.instance = new FAQAnswerService()
        }
        return this.instance
    }

    findFAQAnswerById = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answers/${id}`)
            .then(response => response.json())
    findAllFAQAnswers = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answers`)
            .then(response => response.json())

    findFAQAnswerPage = (page, elements) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answer/paged?page=${page}&count=${elements}`)
            .then(response => response.json())

    findFAQsByUserId = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answer/byUser/${id}`)
            .then(response => response.json())


    findFAQAnswerFiltered = (question, answer) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/filtered?question=${question}&answer=${answer}`)
            .then(response => response.json)

    updateFAQAnswers = frequentlyAskedAnswer =>
        // fetch(`http://localhost:8080/api/faq-answer/${frequentlyAskedAnswer.id}`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answer/${frequentlyAskedAnswer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(frequentlyAskedAnswer), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses response to JSON

    createFAQAnswer = (frequentlyAskedQuestion, frequentlyAskedAnswer, User) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq/${frequentlyAskedQuestion.id}/user/${User.id}/answer`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(frequentlyAskedAnswer), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses response to

    updateUser = (frequentlyAskedAnswer, user) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answer/${frequentlyAskedAnswer.id}/user/${user.id}`, {
            method: "POST"
        }).then(response => response.json());

    deleteFAQAnswers = id =>
        // fetch(`http://localhost:8080/api/faq-answer/${id}`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answer/${id}`, {
            method: "DELETE",
        });
    //.then(response => response.json()); // parses response to JSON

}