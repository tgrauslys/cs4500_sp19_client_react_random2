import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import ServiceCategoryService from '../services/ServiceCategoryService'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

// Component that creates a list of ServiceCategories
class ServiceCategories extends React.Component {
    serviceCategoryName;
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: [],
            detCategory: null
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

        return (
            <div>
                <h3>Service Categories</h3>
                <a role="button" className="btn btn-success" variant="outline-success"
                   onClick={ () =>
                       this.serviceCategoryService.createServiceCategory()
                           .then((response) => {
                               this.props.history.push(`/admin/categories/${response['id']}`);
                           })
                   }>Create new</a>
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
                                         <td>
                                             <a role="button" className="btn btn-danger"
                                                onClick={() => {
                                                    this.serviceCategoryService.deleteServiceCategoryById(
                                                        serviceCategory.id)
                                                        .then(() => this.componentDidMount());
                                                }}>
                                                 Delete
                                             </a>
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