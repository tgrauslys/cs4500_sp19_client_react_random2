import React from 'react'
import ServiceCategoryContainer from '../containers/ServiceCategoryContainer'
import ServiceCategoryService from '../services/ServiceCategoryService'
import '../services/ServiceCategoryService.mock'
import {BrowserRouter} from "react-router-dom";
import TestRenderer from 'react-test-renderer'
import ServiceCategories from "../components/ServiceCategories";

const servCatServ = ServiceCategoryService.getInstance();

test('Render all service categories correctly', (done) => {
    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <ServiceCategoryContainer
                service={servCatServ}
                currentPage={5}
                itemCount={2}
                optionValues={[1, 2, 5, 10, 25, 50]}/>
        </BrowserRouter>
    );

    let tree = testRenderer.toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();

    done();

    // DOM testing
    let testInstance = testRenderer.root;
    let nextPageBtn = testInstance.findByProps({className: "btn btn-secondary"})

    nextPageBtn.props.onClick({
                                  target: {value: 10}
                              });

    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    // Find the dropdown for pagination options
    let selects = testInstance.findByProps({className: "cat-select"});
    expect(selects.props.children.length).toBe(6);

    done();
});

test('Correct rendering of service categories', () => {

    servCatServ.findAllServiceCategories().then(categories => {
        const testRenderer = TestRenderer.create(
            <BrowserRouter>
                <ServiceCategories
                    categories={categories}
                    totalPages={2}
                    itemCount={2}
                    optionValues={[1, 2, 5, 10, 20]}
                    currentPage={0}
                />
            </BrowserRouter>
        );

        let tree = testRenderer.toJSON();

        expect(tree).toMatchSnapshot();

        const testInstance = testRenderer.root;

        const delBtns = testInstance.findAllByProps({className: "btn btn-danger"});
        expect(delBtns.length).toBe(5);
        expect(delBtns[0].props.children).toBe("Delete");

        const pageBtns = testInstance.findAllByProps({className: "btn btn-primary"});
        expect(pageBtns.length).toBe(2);


    })
});