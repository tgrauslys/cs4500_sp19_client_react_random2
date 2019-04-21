import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/HomeScreen/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Provider from './components/Provider/Provider'
import ProviderContainer from './containers/ProviderContainer'
import provider from "./data/provider.mock.json"
import ProfileContainer from './containers/ProfileContainer';
import ServiceCategoryService from "./services/ServiceCategoryService";
import CategoryList from "./components/HomeScreen/CategoryList";
import CatListContainer from "./containers/CatListContainer";
import ServiceNavigator from './components/ServiceNavigator/ServiceNavigator'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import UserService from './services/UserService'
import BusinessServContainer from "./containers/BusinessServContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.userService = UserService.getInstance()
        this.state = {
            pillServiceCategories: [],
            category: [],
            provider: provider
        };

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
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>ServicesRus</h1>
                <Router>
                    <div>
                        <Link to="/admin">Admin</Link> |
                        <Link to="/home"> Home</Link> |
                        <Link to="/register"> Register</Link> |
                        <Link to="/login"> Login</Link> |
                        <Link to="/business-servs"> Business Services </Link>
                        <br/>
                        
                        <Route
                            path="/admin"
                            exact
                            component={Admin}/>
                        <br/>
                        <Route
                            path="/provider/:id"
                            exact
                            render={(props) =>
                            <ProviderContainer props = {props}/>}/>
                        <Route
                            path="/home"
                            exact
                            render={() => <Home
                                pillServiceCategories={this.state.pillServiceCategories}/>}/>
                        <Route
                            path="/register"
                            exact
                            render={(props)=>
                            <RegisterContainer userService={this.userService}
                            />}/>
                        <Route
                            path="/login"
                            exact
                            render={(props)=>
                            <LoginContainer userService={this.userService}
                            />}/>
                        <Route
                            path="/profile"
                            exact
                            render={(props)=>
                            <ProfileContainer
                                props = {props}
                            />}/>
                        <Route
                            path="/categories/:id"
                            exact
                            render={(props) =>
                                <CatListContainer
                                    props = {props}
                                    service = {this.serviceCategoryService}/>}/>
                        <Route
                            path="/business-servs"
                            exact
                            component={BusinessServContainer}
                        />
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
