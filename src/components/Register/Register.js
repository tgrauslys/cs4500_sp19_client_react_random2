import React from 'react'

const Register = ({register, updateFirstName, updateLastName, updateUsername, updatePassword, isErrorMessageOn}) => {
    let errorMessage = <div className="row"><div className="col-12">Email already taken! Please choose another email.</div></div>
    if (!isErrorMessageOn) {
        errorMessage = ''
    }
    return (<div className="container">
            <h1>Create your account</h1>
            <br/>
            <div>
                <div className="row">
                    <div className="col-6">
                        <label for="first-name">First name</label>
                        <input id="first-name" className="form-control" onChange={e => updateFirstName(e)}/>
                    </div>
                    <div className="col-6">
                        <label for="last-name">Last name</label>
                        <input id="last-name" className="form-control" onChange={e => updateLastName(e)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <label for="email">Email</label>
                        <input id="email" className="form-control" onChange={e => updateUsername(e)}/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <label for="password">Password</label>
                        <input id="password" className="form-control" onChange={e => updatePassword(e)}/>
                    </div>
                </div>
                <br/>
                {errorMessage}
                <div className="row">
                    <div className="col-12">
                    <button onClick={register}
                            style={{margin: '2px'}}
                            type="button" className="btn btn-primary btn-block">Create Account</button>
                    </div>
                </div>
            </div>
        </div>)
}
    

export default Register