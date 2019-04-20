import React from 'react';

const Profile =
    ({
        user, updateUserProfile, handleChange,deleteUserProfile
     }) =>

    {
        return(
            <div className="container">
                <h1>Profile</h1>
                <br/>
                <div>
                    <h4>Legal name</h4>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="firstName">First name</label>
                            <input id="firstName"
                                   placeholder={user.firstName}
                                   type="text"
                                   name="firstName"
                                   onChange={(e) => {
                                       handleChange(e);
                                   }}
                                   className="form-control"/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="lastName">Last name</label>
                            <input id="lastName"
                                   placeholder={user.lastName}
                                   name="lastName"
                                   onChange={e=> handleChange(e)}
                                   className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <h4>Date of birth</h4>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="month">Month</label>
                            <select className="form-control" placeholder={user.month}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="day">Day</label>
                            <select className="form-control" placeholder={user.day}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="year">Year</label>
                            <select className="form-control" placeholder={user.year}>
                                <option>2000</option>
                                <option>2001</option>
                                <option>2002</option>
                                <option>2004</option>
                                <option>2005</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <h4>Home address</h4>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="street">Street</label>
                            <input id="street" placeholder={user.street} className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="city">City</label>
                            <input id="city" placeholder={user.city} className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="state">State</label>
                            <select className="form-control" placeholder={user.state}>
                                <option>MA</option>
                                <option>NH</option>
                                <option>NY</option>
                                <option>CA</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="zipcode">Zip</label>
                            <input id="zipcode"
                                   name="zipcode"
                                   placeholder={user.zipcode}
                                   onChange={(e) => {
                                       handleChange(e);
                                   }}
                                   className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="email">Email</label>
                            <input id="email" placeholder={user.email} className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <a className="btn btn-success btn-block"
                                onClick={() => updateUserProfile()}>
                                Update Account
                            </a>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <a className="btn btn-danger btn-block"
                                onClick={() => deleteUserProfile()}>
                                Delete Account
                            </a>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    };



export default Profile