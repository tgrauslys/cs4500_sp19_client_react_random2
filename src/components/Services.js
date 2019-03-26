import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServicesService from '../services/ServicesService'

// Component that creates a list of Services
class Services extends React.Component {
    serviceName;
    constructor(props) {
        super(props);
        this.servicesService = ServicesService.getInstance()
        this.state = {
            services: [],
            detCategory: null
        }
    }

    componentDidMount() {
        this.servicesService
            .findAllServices()
            .then(services =>
                this.setState({
                    services: services
                })
            )
    }

    // Create table with service categories
    render() {

        return (
            <div>
                <h3>Services</h3>
                <a role="button" className="btn btn-success" variant="outline-success"
                   onClick={ () =>
                       this.servicesService.createService()
                           .then((response) => {
                               this.props.history.push(`/admin/services/${response['id']}`);
                           })
                   }>Create new</a>
                <table className="table">
                    <tbody>
                    {
                        this.state.services
                            .map(services =>
                                <tr key={services.id}>
                                    <td>
                                        <Link to={`/admin/services/${services.id}`}>
                                            {services.serviceName}
                                        </Link>
                                    </td>
                                    <td>
                                        <a role="button" className="btn btn-danger"
                                           onClick={() => {
                                               this.servicesService.deleteServiceById(
                                                   services.id)
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

export default Services