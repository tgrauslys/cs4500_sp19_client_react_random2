import React from 'react'
import ServiceService from '../services/ServiceService'

class Services extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = ServiceService.getInstance()
        this.state = {
            services: []
        }
    }
    componentDidMount() {
        this.serviceService
            .findAllServices()
            .then(services =>
                      this.setState({
                                        services: services
                                    })
            )
    }
    render() {
        return(
            <div>
                <h3>Services</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.services
                            .map(service =>
                                     <tr key={service.id}>
                                         <td>{service.title}</td>
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