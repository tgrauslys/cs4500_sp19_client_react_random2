import React from 'react'

const Profile = () =>
    <div className="container">
        <h1>Profile</h1>
        <br/>
        <div>
            <h4>Legal name</h4>
            <div className="row">
                <div className="col-6">
                    <label for="first-name">First name</label>
                    <input id="first-name" className="form-control"/>
                </div>
                <div className="col-6">
                    <label for="last-name">Last name</label>
                    <input id="last-name" className="form-control"/>
                </div>
            </div>
            <br/>
            <h4>Date of birth</h4>
            <div className="row">
                <div className="col-4">
                    <label for="first-name">Month</label>
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="col-4">
                    <label for="last-name">Day</label>
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="col-4">
                    <label for="last-name">Year</label>
                    <select className="form-control">
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
                    <label for="first-name">Street</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <label for="first-name">City</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label for="first-name">State</label>
                    <select className="form-control">
                        <option>MA</option>
                        <option>NH</option>
                        <option>NY</option>
                        <option>CA</option>
                    </select>
                </div>
                <div className="col-6">
                    <label for="first-name">Zip</label>
                    <input id="first-name" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <label for="email">Email</label>
                    <input id="email" className="form-control"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <a className="btn btn-success btn-block">
                        Update Account
                    </a>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>

export default Profile