export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }
    findFAQById = id =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq/${id}`)
            .then(response => response.json());
    findAllFAQs = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq`)
            .then(response => response.json())}
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}/api/faq`)
            .then(response => response.json());
