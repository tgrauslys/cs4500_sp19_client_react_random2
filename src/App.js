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
    componentDidMount() {
        this.serviceCategoryService.findAllServiceCategories(4)
            .then(serviceCategories => this.setState({
                pillServiceCategories: serviceCategories
            }))
    }
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/home">Home</Link> |
                        <Link to="/services"> Services</Link> |
                        <Link to="/providers"> Providers</Link> |
                        <Link to="/admin"> Admin</Link> |
                        <Link to="/provider"> Provider</Link>
                        <br/>
                        <br/>
                        <br/>

                        <Route
                            path="/provider"
                            exact
                            render={() =>
                                <Provider
                                    provider={serviceCategories[0].serviceProviders[0]}/>}/>
                        <Route
                            path="/home"
                            exact
                            render={() => <Home pillServiceCategories={this.state.pillServiceCategories}/>}/>
                        <Route
                            path="/services"
                            exact
                            component={ServiceNavigator}/>
                        <Route
                            path="/admin"
                            exact
                            component={Admin}/>
                        <Route
                            path="/providers"
                            exact
                            component={ServiceProviderNavigator}/>
                    </div>
                </Router>
                {/*<h1>ServicesRus</h1>*/}
            </div>
        );
    }
}

export default App;
