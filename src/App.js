import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import Provider from './components/Provider/Provider'
import provider from "./data/provider.mock.json"
import ServiceCategoryService from "./services/ServiceCategoryService";

class App extends Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.state = {
            pillServiceCategories: [],
            provider: provider
        }
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
                            render={() => <Home pillServiceCategories={this.state.pillServiceCategories}/>}/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
