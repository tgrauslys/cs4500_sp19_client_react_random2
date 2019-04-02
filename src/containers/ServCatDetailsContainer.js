import React from 'react'
import ServiceCategoryDetails from "../components/ServiceCategoryDetails";
class ServiceCategoryContainer extends React.Component {

    constructor(props) {
        super(props)
        this.serviceCategoryService = this.props.service;
        this.state = {
            // Throw in a default ServiceCategory
            serviceCategories: [],
            serviceCategory: {
                serviceCategoryName: '',
                id: props.match.params.id
            }
        }
    }

    componentDidMount() {
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories => {
                      //this.props.history.push("/admin/categories/" + serviceCategories[0].id);
                      const desiredIndex = serviceCategories.findIndex((category) => {
                          return parseInt(category.id) === parseInt(this.state.serviceCategory.id)
                      });
                      this.setState({
                                        serviceCategories: serviceCategories,
                                        serviceCategory:  desiredIndex === -1 ? serviceCategories[0] : serviceCategories[desiredIndex]
                                    })
                  }
            )
    }

    findCategory = (id) =>
        this.serviceCategoryService.findServiceCategoryById(parseInt(id)).then(category => {
            this.setState({
                              serviceCategory: category
                          })
        });

    findAllCategories() {
        return this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                      this.setState({
                                        serviceCategories: serviceCategories
                                    })
            )
    }


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
        this.selectServiceCategory(0);
        return (
            <div>
                <ServiceCategoryDetails
                    serviceCategory={this.state.serviceCategory}
                    serviceCategories={this.state.serviceCategories}
                    selectServiceCategory={this.selectServiceCategory}/>
            </div>
        )
    }
}

export default ServiceCategoryContainer