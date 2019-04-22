import userInfo from '../data/Register.mock.json'
import React from 'react'
import Register from './Register'
import TestRenderer from 'react-test-renderer'
import UserService from '../services/UserService'

const userService = UserService.getInstance()

test('render register screen', () => {
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

    const testInstance = TestRenderer.root

    const firstNameField = testInstance.findByProps({id: "first-name"})
    const lastNameField = testInstance.findByProps({id: "last-name"})
    const emailField = testInstance.findByProps({id: "email"})
    const usernameField = testInstance.findByProps({id: "username"})
    const passwordField = testInstance.findByProps({id: "password"})
    const registerButton = testInstance.findByProps({className="btn btn-primary btn-block"})

    expect(firstNameField.onChange).toBeDefined()
    expect(lastNameField.onChange).toBeDefined()
    expect(emailField.onChange).toBeDefined()
    expect(usernameField.onChange).toBeDefined()
    expect(passwordField.onChange).toBeDefined()
    expect(registerButton.onClick).toBeDefined()
})

test('click register to sign up', (done) => {
    let updateFirstName = () => {}
    let updateLastName = () => {}
    let updateEmail = () => {}
    let updateUsername = () => {}
    let updatePassword = () => {}
    let submit = () => {
        userService.register(userInfo)
        let tree = testRenderer.toJSON
        expect(tree).toMatchSnapshot()
        done()
    }

    const TestRenderer = TestRenderer.create(
        <Register
            register={submit}
            updateFirstName={updateFirstName}
            updateLastName={updateLastName}
            updateEmail={updateEmail}
            updateUsername={updateUsername}
            updatePassword={updatePassword}
            isErrorMessageOn={true}/>)

    let tree = testRenderer.toJSON
    expect(tree).toMatchSnapshot()
    
    expect(firstNameField.onChange).toBeDefined()
    expect(lastNameField.onChange).toBeDefined()
    expect(emailField.onChange).toBeDefined()
    expect(usernameField.onChange).toBeDefined()
    expect(passwordField.onChange).toBeDefined()
    expect(registerButton.onClick).toBeDefined()

    registerButton.props.onClick()
})

test('profile screen is displayed once registered'), (done) => {
    let updateUserProfile = () => {}
    let deleteUserProfile = () => {}

    const testRenderer = TestRenderer.create(<Profile 
        user={userInfo}
        updateUserProfile={updateUserProfile}
        deleteUserProfile={deleteUserProfile}/>)
}