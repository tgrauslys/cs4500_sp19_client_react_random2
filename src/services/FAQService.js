export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }
    findFAQById = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq/${id}`)
            .then(response => response.json())
    findAllFAQs = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq`)
            .then(response => response.json())

    updateFAQs = faq =>
        // fetch(`http://localhost:8080/api/faq-answer/${frequentlyAskedAnswer.id}`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq/${faq.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(faq), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses response to JSON

    createFAQs = faq =>
        // fetch(`http://localhost:8080/api/faq-answer`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(faq), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses response to JSON

    deleteFAQs = id =>
        // fetch(`http://localhost:8080/api/faq-answer/${id}`, {
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json()); // parses response to JSON
}