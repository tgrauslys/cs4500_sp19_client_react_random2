import React from 'react'

import ReviewService from '../services/ReviewService'
import UserService from '../services/UserService'
import FAQAnswerService from '../services/FAQAnswerService'

import '../services/ReviewService.mock'
import '../services/FAQAnswerService.mock'
import '../services/UserService.mock'

import { BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer'
import ProviderContainer from "./ProviderContainer";

const ReviewService = ReviewService.getInstance();
const UserService = UserService.getInstance();
const FAQAnswerService = FAQAnswerService.getInstance();


test('Render profile correctly', async () => {
    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <ProviderContainer
                userService =  {UserService}
                reviewService = {ReviewService}
                faqAnswerService = {FAQAnswerService}
                providerId = {1}/>
        </BrowserRouter>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

});