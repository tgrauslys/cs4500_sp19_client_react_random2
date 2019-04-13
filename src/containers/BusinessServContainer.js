import React from 'react'
import BusinessServices from "../components/BusinessServices";
// import servs from "../data/services.mock.json"

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
            displayedService: null,
            services: [],
        }
    }

    updateServ = e => {
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

    updateDisplay = e => {
        this.servService.findServiceById(e.target.value)
            .then(serv => {
                      console.log(serv);
                      this.setState({
                                        displayedService: serv
                                    })
                  }
            )
    }

    findServicesForTerm(term) {
        let filtered = this.state.services.filter(service =>
                                                      service.serviceName.toLowerCase()
                                                          .includes(term.toLowerCase())
        );
        this.setState({
                          searchedServices: filtered
                      });
    }

    componentDidMount() {
        this.servService.findAllServices()
            .then(services => this.setState({
                                                services: services
                                            }));
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
                    updateDisplay={this.updateDisplay}
                    displayedService={this.state.displayedService}
                />
            </div>
        )
    }
}

export default BusinessServContainer