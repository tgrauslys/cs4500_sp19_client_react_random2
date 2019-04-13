import React from 'react'

import Services from '../components/Services'
import ServiceSearchBar from '../components/ServiceSearchBar';
import ServicesService from '../services/ServicesService';

// Component that creates a list of Services
class ServicesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.currentPage = this.props.currentPage;
        this.itemCount = this.props.itemCount;
        this.optionValues = this.props.optionValues;
        // this.servicesService = this.props.service;
        this.servicesService = ServicesService.getInstance();
        this.state = {
            services: [],
            optionValues: [],
            currentPage: 0,
            itemCount: 0,
            totalPages: 0
        }
    }

    setPage = (e, pageNumber) => {
        const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
        const newPageNumber = (typeof pageNumber === "number") ? pageNumber : 0
        this.servicesService.findServicePage(newPageNumber, itemCount)
            .then(service => {
                this.setState({
                    serviceCategories: service.content,
                    currentPage: newPageNumber,
                    itemCount: itemCount,
                    totalPages: service.totalPages
                })
            })
    }

    findAllServices() {
        return this.servicesService
            .findAllServices()
            .then(services =>
                this.setState({
                    services: services.content,
                    optionValues: this.optionValues,
                    currentPage: services.pageable
                        && services.pageable.pageNumber,
                    itemCount: services.size,
                    totalPages: services.totalPages
                })
            )
    }

    componentDidMount() {
        this.findAllServices()
    }

    createService = () => {
        return this.servicesService.createService().then((response) => {
            this.props.history.push(`/admin/services/${response['id']}`);
        });
    }

    deleteService = (id) =>
        this.servicesService.deleteServiceById(id)
            .then(() => this.findAllServices());


    // Create table with services
    render() {
        return (
            <div>
                <ServiceSearchBar/>
                <Services
                    services={this.state.services}
                    createService={this.createService}
                    deleteService={this.deleteService}
                    optionValues={this.state.optionValues}
                    currentPage={this.state.currentPage}
                    itemCount={this.state.itemCount}
                    totalPages={this.state.totalPages}
                    setPage={this.setPage}/>
            </div>
        )
    }
}

export default ServicesContainer