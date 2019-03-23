import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import Users from './Users'
// import UserDetails from './UserDetails'
// import Services from './Services'
// import ServiceDetails from './ServiceDetails'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryDetails from './ServiceCategoryDetails'
import ServiceQuestions from './ServiceQuestions'
import ServiceQuestionDetails from './ServiceQuestionDetails'
// import ServiceAnswers from './ServiceAnswers'
// import ServiceAnswerDetails from './ServiceAnswerDetails'
import FAQs from './FAQs'
import FAQDetails from './FAQDetails'
import FAQAnswers from './FAQAnswers'
import FAQAnswerDetails from './FAQAnswerDetails'

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
            </div>
            <div className="col-9">
                <Route
                    path="/admin/users"
                    exact
                    component={Users}/>
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
                    component={ServiceQuestions}/>
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
