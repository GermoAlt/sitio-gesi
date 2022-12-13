import {Article1} from "./content/Article1";
import {useParams} from "react-router-dom";
import "./article.css"
import {Article2} from "./content/Article2";
import {Article10} from "./content/Article10";
import {Article3} from "./content/Article3";
import {Article4} from "./content/Article4";
import {Article5} from "./content/Article5";
import {Article6} from "./content/Article6";
import {Article7} from "./content/Article7";
import {Article8} from "./content/Article8";
import {Article9} from "./content/Article9";
import {Article11} from "./content/Article11";
import {Article12} from "./content/Article12";
import {Article13} from "./content/Article13";
import {useEffect} from "react";

export const Article = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    const {articleId} = useParams()
    const articles = require("../../json/articles.json")
    let article = articles.filter((art) => art.id === articleId)[0]
    return (
        <div className={"mainCard"}>
            <h1>{article.title}</h1>
            <h2>{article.author}, {article.date}</h2>
            {articleLoader(parseInt(articleId))}
        </div>
    )
}

const articleLoader = (id) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    switch (id) {
        case 1:
            return <Article1/>
        case 2:
            return <Article2/>
        case 3:
            return <Article3/>
        case 4:
            return <Article4/>
        case 5:
            return <Article5/>
        case 6:
            return <Article6/>
        case 7:
            return <Article7/>
        case 8:
            return <Article8/>
        case 9:
            return <Article9/>
        case 10:
            return <Article10/>
        case 11:
            return <Article11/>
        case 12:
            return <Article12/>
        case 13:
            return <Article13/>
        default:
            return <div>No existe este artículo</div>
    }
}