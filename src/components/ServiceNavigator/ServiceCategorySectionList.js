import React from 'react'
import ServiceCategorySection from './ServiceCategorySection'
const ServiceCategorySectionList = ({serviceCategories}) =>
    <ul className="list-group no-border">
        {
            serviceCategories.map(serviceCategory =>
                <li key={serviceCategory.id}
                    className="list-group-item no-border">
                    <ServiceCategorySection
                        serviceCategory={serviceCategory}/>
                </li>
            )
        }
    </ul>

export default ServiceCategorySectionList