import registry from '../data/Register.mock.json'
import React from 'react'
import Login from './Login'
import TestRenderer from 'react-test-renderer'
import UserService from '../services/UserService'

const userService = UserService.getInstance()

test('render login screen', () => {
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

    const testInstance = TestRenderer.root

    const usernameField = testInstance.findByProps({id: "username"})
    const passwordField = testInstance.findByProps({id: "password"})
    const checkbox = testInstance.findByProps({type: "checkbox"})
    const forgotPasswordLink = testInstance.findByProps({href: "#"})
    const loginButton = testInstance.findByProps({className: "btn btn-primary btn-block"})

    expect(usernameField.onChange).toBeDefined()
    expect(passwordField.onChange).toBeDefined()
    expect(checkbox).toBeDefined()
    expect(forgotPasswordLink).toBeDefined()
    expect(loginButton.onClick).toBeDefined()
})

test('click Log In to sign in', (done) => {
    let updateUsername = () => {}
    let updatePassword = () => {}
    let submit = () => {
        userService.register(registry.validInput)
        let tree = testRenderer.toJSON
        expect(tree).toMatchSnapshot()
        done()
    }

    const TestRenderer = TestRenderer.create(
        <Register
            register={submit}
            updateUsername={updateUsername}
            updatePassword={updatePassword}
            isErrorMessageOn={true}/>)

    let tree = testRenderer.toJSON
    expect(tree).toMatchSnapshot()
    
    expect(usernameField.onChange).toBeDefined()
    expect(passwordField.onChange).toBeDefined()
    expect(registerButton.onClick).toBeDefined()

    registerButton.props.onClick()
})

test('profile screen is displayed once logged in'), (done) => {
    let updateUserProfile = () => {}
    let deleteUserProfile = () => {}

    const testRenderer = TestRenderer.create(<Profile 
        user={registry.validInput}
        updateUserProfile={updateUserProfile}
        deleteUserProfile={deleteUserProfile}/>)
}