// Retrieves service information
export default class ServicesService {
    // Holds instance of this class
    static instance = null;

    static getInstance() {
        // Allow only one instance
        if (ServicesService.instance === null) {
            ServicesService.instance = new ServicesService()
        }
        return this.instance
    }

    // Lambdas to make REST calls
    findServiceById = serviceId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/services/${serviceId}`)
            .then(response => response.json());
    findAllServices = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/services`)
            .then(response => response.json());

    deleteServiceById = serviceId =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/services/${serviceId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

    createService = () =>
        fetch(`${process.env.REACT_APP_MIDDLE_TIER_URL}api/services`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                serviceName: "",
                services: []
            })}).then(response => response.json());

}