import React from 'react'
import ServiceSearchContainer from './ServiceSearchContainer'
import UserService from '../services/UserService'
import '../services/UserService.mock'
import { BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer'

const userService = UserService.getInstance()

test('Render provider search correctly', async () => {
    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <ServiceSearchContainer 
                id={undefined}
                service={userService}/>
        </BrowserRouter>
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    let testInstance = testRenderer.root
    let usernameInput = testInstance.findByProps({className: "input username"})
    let zipcodeInput = testInstance.findByProps({className: "input zipcode"})
    let searchButton = testInstance.findByProps({className: "search-button btn btn-success"})

    usernameInput.props.onChange({
        target: {value: "1"}
    })

    zipcodeInput.props.onChange({
        target: {value: "02115"}
    })

    await searchButton.props.onClick({
        preventDefault: () => {}
    })
    
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()
})