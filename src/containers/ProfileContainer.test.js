import React from 'react';

import '../services/ProviderService.mock'
import TestRenderer from 'react-test-renderer'
import ProfileContainer from './ProfileContainer'


test('Render Profile Correctly', async () => {
    const testRenderer = TestRenderer.create(
        <ProfileContainer/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

});
