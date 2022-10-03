import './contact.css'

export default function Contact() {
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
                <button>ENVIAR</button>
            </div>
        </div>
    )
}