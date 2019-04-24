import registry from '../../data/Register.mock.json'
import React from 'react'
import Login from './Login'
import TestRenderer from 'react-test-renderer'
import UserService from '../../services/UserService'

const userService = UserService.getInstance()

describe('login page', () => {
    test('render login screen', async () => {
        let updateUsername = () => {}
        let updatePassword = () => {}
        let submit = () => {}

        const testRenderer = TestRenderer.create(
            <Login
                login={submit}
                updateUsername={updateUsername}
                updatePassword={updatePassword}
                isErrorMessageOn={true}/>
        )

        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        const testInstance = testRenderer.root

        const usernameField = testInstance.findByProps({id: "username"})
        const passwordField = testInstance.findByProps({id: "password"})
        const checkbox = testInstance.findByProps({type: "checkbox"})
        const forgotPasswordLink = testInstance.findByProps({href: "#"})
        const loginButton = testInstance.findByProps({className: "btn btn-primary btn-block"})
        const fields = testInstance.findAllByProps({className: "form-control"})

        expect(usernameField).toBeDefined()
        expect(passwordField).toBeDefined()
        expect(checkbox).toBeDefined()
        expect(forgotPasswordLink).toBeDefined()
        expect(loginButton).toBeDefined()
        expect(loginButton.type).toBe("button")
        expect(fields.length).toBe(2)
    })
})