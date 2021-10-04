import React, { useState } from 'react'

function Index() {
    const [userLogin,setUserLogin] = useState( {
        username:'',
        password:''
    })
    const handleChangeForm = (e) =>{
        let name = e.target.name
        let value = e.target.value
        setUserLogin({...userLogin,[name]:value})
    }
    return (
        <div className="container-fluid">
        <div className="row" >
            <div className="col-lg-6 col-md-6  d-none d-md-flex bg-login-image bg-login"></div>
            <div className="col-lg-6 col-md-6">
                <div className="login d-flex align-items-center py-5 justify-content-center">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 mx-auto">
                            <h3 className="display-4">Welcome Back</h3>
                            <p className="text-muted mb-4">Login to admin dashboard.</p>
                            <form>
                                <div className="form-group mb-3">
                                    <input name="username" id="username" type="text" value={userLogin.username} onChange={(e)=>handleChangeForm(e)} placeholder="Username" required="" autofocus="" className="form-control  shadow-sm px-4" />
                                </div>
                                <div className="form-group mb-3">
                                    <input name="password" id="password" type="password" value={userLogin.password} onChange={(e)=>handleChangeForm(e)} placeholder="Password" required="" className="form-control  shadow-sm px-4 text-primary" />
                                </div>
                                {/* <div className="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked className="custom-control-input" />
                                    <label for="customCheck1" className="custom-control-label">Remember password</label>
                                </div> */}
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                {/* <div className="text-center d-flex justify-content-between mt-4"><p>Snippet by <a href="https://bootstrapious.com/snippets" className="font-italic text-muted">
                                    <u>Boostrapious</u></a></p></div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Index
