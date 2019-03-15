export default class ServiceQuestionService {
    static instance = null;
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }
    findServiceQuestionById = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/questions/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/questions`)
            .then(response => response.json())
}