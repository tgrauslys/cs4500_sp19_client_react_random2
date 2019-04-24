import registry from '../../data/Register.mock.json'
import React from 'react'
import Register from './Register'
import TestRenderer from 'react-test-renderer'
import UserService from '../../services/UserService'

const userService = UserService.getInstance()
var testUserId

describe('Register Page Test', () => {
    test('Register page renders correctly', () => {
        let updateFirstName = () => {}
        let updateLastName = () => {}
        let updateEmail = () => {}
        let updateUsername = () => {}
        let updatePassword = () => {}
        let submit = () => {}
    
        const testRenderer = TestRenderer.create(
            <Register 
                register={submit}
                updateFirstName={updateFirstName}
                updateLastName={updateLastName}
                updateEmail={updateEmail}
                updateUsername={updateUsername}
                updatePassword={updatePassword}
                isErrorMessageOn={true}/>
        )
    
        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()
    
        const testInstance = testRenderer.root
    
        const firstNameField = testInstance.findByProps({id: "first-name"})
        const lastNameField = testInstance.findByProps({id: "last-name"})
        const emailField = testInstance.findByProps({id: "email"})
        const usernameField = testInstance.findByProps({id: "username"})
        const passwordField = testInstance.findByProps({id: "password"})
        const registerButton = testInstance.findAllByProps({className: "btn btn-primary btn-block"})
        const fields = testInstance.findAllByProps({className: "form-control"})

        expect(firstNameField).toBeDefined()
        expect(lastNameField).toBeDefined()
        expect(emailField).toBeDefined()
        expect(usernameField).toBeDefined()
        expect(passwordField).toBeDefined()
        expect(registerButton[0]).toBeDefined()
        expect(registerButton[0].type).toBe("button")
        expect(registerButton.length).toBe(1)
        expect(fields.length).toBe(5)
    })
})