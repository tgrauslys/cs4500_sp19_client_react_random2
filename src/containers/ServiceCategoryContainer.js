import React from 'react'

import ServiceCategories from '../components/ServiceCategories'
import ServiceCategoryService from "../services/ServiceCategoryService";

// Component that creates a list of ServiceCategories
class ServiceCategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.state = {
            serviceCategories: []
        }
    }

    findAllCategories() {
        return this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                      this.setState({
                                        serviceCategories: serviceCategories
                                    })
            )
    }

    componentDidMount() {
        console.log("SCAT Container update");
        this.findAllCategories()
    }

    createCategory = () => {
        return this.serviceCategoryService.createServiceCategory().then((response) => {
            this.props.history.push(`/admin/categories/${response['id']}`);
        });
    }

    deleteCategory = (id) =>
        this.serviceCategoryService.deleteServiceCategoryById(id)
            .then(() => this.findAllCategories());


    // Create table with service categories
    render() {

        return (
            <div>
                <ServiceCategories
                    categories={this.state.serviceCategories}
                    createCategory={this.createCategory}
                    deleteCategory={this.deleteCategory}/>
            </div>

        )
    }
}

export default ServiceCategoryContainer