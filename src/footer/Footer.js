import React from "react"
import './footer.css'
import facebook from "../resources/images/facebook.png"
import logo from '../resources/images/logo.png'
import {Link} from "react-router-dom";

export default function Footer () {
    return (
        <footer>
            <div className={"redes"}>
                <p>ENCONTRÁ NUESTRAS NOVEDADES</p>
                <div className={"image-container"}>
                    <a href={"https://www.facebook.com/profile.php?id=100088159221808"} target={"_blank"} rel={"noreferrer noopener nofollow"}>
                        <img src={facebook} alt={"Facebook logo"}/>
                    </a>
                </div>
            </div>
            <div id={"info"}>
                <div className={"column left"}>
                    <Link to={"/"}>
                        <img src={logo} alt={"logo GESI"}/>
                    </Link>
                    <p>Grupo de Estudio de Sistemas Integrados</p>
                </div>
                <div className={"column"}>
                    <ul>
                        <li>
                            <Link to={"/about"}><span>Quienes Somos</span></Link>
                        </li>
                        <li>
                            <Link to={"/archive"}><span>Archivo</span></Link>
                        </li>
                        <li>
                            <Link to={"/contact"}><span>Contacto</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}