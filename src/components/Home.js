import React from 'react'
import ServiceCategoryPills from "./ServiceCategoryPills";
import ServiceSearchContainer from "../containers/ServiceSearchContainer";
import UserService from "../services/UserService";

const userService = UserService.getInstance()

const Home = (pillServiceCategories) => {
    return (
    <div>
        <h2>Home</h2>
        <div className="row">
            <div className="col-8">
                <h1>
                    Find professionals near you.
                </h1>
                {/*<SearchBar history={history}/> */}
            </div>
            <div className="col-3 text-right">
                <a href="#">Sign up</a>
            </div>
            <div className="col-1">
                <a href="#">Log in</a>
            </div>
        </div>

        <br/>
        <div>
            <ServiceSearchContainer
                service={userService}/>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <ServiceCategoryPills serviceCategories={pillServiceCategories.pillServiceCategories}/>
        </div>
        <br/>
        <br/>
        <br/>
        {/*<ServiceTabNavigator
            serviceCategories={serviceCategories}/>*/}
    </div>
)
}
export default Home
