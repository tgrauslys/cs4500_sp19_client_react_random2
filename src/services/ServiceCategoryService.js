// Retrieves service category information
export default class ServiceCategoryService {
    // Holds instance of this class
    static instance = null;

    static getInstance() {
        // Allow only one instance
        if (ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance
    }

    // Lambdas to make REST calls
    findServiceCategoryById = categoryId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/categories/${categoryId}`)
            .then(response => response.json());
    findAllServiceCategories = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/categories`)
            .then(response => response.json());

    deleteServiceCategoryById = categoryId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/categories/${categoryId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

    createServiceCategory = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/categories`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                serviceCategoryName: "",
                services: []
                                 })}).then(response => response.json());

}