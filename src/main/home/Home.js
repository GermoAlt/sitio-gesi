import './home.css'
import {Carousel} from "react-responsive-carousel";
import logo from "../../resources/images/logo.png";
import a from "../../resources/images/gesi_magazine.png";
import b from "../../resources/images/gesi_ediciones.png";
import c from "../../resources/images/direccion-y-ejecucion.jpg";
import React from "react";
import {Link} from "react-router-dom";


export default function Home(){
    return (
        <main id={"home"}>
            <div className={"wrapper"}>
                <div className={"banner-container"}>
                    <div className={"image-container"}>
                        <img src={logo} alt={"logo"}/>
                    </div>
                        <h1>GESI</h1>
                        <h2>Grupo de Estudios de Sistemas Integrados</h2>
                </div>
                <Carousel  centerMode={true} centerSlidePercentage={80} showThumbs={false} showStatus={false} interval={5000} autoPlay infiniteLoop transitionTime={1000}>
                    <div>
                        <img src={a} alt={"a"} />
                    </div>
                    <div>
                        <img src={b} alt={"a"} />

                    </div>
                    <div>
                        <img src={c} alt={"a"} />
                    </div>
                </Carousel>
            </div>

            <div className={"panel"}>
                <h3>¿Qué es el GESI?</h3>
                <p>Somos una comunidad de aprendizaje, una cooperativa de conocimientos y un laboratorio de ideas.</p>
                <p>Colaboramos en una red local-regional-planetaria orientada a resolver sistémicamente los desafíos que impone la complejidad creciente del mundo actual.</p>
                <div>
                    <Link to={"/about"}>
                        <button>MÁS INFO</button>
                    </Link>
                </div>
            </div>

            <div className={"panel"}>
                <h3>Ediciones</h3>
                <p>En sus inicios, la búsqueda editorial fundamental fue la de crear un acervo bibliográfico básico en idioma español que diera cuenta de los abordajes de los sistemas complejos y sus problemáticas, las teorías disponibles, los avances en la investigación y aplicaciones. Es así que se encuentran disponibles diversas publicaciones.</p>
                <p>La adquisición de estas publicaciones es asimismo un apoyo para la continuidad de la labor del GESI.</p>
                <div>
                    <Link to={"/archive"}>
                        <button>MÁS INFO</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}