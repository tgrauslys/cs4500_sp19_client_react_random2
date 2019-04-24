import React from 'react'
import ServiceAnswerContainer from './ServiceAnswerContainer'
import ServiceAnswerService from '../services/ServiceAnswerService'
import '../services/ServiceAnswerService.mock'
import { BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer'

const serviceAnswerService = ServiceAnswerService.getInstance()

test('Render all service answers correctly', async () => {
    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <ServiceAnswerContainer 
                service={serviceAnswerService}
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