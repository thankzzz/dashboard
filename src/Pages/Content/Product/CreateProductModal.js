import React,{useState} from "react";
import authHeader from "../../../Services/auth-headers";
import Axios from 'axios'
import { successNotification,errorNotification } from '../../../Components/NotificationSetting'
import { store } from 'react-notifications-component'

function CreateProductModal({listBrand,listCategory,getDataProduct}) {

    const [dataNewProduct,setDataNewProduct] = useState({
        name:'',
        brand:'',
        category:'',
        image:null,
        catalog:null,
        visibility:false,
    })
    const handleChangeProduct = (e) =>{
       let type = e.target.type
       if(type === "file"){
           if(!e.target.value){
               return;
           }
           setDataNewProduct({...dataNewProduct,[e.target.name]:e.target.files[0]})
       }else if(type === "checkbox"){
        setDataNewProduct({...dataNewProduct,[e.target.name]:e.target.checked})
       }else{
        setDataNewProduct({...dataNewProduct,[e.target.name]:e.target.value})
       }
    }
    const handleCreateNewProduct = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('name',dataNewProduct.name)
        formData.append('category',dataNewProduct.category)
        formData.append('brand',dataNewProduct.brand)
        formData.append('image',dataNewProduct.image)
        formData.append('catalog',dataNewProduct.catalog)
        formData.append('visibility',dataNewProduct.visibility)
        Axios.post('http://localhost:8080/api/product/create',formData,{headers:authHeader(), 'Content-Type': 'multipart/form-data'}).then(()=>{
            store.addNotification({
                ...successNotification,
                message:'Item has been added successfully'
            })
            getDataProduct()
            setDataNewProduct({...dataNewProduct,name:'',category:'',brand:'',visibility:'false',image:null,catalog:null})
        }).catch(err=>{
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })
            }   
            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.message
                })
            }
        })
        console.log(dataNewProduct)
    }
    return (
        <div
            class="modal fade modal_create_product"
            id="createProduct"
            tabindex="-1"
            role="dialog"
            aria-labelledby="createProduct"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                            Create New
                        </h5>
                    </div>
                    <div class="modal-body">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label class="form-control-label ">
                                    Name<span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter your first name"
                                    onblur="validate(1)"
                                    value={dataNewProduct.name}
                                    onChange={(e)=>handleChangeProduct(e)}
                                />{" "}
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex">
                                    {" "}
                                    <label class="form-control-label ">
                                        visibility<span class="text-danger"> *</span>
                                    </label>{" "}
                                    <input type="checkbox"  onChange={(e)=>handleChangeProduct(e)} name="visibility"/>
                                </div>
                            </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label class="form-control-label">
                                    Brand<span class="text-danger"> *</span>
                                </label>
                                <select
                                    class="form-select"
                                    name="brand"
                                    onChange={(e)=>handleChangeProduct(e)}
                                >
                                    <option selected value="">Select Brand</option>
                                    {listBrand && listBrand.map(item=>(
                                        <option selected={item.id === dataNewProduct.brand?true:false} value={item.id}>{item.name}</option>
                                    ))}
                                </select>{" "}
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label class="form-control-label">
                                    Category<span class="text-danger"> *</span>
                                </label>{" "}
                                <select
                                    class="form-select"
                                    name="category"
                                    onChange={(e)=>handleChangeProduct(e)}
                                >
                                    <option selected value="">Select Category</option>
                                    {listCategory && listCategory.map(item=>(
                                        <option selected={item.id === dataNewProduct.category?true:false} value={item.id}>{item.name}</option>
                                    ))}
                                </select>{" "}
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-12 flex-column d-flex">
                                {" "}
                                <label class="form-control-label">
                                    Catalog<span class="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="file"
                                    className="form-control"
                                    id="catalog"
                                    name="catalog"
                                    placeholder=""
                                    onblur="validate(5)"
                                    onChange={(e)=>handleChangeProduct(e)}
                                    accept="application/pdf"
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
                                    id="image"
                                    className="form-control"
                                    name="image"
                              
                                    onblur="validate(6)"
                                  
                                    accept="image/png, image/gif, image/jpeg"
                                       
                                    onChange={(e)=>handleChangeProduct(e)}
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
                        <button type="button" class="btn btn-primary" onClick={(e)=>handleCreateNewProduct(e)}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProductModal;
