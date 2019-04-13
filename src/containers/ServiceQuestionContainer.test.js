import React from 'react'
import ServiceQuestionContainer from '../containers/ServiceQuestionContainer'
import ServiceQuestionService from '../services/ServiceQuestionService'
import '../services/ServiceQuestionService.mock'
import { BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer'

const serviceQuestionService = ServiceQuestionService.getInstance()

test('Render all service questions correctly', async () => {
    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <ServiceQuestionContainer 
                service={serviceQuestionService}
                currentPage={0}
                itemCount={10}
                optionValues={[1, 2, 5, 10, 25, 50]}/>
        </BrowserRouter>
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    let testInstance = testRenderer.root
    let nextPageBtn = testInstance.findByProps({className: "btn btn-secondary next-btn"})

    await nextPageBtn.props.onClick({
        target: {value: 10}
    })
    
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})