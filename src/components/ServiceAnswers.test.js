import '../services/ServiceAnswerService.mock'
import React from 'react'
import ServiceAnswer from './ServiceAnswers'
import TestRenderer from 'react-test-renderer';
import pagedServiceAnswers from '../data/pagedAnswers.mock.json'
import ServiceAnswerService from '../services/ServiceAnswerService'
const serviceAnswerService = ServiceAnswerService.getInstance()

test('render all answers from services', () => {
    const testRenderer = TestRenderer.create(
        <ServiceAnswer
            serviceAnswers={pagedServiceAnswers[0].content}
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
    const answerRows = testInstance.findAllByProps({className: 'answer-row'})

    expect(nextButton).toBeDefined()
    expect(nextPageButton.length).toBeDefined()
    expect(answerRows.length).toBe(10)
})

test('click next button for pagination',  (done) => {
    const setPage = () => {
            pagedServiceAnswers[0] = pagedServiceAnswers[1]
            let tree = testRenderer.toJSON
            expect(tree).toMatchSnapshot()
            done()
    }
    const testRenderer = TestRenderer.create(
        <ServiceAnswer
            serviceAnswers={pagedServiceAnswers[0].content}
            optionValues={[1, 2, 5, 10, 25, 50]}
            currentPage={pagedServiceAnswers[0].number}
            itemCount={10}
            first={pagedServiceAnswers[0].first}
            last={pagedServiceAnswers[0].last}
            setPage={setPage}/>)

    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    let nextButton = testInstance.findByProps({className: 'btn btn-secondary next-btn'})
    let nextPageButton = testInstance.findAllByProps({className: 'btn btn-primary next-page-btn'})
    let answerRows = testInstance.findAllByProps({className: 'answer-row'})

    expect(nextButton).toBeDefined()
    expect(nextPageButton.length).toBeDefined()
    expect(answerRows.length).toBe(10)

    nextButton.props.onClick()
})