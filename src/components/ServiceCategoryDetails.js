import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'

const ServiceCategoryDetails = ({
                                    props,
                                    category,
                                    categories,
                                    selectServiceCategory
                                }) => {

    return (<div>
        <h3>Service Category Details</h3>
        <select
            value={category.id}
            onChange={(e) => {
                console.log(e.target.value)
                selectServiceCategory(e.target.value)
            }}
            className="form-control">
            {
                categories
                    .map(serviceCategory =>
                             <option
                                 value={serviceCategory.id}
                                 key={serviceCategory.id}>
                                 {serviceCategory.serviceCategoryName}
                             </option>
                    )
            }
        </select>
        <label>Service Category Title</label><br/>
        <input
            onChange={(x) => {
                console.log(x)
            }}
            className="form-control"
            value={category.serviceCategoryName}/>
    </div>)
}

export default ServiceCategoryDetails