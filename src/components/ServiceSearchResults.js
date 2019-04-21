import React from 'react'
import {Link} from "react-router-dom";

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
                                <td key={serviceSearchResult.id}>
                                    {/* <Link to={`/admin/questions/${serviceQuestion.id}`}> */}
                                        {serviceSearchResult.username}
                                    {/* </Link> */}
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