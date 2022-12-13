import './contact.css'
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {Toast} from "primereact/toast";

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const form = useRef()
    const toast = useRef()

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    const emailHandler = (e)=> {
        e.preventDefault()
        if(!name || !email || !message) {
            toast.current.show({severity: 'error', summary: 'Complete los campos', detail: 'Debe llenar los tres campos con su información', life:5000});
            return;
        }
        emailjs.sendForm("service_hmjvhzf", "template_8zvv4nb", form.current, "Q3Yn66ekxY4qIEOKS")
            .then((res)=>{
                toast.current.show({severity: 'success', summary: 'Mensaje enviado!', detail: 'Tu mensaje fue enviado con éxito', sticky:true});
                cleanFields()
            }, (error)=> {
                toast.current.show({severity: 'error', summary: 'Error de sistema', detail: 'Ocurrió un error durante el envío de tu mensaje. Esperá unos minutos e intentá de nuevo, o contactanos via Facebook', sticky:true});
            })
    }

    const cleanFields = () => {
        setMessage("")
        setEmail("")
        setName("")
    }

    return (
        <form id={"contacto"} ref={form} onSubmit={emailHandler}>
            <Toast ref={toast}/>
            <div className={"personal-info-container"}>
                <div>
                    <label htmlFor={"contact-name"}>Nombre*</label>
                    <input id={"contact-name"} name={"user_name"} value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor={"contact-email"}>Mail*</label>
                    <input id={"contact-email"} name={"user_email"} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
            </div>
            <label htmlFor={"contact-message"}>Mensaje*</label>
            <textarea id={"contact-message"} name={"message"} value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <div className={"button-container"}>
                <input type={"submit"} value={"ENVIAR"}/>
            </div>
        </form>
    )
}