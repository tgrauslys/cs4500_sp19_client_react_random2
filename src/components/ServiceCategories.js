import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import ServiceCategoryService from '../services/ServiceCategoryService'

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
        return(
            <div>
                <h3>Service Categories</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.serviceCategories
                            .map(serviceCategory =>
                                     <tr key={serviceCategory.id}>
                                         <td><Link to={`./service-categories/${serviceCategory.id}`}>
                                             {serviceCategory.serviceCategoryName}</Link></td>
                                     </tr>
                            )
                    }
                    </tbody>
                </table>
                <button onClick = {this.props.onClick}>Hello!</button>
            </div>
        )
    }
}

export default ServiceCategories