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
                        <Link to={"/about"}>Quienes Somos</Link>
                    </li>
                    <li>
                        <Link to={"/archive"}>Archivo</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contacto</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}