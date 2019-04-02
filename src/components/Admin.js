import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from './Users'
import UserService from '../services/UserService';
import ServiceSearchContainer from '../containers/ServiceSearchContainer'
import Services from './Services'
import ServiceQuestionContainer from '../containers/ServiceQuestionContainer'
import ServiceQuestionService from '../services/ServiceQuestionService';
import ServiceQuestionDetails from './ServiceQuestionDetails'
import FAQs from './FAQs'
import FAQDetails from './FAQDetails'
import FAQAnswers from './FAQAnswers'
import FAQAnswerDetails from './FAQAnswerDetails'
import ServiceCategoryService from "../services/ServiceCategoryService";
import ServiceCategoryContainer from "../containers/ServiceCategoryContainer";
import ServCatDetailsContainer from "../containers/ServCatDetailsContainer";

const serviceQuestionService = ServiceQuestionService.getInstance()
const userService = UserService.getInstance()
const categoryService = ServiceCategoryService.getInstance()

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
                <Link to="admin/provider-search">Provider Search</Link>
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
                    render={() => <ServiceCategoryContainer service = {categoryService}/>}/>
                <Route
                    path="/admin/categories/:id"
                    exact
                    component={() => (
                        <ServCatDetailsContainer
                            service = {categoryService}/>)}
                    //render={() => (
                    //             <ServCatDetailsContainer
                    //                 service = {categoryService}/>
                    //)}
                />
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
                    path="/admin/provider-search"
                    exact
                    render={() => <ServiceSearchContainer
                                    service={userService}
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
