import React from 'react'

const ServiceCategoryPills = ({serviceCategories}) =>
    <ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
        {
            serviceCategories.map(serviceCategory => (
                <li key={serviceCategory.id}
                    className="nav-item">
                    <a className="nav-link btn-lg text-center"
                       href={"/categories/"  + serviceCategory.id}>
                        {/*<i className={`fa ${serviceCategory.icon}`}/>*/}
                        {serviceCategory.serviceCategoryName}
                    </a>
                </li>
            ))
        }

        {/*<li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/categories">
                <i className="fa fa-ellipsis-h"/>
                <br/>
                More
            </a>
        </li>*/}
    </ul>

export default ServiceCategoryPills