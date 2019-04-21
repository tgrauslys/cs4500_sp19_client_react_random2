import React from 'react'
import BusinessServices from "../components/BusinessServices";
import UserService from "../services/UserService";
import ServicesService from "../services/ServicesService";

// import servs from "../data/services.mock.json"


class BusinessServContainer extends React.Component {

    constructor(props) {
        super(props)
        this.userService = UserService.getInstance();
        this.servService = ServicesService.getInstance();

        this.state = {
            searchTerm: '',
            searchedServices: [],
            selectedServices: [],
            displayedService: null,
            services: [],
            answers: []
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
            let newServ = this.findCachedService(e.target.value);
            if (newServ && !this.state.selectedServices.some(item => item.id === newServ.id)) {
                this.setState({
                                  searchTerm: '',
                                  selectedServices: this.state.selectedServices.concat(newServ),
                                  searchedServices: []
                              })
            }
            /*
            this.servService.findServiceById(e.target.value).then(serv => {
                if (this.state.selectedServices.some(item => item.id === serv.id)) {

                } else {
                    this.setState({
                                      searchTerm: '',
                                      selectedServices: this.state.selectedServices.concat(serv),
                                      searchedServices: []
                                  });
                }
            });*/
        } else {
            this.setState({
                              searchTerm: '',
                              selectedServices: this.state.selectedServices
                                  .filter(serv => serv.id !== parseInt(e.target.value)),
                              searchedServices: []
                          });
        }
    }

    findCachedService(id) {
        return this.state.services.filter(service => service.id === parseInt(id))[0];
    }

    updateDisplay = e => {
        this.setState({
                          displayedService: this.findCachedService(e.target.value)
                      })
        /*this.servService.findServiceById(e.target.value)
            .then(serv => {
                      this.setState({
                                        displayedService: serv
                                    })
                  }
            )*/
    };

    updateDisplayedService = e => {
        console.log(e)
        // this.setState({displayedService: e })
    };

    updateQnAnswer = (e, question) => {
        console.log(e, question)
        // this.setState({answer: e})
    };

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
                    updateQnAnswer={this.updateQnAnswer}
                />
            </div>
        )
    }
}

export default BusinessServContainer