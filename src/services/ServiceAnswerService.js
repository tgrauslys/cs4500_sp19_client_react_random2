export default class ServiceAnswerService {
    static instance = null;

    static getInstance() {
        if (ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }

    findAllServiceAnswers = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers`)
            .then(response => response.json());
    createServiceAnswer = (serviceAnswer) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(serviceAnswer)
        })
            .then(response => response.json()); // parses response to JSON
}