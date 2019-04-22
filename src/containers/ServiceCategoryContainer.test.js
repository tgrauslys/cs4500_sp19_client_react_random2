import React from 'react'
import ServiceCategoryContainer from '../containers/ServiceCategoryContainer'
import ServiceCategoryService from '../services/ServiceCategoryService'
import '../services/ServiceCategoryService.mock'
import { BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer'

const servCatServ = ServiceCategoryService.getInstance()

test('Render all service questions correctly', async () => {
    const testRenderer = TestRenderer.create(
        <ServiceCategoryContainer
                service={servCatServ}
                currentPage={1}
                itemCount={2}
                optionValues={[1, 2, 5, 10, 25, 50]}/>
    );
    let tree = testRenderer.toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();

    let testInstance = testRenderer.root;
    let nextPageBtn = testInstance.findByProps({className: "btn btn-secondary"})

    await nextPageBtn.props.onClick({
                                        target: {value: 10}
                                    });

    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    let selects = testInstance.findByProps({className: "cat-select"});
    expect(selects.props.children.length).toBe(6);
})