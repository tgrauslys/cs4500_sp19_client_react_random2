import React from 'react'

const ServiceProvider = ({serviceProvider}) =>
    <div>
        <div className="row">
            <div className="col-2">
                <img src="https://picsum.photos/130/130"/>
            </div>
            <div className="col-7">
                <a href="#">
                    {serviceProvider.title}
                </a>
                <div>
                    {/*TODO: Change rating so that it takes a value from a service provider*/}
                    <span>{4.9 } </span>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <i className="fa fa-star cs4500-yellow"/>
                    <span> {serviceProvider.reviews.length} reviews</span>
                </div>
                <div>
                    {/*TODO Change years in business to use service provider*/}
                    <span>{1}</span> years in business,
                    {/*TODO Change hires to use service provider*/}
                    <span>{0}</span> hires
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