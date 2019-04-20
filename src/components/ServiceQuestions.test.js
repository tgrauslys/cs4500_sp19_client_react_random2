
import '../services/ServiceQuestionService.mock'
import React from 'react'
import ServiceQuestion from './ServiceQuestions'
import TestRenderer from 'react-test-renderer';
import serviceQuestions from '../data/questions.mock.json'
import ServiceQuestionService from '../services/ServiceQuestionService'
const serviceQuestionService = ServiceQuestionService.getInstance()

test('render all questions from services', () => {
    const testRenderer = TestRenderer.create(
        <ServiceQuestion
            serviceQuestions={serviceQuestions}
            optionValues={[1, 2, 5, 10, 25, 50]}
            currentPage={0}
            itemCount={10}
            first={true}
            last={false}
            setPage={null}/>)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const nextButton    = testInstance.findByProps({className: 'btn btn-secondary next-btn'})
    const nextPageButton = testInstance.findAllByProps({className: 'btn btn-primary next-page-btn'})
    const questionRows = testInstance.findAllByProps({className: 'question-row'})

    expect(nextButton.length).toBe(1)
    expect(nextPageButton.length).toBe(1)
    expect(questionRows.length).toBe(10)

})