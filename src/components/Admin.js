import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceCategories from './ServiceCategories'
import ServiceCategoryDetails from './ServiceCategoryDetails'

const Admin = () =>
<div>
    <h2>Admin</h2>
    <Router>
        <div className="row">
            <div className="col-3">

                <Link to="/admin/service-categories">Service Categories</Link>
                <br/>
                <Link to="/admin/service-categories/1">Service Category Details</Link>
                <br/>
                <Link to="/admin/questions">Service Questions</Link>
                <br/>
            </div>
            <div className="col-9">
                <Route
                    path="/admin/service-categories"
                    exact
                    component={ServiceCategories}/>
                <Route
                    path="/admin/service-categories/:id"
                    exact
                    component={ServiceCategoryDetails}/>

            </div>
        </div>
    </Router>
</div>;

export default Admin
