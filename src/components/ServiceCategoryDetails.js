import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
class ServiceCategoryDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
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
                this.props.history.push("/admin/categories/" + serviceCategories[0].id)
                const desiredIndex = serviceCategories.findIndex((category) => {
                    return parseInt(category.id) === parseInt(this.state.serviceCategory.id)
                })
                  this.setState({
                                    serviceCategories: serviceCategories,
                                    serviceCategory:  desiredIndex === -1 ? serviceCategories[0] : serviceCategories[desiredIndex]
                                })
                  }
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
    render() {
        return(
            <div>
                <h3>Service Category Details</h3>
                <select
                    value={this.state.serviceCategory.id}
                    onChange={(e) => this.selectServiceCategory(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceCategories
                            .map(serviceCategory =>
                                     <option
                                         value={serviceCategory.id}
                                         key={serviceCategory.id}>
                                         {serviceCategory.serviceCategoryName}
                                     </option>
                            )
                    }
                </select>
                <label>Service Category Title</label><br/>
                <input
                    onChange={(x) => {console.log(x)}}
                    className="form-control"
                    value={this.state.serviceCategory.serviceCategoryName}/>
            </div>
        )
    }
}

export default ServiceCategoryDetails