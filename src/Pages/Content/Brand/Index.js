import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../../Redux/Actions/loaderAction'
import { successNotification, errorNotification } from '../../../Components/NotificationSetting'
import { store } from 'react-notifications-component'
import Axios from 'axios'
import authHeader from '../../../Services/auth-headers'
function Index() {
    // Brand section
    const [listBrand, setListBrand] = useState([])
    
    const [loading, setLoading] = useState({
        brand: false,
        category: false
    })
    const [updateBrand, setUpdateBrand] = useState({
        name: '',
        image: null
    })
    const handleChangeFormBrand = (e) => {
        e.preventDefault()
        let value = e.target.type === 'text' ? e.target.value : e.target.files[0]
        if (value === null) {
            return;
        }
        setUpdateBrand({ ...updateBrand, [e.target.name]: value })
    }

    const createNewBrand = () => {
        if (!updateBrand.name) {
            store.addNotification({
                ...errorNotification,
                message: 'Name required'
            })
            return;
        }
        const formData = new FormData()
        formData.append('name', updateBrand.name)
        formData.append('imageFile', updateBrand.image)

        setLoading({ ...loading, brand: true })
        Axios.post('http://localhost:8080/api/product/brand/create', formData, { headers: authHeader() }).then(response => {
            setLoading({ ...loading, brand: false })
            store.addNotification({
                ...successNotification,
                message: 'Item added successfully'
            })
            setUpdateBrand({ ...updateBrand, name: '' })
            getDataBrand()
        }).catch(err => {
            setLoading({ ...loading, brand: false })
            setLoading({ ...loading, brand: false })
            
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.statusText + " " + err.response.status
                })

            } else {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.message
                })
            }
        })
    }
    const getDataBrand = useCallback(() => {
        setLoading({...loading,brand:true})
        Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/product/brand/data',
            headers: authHeader()

        }).then(response => {
            setLoading({...loading,brand:false})
            const data = response.data

            const tmp_data = data.info && data.info.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    checked: false,
                }
            })
            setListBrand(tmp_data)
        }).catch(err => {
            setLoading({...loading,brand:false})
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })
            }

            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.message
                })
            }
        })
    }, [])
    const handleCheckSingleBrand = (id) => {
        let tmpArr = Array.from(listBrand)
        let index = tmpArr.findIndex(c => c.id === id)
        tmpArr[index].checked = !tmpArr[index].checked
        setListBrand(tmpArr)
    }
    const handleCheckAllBrand = (e) => {
        let tmpArr = Array.from(listBrand)
        for (let i = 0; i < tmpArr.length; i++) {
            tmpArr[i].checked = e.target.checked
        }
        setListBrand(tmpArr)
    }

    const deleteItemBrand = (e) => {
        e.preventDefault()
        setLoading({ ...loading, brand: true })
        let currentId = []
        let tmp_arr = Array.from(listBrand)
        let filterData = tmp_arr.filter(item => item.checked === true)
        for (let i = 0; i < filterData.length; i++) {
            currentId.push(filterData[i].id)
        }
        if (filterData.length <= 0) {
            setLoading({ ...loading, brand: false })
            return;
        }

        Axios.put('http://localhost:8080/api/product/brand/delete', { id: currentId }, { headers: authHeader() }).then(response => {
            store.addNotification({
                ...successNotification,
                message: 'Item deleted successfully'
            })
            setLoading({ ...loading, brand: false })
            getDataBrand()
        }).catch(err => {
            setLoading({ ...loading, brand: false })
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })
            }

            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.message
                })
            }
        })
    }
    const deleteSingleBrand = (e, id) => {
        e.preventDefault()
        const currentId = id
        Axios.put('http://localhost:8080/api/product/brand/delete', { id: currentId }, { headers: authHeader() }).then(response => {
            store.addNotification({
                ...successNotification,
                message: 'Item deleted successfully'
            })
            setLoading({ ...loading, brand: false })
            getDataBrand()
        }).catch(err => {
            setLoading({ ...loading, brand: false })
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })
            }

            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.message
                })
            }
        })
    }
    // End brand section

    // Category section
    const [loadingCategory, setLoadingCategory] = useState(true)

    const [listCategory, setListCategory] = useState([])

    const [updateCategory, setUpdateCategory] = useState({
        name: ''
    })
    const handleChangeFormCategory = (e) => {
        let value = e.target.value
        setUpdateCategory({ ...updateCategory, [e.target.name]: value })
    }
    const createNewCategory = (e) => {

        if (!updateCategory.name) {
            store.addNotification({
                ...errorNotification,
                message: 'Name required'
            })
            return;
        }
        setLoading({...loading,category:true})

        Axios.post('http://localhost:8080/api/product/category/create', { name: updateCategory.name }, { headers: authHeader() }).then(response => {
             setLoading({...loading,category:false})
            store.addNotification({
                ...successNotification,
                message: 'Item added successfully'
            })
            setUpdateCategory({ ...updateCategory, name: '' })
            getDataCategory()
        }).catch(err => {
            setLoading({...loading,category:false})
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })

            } else {
                store.addNotification({
                    ...errorNotification,
                    message: err.message
                })
            }
        })
    }

    const getDataCategory = useCallback(() => {
        Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/product/category/data',
            headers: authHeader()
        }).then(response => {
            setLoadingCategory(false)
            const data = response.data

            const tmp_data = data.info && data.info.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    checked: false,
                }
            })

            setListCategory(tmp_data)
        }).catch(err => {
            setLoadingCategory(false)
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })
            }

            else {
               
                store.addNotification({
                    ...errorNotification,
                    message: err.message
                })
            }
        })
    }, [])

    const handleCheckSingleCategory = (id) => {
        let tmpArr = Array.from(listCategory)
        let index = tmpArr.findIndex(c => c.id === id)
        tmpArr[index].checked = !tmpArr[index].checked
        setListCategory(tmpArr)
    }
    const handleCheckAllCategory = (e) => {
        let tmpArr = Array.from(listCategory)
        for (let i = 0; i < tmpArr.length; i++) {
            tmpArr[i].checked = e.target.checked
        }
        setListCategory(tmpArr)
    }
    const deleteItemCategory = (e) => {
        e.preventDefault()
        setLoading({ ...loading, category: true })
        let currentId = []
        let tmp_arr = Array.from(listCategory)
        let filterData = tmp_arr.filter(item => item.checked === true)
        for (let i = 0; i < filterData.length; i++) {
            currentId.push(filterData[i].id)
        }
        if (filterData.length <= 0) {
            setLoading({ ...loading, category: false })
            return;
        }
        Axios.put('http://localhost:8080/api/product/category/delete', { id: currentId }, { headers: authHeader() }).then(response => {
            store.addNotification({
                ...successNotification,
                message: 'Item deleted successfully'
            })
            setLoading({ ...loading, category: false })
            getDataCategory()
        }).catch(err => {
            setLoading({ ...loading, category: false })
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })
            }

            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.message
                })
            }
        })
    }
    const deleteSingleCategory = (e, id) => {
        e.preventDefault()
        setLoading({ ...loading, category: true })
        let currentId = id

        Axios.put('http://localhost:8080/api/product/category/delete', { id: currentId }, { headers: authHeader() }).then(response => {
            store.addNotification({
                ...successNotification,
                message: 'Item deleted successfully'
            })
            setLoading({ ...loading, category: false })
            getDataCategory()
        }).catch(err => {
            setLoading({ ...loading, category: false })
            if (err.response) {
                store.addNotification({
                    ...errorNotification,
                    message: err.response.data.message
                })
            }

            else {
                store.addNotification({
                    ...errorNotification,
                    message: err.message
                })
            }
        })
    }
    // End category section
    useEffect(() => {
        getDataBrand()
        getDataCategory()// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
                                    <label class="form-control-label mb-2">
                                        Name<span class="text-danger"> *</span>
                                    </label>{" "}
                                
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter your brand name"
                                        onblur="validate(1)"
                                        value={updateBrand.name}
                                        onChange={(e) => handleChangeFormBrand(e)}
                                    />{" "}
                                </div>
                            </div>

                            <div class="row justify-content-between text-left my-2">
                                <div class="form-group col-12 flex-column d-flex">
                                    {" "}
                                    <label class="form-control-label my-2">
                                        Image
                                    </label>{" "}
                                    <input
                                        type="file"
                                        id="image"
                                        className="form-control"
                                        name="image"
                                        placeholder="Upload your brand logo"
                                        onblur="validate(6)"

                                        onChange={(e) => handleChangeFormBrand(e)}
                                    />{" "}
                                </div>
                            </div>
                            <div className=" d-flex ">
                                <button className="button3" style={{ marginLeft: 'auto' }} onClick={(e) => createNewBrand(e)}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 my-2 brand-list">

                    <div className="card">
                        <div className="card-header">
                            <h3>List of brand</h3>
                        </div>

                        <div className="card-body">

                            <div className="brand_list_wrapper">
                                <div className="tb_list is-seperate">
                                    <div className="tb_row tb_row_head">
                                        <div className="tb_col_item" style={{ width: '80px' }}>
                                            <span> <input type="checkbox" onChange={(e) => handleCheckAllBrand(e)} value="" /></span>
                                        </div>
                                        <div className="tb_col_item " >
                                            <span className="ml-auto">Name</span>
                                        </div>

                                        <div className="tb_col_item d-flex">
                                            <span style={{ marginLeft: 'auto' }}>
                                                <div className="dropdown custom-dropdown">
                                                    <i class="fas fa-ellipsis-h" data-toggle="dropdown"></i>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <span class="dropdown-item" onClick={(e) => deleteItemBrand(e)}> <span class="icon icon-dashboard"></span> Delete</span>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    {!loading.brand && listBrand &&
                                        listBrand.map(item => (
                                            <div className="tb_row tb_row_body">
                                                <div className="tb_col_item" style={{ width: '80px' }}>
                                                    <span> <input type="checkbox" checked={item.checked} onChange={() => handleCheckSingleBrand(item.id)} value="" /></span>
                                                </div>
                                                <div className="tb_col_item">
                                                    <span>{item.name}</span>
                                                </div>
                                                <div className="tb_col_item d-flex " style={{ cursor: 'pointer' }}>
                                                    <span style={{ marginLeft: 'auto' }} onClick={(e) => deleteSingleBrand(e, item.id)}><i className="far fa-trash-alt fa-lg"></i></span>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                                {loading.brand && <p className="text-center"   > <div class="lds-default" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></p>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-lg-3">
                    <div className="card brand-page">
                        <div className="card-header">
                            <h3>Create new category</h3>
                        </div>
                        <div className="card-body">
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-12 flex-column d-flex">
                                    {" "}
                                    <label class="form-control-label mb-2">
                                        Name<span class="text-danger"> *</span>
                                    </label>{" "}
                                    <input
                                        type="text"
                                        id="fname"
                                        name="name"
                                        className="form-control"
                                        placeholder="name"
                                        value={updateCategory.name}
                                        onChange={(e) => handleChangeFormCategory(e)}
                                        onblur="validate(1)"
                                    />{" "}
                                </div>
                            </div>


                            <div className=" d-flex my-2">
                                <button className="button3" style={{ marginLeft: 'auto' }} onClick={(e) => createNewCategory(e)}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 my-2 ">
                    <div className="card brand-list">
                        <div className="card-header">
                            <h3>List of category</h3>
                        </div>
                        <div className="card-body">
                            <div className="brand_list_wrapper">
                                <div className="tb_list is-seperate">
                                    <div className="tb_row tb_row_head">
                                        <div className="tb_col_item" style={{ width: '80px' }}>
                                            <span> <input type="checkbox" onChange={(e) => handleCheckAllCategory(e)} /></span>
                                        </div>
                                        <div className="tb_col_item " >
                                            <span className="ml-auto">Name</span>
                                        </div>

                                        <div className="tb_col_item d-flex">
                                            <span style={{ marginLeft: 'auto' }}>
                                                <div className="dropdown custom-dropdown">
                                                    <i class="fas fa-ellipsis-h" data-toggle="dropdown"></i>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <span class="dropdown-item" onClick={(e) => deleteItemCategory(e)}> <span class="icon icon-dashboard"></span> Delete</span>

                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    {!loading.category&& listCategory &&
                                        listCategory.map(item => (
                                            <div className="tb_row tb_row_body">
                                                <div className="tb_col_item" style={{ width: '80px' }}>
                                                    <span> <input type="checkbox" checked={item.checked} onChange={() => handleCheckSingleCategory(item.id)} /></span>
                                                </div>
                                                <div className="tb_col_item">
                                                    <span>{item.name}</span>
                                                </div>
                                                <div className="tb_col_item d-flex " style={{ cursor: 'pointer' }}>
                                                    <span style={{ marginLeft: 'auto', marginRight: '10px' }} onClick={(e) => deleteSingleCategory(e, item.id)}><i class="far fa-trash-alt fa-lg"></i></span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {loading.category && <p className="text-center"> <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></p>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index
