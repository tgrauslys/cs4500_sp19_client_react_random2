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
}