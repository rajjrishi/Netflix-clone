import React from 'react'
import logo from './logo.png'
import profile_logo from './profile__logo.png'
import './navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <img className="nv_logo" src={logo} alt="logo"></img>
            <img className="nv_profile_logo" src={profile_logo} alt="logo"></img>
        </div>
    )
}

export default Navbar
