import React from 'react'

import { BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer'
import user from "../../data/user.mock";
import Profile from './Profile'



test('Display user information', () => {
    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <Profile
                user={user}
            />
        </BrowserRouter>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const deleteButton = testInstance.findByProps({className: "btn btn-danger btn-block"});
    const successButton = testInstance.findByProps({className: "btn btn-success btn-block"});

    expect(deleteButton).toBeDefined();
    expect(successButton).toBeDefined();

});




