import React from 'react'
import './header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {



    return (
        <>
            <div className="header-container">
                <div className="header-name">
                    <h2>Gaurav Rao</h2>
                </div>
                <div className="side-bar">
                    <ul className="side-bar">
                     <NavLink to='/product'><li>Product</li></NavLink>
                     <NavLink to='/cart'><li>Cart</li></NavLink> 
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header