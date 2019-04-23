import React from 'react'
import ServiceCategoryService from '../../services/ServiceCategoryService'
import '../../services/ServiceCategoryService.mock'
import {BrowserRouter} from "react-router-dom";
import TestRenderer from 'react-test-renderer'
import ServiceCategories from "../../components/ServiceCategories";
import Home from "./Home";

const servCatServ = ServiceCategoryService.getInstance();

test('Render home screen correctly', () => {

    servCatServ.findAllServiceCategories().then(categories => {
        const testRenderer = TestRenderer.create(
            <BrowserRouter>
                <Home
                    pillServiceCategories={categories}
                />
            </BrowserRouter>
        );

        let tree = testRenderer.toJSON();

        expect(tree).toMatchSnapshot();


        const testInstance = testRenderer.root;


        // Test that all the service category pill buttons are there
        const delBtns = testInstance.findAllByProps({className: "nav-link btn-lg text-center"});
        expect(delBtns.length).toBe(5);
        expect(delBtns[0].props.children).toBe("Dog");

        // Test that the search fields are there
        const pageBtns = testInstance.findAllByProps({className: "input"});
        expect(pageBtns.length).toBe(2);


    });
});
