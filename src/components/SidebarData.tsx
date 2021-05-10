import React from 'react'
import * as mesIcones from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        //cName == className 
        cName: "nav-text"
    },
    {
        title: "Login",
        path: "/login",
        icon: <mesIcones.FaCartPlus/>,
        //cName == className 
        cName: "nav-text"
    },
    {
        title: "Register",
        path: "/register",
        icon: <IoIcons.IoMdPeople/>,
        //cName == className 
        cName: "nav-text"
    },
    {
        title: "Upload",
        path: "/upload",
        icon: <mesIcones.FaEnvelopeOpenText/>,
        //cName == className 
        cName: "nav-text"
    },
]