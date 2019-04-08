import React from 'react'
import BusinessServices from "../components/BusinessServices";

class BusinessServContainer extends React.Component {
    categoryServ;
    userServ;
    serviceServ;

    constructor(props) {
        super(props)
        this.categoryService = this.props.categoryServ;
        this.userService = this.props.userServ;
        this.servService = this.props.serviceServ;
        this.state = {
            searchTerm: '',
            searchedServices: [],
            selectedServices: [],
            // Throw in a default ServiceCategory
            serviceCategory: {

                services: []
            }
        }

    }

    updateServ = e => {
        //e.preventDefault();
        if (e.target.name === "service-searchbox") {
            this.state.searchTerm = e.target.value;
            this.findServicesForTerm(this.state.searchTerm);
        } else if (e.target.name === "service-checkbox") {
            this.selectService(e);
        }
    };

    selectService(e) {
        if (e.target.checked) {
            this.servService.findServiceById(e.target.value).then(serv => {
                if (this.state.selectedServices.some(item => item.id === serv.id)) {

                } else {
                    this.setState({
                                      searchTerm: '',
                                      selectedServices: this.state.selectedServices.concat(serv),
                                      searchedServices: []
                                  });
                }
            });
        } else {
            this.setState({
                              searchTerm: '',
                              selectedServices: this.state.selectedServices
                                  .filter(serv => serv.id !== parseInt(e.target.value)),
                              searchedServices: []
                          });
        }
    }

    findServicesForTerm(term) {
        this.servService.findAllServices()
            .then(services =>
                      services.filter(service => {
                          return service.serviceName.toLowerCase()
                              .includes(term.toLowerCase());
                      })).then(filtered => this.setState({
                                                             searchedServices: filtered
                                                         }));
    }

    componentDidMount() {
    }

// Create table with service categories
    render() {
        return (
            <div>
                <BusinessServices
                    searchTerm={this.state.searchTerm}
                    updateServ={this.updateServ}
                    searchedServices={this.state.searchedServices}
                    selectedServices={this.state.selectedServices}
                    findServicesForTerm={this.findServicesForTerm}
                />
            </div>
        )
    }
}

export default BusinessServContainer