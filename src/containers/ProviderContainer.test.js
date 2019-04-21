import React from 'react'

import ReviewService from '../services/ReviewService'
import UserService from '../services/UserService'
import FAQAnswerService from '../services/FAQAnswerService'

import '../services/ReviewService.mock'
import '../services/FAQAnswerService.mock'
import '../services/UserService.mock'


import TestRenderer from 'react-test-renderer'
import ProviderContainer from "./ProviderContainer";


const reviewService = ReviewService.getInstance();
const userService = UserService.getInstance();
const faqAnswerService = FAQAnswerService.getInstance();




test('Render profile correctly', async () => {
    const testRenderer = TestRenderer.create(
            <ProviderContainer
                userService =  {userService}
                reviewService = {reviewService}
                faqAnswerService = {faqAnswerService}
                providerId = {1}/>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

});