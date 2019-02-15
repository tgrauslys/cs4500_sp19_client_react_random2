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
        fetch(`./api/service-categories/${categoryId}`)
            .then(response => response.json())
    findAllServiceCategories = () =>
        fetch("./api/service-categories")
}