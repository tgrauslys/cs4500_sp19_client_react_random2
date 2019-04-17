import React from 'react'

import ServiceCategories from '../components/ServiceCategories'
import ServiceCategoryService from "../services/ServiceCategoryService";

// Component that creates a list of ServiceCategories
class ServiceCategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.currentPage = this.props.currentPage;
        this.itemCount = this.props.itemCount;
        this.optionValues = this.props.optionValues;
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.state = {
            serviceCategories: [],
            optionValues: [],
            currentPage: 0,
            itemCount: 0,
            totalPages: 0
        }
    }

    setPage = (e, pageNumber) => {
        const itemCount = (e && e.target && e.target.value) ? e.target.value : this.state.itemCount
        const newPageNumber = (typeof pageNumber === "number") ? pageNumber : 0
        this.serviceCategoryService.findServCatPage(newPageNumber, itemCount)
            .then(servCat => {
                this.setState({
                                  serviceCategories: servCat.content,
                                  currentPage: newPageNumber,
                                  itemCount: itemCount,
                                  totalPages: servCat.totalPages
                              })
            })
    };

    findAllCategories() {
        return this.serviceCategoryService
            .findServCatPage(this.currentPage, this.itemCount)
            .then(servCat =>
                      this.setState({
                                        serviceCategories: servCat.content,
                                        optionValues: this.optionValues,
                                        currentPage: servCat.pageable
                                                     && servCat.pageable.pageNumber,
                                        itemCount: servCat.size,
                                        totalPages: servCat.totalPages
                                    })
            )
    }

    componentDidMount() {
        this.findAllCategories()
    }

    createCategory = () => {
        return this.serviceCategoryService.createServiceCategory().then((response) => {
            this.props.props.history.push(`/admin/categories/${response['id']}`);
        });
    };

    deleteCategory = (id) =>
        this.serviceCategoryService.deleteServiceCategoryById(id)
            .then(() => this.findAllCategories());

    // Create table with service categories
    render() {
        if(this.state.serviceCategories) {
            return (
                <div>
                    <ServiceCategories
                        categories={this.state.serviceCategories}
                        createCategory={this.createCategory}
                        deleteCategory={this.deleteCategory}
                        optionValues={this.state.optionValues}
                        currentPage={this.state.currentPage}
                        itemCount={this.state.itemCount}
                        totalPages={this.state.totalPages}
                        setPage={this.setPage}/>
                </div>

            )
        } else {
            return (<div>Loading...</div>)
        }
    }
}

export default ServiceCategoryContainer