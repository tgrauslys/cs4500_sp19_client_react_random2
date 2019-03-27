import React from 'react'
import ServicesService from '../services/ServicesService'
class ServicesDetails extends React.Component {
    constructor(props) {
        super(props)
        this.servicesService = ServicesService.getInstance()
        this.state = {
            services: [],
            service: {
                serviceName: '',
                id: props.match.params.id
            }
        }
    }

    componentDidMount() {
        this.servicesService
            .findAllServices()
            .then(services => {
                    this.props.history.push("/admin/services/" + services[0].id)
                    const desiredIndex = services.findIndex((service) => {
                        return parseInt(service.id) === parseInt(this.state.service.id)
                    })
                    this.setState({
                        services: services,
                        service:  desiredIndex === -1 ? services[0] : services[desiredIndex]
                    })
                }
            )
    }
    selectService = id =>
        this.servicesService
            .findServiceById(id)
            .then(service => {
                    this.props.history.push("/admin/services/" + id)
                    this.setState({
                        service: service
                    })
                }
            )
    render() {
        return(
            <div>
                <h3>Service Details</h3>
                <select
                    value={this.state.service.id}
                    onChange={(e) => this.selectService(e.target.value)}
                    className="form-control">
                    {
                        this.state.services
                            .map(service =>
                                <option
                                    value={service.id}
                                    key={service.id}>
                                    {service.serviceName}
                                </option>
                            )
                    }
                </select>
                <label>Service Title</label><br/>
                <input
                    onChange={(x) => {console.log(x)}}
                    className="form-control"
                    value={this.state.service.serviceName}/>
            </div>
        )
    }
}

export default ServicesDetails