import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { Routers } from "../../static/router"
import "./Header.css"
import logo from "../../assets/images/Logo.svg"


function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="fewqtqwet" />
            </div>
            <div className="item">
                {
                    Routers?.map(el => (<NavLink key={el.id} className="navbar__link" to={el.path}>{el.title}</NavLink>))
                }
            </div>
        </div>
    )
}

export default Header