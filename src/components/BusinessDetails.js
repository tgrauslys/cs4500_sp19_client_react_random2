const BussinessDetails = ({
                              updateForm,
                              business,

                          }) =>
    <div>
        <h2>Buisness</h2>
        Business Name
        <input onChange={e => updateForm(e)}
               value={business.name}></input>
        Year Founded
        <input onChange={e => updateForm(e)}
               value={business.yearFounded}></input>
        Number of Employees
        <input onChange={e => updateForm(e)}
               value={business.name}></input>
        Email
        <input onChange={e => updateForm(e)}
               value={business.name}></input>
        <h3>Business Address (optional)</h3>
        Street
        <input onChange={e => updateForm(e)}
               value={business.name}></input>
        City
        <input onChange={e => updateForm(e)}
               value={business.name}></input>
        State
        <input onChange={e => updateForm(e)}
               value={business.state}></input>
        Zip
        <input onChange={e => updateForm(e)}
               value={business.zip}></input>
        <h2>Payment Methods</h2>
        Zip
        <input onChange={e => updateForm(e)}
               value={business.paymentMethods}></input>
        <h2>Social Media</h2>
        Facebook
        <input onChange={e => updateForm(e)}
               value={business.facebook}></input>
        Instagram
        <input onChange={e => updateForm(e)}
               value={business.instragram}></input>
        Twitter
        <input onChange={e => updateForm(e)}
               value={business.twitter}></input>
        <button>SAVE</button>
    </div>