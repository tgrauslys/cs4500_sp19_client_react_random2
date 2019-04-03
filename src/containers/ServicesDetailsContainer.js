import React from 'react'
import ServicesDetails from '../components/ServicesDetails'
class ServicesDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.servicesService = this.props.service
        this.state = {
            services: [],
            service: {
                serviceName: '',
                id: props.match.params.id
            }
        }
    }

    componentDidMount() {
        this.servicesService
            .findAllServices()
            .then(services => {
                    // this.props.history.push("/admin/services/" + services[0].id);
                    const desiredIndex = services.findIndex((service) => {
                        return parseInt(service.id) === parseInt(this.state.service.id)
                    })
                    this.setState({
                        services: services,
                        service:  desiredIndex === -1 ? services[0] : services[desiredIndex]
                    })
                }
            )
    }

    findService = (id) =>
        this.servicesService.findServiceById(parseInt(id)).then(service => {
            this.setState({
                service: service
            })
        });

    findAllServices() {
        return this.servicesService
            .findAllServices()
            .then(services =>
                this.setState({
                    services: services
                })
            )
    }

    selectService = id =>
        this.servicesService
            .findServiceById(id)
            .then(service => {
                    this.props.history.push("/admin/services/" + id)
                    this.setState({
                        service: service
                    })
                }
            )
    render() {
        this.selectService(0);
        return(
            <div>
                <ServicesDetails
                    service={this.state.service}
                    services={this.state.services}
                    selectService={this.selectService}/>
            </div>
        )
    }
}

export default ServicesDetailsContainer