
import '../services/ServiceQuestionService.mock'
import React from 'react'
import ServiceQuestion from './ServiceQuestions'
import TestRenderer from 'react-test-renderer';
import pagedServiceQuestions from '../data/pagedQuestions.mock.json'
import ServiceQuestionService from '../services/ServiceQuestionService'
const serviceQuestionService = ServiceQuestionService.getInstance()

test('render all questions from services', () => {
    const testRenderer = TestRenderer.create(
        <ServiceQuestion
            serviceQuestions={pagedServiceQuestions[0].content}
            optionValues={[1, 2, 5, 10, 25, 50]}
            currentPage={0}
            itemCount={10}
            first={true}
            last={false}
            setPage={null}/>)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const nextButton = testInstance.findByProps({className: 'btn btn-secondary next-btn'})
    const nextPageButton = testInstance.findAllByProps({className: 'btn btn-primary next-page-btn'})
    const questionRows = testInstance.findAllByProps({className: 'question-row'})

    expect(nextButton).toBeDefined()
    expect(nextPageButton.length).toBeDefined()
    expect(questionRows.length).toBe(10)
})

test('click next button for pagination',  (done) => {
    const setPage = () => {
            pagedServiceQuestions[0] = pagedServiceQuestions[1]
            let tree = testRenderer.toJSON
            expect(tree).toMatchSnapshot()
            done()
    }
    const testRenderer = TestRenderer.create(
        <ServiceQuestion
            serviceQuestions={pagedServiceQuestions[0].content}
            optionValues={[1, 2, 5, 10, 25, 50]}
            currentPage={pagedServiceQuestions[0].number}
            itemCount={10}
            first={pagedServiceQuestions[0].first}
            last={pagedServiceQuestions[0].last}
            setPage={setPage}/>)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    let nextButton = testInstance.findByProps({className: 'btn btn-secondary next-btn'})
    let nextPageButton = testInstance.findAllByProps({className: 'btn btn-primary next-page-btn'})
    let questionRows = testInstance.findAllByProps({className: 'question-row'})

    expect(nextButton).toBeDefined()
    expect(nextPageButton.length).toBeDefined()
    expect(questionRows.length).toBe(10)

    nextButton.props.onClick()
})