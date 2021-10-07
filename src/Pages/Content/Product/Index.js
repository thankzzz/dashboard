import React from 'react'
import Pagination from '../../../Components/Pagination'
import '../../../Styles/css/main.css'
import CreateModal from './CreateModal'
function Index() {
    return (
        <div >
            <div className="row" style={{ backgroundColor: '#2a3155' }}>
                <div className="subhead_product">
                    <h3> Product</h3>
                    <div className="d-none d-sm-block d-md-none d-lg-block">
                        <a href="!#" className="button1" style={{ marginRight: '10px' }} data-toggle="modal" data-target="#createProduct">Create</a>
                        <a href="!#" className="button2">Export to CSV</a>
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
                    <div className="d-flex">
                        <span className="mx-4">
                            <input name="username" id="username" type="text" placeholder="Search by name" required="" autofocus="" className="form-control   shadow-sm px-4" />
                        </span>

                        <span><a href="!#" className="button2">Search</a></span>
                    </div>
                </div>
            </div>

            {/* <div className="row" style={{ marginTop: '15px' }}>
                <div className="tb_list is-seperate">
                    <div className="tb_row tb_row_head">
                        <div className="tb_col_item">
                            <span>Name</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Brand</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Type</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Visibility</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Catalog</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Detail</span>
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
                            <span>KEWPUMP</span>
                        </div>
                        <div className="tb_col_item">
                            <span>CONVEYOUR CHAIN</span>
                        </div>
                        <div className="tb_col_item">
                            <span>[]</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Check</span>
                        </div>
                        <div className="tb_col_item">
                            <span>Link</span>
                        </div>
                        <div className="tb_col_item">
                            <span><i class="fas fa-ellipsis-h"></i></span>
                        </div>
                    </div>
                </div>
            </div> */}
            <CreateModal/>
            <Pagination/>
        </div>



    )
}

export default Index
