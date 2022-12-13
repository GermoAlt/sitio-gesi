import './archive.css'
import libro from "../../resources/images/ensayos-sobre-sistemica-y-cibernetica.jpg"
import pdf from "../../resources/pdf/Reverse-CoverCDromCourseFrancois2007.pdf"
import ListScroll from "../../components/ListScroll/ListScroll";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";



export default function Archive(){

    const navigate = useNavigate()

    // useEffect(()=>{
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    // }, [])

    const generateArticleCards = () => {
        const articles = require("../../json/articles.json")
        return (
            <div className={"list"}>
                {articles.map((article)=>{
                    return (
                        <div className={"card"} onClick={()=>{navigate("/article/"+article.id)}}>
                            <h2>{article.title}</h2>
                            <h3>{article.date} por {article.author}</h3>
                            <p>{article.preview}</p>
                        </div>
                    )
                })}
            </div>
        )

    }

    const titles = [
        "Ediciones del GESI",
        "Teoría General de Sistemas al día (TGS)",
        "Conferencias del GESI",
        "Cuadernos del GESI",
        "Seminarios del GESI",
        "Diccionario de Teoria General de Sistemas y Cibernética",
        "Ensayos sobre Sistémica y Cibernética",
        "Curso de Teoria General de Sistemas y Cibernetica",
        "Tutorial of General Systems Theory and Cybernetics with Graphic Representations",
        "Pensamiento Sistémico; textos breves transdisplinarios.",
        "Artículos de colaboradores y allegados"
    ]
    const contents = [
        [
            <p>En sus inicios, la búsqueda editorial fundamental fue la de crear un acervo bibliográfico básico en idioma español que diera cuenta de los abordajes de los sistemas complejos y sus problemáticas, las teorías disponibles, los avances en la investigación y aplicaciones. Es así que se realizaron traducciones de trabajos y artículos. Por otra parte, la actividad del GESI ha sido un factor estimulante para que sus integrantes y allegados emprendieran, a título propio, la realización de libros en el marco de la perspectiva sistémica.</p>,
            <p>La labor en el ámbito del GESI ha quedado reflejada en ediciones impresas y boletines electrónicos, y actualmente mediante artículos pedagógicos y temáticos en el Magazine digital. Es de destacar el Diccionario de Teoría General de Sistemas y Cibernética elaborado por Charles François y editado por el GESI en colaboración con el Instituto Andino de Sistemas (IAS) de Perú. Es una obra de referencia que inspira el proyecto de una “Enciclopedia WIKI de sistémica, cibernética y complejidad”. Formato papel disponible de adquisición, y formato digital en preparación y estudio por el Proyecto GlossaLAB, Universidad  de León,España</p>,
            <p>Desde sus comienzos, el ámbito del GESI es propicio para que surjan nuevos grupos de estudio, investigación y trabajo, así con para emprender colaboraciones con los existentes.  Por ello su red vinculante es fuerte y la actividad de quienes han participado, y la de quienes hoy participan dejan nuestra traza de muchas maneras en los más diversos ámbitos del país, la región y el mundo.</p>
        ],
        [
            <h2>Nro.1: Una nueva ciencia de la Complejidad (Paul Davies)</h2>,
            <p>Destaca la diferencia entre lo complicado (desordenado) y lo complejo (ordenado, comprensible) y explica cómo estudiar la complejidad mediante modelos matemáticos</p>,
            <h2>Nro. 2: La socialidad vista como orden jeráquico emergente (Charles François)</h2>,
            <p>El concepto de socialidad responde a la situación en la cual un gran número de elementos o individuos, que eran previamente más o menos independientes, llegan a integrar una red de interacciones.  Se explora la noción desde el nivel biológico hasta el de las sociedades humanas</p>,
            <h2>Nro. 3: Un marco conceptual para diseñar un sistema generativo de auto-aprendizaje (Daniel Dubois)</h2>,
            <p>Se investigan los caracteres generales comunes a todos los “sistemas inteligentes artificiales”.  Se describen tres modelos básicos del desarrollo de la inteligencia natural, que incluyen las estructuras fisiológicas y psicológicas básicas, las etapas del aprendizaje, y el uso de los símbolos.  Se muestra lo que significa en relación con la creación de artefactos artificiales inteligentes</p>,
            <h2>Nro. 4: Conocimiento, poder y democracia (Tetsunori Koizumi)</h2>,
            <p>Se estructuran las disfunciones internas de las democracias modernas desde el enfoque de la cibernética social, las consecuencias de la competencia entre varios grupos en la sociedad y de la competencia entre diferentes sociedades.  El autor plantea además la pregunta por una ética social</p>,
            <h2>Nro.5: La teoría científica del ser humano (Pierre Vendryes)</h2>,
            <p>Este biólogo francés examina las condiciones biológicas de la autonomía de los seres humanos.  Dentro de los límites correspondientes considera los temas de la autonomía motriz y de la autonomía mental</p>,
            <h2>Nro. 6: La falta de percepción de las correlaciones en los desastres creados por el hombre (Charles François)</h2>,
            <p>El estudio de muchos de los desastres resultado de las actividades humanas muestra que hubieran podido evitarse en todo o en parte, de haberse percibido algunos indiciones de incipientes desarreglos y en particular de sus posibles correlaciones sinergéticas.  Los modelos sistémicos serían de gran utilidad en estas situaciones</p>,
            <h2>Nro. 7: Diseño de sistemas para resolución de problemas (Werner Ulrich)</h2>,
            <p>La resolución de problemas, desde el punto de vista sistémico, constituye un proceso cognitivo-afectivo complejo de adquisición de sistemas y modelos conceptuales.  El autor describe el rol respectivo del sistema de valores, del sistema de información y del sistema de acción (Etica, producción y uso del conocimiento).  Lo hace bajo forma de una taxonomía detallada</p>,
            <h2>Nro. 8: Empleo de los diagramas de Venn para muchos conjuntos (Anthony Edwards)</h2>,
            <p>Los conjuntos y sus representaciones gráficas por la topología (rama de la matemática) son un instrumento de gran valor para el entendimiento de los sistemas cuyos elementos tienen características diferenciales específicas y para el estudio de las interrelaciones entre tales sistemas</p>,
            <h2>Nro.9: Complementariedad recursiva en la cibernética de la educación (D. Sawada y M. Caley)</h2>,
            <p>Se apunta a desarrollar una concepción de la cibernética apropiada para la actividad educativa.  Se usa el modelo de complementariedad recursiva como forma de interacción recurrente continua en el proceso de educación.  La meta es que los educandos tengan la libertad de innovar y la posibilidad de auto-ajuste</p>,
            <h2>Nro. 10: Ruido, complejidad y significado en los sistemas cognitivos (Henri Atlan)</h2>,
            <p>Se hace un estudio crítico de los modos de adquisición y desarrollo del conocimiento.  Se muestra porqué es más que la simple transmisión de lo que ya se sabe.  Se destaca el rol de la innovación (e, incluso del ruido, de lo aleatorio y casual, o sea, los sucesos inesperados o las perturbaciones) en la ampliación y renovación del conocimiento</p>,
            <h2>Nro. 11: Inserción comercial en el mundo en el marco de la apertura económica (Daniel Vila)</h2>,
            <p>Se examinan en términos sistémicos el rol de los condicionamientos socio-culturales en la actividad económica.  También se consideran las perspectivas de las relaciones económicas internacionales en función de las necesidades y las metas de los actores, tanto privados como estatales.  Finalmente se sintetizan las conclusiones en relación con la compatibilización de políticas</p>,
            <h2>Nro. 12: Un nuevo enfoque para la teoría del derecho (Ernesto Grün)</h2>,
            <p>Se consideran los distintos paradigmas sistémicos y su peso relativo en las teorías que los justifilósofos han desarrollado o podrán desarrollar con respecto al derecho.  Dos aspectos particularmente importantes son: 1)la cambiante relación del derecho con una sociedad en acelerada evolución y 2) la coherencia interna que debe necesariamente tener y mantener el sistema legal</p>,
            <h2>Nro. 13: Hacia la educación sistémica de los sistemistas (J. Gharajedaghi y R. Ackoff)</h2>,
            <p>Los autores describen primero la visión mecanicista y reduccionista del mundo, típica del siglo 19 y la primera mitad del siglo 20; a continuación de  la educación en esta “edad mecanicista”, consideran seguidamente la “Edad sistémica”, reflejo de la necesidad de un pensamiento sintético, y la necesaria construcción de una verdadera educación sistémica</p>,
            <h2>Nro. 14: Nuevas imágenes del mundo desarrolladas por la Física del hoy (Roberto Devoto)</h2>,
            <p>Cómo la evolución de los conceptos fundamentales de la Física se ha reflejado en el transcurso del siglo 20, en la visión más amplia del mundo</p>,
            <h2>Nro.15: Consecuencias del teorema de Gödel para el paradigma metasistémico (Charles François)</h2>,
            <p>Examen de algunos conceptos sistémicos desde el punto de vista de la lógica y la matemática, en particular el teorema de Gödel según el cual ningún sistema formal puede ser totalmente justificado sólo desde su alcance intrínseco</p>,
            <h2>Nro.16: Una teoría de la práctica en las ciencias de los sistemas sociales (Russel Ackoff)</h2>,
            <p>El trabajo plantea algunos condicionamientos y desafíos que afectan el diseño de sistemas sociales (en particular económicos y políticos).  El autor trata de definir las características de un buen diseño de los puntos de vista de la eficiencia, la flexibilidad y la ética</p>,
            <h2>Nro.17: En la montaña de los niños que vuelan (Cecilia Tagliaferri)</h2>,
            <p>Esta educadora italiana redefine el rol del educador como iniciador de la autonomía y creatividad de los educandos.  Precisa las condiciones óptimas de la relación maestro-alumno.  El educador debe tornarse un elemento fundamental en la estructuración de una red social global en términos éticos</p>,
            <h2>Nro. 18: Formulación de políticas estratégicas de administración para la disciplina del conservacionismo (John P. van Gigch)  </h2>,
            <p>El propósito del trabjo es la aplicación de la metodología sistémica de Diseño a los problemas ecológicos ambientales.  Pero su interés principal es la definición clara de los distintos niveles jerárquicos en la investigación.  Ello es necesario en pos de una satisfactoria armonización y jerarquización de los múltiples aspectos de alguna situación compleja de cualquier tipo que sea.  El tema ambiental es aquí ejemplificatorio</p>,
            <h2>Nro.19: Restructuración mundial y sistema agroalimentarios; necesidad de nuevos enfoques (Luis Llambi)</h2>,
            <p>En una substancial introducción  Daniel Vila destaca el uso de modelos sistémicos implícito en el estudio del economista mexicano.  Los profundos cambios técnicos, demográficos, económicos y sociales ocurridos durante el siglo 20, exigen una amplia reconsideración tanto a nivel global como regional de los sistemas agroalimentarios</p>,
            <h2>Nro. 20: Diseño de sistemas sociales: creando nuestro futuro en un mundo cambiante (Bela Banathy sr.)</h2>,
            <p>Las grandes crisis de múltiples tipos registradas durante el siglo 20 muestran que las consecuencias de la actividad de los sistema humanos que se auto-organizaron espontáneamente, son en general poco previstas y casi ingobernables.  Ya sería necesario un esfuerzo consciente y organizado en pos de un mejor diseño de los sistemas de actividades humanas</p>,
            <h2>Nro. 21: Cultura y sociedad como un sistema replicativo (Vilmos Csanyi)</h2>,
            <p>Este sistemista húngaro ha elaborado una teoría de la auto-organización de los sistemas a partir de elementos inicialmente sueltos que se interconectan en función de condiciones específicas de entorno que les son comunes.  Mostró cómo tales sistemas adquieren la capacidad de perdurar por auto-replicación y aplicó su modelo al estudio de los sistemas socioculturales</p>,
            <h2>Nro. 22: Más allá de las modas administrativas (Michael Jackson)</h2>,
            <p>Este sistemista de la Universidad de Hull, Inglaterra, ha elaborado un pensamiento sistémico orientado hacia los administradores de empresas e instituciones.  Hace un estudio crítico del modelo tradicional de administración considera el rol y el propósito del pensamiento sistémico en este ámbito</p>,
            <h2>Nro. 23: Cibernética (John Warfield)</h2>,
            <p>El autor profundiza las bases epistemológicas de la Cibernética y la Sistémica, en particular a partir de la Semiótica (filosofía de los signos) de Charles Sanders Pierce (1839-1914).  Aplica sus conclusiones al estudio de las situaciones complejas de todo tipo</p>,
            <h2>Nro. 24: Modelización estructural interpretativa (F.R.Janes)</h2>,
            <p>Janes examina las condiciones del entendimiento recíproco entre personas llamadas a colaborar en el manejo de situaciones complejas.  Considera los posibles lenguajes de modelización y su valor en la identificación de los temas de estudio y de sus características principales.  Lo importante es el consenso sobre una metodología eficaz</p>,
            <h2>Nro. 25: Sobre la modelización del conocimiento (Graciela Barchini de Gimenez)</h2>,
            <p>La autora aporta reflexiones desde la epistemología comunicacional de Magoroh Maruyama.  Las dificultades de la comunicación interpersonal se exponen en términos lógicos y psicológicos</p>,
            <h2>Nro. 26: El mejoramiento de la transparencia institucional y política en la Argentina (Seminario GESI 2002)</h2>,
            <p>El contenido de esta publicación es la síntesis de la investigación, los debates y sus conclusiones.  Figuran también algunos anexos acerca del significado de los conceptos sistémicos en relación con el tema, y otras notas más específicas</p>,
            <h2>Nro. 27: Complejidad y Vida (Fritjof Capra)</h2>,
            <p>Discurso de apertura de la 50ª. reunión de la International Society for the Systems Sciences, Sonoma State University, July 2006.  Desarrolla un marco conceptual muy abarcativo que amplía la comprensión de la vida, integrando sus dimensiones biológicas, cognoscitivas y sociales</p>,
            <h2>Nro. 28: La Problemología;  una Metodología para el Diagnóstico y  el Planteo de las Situaciones Complejas (Charles François)</h2>,
            <p>Este artículo presenta la naturaleza y objetivos de la “problemología”, el arte de definir adecuadamente los problemas, mostrando las condiciones básicas para su correcto planteamiento como parte básica del estudio de una situación compleja y reconociendo a su vez, mediante una metodología, sus causas y efectos.</p>,
            <h2>Nro. 29: El enfoque temprano de “sistema” de Ludwig von Bertalanffy; conferencia de Manfred Drack, ISSS Meeting 2008, Madison, USA.</h2>,
            <p>La mayor parte de lo que von Bertalanffy ha  publicado en el campo de la biología “organísmica” fue escrito en alemán y por ello no se conoce  extensamente. Para entender el desarrollo y el significado de su “teoría general de sistemas” – que podría llamarse más  exactamente “sistemología general” – esas obras tempranas son  esenciales. Esta conferencia se centra  en los aspectos claves de su “teoría de sistemas” de la vida, en el nivel de conceptos científicos y de consideraciones filosóficas. También incluye una nota sobre los trabajos que influenciaron a Bertalanffy y lo motivaron para establecer más adelante un nuevo campo transdisciplinario.</p>,
            <h2>Nro. 30: Las organizaciones y el management, desde el enfoque sistémico y cibernético (Charles François)</h2>,
            <p>Las secciones que la integran incluyen los siguientes temas: La descripción generalista de la Empresa; La Organización como Sistema y  sus condiciones de estabilidad;</p>,
            <p>Metodologías  para el diagnóstico y el planteo de situaciones complejas en las Organizaciones</p>,
            <h2>Nro. 31: Metodologías de modelización: la dinámica de sistemas, desde el enfoque sistémico y cibernético. (Charles François)</h2>,
            <p>Contiene las siguientes secciones: La Dinámica de Sistemas de Forrester evaluada en el marco de la Teoría General de Sistemas; El problema de los modelos para la Acción, desde el punto de vista de la realidad, de la Teoría General de Sistemas y de la Dinámica de Sistemas; El uso de la Metodología Sistémica en la Dinámica de Sistemas; Anexo: Dinámica de Sistemas, Modelización y Complejidad; Dinámica de Sistemas: intercambios didácticos"</p>,
        ],
        [
            <h2>Nr 1 - Una reconsideración de la teoría económica desde el punto de vista ecológico. (Ch.François) 17 pgs., 1994 </h2>,
            <h2>Nr 2 - Sistema jurídico y sistema ecológico: un enfoque sistémico. (E. Grün) 8 pgs., 1994 </h2>,
            <h2>Nr 3 - La sociedad metaestable. (Ch.François) 15 pgs., 1994 </h2>,
            <h2>Nr 4 - El concepto de ideología. (J.M.Romero Maletti) 15 pgs., 1994 </h2>,
            <h2>Nr 5 - La cuestión social. (R.Guibourg et al.) 35 pgs., 1997</h2>,
        ],
        [
            <h2>Nro. 1 – Teoría General de Sistemas: conceptos y desarrollos, 1979, 65 pgs.</h2>,
            <p>Piscitelli, A.: Teoría general de los sistemas: un enfoque integrado</p>,
            <p>François, Charles: Algunos conceptos básicos acerca del concepto de sistemas</p>,
            <p>Alvarez: J.A.: Acerca de la descomposición conceptual de sistemas</p>,
            <p>Primavera, H.H.: Un enfoque cibernético-sistémico de la organización humana</p>,
            <p>Mattenet, N.: Un modelo cibernético del aparato psíquico</p>,
            <h2>Nro. 2 – Teoría General de Sistemas: conceptos y desarrollos 1980, 74 pgs.</h2>,
            <p>Prigogine, I.: Tiempo, estructura y fluctuaciones</p>,
            <p>François, Ch.: Los sistemas dispersos</p>,
            <p>Alvarez, J.A.: Teoría de conjuntos difusos, lógica difusa y aplicaciones</p>,
            <h2>Nro. 3 – Teoría General Aplicada de Sistemas. (J. van Gigch et al.) 1980, 102 pgs.</h2>,
            <p>Van Gigch, J. : Teoría general  aplicada de sistemas;  Problemas de medición en el campo de las ciencias sociales; Una comparación metodológica de los paradigmas científico, sistémico y metasistémico; Un enfoque metasistémico de la toma organizativa de decisiones; De lo absoluto a lo probable y difuso en la toma de decisiones; van Gigch, J.-François, Ch.: Teoría y práctica de las organizaciones</p>,
            <h2>Nro. 4 – Teoría de la Autopoiesis. (H. Maturana,F. Varela, pref. S.Beer) 1982, 93 pgs</h2>,
            <p>Textos acerca de los sistemas que se auto-reproducen, o sea que reproducen sus propios elementos y las interrelaciones entre los mismos.</p>,
            <h2>Nro. 5 – Teoría Relativista de la Información (G.Jumarie y Ch. François) 1982, 97 pgs.</h2>,
            <p>Traducidos por José A. Alvarez los  textos tratan sobre las implicancias de la subjetividad del sujeto observador en el proceso de comunicación e información,  y de los lìmites de la posible “objetividad”</p>,
            <h2>Nro. 6 – Metodología Sistémica (G.J.Klir) 1983, 79 pgs</h2>,
            <p>Con traducción de  José A. Alvarez,  se describe el uso de los modelos y conceptos sistémicos para el estudio de las entidades complejas en el mundo real</p>,
            <h2>Nro.  7 – Teoría General de Sistemas y Cibernética (S.Flores- M.Ludueña) 1982, 86 pgs.</h2>,
            <p>Textos introductorios que incluyen la relación de la Sistémica y la Cibernética con la energía, la información, el control y la evolución</p>,
            <h2>Nro. 8 – El uso de modelos sistémicos cibernéticos como metodología científica. (Ch.François) 1985, 120 pgs</h2>,
            <p>El trabajo incluye la descripción de los modelos, reflexiones acerca de los distintos métodos de modelización, y el planteo de los problemas sistémicos, con ejemplificación práctica.</p>,
            <h2>Nro. 9 – Segunda cibernética y paisajes mentales. (M.Maruyama) 1985, 116 pgs</h2>,
            <p>Trata de los procesos de causalidad recíproca amplificadores y- por otra parte- de las influencias socio-culturales que hacen variar los enfoques, tanto conceptuales como educativos, en las distintas culturas y disciplinas</p>,
            <h2>Nro. 10 – Enfoques sistémicos en el estudio de las sociedades. (Ch. François) 1986, 92 pgs.</h2>,
            <p>Desarrollo del concepto de sistema socio-histórico en las sociedades humanas; las relaciones entre los individuos y su sociedad y el rol regulador del subsistema político.</p>,
            <h2>Nro. 11 – El significado transdisciplinario de las isomorfías sistémicas (L. Troncale; Seminario Interno GESI) 1989, 99 pgs.</h2>,
            <p>Considera el significado de las isomorfías, o sea similitudes estructurales y funcionales entre muy variados tipos de entidades complejas.</p>,
            <h2> Nro. 12 – Segundas Jornadas Sistémicas GESI; Partes I y II.</h2>,
            <p>Enfoque sistémico y desarrollo del conocimiento; Educación sistémica y desarrollo de la persona; Autoorganización y desarrollo de la sociedad; Sistemas empresariales y calidad de vida. 1994, 184 pgs. (Parte I: 11contribuciones; parte II: 9 comunicaciones).</p>,
            <h2>Nro. 13 – Terceras Jornadas Sistémicas GESI.</h2>,
            <p>Avances en el tratamiento de los problemas ecológicos, educativos y de las organizaciones. 1995, 130 pgs. 13 comunicaciones</p>,
            <h2>Nro. 14 – Cuartas Jornadas Sistémicas GESI.</h2>,
            <p>Pensamiento sistémico y pautas culturales Pensamiento sistémico y transculturación Psicologías individuales en relación con diferentes tipos de culturas.  Pensamiento sistémico: nuevos enfoques y aplicaciones en disciplinas diversas. 1996, 156 pgs. 20 comunicaciones</p>,
            <h2>Nro. 15 – Quintas Jornadas Sistémicas GESI.</h2>,
            <p>Pensamiento sistémico y educación: vinculaciones, experiencias, propuestas. 1997, 194 pgs. 21 comunicaciones</p>,
            <h2>Nro. 16 – Sextas Jornadas Sistémicas GESI.</h2>,
            <p>Una visión sistémica del desempleo en la Argentina y en el mundo. 1997, 50 pgs. 8 comunicaciones: Introducción; Causas; Efectos económicos; Posibles soluciones; conclusiones, Anexos; Bibliografía.</p>,
            <h2>Nro. 17 – Séptimas Jornadas Sistémicas GESI.</h2>,
            <p>Enfoque sistémico de la Globalización, 1998, 150 paginas. La complejidad social y su impacto en nuestra realidad cotidiana. 14 comunicaciones</p>,
            <h2>Nro. 18 – Octavas Jornadas Sistémicas GESI.</h2>,
            <p>Conflicto, Negociación, Mediación. GESI, 1999, 138 pgs. 15 comunicaciones</p>,
            <h2>Nro.19- Una visión sistémica de la Educación.  GESI, 2009, 74 pgs.</h2>,
            <p>El Prof. B.Banathy describe un método muy general que permite plantear cualquier problema educativo u otro, a partir de su inserción en algún entorno social dado.Se destaca la diferencia entre educación e instrucción,  y se clarifica la confusión resultante en numerosas propuestas contradictorias o incoherentes en el ámbito  de la escolaridad.</p>,
            <h2>Nro. 20- La Complejidad; un concepto básico de la metodología sistémica y cibernética.  GESI, 2012, 45 pgs.</h2>,
            <p>Contiene: El mundo real es una complejidad organizada que demanda una visión sistémica. La percepción sistémica de lo Complejo; Complejidad y Modelización sistémica; Nuevas apreciaciones sistémicas acerca de la Complejidad; Transdisciplinariedad: los métodos cibernéticos y Sistémicos para un mejor entendimiento de la Complejidad; La Metodología Sistémica y Cibernética en el estudio de la Complejidad; Bibliografía.</p>,
        ],
        [
            <h2>Seminario nro. 1</h2>,
            <ol>
                <li>Gobernanza: brevísimo comentario (Por Enrique Herrscher)</li>
                <li>Gobernanza. (Por Charles François)</li>
                <li>Gobernanza, Regulación y Control. (Por Charles François)</li>
                <li>Algunas observaciones sobre gobernanza y gobernabilidad de los Estados. (Por Ernesto Grün)</li>
                <li>La Gobernanza. Puntos de vista chinos: Confucio y Han Fei. (Por Charles François)</li>
                <li>Elementos para una teoría de la gobernanza. (Por Alfredo Barbosa)</li>
                <li>Gobernanza de Agentes Inteligentes. (Por Sergio Moriello)</li>
                <li>Glosario. (Por Sergio Moriello y Charles François)</li>
            </ol>,
            <h2>Seminario nro. 2: Socialidad: Naturaleza y Desarrollo de la comunicación en las Sociedades.  Por Charles François</h2>,
            <ol>
                <li>Propósito del seminario.</li>
                <li>la necesidad de un marco conceptual global en las ciencias humanas.</li>
                <li>la aplicación de las isomorfías.</li>
                <li>la aleatoriedad restringida.</li>
                <li>glosario sobre socialidad.</li>
                <li>la socialidad: característica universal de la interaccion entre elementos: un vocabulario comparado.</li>
                <li>la socialidad como concepto sistemico.</li>
                <li>efectos asociativos y sus modelos.</li>
                <li>descripcion del fenomeno asociativo.</li>
                <li>cambios de fases en masas inorganizadas.</li>
                <li>causas y modalidades del fenomeno asociativo.</li>
                <li>caracteristicas generales de la asociatividad.</li>
                <li>fenomenos de asociacion.</li>
                <li>el concepto de sociedad y sus derivados.</li>
                <li>la naturaleza de las sociedades humanas.</li>
                <li>el concepto de megagenesis de jacques ruffié.</li>
                <li>el cerebro humano.</li>
                <li>la comunicación, raíz de la socialidad.</li>
                <li>la comunicación como caracteristica fundamental de la socialidad.</li>
                <li>los lenguajes de la comunicación.</li>
                <li>diferenciación celular</li>
                <li>socialidad a nivel molecular-celular .</li>
                <li>comunicación, sinergia e integracion.</li>
                <li>la comunicación humana, signos y significados.</li>
                <li>las organizaciones sociales como sistemas.</li>
                <li>centros de organización.</li>
                <li>“gleichschaltung” (uniformizacion impuesta).</li>
                <li>sociedad y cibernética.</li>
                <li>efectos de masas.</li>
                <li>asociatividad: la organización de las grandes colectividades.</li>
                <li>una interpretacion sistemica de la gran mutacion social planetaria de la especie humana en los dos ultimos siglos.</li>
                <li>bibliografía sobre socialidad.</li>
            </ol>,
            <h2>Seminario nro. 3 Sistema Mente-Cerebro; selección de aportes</h2>,
            <ol>
                <li>Propósito del seminario.</li>
                <li>La necesidad de un marco conceptual global en las ciencias humanas.</li>
                <li>La aplicación de las isomorfías.</li>
                <li>La aleatoriedad restringida.</li>
                <li>Glosario sobre socialidad.</li>
                <li>La socialidad: característica universal de la interaccion entre elementos: un vocabulario comparado</li>
                <li>La socialidad como concepto sistemico.</li>
                <li>Efectos asociativos y sus modelos.</li>
                <li>Descripcion del fenomeno asociativo.</li>
                <li>Cambios de fases en masas inorganizadas.</li>
                <li>Causas y modalidades del fenomeno asociativo.</li>
                <li>Caracteristicas generales de la asociatividad.</li>
                <li>Fenomenos de asociacion.</li>
                <li>El concepto de sociedad y sus derivados.</li>
                <li>La naturaleza de las sociedades humanas.</li>
                <li>El concepto de megagenesis de jacques ruffié.</li>
                <li>El cerebro humano.</li>
                <li>La comunicación, raíz de la socialidad.</li>
                <li>La comunicación como caracteristica fundamental de la socialidad.</li>
                <li>Los lenguajes de la comunicación.</li>
                <li>Diferenciación celular</li>
                <li>Socialidad a nivel molecular-celular.</li>
                <li>Comunicación, sinergia e integracion.</li>
                <li>La comunicación humana, signos y significados.</li>
                <li>Las organizaciones sociales como sistemas.</li>
                <li>Centros de organización.</li>
                <li>“gleichschaltung” (uniformizacion impuesta)</li>
                <li>Sociedad y cibernética.</li>
                <li>Efectos de masas.</li>
                <li>Asociatividad: la organización de las grandes colectividades.</li>
                <li>Una interpretacion sistemica de la gran mutacion social planetaria de la especie humana en los dos ultimos siglos.</li>
                <li>Bibliografía sobre socialidad.</li>
            </ol>,
            <h2>Seminario nro. 4: Economía en términos sistémicos</h2>,
            <ol>
                <li>Economia: evolucion y conceptos teoricos</li>
                <li>Economia y regulaciones cibernéticas</li>
                <li>Economia y ecologia planetarias"</li>
            </ol>
        ],
        [
            <h3>Autor: CHARLES FRANÇOIS.  GESI, 1992, 220 pgs.</h3>,
            <h3>Acerca del Autor</h3>,
            <p>Charles François, sistemista belga, radicado en Argentina desde 1963, es autor de libros, contribuciones, ensayos y artículos; miembro de comités editoriales, instituciones y sociedades de Sistémica, Cibernética, Prospectiva y disciplinas afines. Su participación en cursos, seminarios, talleres, jornadas, y conferencias, en Argentina y en el exterior, ha sido y es permanente. Mediante el dictado de las temáticas sistémicas y con la colaboración de estudiosos provenientes de diversas profesiones, inspiró a la fundación del GESI, Grupo de Estudio de Sistemas Integrados, que es la División Argentina de la ISSS (International Society for the Systems Sciences), miembro académico de la IFSR de Austria y miembro fundador de ALAS.</p>,
            <h3>Acerca de la obra</h3>,
            <p>La metodología sistémica y la cibernética proveen conceptos y modelos que constituyen valiosas herramientas para el entendimiento de las situaciones complejas, de las condiciones de estabilidad, de las causas de desequilibrio de los sistemas de los cuales formamos parte: naturales, educativos, empresariales, etc.</p>,
            <p>La literatura sistémica y cibernética es abundante en varios idiomas extranjeros, pero sin embargo es escasa en castellano, principalmente la de referencia. Disponer de una síntesis general que sea a la vez una obra de referencia y una herramienta de trabajo es el propósito que anima al GESI a editar el presente Diccionario de Teoría general de Sistemas y  Cibernética. La edición en colaboración entre GESI e IAS, de Perú, incluye aproximadamente 480 términos.  Cada uno de ellos es objeto de una o más definiciones obtenidas de autores reconocidos, con explicación, comparación, comentarios y críticas del punto de vista semántico y/o epistemológico; un sistema integrativo de interconexiones permite recorrer la totalidad de la obra con el propósito de descubrir las interrelaciones que unen a los conceptos y a los modelos. La traducción de los términos al inglés, francés, italiano, portugués y alemán permite al usuario orientarse en la lectura de literatura extranjera; ofrece asimismo, una extensa bibliografía relativa a la totalidad de los temas presentados.  En su redacción se ha buscado  ponerlo a disposición del más amplio espectro de usuarios.  La obra ofrece una extensa bibliografía relativa a la totalidad de los temas presentados.</p>,
            <h3> Ej. de contenido:</h3>,
            <p><b>HOMEOSTASIS:</b> “Condición del sistema que conserva su estructura y sus funciones por intermedio de una multiplicidad de equilibrios dinámicos” (Joel de Rosnay, El Macroscopio, pag. 106) Noción introducida por Walter Cannon, a partir de las ideas de Claude Bernard (Constancia del Medio Interno) La homeostasis se obtiene por la acción de un conjunto interconectado de regulaciones armonizadas.  Es una propiedad de los sistemas ultraestables (W. Ross Ashby, Design for a Brain, pag. 100) Ashby llamó “homeostato” al aparato que construyó y destinó a demostrar la ultraestabilidad, no sin destacar las notables analogías con la noción de homeostasis tal como la definió Cannon. Ver: Autonomía (Vendryes)- Estabilidad Dinámica- Multiestato-Regulación-Reserva-Ultraestabilidad .I: Homeostasis     F: Homèostasie  It.: omeostasi    P: Homeostase  A: Homeoostase"</p>
        ],
        [
           <h2>Compiladores: Eduardo del Caño y Ernesto Grün. Ed. Dunken, Buenos Aires, 2003. 216 pgs.</h2>,
            <br/>,
            <img src={libro} alt={"Portada del libro Ensayo sobre Sistémica y Cibernética"}/>,
           <p>Esta obra es un homenaje a nuestro inspirador y Presidente Honorario, Prof. Charles François, en la que hemos compilado una cantidad de ensayos en castellano e inglés, aportados por sistemistas de primer nivel de la Argentina y de otros países.  La edición ha sido realizada con el apoyo del GESI y de la International Federation for Systems Research.</p>,
           <p>Los textos muestran que la Sistémica y la Cibernética constituyen herramientas de investigación indispensables para la comprensión y la actuación en el mundo complejo en el que vivimos. Quienes no están familiarizados con la temática, encontrarán un útil glosario; y para aquellos que sí la  conocen, el volumen ofrece ideas y enfoques de sumo interés y gran utilidad para el estudio de sus conceptos y su aplicación práctica en las más variadas disciplinas.</p>,
           <h2>Contenido:</h2>,
           <p>Prefacio; Notas Biográficas; Semblanza; Comentarios de Sistemistas; A Living Encyclopedia; Salud, enfermedad: análisis desde el enfoque sistémico; Architecture embodiment of knowledge; Glosario de Conceptos Básicos de Teoría General de Sistemas, aplicaciones a la Ciencia; La economía desde un punto de vista sistémico y cibernético; Viabilidad en los sistemas sociales; La cuestión de las dos dimensiones; Apuntes para una visión sistémica de la seguridad pública; Consideraciones acerca del tribunal penal internacional desde un punto de vista sistémico y cibernético; System interconnectedness and living systems theory; Citizen of the world: François´s contributions to international affairs.</p>
        ],
        [
            <p>Con Representaciones Gráficas.</p>,
            <h2>Autor: Charles François;Ed. Sergio Moriello</h2>,
            <h2>GESI, 2007 , Formato CD Rom</h2>,
            <h2>Indice Abreviado</h2>,
            <p>Ofrece la lista de los 32 temas abordados en el Curso, entre los cuales se distribuyen más de 280 transparencias comentadas.</p>,
            <p>El contenido de cada tema figura en el índice desarrollado  y comentado.</p>,
            <h2>Sistémica </h2>,
            <ul>
                <li>El tema fundamental: de lo simple… a lo complejo</li>
                <li>El marco básico</li>
                <li>Fisiología y psicología de las percepciones</li>
                <li>Percepción del tiempo</li>
                <li>Simultaneidad y secuencialidad</li>
                <li>Marcos de referencias</li>
                <li>Taxonomías</li>
                <li>Termodinámica de los sistemas abiertos</li>
                <li>Conceptos y modelos abstractos</li>
                <li>Estabilidad e inestabilidad</li>
                <li>Autogénesis, Morfogénesis, Recursividad y Autopoiesis</li>
                <li>Los procesos sistémicos: el holon</li>
                <li>El sistema y su entorno</li>
                <li>Las estructuras</li>
                <li>Flujos</li>
                <li>Ciclos</li>
                <li>Modos de crecimiento</li>
                <li>Dinámica cualitativa</li>
                <li>Simbiosis, comensalismo, parasitismo</li>
                <li>Modelos matemáticos y topológicos </li>
                <li>Atractores y fractales</li>
            </ul>,
            <h2>Grafos</h2>,
            <ul>
            <li>Jerarquías</li>
            <li>Comunicación e información</li>
            <li>Aplicaciones:</li>
            <ul>
                <li>Informática</li>
                <li>Sociogénesis y sistemas sociales</li>
                <li>Prospectiva y planeamiento</li>
                <li>Otras aplicaciones</li>
            </ul>
            <li>Varios: Información complementaria significativa</li>
            </ul>,
            <h2>Cibernética</h2>,
            <ul>
                <li>Orígenes e historia de la Cibernética</li>
                <li>Primeros dispositivos y modelos cibernéticos.</li>
                <li>Los grandes conceptos de la Cibernética</li>
                <li>Regulación y Control</li>
            </ul>
        ],
        [
            <h2>GESI, 2007</h2>,
            <p>Reciente edición en inglés del Curso de TGS y Cibernética con representaciones gráficas publicado en 2007 en formato CD ROM.</p>,
            <p>Un tiempo después de su aparición y en vista de la recepción favorable , surgió la idea de traducirlo como material didáctico para difusión en el exterior de,  al menos,  de una ínfima parte de nuestras actividades didácticas como Grupo de Estudio; finalmente pudo realizarse hace unos días.</p>,
            <p>La noticia sobre este material didáctico editado oportunamente por el GESI en español, ha sido recibida con  entusiasmo por parte del Prof. Gary Metcalf, presidente  de la IFSR quien ya estaba al tanto de este proyecto,  y le ha sido despachado via correo postal a Atlanta, USA. en consonancia con el comienzo de sus clases en la Universidad Saybrook.</p>,
            <p>Por nuestra parte hemos convenido que en el exterior sea difundido tanto como posible entre los docentes sistémicos quienes tendrán en este Course… una herramienta sistémica para ilustrar sus clases, conferencias, etc., al tiempo que GESI estará también presente en las actividades didácticas que lo implementen, como institución sistémica de respaldo.</p>,
            <a href={pdf}>Reverse Cover CD-ROM Course Francois 2007</a>
        ],
        [
            <h2>François, Charles: Pensamiento Sistémico; textos breves transdisplinarios.</h2>,
            <h2>Buenos Aires, GESI, 2014</h2>,
            <p>La presente edición del GESI ofrece textos breves sobre diversas temáticas de interés sistémico, varias de las cuales, fundamentalmente la educativa, tuvieron un espacio destacado en la labor del autor, Prof. Charles François, correspondiéndose con los constantes desarrollos en su labor de investigador, docente, y profesor visitante y honorario, en numerosos ámbitos empresariales y educativos, nacionales y del exterior. Con dos principales propósitos: la difusión y práctica de las metodologías sistémicas y cibernéticas, y la conformación de agrupaciones de sistémicos, para conformar una red latinoamericana y dar a conocer sus investigaciones y resultados a favor de la innovación y mayor eficacia en el desenvolvimiento de los miembros y las instituciones involucradas.</p>,
            <p>Contenido: Educación no es solamente instrucción; Proyectar con visión sistémica;  Concepto y  el  Modelo de Red Neuronal;El concepto de Estructura, y sus fundamentos matemáticos; La Metodología Sistémica en los modelos globales ecológicos y ambientales</p>
        ],
        generateArticleCards()
    ]




    return (
        <ListScroll titles={titles} content={contents} />
    )
}