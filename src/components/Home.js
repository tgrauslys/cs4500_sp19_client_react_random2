import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import ServiceNavigator from './components/ServiceNavigator/ServiceNavigator'
import ServiceProviderNavigator from './components/ServiceProviderNavigator/ServiceProviderNavigator'
import Provider from './components/Provider/Provider'
import SearchBar from './components/SearchBar/SearchBar'
import serviceCategories from './data/service-categories.mock.json'
import ServiceCategoryService from './services/ServiceCategoryService'

class App extends Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            pillServiceCategories: serviceCategories
        }
    }

}