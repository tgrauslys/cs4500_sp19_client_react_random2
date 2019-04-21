import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import UserService from '../services/UserService';
import ServiceSearchContainer from '../containers/ServiceSearchContainer'

import ReviewService from "../services/ReviewService"
import ProviderContainer from "../containers/ProviderContainer"

import ServicesService from "../services/ServicesService";
import ServicesContainer from "../containers/ServicesContainer";
import ServicesDetailsContainer from "../containers/ServicesDetailsContainer";
import ServiceQuestionContainer from '../containers/ServiceQuestionContainer'
import ServiceQuestionService from '../services/ServiceQuestionService';
import ServiceQuestionDetails from './ServiceQuestionDetails'
import FAQs from './FAQs'
import FAQDetails from './FAQDetails'
import FaqAnswerContainer from "../containers/FaqAnswerContainer";

import FaqAnswerDetailsContainer from "../containers/FaqAnswerDetailsContainer";
import FAQAnswerService from "../services/FAQAnswerService";

import ServiceCategoryService from "../services/ServiceCategoryService";
import ServiceCategoryContainer from "../containers/ServiceCategoryContainer";
import ServCatDetailsContainer from "../containers/ServCatDetailsContainer";
import FAQService from "../services/FAQService";
import UserSummaryContainer from "../containers/UserSummaryContainer";
import UserDetailsContainer from "../containers/UserDetailsContainer";

const reviewService = ReviewService.getInstance();
const faqService = FAQService.getInstance();
const faqAnswerService = FAQAnswerService.getInstance();
const serviceQuestionService = ServiceQuestionService.getInstance();
const userService = UserService.getInstance();
const categoryService = ServiceCategoryService.getInstance();
const services = ServicesService.getInstance();

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
                    <Link to="/admin/provider-search">Provider Search</Link>
                    <br/>
                    <Link to="/admin/faq-answers">FAQ Answers</Link>
                </div>
                <div className="col-9">

                    <Route
                        path={"/admin/users/:id"}
                        exact
                        component={UserDetailsContainer}/>

                    <Route
                        path="/admin/users"
                        exact
                        render={(props) => <UserSummaryContainer
                            props = {props}
                            service = {userService}
                            currentPage={0}
                            itemCount={10}
                            optionValues={[1, 2, 5, 10, 25, 50]}/>}/>



                    <Route
                        path="/admin/services"
                        exact
                        // component={Services}/>
                        render={() => <ServicesContainer
                            service={services}
                            currentPage={0}
                            itemCount={10}
                            optionValues={[1, 2, 5, 10, 25, 50]}/>}/>
                    <Route
                        path="/admin/services/:id"
                        exact
                        component={() => (
                            <ServicesDetailsContainer
                                service={services}/>)}/>
                    <Route
                        path="/admin/categories"
                        exact
                        render={(props) => <ServiceCategoryContainer
                            props = {props}
                            service = {categoryService}
                            currentPage={0}
                            itemCount={10}
                            optionValues={[1, 2, 5, 10, 25, 50]}/>}/>
                    <Route
                        path="/admin/categories/:id"
                        exact
                        component={ServCatDetailsContainer}/>

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
                        path="/admin/provider-search/:id"
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
                        render={() => <FaqAnswerContainer FAQService={faqService}
                                                          AnswerService={faqAnswerService}
                                                          UserService={userService}
                                                          currentPage={0}
                                                          itemCount={10}
                                                          optionValues={[1, 2, 5, 10, 25, 50]}/>}/>
                    <Route
                        path="/admin/faq-answers/:id"
                        exact
                        render={() => <FaqAnswerDetailsContainer service={FAQAnswerService}/>}/>
                </div>
            </div>
        </Router>
    </div>

export default Admin
