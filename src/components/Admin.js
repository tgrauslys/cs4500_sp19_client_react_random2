import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from './Users'
import Services from './Services'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import ServiceQuestionContainer from '../containers/ServiceQuestionContainer'
import ServiceQuestionService from '../services/ServiceQuestionService';
import ServiceQuestionDetails from './ServiceQuestionDetails'
import FAQs from './FAQs'
import FAQDetails from './FAQDetails'
import FAQAnswers from './FAQAnswers'
import FAQAnswerDetails from './FAQAnswerDetails'

const serviceQuestionService = ServiceQuestionService.getInstance()
const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
        <div className="row">
            <div className="col-3">
                <Link to="/admin/users">Users</Link>
                <br/>
                <Link to="/admin/services">Services</Link>
                <br/>
                <Link to="/admin/categories">Service Categories</Link>
                <br/>
                <Link to="/admin/questions">Service Questions</Link>
                <br/>
                <Link to="/admin/faqs">FAQs</Link>
                <br/>

                <Link to="/admin/faq-answers">FAQ Answers</Link>
            </div>
            <div className="col-9">
                <Route
                    path="/admin/users"
                    exact
                    component={Users}/>
                <Route
                    path="/admin/services"
                    exact
                    component={Services}/>
                <Route
                    path="/admin/categories"
                    exact
                    component={ServiceCategories}/>
                <Route
                    path="/admin/categories/:id"
                    exact
                    component={ServiceCategoryDetails}/>
                <Route
                    path="/admin/questions"
                    exact
                    render={() => <ServiceQuestionContainer 
                                    service={serviceQuestionService}
                                    currentPage={0}
                                    itemCount={10}
                                    optionValues={[1, 2, 5, 10, 25, 50]}
                                    />}/>
                <Route
                    path="/admin/questions/:id"
                    exact
                    component={ServiceQuestionDetails}/>
                <Route
                    path="/admin/faqs"
                    exact
                    component={FAQs}/>
                <Route
                    path="/admin/faqs/:id"
                    exact
                    component={FAQDetails}/>
                <Route
                    path="/admin/faq-answers"
                    exact
                    component={FAQAnswers}/>
                <Route
                    path="/admin/faq-answers/:id"
                    exact
                    component={FAQAnswerDetails}/>
            </div>
        </div>
    </Router>
</div>;

export default Admin
