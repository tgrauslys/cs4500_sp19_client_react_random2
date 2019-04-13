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
            isNewCategory: false,
            enteredCatName: true,
            serviceCategories: [],
            serviceCategory: {
                serviceCategoryName: '',
                services: [],
                id: props.match.params.id
            }
        }
    }

    componentDidMount() {
        this.serviceCategoryService.findServiceCategoryById(this.state.serviceCategory.id)
            .then(category => this.setState({
                                                serviceCategory: category,
                                                isNewCategory: (""
                                                                === category.serviceCategoryName.trim())
                                            }))
    }

    saveCategory = () => {
        if (this.state.serviceCategory.serviceCategoryName.trim() === "") {
            this.setState({enteredCatName: false})
        } else {
            this.serviceCategoryService.updateServiceCategory(this.state.serviceCategory)
                .then(setTimeout(() => {
                    this.props.history.push("/admin/categories")
                }, 800));
        }
    };

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
    };

    goBack = () => {
        if (this.state.isNewCategory) {
            this.deleteCategory()
        } else {
            this.props.history.push("/admin/categories");
        }
    };

    deleteCategory = () => {
        this.serviceCategoryService.deleteServiceCategoryById(this.state.serviceCategory.id)
            .then(setTimeout(() => {
                this.props.history.push("/admin/categories")
            }, 800));
    };

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
            );

// Create table with service categories
    render() {
        return (
            <div>
                <ServiceCategoryDetails
                    category={this.state.serviceCategory}
                    services={this.state.serviceCategory.services}
                    handleEvents={this.handleEvents}
                    promiseOptions={this.promiseOptions}
                    saveCategory={this.saveCategory}
                    selectServiceCategory={this.selectServiceCategory}
                    deleteCategory={this.deleteCategory}
                    enteredCatName={this.state.enteredCatName}
                    goBack={this.goBack}/>
            </div>
        )
    }
}

export default ServiceCategoryContainer