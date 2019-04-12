import React from 'react'

import Select from "react-select";
import AsyncSelect from "react-select/lib/Async"

const userRoles = [
    {label: "Administrator", value: "admin"},
    {label: "Provider", value: "provider"},
    {label: "Client", value: "client"}];

const UserDetails = ({
                         user,
                         users,
                         services,
                         selectUser,
                         promiseOptions,
                         handleEvents,
                         saveUser,
                         goBack,
                         deleteUser,
                         enteredUsername
                     }) => {

    let role = userRoles.filter(elem => elem.value === user.role)[0];
    role = role ? role : "";

    return (<div>
            <h3>User Details</h3>
            <a role="button" className="btn btn-success" variant="outline-success"
               onClick={() => {
                   saveUser()
               }}>Save</a> &nbsp;
            <a role="button" className="btn btn-success" variant="outline-success"
               onClick={() => {
                   goBack()
               }}>Cancel</a> &nbsp;
            <a role="button" className="btn btn-danger" variant="outline-success"
               onClick={() => {
                   deleteUser()
               }}>Delete</a><br/>
            <label>Username
                <input
                    type="text"
                    placeholder={user.username}
                    onChange={(e) => {
                        handleEvents(e, "user-username");
                    }}
                    className="form-control"
                    name="user-username"/>
            </label>
            <label>First name
                <input
                    type="text"
                    placeholder={user.firstName}
                    onChange={(e) => {
                        handleEvents(e, "user-firstname");
                    }}
                    className="form-control"
                    name="user-firstname"/>
            </label>
            <label>Last name
                <input
                    type="text"
                    placeholder={user.lastName}
                    onChange={(e) => {
                        handleEvents(e, "user-lastname");
                    }}
                    className="form-control"
                    name="user-lastname"/>
            </label> <br/>
            {enteredUsername ? "" : " You must enter a username!"}
            <br/>
            <label>Description
                <input
                    type="text"
                    placeholder={user.description}
                    onChange={(e) => {
                        handleEvents(e, "user-description");
                    }}
                    className="form-control"
                    name="user-description"/>
            </label> <br/>

            <label>Role &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;
                <Select
                    isClearable={false}
                    value={role}
                    isSearchable={false}
                    options={userRoles}
                    //isLoading={false}
                    onChange={(e) => {
                        handleEvents(e, "user-role");
                    }}
                    classNamePrefix="select"
                    name="user-role"/>
            </label><br/>

            {user.role === "provider" ? (<label>Services offered by provider
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
                             onChange={(e) => handleEvents(e, "user-services")}/>
            </label>) : ""} <br/>

            {user.role === "provider" ? <label>Start date
                <input
                    type="text"
                    placeholder={user.startDate}
                    onChange={(e) => {
                        handleEvents(e, "user-startDate");
                    }}
                    className="form-control"
                    name="user-startDate"/>
            </label> : ""}<br/>

            {user.role === "provider" ? <label>Rating
                <input
                    type="text"
                    placeholder={user.rating}
                    onChange={(e) => {
                        handleEvents(e, "user-rating");
                    }}
                    className="form-control"
                    name="user-rating"/>
            </label> : ""}<br/>

            {user.role === "provider" ? <label>Background checked?
                <Select
                    isClearable={false}
                    value={{
                        label: user.backgroundChecked ? "Yes" : "No",
                        value: user.backgroundChecked
                    }}
                    isSearchable={false}
                    options={[{label: "Yes", value: true},
                        {label: "No", value: false}]}
                    //isLoading={false}
                    onChange={(e) => {
                        handleEvents(e, "user-backgroundChecked");
                    }}
                    classNamePrefix="select"
                    name="user-backgroundChecked"/>
            </label> : ""}<br/>

            {user.role === "provider" ? <label>Employees
                <input
                    type="text"
                    placeholder={user.employees}
                    onChange={(e) => {
                        handleEvents(e, "user-employees");
                    }}
                    className="form-control"
                    name="user-employees"/>
            </label> : ""}<br/>

            {user.role === "provider" ? <label>Hires
                <input
                    type="text"
                    placeholder={user.hires}
                    onChange={(e) => {
                        handleEvents(e, "user-hires");
                    }}
                    className="form-control"
                    name="user-hires"/>
            </label> : ""}<br/>

            {user.role === "provider" ? <label>Payment methods
                <input
                    type="text"
                    placeholder={user.paymentMethods}
                    onChange={(e) => {
                        handleEvents(e, "user-paymentMethods");
                    }}
                    className="form-control"
                    name="user-paymentMethods"/>
            </label> : ""}<br/>

            {user.role === "provider" ? <label> Zip code
                <input
                    type="text"
                    placeholder={user.zipcode}
                    onChange={(e) => {
                        handleEvents(e, "user-zipcode");
                    }}
                    className="form-control"
                    name="user-zipcode"/>
            </label> : ""}<br/>


            {/* TBD!!! */}

            {/*user.role === "provider" ? (<label>Service answers
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
                             onChange={(e) => handleEvents(e, "user-services")}/>
            </label>) : ""*/} <br/>

            {/*user.role === "provider" ? (<label>Reviews
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
                             onChange={(e) => handleEvents(e, "user-services")}/>
            </label>) : ""*/} <br/>

            <br/>

        </div>
    )
};

export default UserDetails