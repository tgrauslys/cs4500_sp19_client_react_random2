import React from 'react'
import Rating from './Rating'
import Review from './Review'
import FAQ from './FAQ'
// import Date from 'Date'


const Provider = ({provider, reviews, ratings, FAQAnswers, history}) =>
    <div>

        <div className="row">
            {/*<div className="col-8">*/}
                {/*<SearchBar/>*/}
            {/*</div>*/}
            <div className="col-3 text-right">
                <a href="#">Sign up</a>
            </div>
            <div className="col-1">
                <a href="#">Log in</a>
            </div>
        </div>
        <br/>
        <br/>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#faqs">FAQs</a>
            </li>
        </ul>
        <div className="row">
            <div className="col-2">
                <a name="about"/>
                <img src="https://picsum.photos/150/150"/>
            </div>
            <div className="col-10">
                <h3>{provider.username}</h3>
                {ratings[0]}
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                <i className="fa fa-star cs4500-yellow"/>
                ({reviews.length})
            </div>
        </div>
        <div>
            <br/>
            <p>
                {provider.description}
            </p>
        </div>
        <div className="row">
            <div className="col-6">
                <h4>Overview</h4>
                <i className="fa fa-trophy"/>
                &nbsp;
                Hired {provider.hires} times
                <br/>
                <i className="fa fa-lock"/>
                &nbsp;
                {provider.backgroundChecked ? 'Background checked' : ''}
                <br/>
                <i className="fa fa-users"/>
                &nbsp;
                {provider.employees} Employees
                <br/>
                <i className="fa fa-briefcase"/>
                &nbsp;
                {provider.startDate}
            </div>
            <div className="col-6">
                <h4>Payment methods</h4>
                <i className="fa fa-usd"/>
                {
                    provider.paymentMethods
                }
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-8">
                <a name="reviews"/>
                <h3>
                    Reviews
                </h3>
            </div>
            <hr/>
            <div className="col-4">
                <select className="form-control float-right">
                    <option>Recommended</option>
                    <option>Highest rated</option>
                    <option>Lowest rated</option>
                    <option>Newest first</option>
                    <option>Oldest first</option>
                </select>
                <br/>
                <br/>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <h4>{ratings[0]}</h4>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <i className="fa fa-star cs4500-yellow wd-font-size-2-em"/>
                <br/>
                {reviews.length} reviews
            </div>
            <div className="col-8">
                {
                    ratings.slice(1,5).map((score, index) =>
                        <Rating key={index}
                                index={5-index}
                                score={score}/>
                    )
                }
            </div>
        </div>
        <br/>
        <div>
            {
                reviews.map(review =>
                    <Review key={review.id} review={review}/>
                )
            }
            <div className="center">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                              <span className="page-link">
                                2
                                <span className="sr-only">(current)</span>
                              </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div>
            <hr/>
            <a name="faqs"/>
            <h3>FAQs</h3>
            {
                FAQAnswers.map(faqAnswer =>
                    <FAQ key={faqAnswer.id} faq={faqAnswer}/>
                )
            }
        </div>
    </div>

export default Provider