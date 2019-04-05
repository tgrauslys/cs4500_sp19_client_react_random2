import React from 'react'
import ServiceCards from './ServiceCards'
const ServiceCategorySection = ({serviceCategory}) =>
    <div>
        <a id={serviceCategory.id}/>
        <h2>{serviceCategory.title}</h2>
            <div>
                <ServiceCards
                    services={serviceCategory.services.slice(0,4)}/>
                <div className="row">
                    {
                        serviceCategory.services.map(service =>
                            <div key={service.id}
                                className="col-6 list-group-item no-border">
                                <a href="/providers"> {service.title}</a>
                            </div>
                        )
                    }
                </div>
            </div>
    </div>

export default ServiceCategorySection