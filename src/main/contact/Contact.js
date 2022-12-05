import './contact.css'
import {useState} from "react";

export default function Contact() {
    const [captcha, setCaptcha] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const emailHandler = ()=> {
        // if(!captcha || !name || !email || !message) return;
        window.open("mailto:germanaltairac@hotmail.com;german98altairac@gmail.com?subject=Consulta GESI&body=hola")
    }
    return (
        <div id={"contacto"}>
            <div className={"personal-info-container"}>
                <div>
                    <label htmlFor={"contact-name"}>Nombre</label>
                    <input id={"contact-name"}/>
                </div>
                <div>
                    <label htmlFor={"contact-email"}>Mail</label>
                    <input id={"contact-email"}/>
                </div>
            </div>
            <label htmlFor={"contact-message"}>Mensaje</label>
            <textarea id={"contact-message"}></textarea>
            <div className={"button-container"}>
                <button onClick={()=>emailHandler()}>ENVIAR</button>
            </div>
        </div>
    )
}