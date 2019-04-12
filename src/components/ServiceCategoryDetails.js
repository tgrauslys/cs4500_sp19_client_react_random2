import React from 'react'
import AsyncSelect from 'react-select/lib/Async';

const ServiceCategoryDetails = ({
                                    props,
                                    category,
                                    services,
                                    promiseOptions,
                                    handleEvents,
                                    saveCategory
                                }) => {

    return (<div>
        <h3>Service Category Details</h3>
        <a role="button" className="btn btn-success" variant="outline-success"
           onClick={() => {
               saveCategory()
           }}>Save</a>
        <label>Service Category Name</label>
        <input
            type="text"
            placeholder={category.serviceCategoryName}
            onChange={(e) => {
                handleEvents(e, "category-name");
            }}
            className="form-control"
            name="category-name"/>
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