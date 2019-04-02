import React from 'react'


const ServiceSearchBar = ({handleSubmit, updateUsername}) => {
    let searchButton = <button onClick={handleSubmit}
                                style={{margin: '2px'}}
                                type="button" className="btn btn-success">Search</button>

    return(
        <div>
            <form className="form">
                <div className="input-group mb-3">
                    <input type="text" name="username" className="input" onChange={e => updateUsername(e)} placeholder="Search for providers..."/>
                    <div className="input-group-append">{searchButton}</div>
                </div>
            </form>
        </div>
    )
}

export default ServiceSearchBar