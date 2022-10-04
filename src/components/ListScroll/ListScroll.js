import {Scrollspy} from "@makotot/ghostui";
import {createRef} from "react";
import "./listScroll.css"

export default function ListScroll(props){
    const titles = props.titles
    const contents = props.content
    const arrLength = props.titles.length;
    const list = new Array(arrLength).fill(0);

    const sectionRefs = Array(arrLength)
        .fill()
        .map((_) => createRef())

    const scrollHandler = (i, e) => {
        e.preventDefault();
        if(i===0){
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            let id = "section-" + i
            let position = document.getElementById(id).firstChild;
            position && position.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <Scrollspy sectionRefs={sectionRefs}>
            {({ currentElementIndexInViewport }) => (
                <div id={"listscroll"}>
                    <ul className="nav-wrapper">
                        {list.map((_, i) => (
                            <li key={i} className={ currentElementIndexInViewport === i ? "active" : "" } >
                                <a href={`#section-${i}`} onClick={(e) => scrollHandler(i, e)}
                                   style={{ color: currentElementIndexInViewport === i ? "#009ACC" : "#222" }} >
                                    {titles[i]}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="section-wrapper">
                        {list.map((_, i) => (
                            <section id={`section-${i}`} key={i} ref={sectionRefs[i]} className={`section ${currentElementIndexInViewport === i ? "active" : ""}` } >
                                <h1>{titles[i]}</h1>
                                {contents[i]}
                            </section>
                        ))}
                    </div>
                </div>
            )}
        </Scrollspy>
    )
}