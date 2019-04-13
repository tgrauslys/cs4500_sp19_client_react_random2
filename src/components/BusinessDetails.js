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
        <input onChange={e => handleChange(e)}
               value={business.name}></input>
        <br/>
        Year Founded
        <input onChange={e => handleChange(e)}
               value={business.yearFounded}></input>
        <br/>
        Number of Employees
        <input onChange={e => handleChange(e)}
               value={business.numEmployees}></input>
        <br/>
        Email
        <input onChange={e => handleChange(e)}
               value={business.email}></input>
        <br/>
        <h3>Business Address (optional)</h3>
        <br/>
        Street
        <input onChange={e => handleChange(e)}
               value={business.street}></input>
        <br/>
        City
        <input onChange={e => handleChange(e)}
               value={business.city}></input>
        <br/>
        State
        <input onChange={e => handleChange(e)}
               value={business.state}></input>
        <br/>
        Zip
        <input onChange={e => handleChange(e)}
               value={business.zip}></input>
        <br/>
        <h2>Payment Methods</h2>
        <input onChange={e => handleChange(e)}
               value={business.paymentMethods}></input>
        <br/>
        <h2>Social Media</h2>
        Facebook
        <input onChange={e => handleChange(e)}
               value={business.facebook}></input>
        <br/>
        Instagram
        <input onChange={e => handleChange(e)}
               value={business.instragram}></input>
        <br/>
        Twitter
        <input onChange={e => handleChange(e)}
               value={business.twitter}></input>
        <br/>
        <button>SAVE</button>
    </div>

export default BusinessDetails