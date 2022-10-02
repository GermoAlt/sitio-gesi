import './archive.css'
import {Scrollspy} from "@makotot/ghostui";
import {useRef} from "react";

const SIZE = 5;
const list = new Array(SIZE).fill(0);

export default function Archive(){

    const sectionRefs = [
        useRef(HTMLDivElement),
        useRef(HTMLDivElement),
        useRef(HTMLDivElement),
        useRef(HTMLDivElement),
        useRef(HTMLDivElement)
    ];
    return (
        <Scrollspy sectionRefs={sectionRefs}>
            {({ currentElementIndexInViewport }) => (
                <div id={"archive"}>
                    <ul className="nav-wrapper">
                        {list.map((_, i) => (
                            <li key={i} className={ currentElementIndexInViewport === i ? "active" : "" } >
                                <a href={`#section-${i}`}
                                   style={{ color: currentElementIndexInViewport === i ? "#f00" : "#222" }} >
                                    section-{i}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="section-wrapper">
                        {list.map((_, i) => (
                            <section id={`section-${i}`} key={i} ref={sectionRefs[i]} className={`section ${currentElementIndexInViewport === i ? "active" : ""}` } >
                                {i}
                            </section>
                        ))}
                    </div>
                </div>
            )}
        </Scrollspy>
    )
}