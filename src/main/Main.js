import React from "react"
import './main.css'
import background from "../resources/images/background.png"
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Archive from "./archive/Archive";
import {Posts} from "./posts/Posts";
import {Article} from "./articles/Article";

export default function Main () {

    return (
        <main style={{backgroundImage:`url(${background})`}}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/feed"} element={<Posts/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/archive"} element={<Archive/>}/>
                <Route path={"/article/:articleId"} element={<Article/>}/>
            </Routes>
        </main>
    )
}