import React from 'react'

const BusinessDetails = ({
                             business,
                                handleChange
                             // updateName,
                             // updateYear,
                             // updateEmployees,
                             // updateEmail,
                             // updateStreet,
                             // updateCity,
                             // updateState,
                             // updateZip,
                             // updatePayment,
                             // updateFacebook,
                             // updateInstagram,
                             // updateTwitter
                         }) =>

    <div>
        <h2>Business</h2>
        Business Name
        <input id='name' onChange={e => handleChange(e)}
               value={business.name}></input>
        <br/>
        Year Founded
        <input id='yearFounded' onChange={e => handleChange(e)}
               value={business.yearFounded}></input>
        <br/>
        Number of Employees
        <input id='employees' onChange={e => handleChange(e)}
               value={business.employees}></input>
        <br/>
        Email
        <input id='email' onChange={e => handleChange(e)}
               value={business.email}></input>
        <br/>
        <h3>Business Address (optional)</h3>
        <br/>
        Street
        <input id='street' onChange={e => handleChange(e)}
               value={business.street}></input>
        <br/>
        City
        <input id='city' onChange={e => handleChange(e)}
               value={business.city}></input>
        <br/>
        State
        <input id='state' onChange={e => handleChange(e)}
               value={business.state}></input>
        <br/>
        Zip
        <input id='zip' onChange={e => handleChange(e)}
               value={business.zip}></input>
        <br/>
        <h2>Payment Methods</h2>
        <input id='paymentMethods' onChange={e => handleChange(e)}
               value={business.paymentMethods}></input>
        <br/>
        <h2>Social Media</h2>
        Facebook
        <input id='facebook' onChange={e => handleChange(e)}
               value={business.facebook}></input>
        <br/>
        Instagram
        <input id='instagram' onChange={e => handleChange(e)}
               value={business.instagram}></input>
        <br/>
        Twitter
        <input id='twitter' onChange={e => handleChange(e)}
               value={business.twitter}></input>
        <br/>
        <button>SAVE</button>
    </div>

export default BusinessDetails