import React from 'react'
import ServiceQuestions from './ServiceQuestions.js'
import renderer from 'react-test-renderer'
import questions from './data/questions.mock.json'

test('Render all service questions correctly', () => {
    const component = renderer.create(
        <ServiceQuestions serviceQuestions={questions}/>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    let testInstance = renderer.root
    let nextPageBtn = testInstance.findByProps({className: 'btn btn-primary next-page-btn'})

    nextPageBtn.props.onChange({
        target: {value: 0}
    })
    
    tree = renderer.toJSON()
    expect(tree).toMatchSnapshot()
})