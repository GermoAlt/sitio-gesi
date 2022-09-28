import React from "react"
import './main.css'
import background from "../resources/images/background.png"
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Archive from "./archive/Archive";

export default function Main () {
    return (
        <main style={{backgroundImage:`url(${background})`}}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/archive"} element={<Archive/>}/>
            </Routes>
        </main>
    )
}