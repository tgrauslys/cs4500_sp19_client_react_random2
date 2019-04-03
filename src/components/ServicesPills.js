import React from 'react'

const ServicesPills = ({services}) =>
    <ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
        {
            services.map(service => (
                <li key={service.id}
                    className="nav-item">
                    <a className="nav-link btn-lg text-center"
                       href="/services">
                        {/*<i className={`fa ${service.icon}`}/>*/}
                        <br/>
                        {service.serviceName}
                    </a>
                </li>
            ))
        }

        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="./services">
                <i className="fa fa-ellipsis-h"/>
                <br/>
                More
            </a>
        </li>
    </ul>

export default ServicesPills