import React from 'react'

function Header({ToggleSidebar}) {
    return (
        <div className="header_wrap">
            <div className="head_title">
                <h3>Dashboard</h3>
            </div>
            <div className="head_content">
                <span><i class="far fa-envelope"></i></span>
                <span><i class="far fa-bell"></i></span>
                <span className="bar_icon" onClick={(e)=>ToggleSidebar(e)}><i class="fas fa-bars"></i></span>
            </div>
        </div>
    )
}

export default Header
