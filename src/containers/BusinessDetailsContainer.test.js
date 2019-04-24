import React from 'react'
import BusinessDetailsContainer from './BusinessDetailsContainer'
import TestRenderer from 'react-test-renderer';

test('BusinessDetailsContainer renders correctly', async () => {
    const testRenderer = TestRenderer.create(
        <BusinessDetailsContainer/>)
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance   = testRenderer.root
    let name = testInstance.findByProps({id: 'name'})

    name.props.onChange({target: {id:"name", value: 'Different'}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    let year = testInstance.findByProps({id: 'yearFounded'})

    year.props.onChange({target: {id: 'yearFounded', value: '1'}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    let employees = testInstance.findByProps({id: 'employees'})

    employees.props.onChange({target: {id: 'employees', value: '321'}})
    tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

})