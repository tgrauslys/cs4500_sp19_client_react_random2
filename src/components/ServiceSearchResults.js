import React from 'react'
import {Link} from "react-router-dom";
import ServiceProvider from './ServiceProvider';

const ServiceSearchResults = ({searchResults}) => {
    return (
        <div>
            <h3>Service Providers</h3>
            <table className="table">
                <tbody>
                {
                    (searchResults || [])
                        .map(serviceSearchResult =>
                            <tr key={serviceSearchResult.id}>
                                <td>
                                    <ServiceProvider serviceProvider={serviceSearchResult}/>
                                </td>
                            </tr>
                        )
                }
                </tbody>
            </table>
        </div>
    )
    
}

export default ServiceSearchResults