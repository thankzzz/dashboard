import React from 'react'
import Pagination from '../../../Components/Pagination'
import '../../../Styles/css/main.css'
import CreateBrandModal from './createBrandModal'
import CreateModal from './CreateProductModal'
function Index() {
    return (
        <div >
            <div className="row" style={{ backgroundColor: '#2a3155' }}>
                <div className="subhead_product">
                    <h3> Product</h3>
                    <div className="d-flex dropdown custom-dropdown" >
                        <div className="d-none d-sm-block d-md-none d-lg-block" data-toggle="dropdown"><a href="!#"  className="button1" style={{ marginRight: '10px' }} >Create</a></div>
                        <div className="d-none d-sm-block d-md-none d-lg-block"><a  href="!#" className="button2">Export to CSV</a></div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="!#" data-toggle="modal" data-target="#createProduct"> <span class="icon icon-dashboard"></span> Product</a>
                                <a class="dropdown-item" href="!#" data-toggle="modal" data-target="#createBrand"><span class="icon icon-mail_outline"></span>Brand</a>
                                <a class="dropdown-item" href="!#"><span class="icon icon-mail_outline"></span>Type </a>
                            </div>
                    </div>
                    <div className=" d-md-block d-lg-none">
                        <div className="dropdown custom-dropdown">
                            <i class="fas fa-ellipsis-h" data-toggle="dropdown"></i>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="!#"> <span class="icon icon-dashboard"></span> User Dashboard</a>
                                <a class="dropdown-item" href="!#"><span class="icon icon-mail_outline"></span>Inbox <span class="number">3</span></a>
                                <a class="dropdown-item" href="!#"><span class="icon icon-people"></span>Following</a>
                                <a class="dropdown-item" href="!#"><span class="icon icon-cog"></span>Setting<span>New</span></a>
                                <a class="dropdown-item" href="!#"><span class="icon icon-sign-out"></span>Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="subhead_product">
                    <div className="d-flex-column">
                        <h3>Product Lists</h3>
                        <span className="text-soft">You have total 1500 products</span>
                    </div>
                    <div className="d-flex ">
                        <span className="mx-4 d-none d-sm-block d-md-none d-lg-block">
                            <input name="username" id="username" type="text" placeholder="Search by name" required="" autofocus="" className="form-control   shadow-sm px-4" />
                        </span>

                        <span><a href="!#" className="button2 d-none d-sm-block d-md-none d-lg-block">Search</a></span>
                    </div>
                </div>
            </div>

            <div className="row" style={{ marginTop: '15px' }}>
                <div className="tb_list is-seperate">
                    <div className="tb_row tb_row_head">
                        <div className="tb_col_item">
                            <span>Name</span>
                        </div>
                        <div className="tb_col_item ">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">Brand</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">Type</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Visibility</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">Catalog</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">Detail</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Action</span>
                        </div>
                    </div>
                    <div className="tb_row tb_row_body">
                        <div className="tb_col_item">
                            <span>KS-03</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">KEWPUMP</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">CONVEYOUR CHAIN</span>
                        </div>
                        <div className="tb_col_item ">
                            <span >[]</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">Check</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">Link</span>
                        </div>
                        <div className="tb_col_item">
                            <span ><i class="fas fa-ellipsis-h"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <CreateModal/>
            <CreateBrandModal/>
            <Pagination/>
        </div>



    )
}

export default Index
