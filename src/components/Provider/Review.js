import React from 'react'
const Review = ({review}) =>
    <div>
        <h4>{review.who}</h4>
        <div>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
            <i className="fa fa-star cs4500-yellow"/>
        </div>
        <br/>
        <div>{review.review}</div>
        <br/>
        <div>{review.date}</div>
        <br/>
        <div class="alert alert-secondary" role="alert">
            {review.reply}
        </div>
        <hr/>
    </div>

export default Review