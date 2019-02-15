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
                title: '',
                id: 1
            }
        }
    }

    componentDidMount() {
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories => {
                      this.props.history.push("/admin/service-categories/" + serviceCategories[0].id)
                      this.setState({
                                        serviceCategories: serviceCategories,
                                        serviceCategory: serviceCategories[0]
                                    })
                  }
            )
    }
    selectServiceCategory = id =>
        this.serviceCategoryService
            .findServiceCategoryById(id)
            .then(serviceCategory => {
                      this.props.history.push("/admin/service-categories/" + id)
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
                                         {serviceCategory.title}
                                     </option>
                            )
                    }
                </select>
                <label>Service Category Title</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.serviceCategory.title}/>
            </div>
        )
    }
}

export default ServiceCategoryDetails