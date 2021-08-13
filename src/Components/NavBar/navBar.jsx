import React from 'react'
import './navBar.css'
import { Categorias } from '../../Files/Categorias'
import  LOGO  from '../../Imagenes/LOGO.png'

export const NavBar = () => {


    return (
        <nav className="nav-container">
            <img className="logo" src={LOGO} alt="LOGO" />
            <ul className="nav-menu-cat">
                {Categorias.map(cat => <li className="nav-menu-item">{cat.title}</li>)}

            </ul>
        </nav>
    )
}