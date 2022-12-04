import React from "react"
import logo from '../resources/images/logo.png'
import './header.css'
import {Link} from "react-router-dom";

export default function Header () {
    return (
        <header>
            <div>
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
                        <Link to={"/about"}><span>Quienes Somos</span></Link>
                    </li>
                    <li>
                        <Link to={"/feed"}><span>Novedades</span></Link>
                    </li>
                    <li>
                        <Link to={"/archive"}><span>Archivo</span></Link>
                    </li>
                    <li>
                        <Link to={"/contact"}><span>Contacto</span></Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}