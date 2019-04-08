import React from 'react'

import ServiceCategories from '../components/ServiceCategories'

// Component that creates a list of ServiceCategories
class ServiceCategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.serviceCategoryService = this.props.service;
        this.currentPage = this.props.currentPage
        this.itemCount = this.props.itemCount
        this.optionValues = this.props.optionValues
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
    }

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

    createCategory = () =>
        this.serviceCategoryService.createServiceCategory().then((response) => {
            this.props.history.push(`/admin/categories/${response['id']}`);
        });

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
                    deleteCategory={this.deleteCategory}
                    optionValues={this.state.optionValues}
                    currentPage={this.state.currentPage}
                    itemCount={this.state.itemCount}
                    totalPages={this.state.totalPages}
                    setPage={this.setPage}/>
            </div>

        )
    }
}

export default ServiceCategoryContainer