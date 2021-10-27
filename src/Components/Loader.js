import React from 'react'
import {useSelector} from 'react-redux'
function Loader() {
    const loaderState = useSelector(state=>state.loading)
    const {loading} = loaderState

    if(!loading) return null
    return (
        <div className="loader-container">
            <div className="loader">
                <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <div className="block">LOADING...</div>
            </div>
        </div>
    )
}

export default Loader
