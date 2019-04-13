import React from 'react'
import AsyncSelect from 'react-select/lib/Async';

const ServiceCategoryDetails = ({
                                    props,
                                    category,
                                    services,
                                    promiseOptions,
                                    handleEvents,
                                    saveCategory,
                                    goBack,
                                    deleteCategory,
                                    enteredCatName
                                }) => {

    return (<div>
            <h3>Service Category Details</h3>
            <a role="button" className="btn btn-success" variant="outline-success"
               onClick={() => {
                   saveCategory()
               }}>Save</a> &nbsp;
            <a role="button" className="btn btn-success" variant="outline-success"
               onClick={() => {
                   goBack()
               }}>Cancel</a> &nbsp;
            <a role="button" className="btn btn-danger" variant="outline-success"
               onClick={() => {
                   deleteCategory()
               }}>Delete</a><br/>
            <label>Service Category Name</label>
            <input
                type="text"
                placeholder={category.serviceCategoryName}
                onChange={(e) => {
                    handleEvents(e, "category-name");
                }}
                className="form-control"
                name="category-name"/>
            {enteredCatName ? "" : " You must enter a category name!"}
            <br/>
            <AsyncSelect cacheOptions
                         defaultOptions
                         value={services ? services.map(service => {
                             let opt = {};
                             opt.label = service.serviceName;
                             opt.value = service.id;
                             opt.serv = service;
                             return opt;
                         }) : []}
                         isMulti={true}
                         loadOptions={promiseOptions}
                         onChange={(e) => handleEvents(e, "category-services")}/>
            <label>Services in Category</label>


        </div>
    )
};

export default ServiceCategoryDetails