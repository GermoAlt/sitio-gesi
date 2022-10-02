import React from "react"
import './footer.css'
import facebook from "../resources/images/facebook.png"

export default function Footer () {
    return (
        <footer>
            <div className={"redes"}>
                <p>ENCONTRÁ NUESTRAS NOVEDADES</p>
                <div className={"image-container"}>
                    <a href={"https://www.facebook.com"} target={"_blank"} rel={"noreferrer noopener nofollow"}>
                        <img src={facebook} alt={"Facebook logo"}/>
                    </a>
                </div>
            </div>

        </footer>
    )
}