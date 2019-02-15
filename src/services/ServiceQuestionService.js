export default class ServiceQuestionService {
    static instance = null;
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }
    findServiceQuestionById = id =>
        fetch(`http://localhost:8080/api/questions/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch("http://localhost:8080/api/questions")
            .then(response => response.json())
}