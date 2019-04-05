import React from 'react'

const ServiceCategoryList = ({serviceCategories}) =>
    <ul className="list-group">
        {
            serviceCategories.map(serviceCategory =>
                <li key={serviceCategory.id}
                    className="list-group-item no-border">
                    <a href={`#${serviceCategory.id}`}>{serviceCategory.serviceCategoryName}</a>
                </li>
            )
        }
    </ul>

export default ServiceCategoryList