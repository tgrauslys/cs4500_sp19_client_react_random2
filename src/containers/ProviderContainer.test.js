import React from 'react'

import ReviewService from '../services/ReviewService'
import UserService from '../services/UserService'
import FAQAnswerService from '../services/FAQAnswerService'

import '../services/UserService.mock'


import TestRenderer from 'react-test-renderer'
import ProviderContainer from "./ProviderContainer";


const reviewService = ReviewService.getInstance();
const userService = UserService.getInstance();
const faqAnswerService = FAQAnswerService.getInstance();


test('Render profile correctly', async () => {
    const testRenderer = TestRenderer.create(
            <ProviderContainer
                id = {1}
                ReviewService = {reviewService}
                UserService =  {userService}
                FAQAnswerService = {faqAnswerService}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

});