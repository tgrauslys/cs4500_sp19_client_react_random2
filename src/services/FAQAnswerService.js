export default class FAQAnswerService {
    static instance = null;
    static getInstance() {
        if(FAQAnswerService.instance === null) {
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

    createFAQAnswers = frequentlyAskedAnswer =>
        // fetch(`http://localhost:8080/api/faq-answer`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(frequentlyAskedAnswer), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses response to JSON

    deleteFAQAnswers = id =>
        // fetch(`http://localhost:8080/api/faq-answer/${id}`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq-answer/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json()); // parses response to JSON

}