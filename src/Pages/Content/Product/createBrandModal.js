import React from "react";

function CreateBrandModal() {
    return (
        <div
            class="modal fade modal_create_product"
            id="createBrand"
            tabindex="-1"
            role="dialog"
            aria-labelledby="createBrand"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                            Create Brand
                        </h5>
                    </div>
                    <div class="modal-body">

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
                        
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-12 flex-column d-flex">
                                {" "}
                                <label class="form-control-label">
                                    Image<span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="file"
                                    id="ans"
                                    className="form-control"
                                    name="ans"
                                    placeholder=""
                                    onblur="validate(6)"
                                />{" "}
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBrandModal;
