import React from 'react'
import FAQAnswerDetails from './FAQAnswerDetails'
import TestRenderer from 'react-test-renderer';
import FAQAnswers from '../data/faqanswers.mock'

test('Render FAQAnswer Details page', () => {
    const testRenderer = TestRenderer.create(
        <FAQAnswerDetails
            faqAnswers = {FAQAnswers}
            faqAnswer={FAQAnswers[0]}
            updateFormAnswer={null}
            navigateBack={null}
            editAnswer={null}
        />)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root
    const formControls = testInstance.findAllByProps({className: "form-control"});
    const delButton = testInstance.findByProps({class: "btn btn-warning btn-lg"});
    const updateButton = testInstance.findByProps({class: "btn btn-danger btn-lg active"})


    expect(formControls.length).toBe(3);
    expect(delButton).toBeDefined();
    expect(updateButton).toBeDefined();
    expect(formControls[1].props.value).toBe("What should the customer know about your pricing (e.g., discounts, fees)?");
    expect(formControls[2].props.value).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

})