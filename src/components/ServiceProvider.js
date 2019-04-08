import React from 'react'
import {Link} from "react-router-dom";

const ServiceProvider = ({serviceProvider}) =>
    <div>
        <div className="row">
            <div className="col-2">
                <img src="https://picsum.photos/130/130"/>
            </div>
            <div className="col-7">
                <a href="#">
                    {serviceProvider.username}
                </a>
                <div>
                    <span>{serviceProvider.rating} </span>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <span> {serviceProvider.reviews.length} reviews</span>
                </div>
                <div>
                    <span>{serviceProvider.yearsInBusiness}</span> years in business,&nbsp;
                    <span>{serviceProvider.hires}</span> hires
                </div>
                <div>
                    {serviceProvider.latestReview}
                </div>
            </div>
            <div className="col-3">
                <div>
                    <span className="float-right">{serviceProvider.price}</span>
                </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className="btn btn-primary float-right" href="#">
                        View Profile
                    </a>
                </div>
            </div>
        </div>
        <hr/>
    </div>

export default ServiceProvider