import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import React from "react";
import ServiceCategorySection from "./ServiceCategorySection";

const ServiceNavigator = ({
                              serviceCategories
                          }) => {
    return (<div>
        <h2>ServiceNavigator</h2>
        <Router>
            <div>
            <div className="row">
                <div className="col-3">
                    <table className="table">
                        <tbody>
                        {
                            serviceCategories
                                .map(serviceCategory =>
                                    <td key={serviceCategory.id}>

                                            <Link to={`/services-nav/categories/${serviceCategory.id}`}>
                                                {serviceCategory.serviceCategoryName}
                                            </Link>

                                    </td>
                                )
                        }
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="col-9">
                {serviceCategories.map(serviceCategory =>
                                           <Route
                                               path={"/services-nav/categories/" + serviceCategory.id}
                                               exact
                                               render={() => <ServiceCategorySection
                                                   serviceCategory={serviceCategory}
                                               />}

                                           />
                )
                }
            </div>
            </div>
        </Router>
    </div>)
};

export default ServiceNavigator