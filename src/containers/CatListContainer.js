import React from 'react'
import CategoryList from "../components/CategoryList";

class CatListContainer extends React.Component {

    constructor(props) {
        super(props)
        this.serviceCategoryService = this.props.service;
        this.state = {
            serviceCategories: [],
            // Throw in a default ServiceCategory
            serviceCategory: {
                serviceCategoryName: '',
                id: this.props.props.match.params.id,
                services: []
            }
        }

    }

    componentDidMount() {
        this.serviceCategoryService
            .findServiceCategoryById(this.props.props.match.params.id)
            .then(category =>
                      this.setState({
                                        serviceCategory: category
                                    })
            )
    }

    // Create table with service categories
    render() {
        return (
            <div>
                <CategoryList
                    props={this.props.props}
                    category={this.state.serviceCategory}/>
            </div>
        )
    }
}

export default CatListContainer