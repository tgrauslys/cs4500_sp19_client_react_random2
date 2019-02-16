export default class FAQService {
    static instance = null;
    static baseURL = "https://cs4500-sp19s3-random2.herokuapp.com"
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }
    findFAQById = id =>
        fetch(`${FAQService.baseURL}/api/frequentlyAskedQuestion/${id}`)
            .then(response => response.json())
    findAllFAQs = () =>
        fetch(`${FAQService.baseURL}/api/frequentlyAskedQuestion`)
            .then(response => response.json())
}