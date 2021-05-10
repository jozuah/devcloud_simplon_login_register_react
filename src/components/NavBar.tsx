import React, { useContext } from 'react'
import {useState} from 'react'
//Import de toutes les icones comme un objet
import * as mesIcones from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'
import {SidebarData} from "./SidebarData"
//Import de mon css pour la navbar
import "./NavBar.css"
import {IconContext} from 'react-icons'
import AuthContext, {AuthContextProvider} from '../context/AuthContext'
import * as IoIcons from "react-icons/io"

function NavBar() {
    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn)

    //J'initialise ma variable a false pour avoir la bonne clase correspondant c'est a dire sidebar fermée
    const [sidebar, setSidebar] = useState(false)

    //fonction qui permet d'onverser l'état de ma sidebar true/false
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
            {/* Permet d'harmoniser les couleurs de toutes les icones */}
            <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                {/* Link pour nos icones de navigation */}
                <Link to="#" className="menu-bars">
                    <mesIcones.FaBars onClick = {showSidebar}/>
                </Link>
            </div>
            {/* Si le sidebar est actif on utilise la premiere classe sinon la deuxieme */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                {/* On click sur l'une des rubrique j'inverse l'état de la sidebar*/}
                <ul className="nav-menu-items" onClick = {showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            {/* Icone X pour fermer la navbar */}
                            <AiIcons.AiOutlineClose/>

                        </Link>
                    </li>
                    {/* Ici item est un nom de variable choisit */}
                    {/*
                    {SidebarData.map((item, index) => {
                        return (
                           
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}*/}

                    <li className="nav-text">
                        <Link to="/"><AiIcons.AiFillHome/><span>Home</span></Link></li>
                    {loggedIn === false && (
                        <>
                    <li className="nav-text">
                        <Link to="/login"><mesIcones.FaCartPlus/><span>Login</span></Link></li>
                    <li className="nav-text">
                        <Link to="/register"><IoIcons.IoMdPeople/><span>Register</span></Link></li>
                        </>
                    )}

                    {loggedIn === true && 
                    <li className="nav-text">
                        <Link to="/upload"><mesIcones.FaEnvelopeOpenText/><span>Upload</span></Link>
                    </li>}
                </ul>
            </nav>

            </IconContext.Provider>
        </div>
    )
}

export default NavBar
