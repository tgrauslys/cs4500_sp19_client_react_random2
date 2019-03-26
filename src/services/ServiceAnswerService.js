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
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers`)
            .then(response => response.json())
            
    deleteServiceAnswer = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers/${id}`,
            {
                method: "DELETE"
            })
            .then(response => response.json())
    createServiceAnswer(question, answer) {
		let data = new FormData();
		data.append(question, answer)
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers`,
        {
            method: "POST",
			body: data
			
        })
            .then(response => response.json())
	}
    updateServiceAnswer = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers`,
        {
            method: "PUT"
        })
            .then(response => response.json())

    findServiceAnswerPage = (page, elements) =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/answers/paged?page=${page}&count=${elements}`)
            .then(response => response.json())
}