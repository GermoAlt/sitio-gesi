import "./posts.css"
import {Page} from "react-facebook";
import {useEffect} from "react";

export const Posts = () => {

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
            <Page href="https://www.facebook.com/profile.php?id=100088159221808" tabs="timeline" />
    )
}