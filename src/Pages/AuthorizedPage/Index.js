import React, { useState } from 'react'
import { RouterContent } from '../../Navigation/RouterContent'
import { useDispatch, useSelector } from "react-redux";
import '../../Styles/css/dashboard.css'
import Header from '../Header'
import {signout} from '../../Redux/Actions/userAction'

function Index() {
    const [sidebarClose, setSidebarClose] = useState(false)
    const dispatch = useDispatch()
    const ToggleSidebar = (e) => {
        e.preventDefault()
        setSidebarClose(!sidebarClose)
    }
    const closeSidebar = (e) => {
        e.preventDefault()
        setSidebarClose(!false)
    }
    
    const handleSignout = (e)=>{
        e.preventDefault()
        dispatch(signout())
    }
    const sidebarStatus = sidebarClose ? 'sidenav-disable' : ''
    const [events, setEvents] = useState(['click', 'load', 'scroll']);
    return (
        <div className="main-container">
            {sidebarClose ? "" : <div className="trigger-sidenav" onClick={(e) => closeSidebar(e)}></div>}
            <header className="header" >
                <Header
                    ToggleSidebar={ToggleSidebar}
                />
            </header>
            <aside className={`sidenav ${sidebarStatus}`}>
                <nav className="nav">
                    <div>
                        <a href="!#" className="nav_logo">
                            <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">BBBootstrap</span>
                        </a>
                        <div className="nav_list">
                            <a href="!#" className="nav_link"> <i className="fas fa-tachometer-alt nav_icon"></i>
                                <span className="nav_name">Dashboard</span>
                            </a>
                            <a href="/app/product" className="nav_link"> <i className="fas fa-boxes nav_icon"></i>
                                <span className="nav_name">Product</span>
                            </a>                           
                            <a href="/app/brand" className="nav_link"> <i class="fas fa-bullseye"></i>
                                <span className="nav_name">Brand</span>
                            </a>   
                            <a href="/app/brand" className="nav_link"> <i class="fas fa-user-tie"></i>
                                <span className="nav_name">User</span>
                            </a>
                            <a href="/app/brand" className="nav_link"> <i class="far fa-envelope"></i>
                                <span className="nav_name">Inbox</span>
                            </a>
                            <a href="/app/brand" className="nav_link"> <i class="fas fa-cog"></i>
                                <span className="nav_name">Setting</span>
                            </a>
                            <a href="!#" className="nav_link" onClick={(e)=>handleSignout(e)}> <i class="fas fa-sign-out-alt"></i>
                                <span className="nav_name">Signout</span>
                            </a>
                        </div>
                    </div>

                </nav>
            </aside>
            <main className="main">
                <div className="container-fluid">
                    <RouterContent/>

                </div>

            </main>
            {/* <footer className="footer" style={{backgroundColor:"green"}}></footer> */}
        </div>
    )
}

export default Index
