export default class ServiceService {
    static instance = null;
    static getInstance() {
        if(ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
        }
        return this.instance
    }
    findServiceById = serviceId =>
        fetch(`http://localhost:8080/api/services/${serviceId}`)
            .then(response => response.json())
    findAllServices = () =>
        fetch("http://localhost:8080/api/services")
            .then(response => response.json())
}