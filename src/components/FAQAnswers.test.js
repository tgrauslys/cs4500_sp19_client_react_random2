import React from 'react'

import TestRenderer from 'react-test-renderer';
import FAQAnswerService from '../services/FAQAnswerService';
import '../services/FAQAnswerService.mock';
import { BrowserRouter } from "react-router-dom";
import UserService from '../services/UserService';
import FAQService from '../services/FAQService';
import FAQAnswers from './FAQAnswers';
import pagedAnswers from "../data/pagedFAQAnswers.mock"
import faqs from '../data/faq.mock'
import users from '../data/users.mock'
import pagedServiceAnswers from "../data/pagedAnswers.mock";


test('Render FAQAnswers in stateless component', () => {
    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <FAQAnswers
                faqAnswers = {pagedAnswers[0].content}
                faqAnswer={pagedAnswers[0].content[0]}
                users={users}
                user={users[0]}
                faqs={faqs}
                faq={faqs[0]}
                currentPage={0}
                itemCount={2}
                optionValues={[1, 2, 5, 10, 25, 50]}
                setPage={null}
            />
        </BrowserRouter>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const answerRows = testInstance.findAllByProps({className: 'answer-fld'});
    const pageNo = testInstance.findAllByProps({className: 'btn btn-primary page-no'});

    expect(answerRows.length).toBe(1);
    expect(pageNo.length).toBeDefined();



});

test('Rendering Next Page in FAQAnswers', () => {

    const setPage = () => {
        pagedAnswers[0] = pagedAnswers[1];
        let tree = testRenderer.toJSON;
        expect(tree).toMatchSnapshot();
        done()
    };

    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <FAQAnswers
                faqAnswers = {pagedAnswers[0].content}
                faqAnswer={pagedAnswers[0].content[0]}
                users={users}
                user={users[0]}
                faqs={faqs}
                faq={faqs[0]}
                currentPage={pagedAnswers[0].number}
                itemCount={10}
                optionValues={[1, 2, 5, 10, 25, 50]}
                setPage={setPage}
            />
        </BrowserRouter>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const answerRows = testInstance.findAllByProps({className: 'answer-fld'});
    const nextButton = testInstance.findAllByProps({className: 'btn btn-primary'});

    expect(nextButton[0].props).toEqual({
        "children": 1,
        "className": "btn btn-primary",
        "disabled": true,
        "style": {
            "margin": "2px"
        },
        "type": "button"
    });

    expect(answerRows.length).toBe(1);
    expect(nextButton).toBeDefined();

});

