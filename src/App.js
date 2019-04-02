import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/HomeScreen/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Provider from './components/Provider/Provider'
import ServiceCategoryService from "./services/ServiceCategoryService";
import CategoryList from "./components/HomeScreen/CategoryList";
import CatListContainer from "./containers/CatListContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.serviceCategoryService = ServiceCategoryService.getInstance();
        this.state = {
            pillServiceCategories: [],
            category: []
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
                        <Link to={"/providers"}>Providers</Link>
                        {/*<Route*/}
                        {/*path="/providers"*/}
                        {/*exact*/}
                        {/*component={ServiceProviderNavigator}/>*/}
                        <br/>
                        <Link to="/home">Home</Link>
                        <Route
                            path="/home"
                            exact
                            render={() => <Home
                                pillServiceCategories={this.state.pillServiceCategories}/>}/>

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
