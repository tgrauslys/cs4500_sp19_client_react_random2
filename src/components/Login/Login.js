import React from 'react'

const Login = ({login, updateUsername, updatePassword, isErrorMessageOn}) => {
    let errorMessage = <div className="row"><div className="col-12">Invalid login information</div></div>
    if (!isErrorMessageOn) {
        errorMessage = ''
    }

    return (<div className="container">
        <h1>Welcome back</h1>
        <br/>
        <div>
            <div className="row">
                <div className="col-12">
                    <label for="username">Username</label>
                    <input id="username" className="form-control" onChange={e => updateUsername(e)} />
                </div>
                <div className="col-12">
                    <br/>
                    <label for="password">Password</label>
                    <input id="password" className="form-control" type="password" onChange={e => updatePassword(e)}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-6">
                    <label for="password">
                        <input type="checkbox"/>
                        &nbsp; Remember me
                    </label>
                </div>
                <div className="col-6">
                    <a className="float-right" href="#">Forgot password?</a>
                </div>
            </div>
            <br/>
            {errorMessage}
            <div className="row">
                <div className="col-12">
                    <button onClick={login}
                        style={{margin: '2px'}}
                        type="button" className="btn btn-primary btn-block">Log in</button>
                </div>
            </div>
        </div>
    </div>)
}
    

export default Login