import React from 'react'
import ServiceCategoryPills from "./ServiceCategoryPills";
import ServiceSearchContainer from "../../containers/ServiceSearchContainer";
import UserService from "../../services/UserService";
import ServiceNavigator from "../ServiceNavigator/ServiceNavigator";

const userService = UserService.getInstance()
const services = ServicesService.getInstance()

const Home = (pillServiceCategories) => {
    console.log(pillServiceCategories)
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
            <ServiceCategoryPills serviceCategories={pillServiceCategories.pillServiceCategories}/>
        </div><br/>
        <div>
            <ServiceSearchContainer
                serviceService={services}
                userService={userService}/>
        </div>
        <br/>
        <div>
            <ServiceNavigator
                serviceCategories={pillServiceCategories.pillServiceCategories}
            />
        </div>

    </div>
)
}
export default Home
