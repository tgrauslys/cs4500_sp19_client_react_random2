import userInfo from '../data/Register.mock.json'
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
    const loginButton = testInstance.findByProps({className="btn btn-primary btn-block"})

    expect(usernameField.onChange).toBeDefined()
    expect(passwordField.onChange).toBeDefined()
    expect(loginButton.onClick).toBeDefined()
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

test('profile screen is displayed once registered'), (done) => {
    let updateUserProfile = () => {}
    let deleteUserProfile = () => {}

    const testRenderer = TestRenderer.create(<Profile 
        user={userInfo}
        updateUserProfile={updateUserProfile}
        deleteUserProfile={deleteUserProfile}/>)
}