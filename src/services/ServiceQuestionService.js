export default class ServiceQuestionService {
    static instance = null;

    static getInstance() {
        if (ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }

    findServiceQuestionById = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/questions/${id}`)
            .then(response => response.json());
    findAllServiceQuestions = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/questions`)
            .then(response => response.json());
    findQuestionPage = (page, elements) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/questions/paged?page=${page}&count=${elements}`)
            .then(response => response.json());
    linkQuestionAndAnswer = (questionId, answerId) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/questions/${questionId}/answers/${answerId}`, {
            method: "PUT"
        })
            .then(response => response.json());
}