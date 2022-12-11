import React from "react"
import logo from '../resources/images/logo.png'
import './header.css'
import {Link, useLocation} from "react-router-dom";

export default function Header () {
    const location = useLocation()
    const handleHeaderClass = (button) => {
        return button === location.pathname ? "active" : ""
    }

    return (
        <header>
            <div className={"left-side"}>
                <div className={"image-container"}>
                    <Link to={"/"}>
                        <img src={logo} alt={"logo"}/>
                    </Link>
                </div>
                <p>Grupo de Estudio de Sistemas Integrados</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/about"}><span className={handleHeaderClass("/about")}>Quienes Somos</span></Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to={"/feed"}><span>Novedades</span></Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to={"/archive"}><span className={handleHeaderClass("/archive")}>Ediciones</span></Link>
                    </li>
                    <li>
                        <Link to={"/contact"}><span className={handleHeaderClass("/contact")}>Contacto</span></Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}