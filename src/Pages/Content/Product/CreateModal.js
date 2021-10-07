import React from 'react'

function CreateModal() {
    return (
        <div class="modal fade modal_create_product" id="createProduct" tabindex="-1" role="dialog" aria-labelledby="createProduct" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" >
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Create New</h5>

                    </div>
                    <div class="modal-body">
                        <form class="form-card" onsubmit="event.preventDefault()">
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label ">Name<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" className="form-control" placeholder="Enter your first name" onblur="validate(1)" /> </div>

                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Brand<span class="text-danger"> *</span></label><select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select> </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Type<span class="text-danger"> *</span></label> <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select> </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label">Catalog<span class="text-danger"> *</span></label> <input type="file" className="form-control" id="job" name="job" placeholder="" onblur="validate(5)" /> </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label">Image<span class="text-danger"> *</span></label> <input type="file" id="ans" className="form-control" name="ans" placeholder="" onblur="validate(6)" /> </div>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateModal
