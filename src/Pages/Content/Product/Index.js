import React,{useState,useEffect,useCallback} from 'react'
import Pagination from '../../../Components/Pagination'
import '../../../Styles/css/main.css'
import CreateModal from './CreateProductModal'
import Axios from 'axios'
import { successNotification, errorNotification } from '../../../Components/NotificationSetting'
import { store } from 'react-notifications-component'
import authHeader from '../../../Services/auth-headers'

function Index() {
    const [listProduct,setListProduct] = useState([])
    const [listBrand,setListBrand] = useState([])
    const [listCategory,setListCategory] = useState([])
    const getDataBrand = () =>{
        Axios.get('http://localhost:8080/api/product/brand/data',{headers:authHeader()}).then(response=>{
            let data = response.data
 
            setListBrand(data.info)
        }).catch(err=>{
            if (err.response) {
                console.log(err.response)
                store.addNotification({
                    ...errorNotification,
                    message: err.response.statusText + " " + err.response.status
                })
            }   
            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.message
                })
            }
        })
    } 
    const getDataCategory = () =>{
        Axios.get('http://localhost:8080/api/product/category/data',{headers:authHeader()}).then(response=>{
            let data = response.data
            setListCategory(data.info)
        }).catch(err=>{
            if (err.response) {
               
                store.addNotification({
                    ...errorNotification,
                    message: err.response.statusText + " " + err.response.status
                })
            }
            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.message
                })
            }
        })
    }

    const getDataProduct = () =>{
        
        Axios.get('http://localhost:8080/api/product/data',{headers:authHeader()}).then(response=>{
            let data = response.data
            let currentData = data.info && data.info.map(item=>{
                return{
                    id:item.id,
                    name:item.name,
                    category:item.fk_category_id,
                    brand:item.fk_category_brand,
                    image:item.image,
                    catalog:item.catalog,
                    checked:false,
                    visibility:item.visibility
                }
            })
            setListProduct(currentData)
        }).catch(err=>{
            if (err.response) {             
                store.addNotification({
                    ...errorNotification,
                    message: err.response.statusText + " " + err.response.status
                })
            }
    
            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.message
                })
            }
        })
    }
    const handleChangeVisibility = (id) => {
          let tmpArr = Array.from(listProduct)
          let index = tmpArr.findIndex(c=>c.id === id)
          
          const currentVisibility = !tmpArr[index].visibility
          tmpArr[index].visibility = currentVisibility
          setListProduct(tmpArr)
          let editData = {
              id:id,
              visibility:currentVisibility
          }
          Axios.post('http://localhost:8080/api/product/visibility',editData,{headers:authHeader()}).then(response=>{
            store.addNotification({
                ...successNotification,
                message: "Success"
            })
          }).catch(err=>{
            if (err.response) {             
                store.addNotification({
                    ...errorNotification,
                    message: err.response.statusText + " " + err.response.status
                })
            }
    
            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.message
                })
            }
          })
    }

    const handleCheckSingle = useCallback((id) => {
        let tmp_arr = Array.from(listProduct)
        let index = tmp_arr.findIndex(item => item.id === id)
        tmp_arr[index].checked = !tmp_arr[index].checked
        setListProduct(tmp_arr)
    },[listProduct])

    const handleCheckAll = (e) => {
        
        let tmp_arr = Array.from(listProduct)
        for (let i = 0; i < tmp_arr.length; i++) {
            tmp_arr[i].checked = e.target.checked
        }
        setListProduct(tmp_arr)
    }
    useEffect(()=>{
        getDataBrand()
        getDataCategory()
        getDataProduct()
    },[])
    return (
        <div >
            <div className="row" style={{ backgroundColor: '#2a3155' }}>
                <div className="subhead_product">
                    <h3> Product</h3>
                    <div className="d-flex" >
                        <div className="d-none d-sm-block d-md-none d-lg-block" data-toggle="modal" data-target="#createProduct"><div className="button1" style={{ marginRight: '10px' }} >Create</div></div>
                        <div className="d-none d-sm-block d-md-none d-lg-block" data-toggle="modal" data-target="#createProduct"><div className="button1" style={{ marginRight: '10px' }} >Delete</div></div>
                        <div className="d-none d-sm-block d-md-none d-lg-block"><a  href="!#" className="button2">Export to CSV</a></div>                       
                    </div>
                    <div className=" d-md-block d-lg-none">
                        <div className="dropdown custom-dropdown">
                            <i class="fas fa-ellipsis-h" data-toggle="dropdown"></i>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="!#"  data-toggle="modal" data-target="#createProduct"> <span></span>Create</a>                                
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
                        <div className="tb_col_item" style={{ width: '80px' }}>
                             <span> <input type="checkbox"  value="" onChange={(e)=>handleCheckAll(e)}/></span>
                        </div>
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
                            <span>Action</span>
                        </div>
                    </div>
                    {listProduct && listProduct.map(item=>(
                        <div className="tb_row tb_row_body">
                        <div className="tb_col_item" style={{ width: '80px' }}>
                             <span> <input type="checkbox"  checked={item.checked}   onChange={()=>handleCheckSingle(item.id)}/></span>
                        </div>
                        <div className="tb_col_item">
                            <span>{item.name}</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">{item.brand   }</span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">{item.category}</span>
                        </div>
                        <div className="tb_col_item ">
                            <span >   <span> <input type="checkbox" checked={item.visibility} onChange={()=>handleChangeVisibility(item.id)}value="" /></span></span>
                        </div>
                        <div className="tb_col_item">
                            <span className=" d-none d-sm-block d-md-none d-lg-block">View</span>
                        </div>
                      
                        <div className="tb_col_item">
                            <span ><i class="fas fa-ellipsis-h"></i></span>
                        </div>
                    </div>
                    ))}                 
                </div>
            </div>
            <CreateModal 
                listBrand = {listBrand}
                listCategory = {listCategory}
                getDataProduct = {getDataProduct}
            />
         
            <Pagination/>
        </div>



    )
}

export default Index
