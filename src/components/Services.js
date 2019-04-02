import React from 'react'
import {Link} from 'react-router-dom'

const Services = ({
                               services,
                               createService,
                               deleteService,
                           }) =>

    <div>
        <h3>Services</h3>
        <a role="button" className="btn btn-success" variant="outline-success"
           onClick={createService}
        >Create New Service</a>
        <table className="table">
            <tbody>
            {
                services
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
                                       deleteService(
                                           services.id)
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

export default Services