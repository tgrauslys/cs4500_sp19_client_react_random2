import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'
import ServiceCategorySectionList from './ServiceCategorySectionList'
//import serviceCategories from './mock/service-categories.mock.json'
import ServiceCategoryPills from "../HomeScreen/Home";
// import SearchBar from '../SearchBar/SearchBar'

const ServiceNavigator = ({serviceCategories}) => {
    console.log(serviceCategories);
    return (<div>
        <div className="row">
            {/*<div className="col-8">*/}
            {/*<SearchBar/>*/}
            {/*</div>*/}
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col-3">
                <ServiceCategoryList
                    serviceCategories={serviceCategories}/>

            </div>
            {/*<div>*/}
            {/*<ServiceCategoryPills serviceCategories={serviceCategories}/>*/}
            {/*</div>*/}
            <div className="col-9">
                <ServiceCategorySectionList
                    serviceCategories={serviceCategories}/>
            </div>
        </div>
    </div>)
}

export default ServiceNavigator