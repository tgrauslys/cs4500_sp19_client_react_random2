import React from 'react'
import ServiceCards from './ServiceCards'

const ServiceCategorySection = ({serviceCategory}) =>
    <div>
        <a id={serviceCategory.id}/>
        <h2>{serviceCategory.serviceCategoryName}</h2>
        <div>
            {/*<ServiceCards*/}
            {/*services={serviceCategory.serviceCategoryName.slice(0,4)}/>*/}
            <img src={`https://picsum.photos/300/200?image=${Math.floor(Math.random() * 100)}`}
                 className="card-img-top"/>
            <br/>
            <div className="row">
                {
                    serviceCategory.services.map(service =>
                        <div key={service.id}
                             className="col-6 list-group-item no-border">
                            <a href="/provider"> {service.serviceName}</a>
                        </div>
                    )
                }
            </div>
        </div>
    </div>

export default ServiceCategorySection