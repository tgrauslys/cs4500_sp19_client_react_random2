import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
// Component that creates a list of ServiceCategories
class ServiceCategories extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: []
        }
    }
    componentDidMount() {
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                  this.setState({
                                    serviceCategories: serviceCategories
                                })
            )
    }

    // Create table with service categories
    render() {
        return(
            <div>
                <h3>Service Categories</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.serviceCategories
                            .map(serviceCategory =>
                                 <tr key={serviceCategory.id}>
                                     <td>
                                         <Link to={`/admin/categories/${serviceCategory.id}`}>
                                             {serviceCategory.serviceCategoryName}
                                         </Link>
                                     </td>

                                 </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceCategories