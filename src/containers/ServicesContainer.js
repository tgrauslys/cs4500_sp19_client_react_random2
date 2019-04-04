import React from 'react'

import Services from '../components/Services'

// Component that creates a list of Services
class ServicesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.servicesService = this.props.service;
        this.state = {
            services: []
        }
    }

    findAllServices() {
        return this.servicesService
            .findAllServices()
            .then(services =>
                this.setState({
                    services: services
                })
            )
    }

    componentDidMount() {
        this.findAllServices()
    }

    createService = () =>
        this.servicesService.createService().then((response) => {
            this.props.history.push(`/admin/services/${response['id']}`);
        });

    deleteService = (id) =>
        this.servicesService.deleteServiceById(id)
            .then(() => this.findAllServices());


    // Create table with services
    render() {

        return (
            <div>
                <Services
                    services={this.state.services}
                    createService={this.createService}
                    deleteService={this.deleteService}/>
            </div>

        )
    }
}

export default ServicesContainer