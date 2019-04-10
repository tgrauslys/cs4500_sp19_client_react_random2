import React from 'react'
import ServiceCategoryDetails from "../components/ServiceCategoryDetails";
import ServiceCategoryService from "../services/ServiceCategoryService";
import ServicesService from "../services/ServicesService";

class ServiceCategoryContainer extends React.Component {

    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.serviceService = ServicesService.getInstance();
        this.state = {
            // Throw in a default ServiceCategory
            serviceCategories: [],
            serviceCategory: {
                serviceCategoryName: '',
                services: [],
                id: props.match.params.id
            },

            updatedCategory: {
                serviceCategoryName: '',
                id: props.match.params.id
            }
        }
    }

    componentDidMount() {
        this.serviceCategoryService.findServiceCategoryById(this.state.serviceCategory.id)
            .then(category => this.setState({
                                                serviceCategory: category,
                                                updatedCategory: category
                                            }))
        /*this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories => {
                      //this.props.history.push("/admin/categories/" + serviceCategories[0].id);
                      const desiredIndex = serviceCategories.findIndex((category) => {
                          return parseInt(category.id) === parseInt(this.state.serviceCategory.id)
                      });
                      this.setState({
                                        serviceCategories: serviceCategories,
                                        serviceCategory: desiredIndex === -1 ? serviceCategories[0]
                                            : serviceCategories[desiredIndex]
                                    })
                  }
            )*/
    }

    saveCategory = () => {
        this.serviceCategoryService.updateServiceCategory(this.state.serviceCategory)
            .then(setTimeout(() =>
                             {this.props.history.push("/admin/categories")}, 800));
    }

    promiseOptions = (input) => {
        return new Promise(resolve => {
                               setTimeout(() =>
                                              resolve(this.serviceService.searchService(input)
                                                          .then(result => result.map(
                                                              service => {
                                                                  let opt = {};
                                                                  opt.label = service.serviceName;
                                                                  opt.value = service.id;
                                                                  opt.serv = service;
                                                                  return opt;
                                                              })))

                                   , 1000)
                           }
        )
    }

    handleEvents = (e, type) => {
        let newCat = this.state.serviceCategory;
        switch (type) {
            case "category-services":
                newCat.services = e.map(elem => elem.serv);
                break;
            case "category-name":
                newCat.serviceCategoryName = e.target.value;
        }
        this.setState({
                          serviceCategory: newCat
                      });
        //console.log(e.target.type)
        //console.log(e.target.name);
        //console.log(e.target.value);
    };

    selectServiceCategory = id =>
        this.serviceCategoryService
            .findServiceCategoryById(id)
            .then(serviceCategory => {
                      this.props.history.push("/admin/categories/" + id)
                      this.setState({
                                        serviceCategory: serviceCategory
                                    })
                  }
            )

// Create table with service categories
    render() {
        return (
            <div>
                <ServiceCategoryDetails
                    category={this.state.serviceCategory}
                    categories={this.state.serviceCategories}
                    services={this.state.serviceCategory.services}
                    handleEvents={this.handleEvents}
                    promiseOptions={this.promiseOptions}
                    saveCategory={this.saveCategory}
                    selectServiceCategory={this.selectServiceCategory}/>
            </div>
        )
    }
}

export default ServiceCategoryContainer