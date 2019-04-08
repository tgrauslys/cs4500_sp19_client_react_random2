import React from 'react'
import ServiceSearchFilter from './ServiceSearchFilter';

const ServiceSearchFilters = ({ serviceSearchFilters, handleSelection }) => {
    return (
        <div>
            <h3>Search Filters</h3>
            {
                (serviceSearchFilters || [])
                    .map(serviceSearchFilter =>
                        <ServiceSearchFilter filter={serviceSearchFilter} handleSelection={handleSelection}/>
                    )
            }
        </div>
    )

}

export default ServiceSearchFilters