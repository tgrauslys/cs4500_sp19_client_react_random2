import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/HomeScreen/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Provider from './components/Provider/Provider'
import provider from "./data/provider.mock.json"
import ProfileContainer from './containers/ProfileContainer';
import ServiceCategoryService from "./services/ServiceCategoryService";
import CategoryList from "./components/HomeScreen/CategoryList";
import CatListContainer from "./containers/CatListContainer";
import ServiceNavigator from './components/ServiceNavigator/ServiceNavigator'

class App extends Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.state = {
            pillServiceCategories: [],
            category: [],
            provider: provider
        }
        this.findServiceCategories()
    }

    componentDidMount() {
        this.findServiceCategories();
    }

    findServiceCategories = () => {
        return this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
                      this.setState({
                          pillServiceCategories: serviceCategories
                                    })
            )
    }

    findCategoryById = (id) => {
        return this.serviceCategoryService
            .findServiceCategoryById(parseInt(id)).then(category =>
                                                            this.setState({category: category}))
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>ServicesRus</h1>
                <Router>
                    <div>
                        <Link to="/admin">Admin</Link>
                        <Route
                            path="/admin"
                            exact
                            component={Admin}/>
                        <br/>

                        <Link to={"/provider"}>Provider</Link>
                        <Route
                        path="/provider"
                        exact
                        render={() =>
                        <Provider provider = {provider}/>}/>
                        <br/>

                        <Link to="/home">Home</Link>
                        <Route
                            path="/home"
                            exact
                            render={() => <Home
                                pillServiceCategories={this.state.pillServiceCategories}/>}/>
                        <br/>
                        <Link to="/profile/1">User Profile</Link>
                        <Route
                            path="/profile/:id"
                            exact
                            render={(props)=>
                            <ProfileContainer
                                props = {props}
                            />}
                        />
                        <br/>
                        <Link to="/services-nav">Service Navigator</Link>
                        <Route
                            path="/services-nav"
                            exact
                            render={() =>
                            <ServiceNavigator serviceCategories={this.state.pillServiceCategories}
                                              />}/>
                        <br/>
                        <Route
                            path="/categories/:id"
                            exact
                            render={(props) =>
                                <CatListContainer
                                    props = {props}
                                    service = {this.serviceCategoryService}/>}/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
