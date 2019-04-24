import React from 'react'
<<<<<<< HEAD
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
=======
import {Link} from "react-router-dom";
>>>>>>> master

const ServiceProvider = ({serviceProvider}) =>
    <div>
        <div className="row">
            <div className="col-2">
                <img src="https://picsum.photos/130/130"/>
            </div>
            <div className="col-7">
<<<<<<< HEAD
            {
                var url = "/admin/users"
                <Link to={url}>Users</Link>
            }
                <a href="#">
=======
                <a href={`/provider/${serviceProvider.id}`}>
>>>>>>> master
                    {serviceProvider.username}
                </a>
                <div>
                    <span>{serviceProvider.rating} </span>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <span> {/*serviceProvider.reviews.length*/} reviews</span>
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
<<<<<<< HEAD
                    <a className="btn btn-primary float-right" href="#">
=======
                    <a className="btn btn-primary float-right" href={`/provider/${serviceProvider.id}`}>
>>>>>>> master
                        View Profile
                    </a>
                </div>
            </div>
        </div>
        <hr/>
    </div>

export default ServiceProvider