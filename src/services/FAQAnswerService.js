export default class FAQAnswerService {
    static instance = null;
    static getInstance() {
        if(FAQAnswerService.instance === null) {
            FAQAnswerService.instance = new FAQAnswerService()
        }
        return this.instance
    }
    findFAQAnswerById = id =>
        fetch(`http://localhost:8080/api/faq-answers/${id}`)
            .then(response => response.json())
    findAllFAQAnswers = () =>
        fetch("http://localhost:8080/api/faq-answers")
            .then(response => response.json())
}