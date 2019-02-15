export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }
    findFAQById = id =>
        fetch(`http://localhost:8080/api/faqs/${id}`)
            .then(response => response.json())
    findAllFAQs = () =>
        fetch("http://localhost:8080/api/faqs")
            .then(response => response.json())
}