import React from 'react'
const Review = ({review}) =>
    <div>
        <h4>{review.userFrom.username}</h4>
        <div>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
        </div>
        <br/>
        <div>{review.description}</div>
        <br/>
        <div>{review.date}</div>
        <br/>
        <hr/>
    </div>

export default Review