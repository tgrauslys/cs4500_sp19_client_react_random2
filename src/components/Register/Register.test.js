import registry from '../../data/Register.mock.json'
import React from 'react'
import Register from './Register'
import TestRenderer from 'react-test-renderer'
import UserService from '../../services/UserService'
import Profile from '../Profile/Profile'

const userService = UserService.getInstance()
var testUserId

describe('Register Page Test', () => {
    beforeAll(() => {
        let updateFirstName = () => {}
        let updateLastName = () => {}
        let updateEmail = () => {}
        let updateUsername = () => {}
        let updatePassword = () => {}
        let submit = () => {
            testUserId = userService.register(registry.validInput).then(user => user.id)
            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()
            done()
        }
    
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
    
        expect(firstNameField.onChange).toBeDefined()
        expect(lastNameField.onChange).toBeDefined()
        expect(emailField.onChange).toBeDefined()
        expect(usernameField.onChange).toBeDefined()
        expect(passwordField.onChange).toBeDefined()
        expect(registerButton[0].onClick).toBeDefined()
        expect(registerButton.length).toBe(1)
    
        registerButton.props.onClick()
    })

    test('user is registered', () => {
        expect(userService.findUserById(testUserId)).toBe(registry.validInput)
    })
    
    test('profile screen is displayed once registered', (done) => {
        let updateUserProfile = () => {}
        let deleteUserProfile = () => {}

        const testRenderer = TestRenderer.create(<Profile 
            user={registry.validInput}
            updateUserProfile={updateUserProfile}
            deleteUserProfile={deleteUserProfile}/>)
    })
    
    afterEach(() => {
        if (testUserId) {
            userService.deleteUserById(testUserId)
        }
        testUserId = undefined
    })
})