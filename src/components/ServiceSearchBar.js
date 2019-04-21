import React from 'react'


const ServiceSearchBar = ({handleSubmit, updateUsername, updateZipcode}) => {
    return(
        <div>
            <form className="form">
                <div className="input-group mb-3">
                    <input 
                        type="text"
                        name="username" 
                        className="input username" 
                        onChange={e => updateUsername(e)} 
                        placeholder="Search for providers..."/>
                    <input 
                        type="text"
                        name="username" 
                        className="input zipcode" 
                        onChange={e => updateZipcode(e)} 
                        placeholder="Zipcode"/>
                    <div className="input-group-append">
                        <button onClick={handleSubmit}
                            style={{margin: '2px'}}
                            type="button" className="search-button btn btn-success">Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ServiceSearchBar