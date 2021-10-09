import React from 'react'

function Index() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-3">
                   <div className="card brand-page">
                       <div className="card-header">
                           <h3>Create new brand</h3>
                       </div>
                       <div className="card-body">
                       <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-12 flex-column d-flex">
                                {" "}
                                <label class="form-control-label ">
                                    Name<span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    className="form-control"
                                    placeholder="Enter your first name"
                                    onblur="validate(1)"
                                />{" "}
                            </div>
                        </div>
                       </div>
                   </div>
                </div>
                <div className="col-lg-6">
                    dasdas
                </div>
            </div>
        </div>
    )
}

export default Index
