export default class ServiceAnswerService {
    static instance = null;
    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers/${id}`)
            .then(response => response.json());
    findAllServiceAnswers = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers`)
            .then(response => response.json());
    findAnswerPage = (page, elements) =>
        fetch(`http://localhost:8080/api/answers/paged?page=${page}&count=${elements}`)
            .then(response => response.json());
}