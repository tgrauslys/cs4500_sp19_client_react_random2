import React from 'react'
const Rating = ({score, index}) =>
    <div>
        <div className="row">
            <div className="col-2 text-right">
                {index}&nbsp;
                <i className="fa fa-star cs4500-yellow"/>
            </div>
            <div className="col-8">
                <div class="progress">
                    <div class="progress-bar"
                         role="progressbar"
                         style={{width: `${score}%`}}
                         aria-valuenow="25"
                         aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
            </div>
            <div className="col-2 text-left">
                {score}%
            </div>
        </div>
    </div>

export default Rating