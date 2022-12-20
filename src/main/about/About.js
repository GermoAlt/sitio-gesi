import './about.css'
import ListScroll from "../../components/ListScroll/ListScroll";
import {useEffect} from "react";
import {Accordion, AccordionTab} from "primereact/accordion";
import doraGregorio from "../../resources/images/dora_l_gregorio.jpg"
import charles_banner from "../../resources/images/charles_banner.jpg"
import charles_1 from "../../resources/images/charles_1.jpg"
import charles_3 from "../../resources/images/charles_3.jpg"
import homenajeCharles from "../../resources/pdf/Homenaje_Francois.pdf"

export default function About(){


    useEffect(()=>{
        window.scrollTo({ top: 0 })
    }, [])

    const titles = [
        ["Misión e Identidad"],
        ["Origen y Trayectoria"],
        ["Grupos"],
        ["Mentor"],
        ["Contexto Generativo Transformador"],
        ["Nuestra Red"],
        ["Homenajes"],
    ]

    const content = [
        [
            <p>Somos una comunidad de aprendizaje, una cooperativa de conocimientos y un laboratorio de ideas.</p>,
            <p>Colaboramos en una red local-regional-planetaria orientada a resolver sistémicamente los desafíos que impone la complejidad creciente del mundo actual.</p>,
            <p>Ofrecemos un espacio de reflexión para el estudio, la divulgación y la aplicación de conceptos y modelos relativos a los sistemas de cualquier naturaleza, ecológicos y sociales: educacionales, económicos, empresariales, políticos, jurídicos y comunitarios.</p>,
            <p>Consideramos que el enfoque y la comunicación inter-transdisciplinaria son condiciones previas imprescindibles para la planificación y el mejor desempeño en todos los ámbitos de actividad: Interdisciplinaria, entre las disciplinas; Transdisciplinaria, a través de las disciplinas y ámbitos de acción.</p>,
            <p>Consideramos que el estudio y aplicación práctica de la teoría general de sistemas, la cibernética, la inteligencia artificial, la teoría de las catástrofes, la termodinámica del no equilibrio, los fractales, la teoría del caos, la modelización y simulación de fenómenos complejos, y la dinámica de sistemas, entre otros, son una vía de renovación y profundización de los conocimientos disciplinarios.</p>,
            <p>Consideramos importante mantener el rigor científico y conceptual para evitar o contrarrestar, en lo posible, vulgarizaciones simplistas o desnaturalización de los conceptos.</p>,
            <h2>Nutrimos la IDENTIDAD DEL GESI con: </h2>,
            <ul>
                <li>La HISTORIA y los VALORES que la sustentaron.</li>
                <li>El RESPETO por las ideas, los saberes y las experiencias de cada uno, en su complementariedad como un valor sustantivo.</li>
                <li>La CONFIANZA mutua sustentada en la sinceridad y el cumplimiento de los compromisos asumidos, y las competencias (los saberes específicos de cada uno) puestos al servicio de las tareas y proyectos que llevamos adelante.</li>
                <li>Una ACTITUD hacia el APRENDIZAJE GENERATIVO y COLABORATIVO continuo, el desarrollo de METANOIA como un proceso permanente.</li>
                <li>El “ESCUCHAR” que promovemos y practicamos.</li>
                <li>El DIÁLOGO y las CONVERSACIONES en las que los diferentes puntos de vista/perspectivas/paisajes mentales/modelos mentales, estimulan las interacciones horizontales.</li>
                <li>ESPACIOS DE APERTURA e INVOLUCRAMIENTO con los diferentes actores/instituciones del contexto en el que nos desempeñamos.</li>
                <li>Proyectos de INVESTIGACIÓN-ACCIÓN con GRUPOS INTERDISCIPLINARIOS e INTERINSTITUCIONALES referidos a problemáticas emergentes en la sociedad.</li>
            </ul>,
            <p>En un mundo que se ha convertido en una maraña de sistemas complejos, la calidad de nuestra vida está ligada a la calidad de nuestras interpretaciones, interrelaciones, interacciones y conversaciones…</p>,
            <p>Para y en ese mundo, que es el nuestro, buscamos:</p>,
            <p>Incorporar al “observador” como parte de la realidad observada: observador-participante-protagonista.</p>,
            <p>Convertirnos en un REFERENTE CONFIABLE en cuanto al aporte que podamos realizar para la comprensión de cuestiones complejas, así como de alternativas innovadoras de intervención sistémicas.</p>,
            <p>Valorizar y ampliar las REDES interpersonales e interinstitucionales en Argentina, la Región y el Planeta.</p>,
            <p>La puesta en acción la percepción/lectura sistémica y transdisciplinaria y practicar la anticipación organizativa sistémica.</p>,
            <p>Nutrir en forma permanente los medios de comunicación disponibles con contenidos de valor parala Comunidad GESIy la sociedad en general.</p>,
            <p>Atender los ASPECTOS LOGÍSTICOS, ECONÓMICO-FINANCIEROS y ADMINISTRATIVO-LEGALES que viabilicen las actividades para el cumplimiento de la misión y los propósitos institucionales del GESI.</p>
        ],
        [
            <p>El GESI es una Asociación Civil sin fines de lucro, con personaría jurídica. Se encuentra en actividad desde el año 1973. Es la División Argentina de la ISSS (International Society for the System Sciences, USA), miembro de la IFSR (International Federation for Systems Research, Austria) y miembro fundador de ALAS (Asociación Latinoamericana de Sistémica)</p>,
            <h3>MOVIMIENTO POR UNA PERSPECTIVA INTEGRADORA</h3>,
            <p>Al igual que la International Society for the Systems Sciences (ISSS), el GESI surgió a partir de la iniciativa de un grupo de profesionales de diversas disciplinas, unidos en la búsqueda por desarrollar una metodología unificadora del pensamiento científico y técnico.</p>,
            <p>La importancia de la Cibernética, hermana gemela de la Sistémica, fue reconocida en Argentina, en primer lugar y con bastante anterioridad a la Sistémica. En l969, en la Sociedad Científica Argentina, bajo el liderazgo del biólogo Máximo Valentinuzzi (padre) se creó el “Instituto de Cibernética” que desarrolló muy interesantes actividades con la colaboración de los profesores Luis Boschi, Luis Maltese, Gerardo Chaitin, Antonio Battro, S. Lichtenthal y Osvaldo Skliar, entre otros. Sin embargo, los conceptos sistémicos permanecían ignorados en nuestro medio en aquel entonces. Fue un hecho sorprendente, ya que el Dr. Valentinuzzi había trabajado en los Estados Unidos de Norteamérica con Anatol Rapoport, uno de los tres fundadores en 1956, de la Society for General Systems Research, (SGSR, actualmente ISSS).</p>,
            <h3>EN LA SOCIEDAD CIENTÍFICA ARGENTINA: EL NACIMIENTO DEL GESI</h3>,
            <p>En 1973, después de varios años de residencia en Buenos Aires, Charles François en colaboración con el Lic. César Armoza organizó un Seminario sobre Teoría General de Sistemas para los estudiantes de la Universidad Católica de La Plata. El Lic. Armoza, era por entonces un joven profesor de matemática de la Universidad Católica de La Plata influenciado por artículos de George Klir (de la Universidad de Binghamton, Estado de Nueva York) y uno de los más interesantes formalizadores de los conceptos sistémicos). Lamentablemente, las circunstancias de inestabilidad institucional de los años 1973-76 impidieron el progreso de la iniciativa, ya que el Profesor Armoza emigró definitivamente a los EEUU. </p>,
            <p>Sin embargo, en el mes de octubre de 1975 tuvieron lugar las 3ras Jornadas de Cibernética en Vaquerías (Prov. de Córdoba). Las Jornadas fueron organizadas por los doctores Maltese y Valentinuzzi, quienes luego propusieron a Charles François, participante de las mismas, el dictado de conferencias sobre Sistémica también en el Instituto de Cibernética. Los asistentes al ciclo llegaron a la conclusión unánime de que el tema justificaba un trabajo de estudio permanente y en profundidad, y así se creó el “Grupo de Estudio de Sistemas Integrados” (GESI), adoptando la forma de grupo interno del Instituto de Cibernética.</p>,
            <p>En 1984, el GESI se independizó de la Sociedad Científica como GESI – Asociación Argentina de Teoría General de Sistemas y Cibernética, y a partir del 15 Julio de 2009 adoptó personería jurídica como Grupo de Estudio de Sistemas Integrados (GESI) Asociación civil.</p>,
            <h3>ÁMBITOS RECEPTIVOS</h3>,
            <p>La intensa actividad desarrollada por el GESI desde sus inicios encontró receptividad, especialmente en ámbitos universitarios. Universidades Nacionales: Buenos Aires (Facultades de Derecho, de Ciencias Económicas, Escuela de Asistentes Sociales de la Facultad de Medicina); de Rosario, de Tucumán, de Mendoza, de Santiago del Estero; de Luján; Tecnológica; de la Patagonia. Universidades Privadas: del Salvador; ITBA, Católica (en Santiago del Estero); Santo Tomás de Aquino; UADE; de Belgrano. También encontró receptividad en grupos de trabajo: equipos de Terapia Sistémica en la provincia de Buenos Aires y otras activas en la misma temática, del ámbito de la Capital Federal.</p>,
            <h3>RED DE PERTENENCIA</h3>,
            <p>Desde sus inicios el GESI cuenta con una pertenencia en el contexto de las instituciones que en el mundo se dedican a la Sistémica y la Cibernética con intercambios y contribuciones en el ámbito local-internacional.</p>,
            <p><b>Importantes sistemistas extranjeros llegan al país por gestión del GESI</b> y sus integrantes. Entre ellos se pueden mencionar:</p>,
            <p>James Miller, John Warfield (norteamericanos), Pierre Vendryes, Henri Atlan y Robert Vallée (franceses), Guy Jumarie (franco-canadiense) Helmar Frank (alemán, autoridad mundial en pedagogía cibernética), John van Gigch (argentino establecido en California), Marcelino Cereijido (argentino docente e investigador en la UNAM), Cintra Martins (Río de Janeiro) Magoroh Maruyama, Stuart Umpleby, Mike Jackson, Gary Metcalf, Stephen Ruth y Ranulph Glanville, entre los más renombrados. Un caso de particular interés fue compartir con la Asociación de Terapia Familiar (Argentina) las presentaciones e intercambios con sistemistas de gran prestigio como Heinz von Foerster, Humberto Maturana y Francisco Varela.</p>,
            <p>Los profesores Magoroh Maruyama, Jamshid Gharajedaghi, John Morecroft y Michael Jackson han ofrecido cursos en la Escuela Superior de Administración del Instituto para el Desarrollo Empresarial de la Argentina (IDEA) en los años en los que Enrique Herrscher fue decano de esa institución.</p>,
            <p>Los Congresos Latinoamericanos de ALAS, a partir del 2005, constituyen oportunidades de visitas de profesores extranjeros. Por ejemplo el Prof. Matjaz Mulej (Universidad de Maribor, Slovenia) Markus Schwaninger (Universidad de Saint Gallen, Suiza) y el Prof. F. Wallner (Universidad de Viena) y otras personalidades del quehacer sistémico-cibernético en el ámbito latinoamericano: los profesores Ernesto Lleras (Colombia), Ignacio Peón Escalante y Francisco Aceves (Méjico), y Hernán López Garay (Venezuela) entre otros.</p>,
            <p>Los contactos con sistemistas como el Prof. Rafael Rodríguez Delgado (Sociedad Española de Sistemas – SESGE), el Prof. Parra Luna (Universidad de Valencia), el Ing. Ricardo Rodriguez Ulloa (Instituto Andino de Sistemas), el Prof. Dante Pinheiro Martinelli (Universidad de Sao Paulo) dieron como resultado colaboraciones y edición de publicaciones que fueron creándose como resultado de la investigación y difusión de temáticas relacionadas, y del desarrollo y las actuaciones en sus diversas actividades.</p>,
            <p><b>Integrantes del GESI participan activamente en reuniones internacionales.</b> Desde los inicios, Charles François, motivado por su gran interés en la investigación y la práctica de las metodologías sistémicas y cibernéticas, a partir de su asistencia al International Meeting organizado por la Society for General Systems Research (SGSR) en 1970, se relacionó con sistemistas de USA y de varios países europeos: Francia, Austria, Bélgica, Inglaterra, España, Holanda, Grecia, entre otros. Tales vinculaciones, desde los inicios del GESI dieron lugar a invitaciones a participar en nuevas reuniones y a publicar en las ediciones de entidades como la International Society for the Systems Sciences (ISSS); las austríacas International Federation for Systems Research (IFSR), la Universidad de Viena, la Austrian Society for Cybernetics and Systems y el Bertalanffy Center); la Association Française pour la Cybernétique Economique et Technique (AFCET); la American Society for Cybernetics (ASC); la Association Internationale de Cybernétique (Namur – Belgique); la Sociedad Española de Sistemas (Valencia); Systeem Groep Nederland (Holanda); la Asociación Helénica de Sistemas (Atenas y Creta); la Association Internationale de Cybérnetique de Namur, Bélgica, la Sociedade Interdisciplinar Sistémica (Sao Paulo); el Instituto Andino de Sistemas (Perú).</p>,
            <p>Es así que el GESI es la División Argentina de la <a href={"https://www.isss.org/world"}>ISSS (International Society for the System Sciences, USA)</a>, y miembro activo de la <a href={"https://www.ifsr.org/"}>IFSR (International Federation for Systems Research, Austria)</a>. Dos integrantes del GESI, Charles François y Enrique Herrscher, son nombrados académicos de la International Academy for Systems and Cybernetic Sciences y éste último presidió durante varios años el Comité de Aplicaciones a la Industria de la ISSS, y Presidente de la misma en 2004.</p>,
            <h3>INTERCAMBIOS FECUNDOS</h3>,
            <p>En el ámbito regional, el GESI es miembro fundador de ALAS (Asociación Latinoamericana de Sistémica), entidad consolidada, en la reunión de la ISSS, en Cancún en el año 2005. Ello dio lugar a eventos formales que trajeron consigo nuevas oportunidades para consolidar vínculos y colaboración con representantes de otras instituciones de la Región y de Europa.</p>,
            <p>Se han estrechado vínculos con la Comunidad de Pensamiento Complejo (Argentina), con la Cátedra para el estudio de la Complejidad del Instituto de Filosofía de La Habana (Cuba) y con la Multiversidad Mundo Real Edgar Morin (Méjico) con ponencias en congresos, ensayos, artículos en libros colectivos y plantel docente, fundamentalmente a través de la participación de Enrique Herrscher, Elisa -Tina- Chisleanschi, Charles François, Eva Sarka y Silvia Zweifel.</p>,
            <p>Cabe destacar, que los programas e intercambios con otros puntos del país y la región han dejado rastros evidentes en el presente. Los más pujantes y en desarrollo son los grupos que actúan en FundArIngenio (Fundación Argentina para el Talento y el Ingenio), en Santiago del Estero, impulsado por los Profesores Mercedes Clusella y Pedro Luna, y CEGESCO, en Mendoza, liderado por el Dr. Alberto Montbrun, el CESDES (Centro de Estrategias Sistémicas para el Desarrollo) en la Patagonia, liderado por el Prof. Ricardo Barrera. Existen grupos de investigación en Venezuela, Brasil, Méjico, Colombia, Perú, mayormente en Institutos y Universidades, como por ejemplo: en el Instituto Politécnico Nacional de Méjico, liderado por los Prof. Ignacio Peón Escalante e Isaías Badillo, el Grupo ISSS Brasil en la Universidade de Sao Paulo, liderado por el Prof. Dante Pinheiro Martinelli, en la Universidad de Los Andes, liderado por el Prof. Ernesto Lleras, en Venezuela el Prof. Hernán Lopez Garay, y siguen sumándose más integrantes.</p>,
            <h3>EN LOS MEDIOS DE COMUNICACIÓN</h3>,
            <p>Las actividades realizadas en torno a los conceptos sistémico-cibernéticos y sus aplicaciones hallaron eco en personalidades del ambiente mediático. Integrantes del GESI los fueron difundiendo en emisiones radiales como: el programa “Avances de la Ciencia” por Radio Nacional, el ciclo “Dialogando con la Organización” por Radio Identidad, entre otras. En programas televisivos como: <i>Dialogando</i>, conducido por Ricardo Dealecsandris, y en otras presentaciones de integrantes y allegados. En artículos y columnas de periódicos y revistas como: “Boletín” del Instituto de Cibernética de la Sociedad Científica Argentina, “Mundo Informático”, “Integración”, las secciones de “Cultura” y “Educación” del Diario La Nación, a cargo por ese entonces de A. Castells y Albino Dabove;  “Cuadernos de Planeamiento” editados por Claudio Deschamps; “Perspectivas Sistémicas”; Revista “Sistemas Familiares y otros sistemas humanos” publicada por Asiba, Asociación de Psicoterapia Sistémica de Buenos Aires y “80/20”. En el exterior: en “Systems Research and Behavioral Sciences”, en “Revue Internationale de Systemique et Cybernétique”, en “Revue” de l´Association Internationale de Cybernétique, Kybernetes, “Athena” (Bélgica) entre otras.</p>,
            <p>Algunos de los temas abordados son: <i>La biología cibernética de Pierre Vendryes; Planeamiento en términos sistémicos-cibernéticos; TGS, Cibernética y Prospectiva; Ecología y Prospectiva; Modelos sistémicos en los estudios históricos; Un concepto sistémico de la economía; Sistémica y cibernética social; Modelos mentales generalistas y visión del mundo; Teoría general de los sistemas políticos; La dinámica de poblaciones a la luz del concepto de sistemas; Del Cartesianismo al punto de vista sistémico; La identificación y caracterización de los sistemas sociológicos; Orígenes y significado de los controles; El costo real de la energía; Aprendizaje, conocimiento y sabiduría; TGS y Ciencias Humanas; Desintegración y reintegración psíquica en términos sistémicos; El subsistema político como regulador socio-cultural; El Individuo, la Sociedad y la Persona en una época de cambio; La significación metodológica de la TGS; Educación sistémica para el futuro; Autoreproducción y génesis de la complejidad; Enfoque sistémico de la tarea docente; Informática y Sociedad; La TGS en el marco del pensamiento científico; La empresa en su entorno; Percepción, estética y cultura; El significado de la TGS y la Cibernética en el pensamiento del Siglo 20; La TGS como metalenguaje transdisciplinario; Ecología sistémica y uso de la energía; Patología de los sistemas complejos; Sistemas informáticos y sistemas complejos; La modelización sistémica, instrumento eficaz para el entendimiento de las situaciones complejas.</i></p>,
            <h3>RESUMEN DE REALIZACIONES</h3>,
            <p>En el transcurso de los años, el GESI ha desarrollado una intensa actividad mudando formas de acuerdo a los ámbitos y momentos, consolidando un espíritu colaborativo que se destaca como un componente esencial de su identidad: colaboración entre sus integrantes y del GESI con otras organizaciones de la ciudad, del país, la región y el mundo. Es la cualidad que caracteriza a la urdimbre del GESI. A veces más fuerte y a veces más débil, con distintos tonos y formas siempre ha estado y continuará estando: hace a su identidad, adecuando su formato a distintas audiencias, estuvo desde los 70´s dejando huella propiciadora a la creación de nuevas agrupaciones en nuestra región. Entre las muchas actividades desplegadas podrían listarse las siguientes:</p>,
            <h4>Cursos Introductorios y de Segundo Nivel a la TGS y a la Cibernética</h4>,
            <p>El GESI ofreció tales actividades didácticas desde sus inicios. En el transcurso de los años se han ido actualizando sus contenidos y las presentaciones han sido enriquecidas con representaciones gráficas, incorporadas en diferentes tipos de edición, que se ofrecen a valores módicos para los interesados en su adquisión (pueden consultarse sus listados en este sitio).</p>,
            <h4>Seminarios Internos</h4>,
            <p>Ofrecidos desde los inicios en numerosas ocasiones, varios de ellos editados en formato papel y digital, siempre a partir de iniciativas de los integrantes del GESI. Entre ellos se cuentan: Sistemas normativos (Ricardo Guibourg); Enfoque sistémico de la ciudad (Susana Flores y Mercedes Ludueña); Teoría de los sistemas dispersos (Charles François); El sistema psico-conflictivo (Nora Femenía); El uso de modelos sistémico-cibernéticos como metodología científica (Charles François); Control de sistemas urbanos (Cira Szklowin); Educación sistémica por métodos sensorio-motrices en el nivel pre-escolar y primario (Raúl Dorfman); Teoría del sistema socio-histórico (Charles François); La planificación espacial y el concepto de sistema (Susana Flores); Un enfoque macro-histórico de la evolución del sistema espacial de los asentamientos Urbanos (Susana Flores); Historia de los conceptos cibernéticos (V. Borch); Mente y Cerebro (Sergio Moriello); Seminario Gobernancia y Gobernabilidad de los Sistemas, desde los biológicos a los educacionales, sociales y políticos (ha sido una experiencia de estudio y aprendizaje grupal). Seminario Socialidad: naturaleza y desarrollo de la comunicación en las organizaciones (Charles François).</p>,
            <h4>Cursos sobre temas específicos considerados desde el enfoque sistémico</h4>,
            <p>Historia de la teoría económica (Daniel Vila); Resolución de problemas en organizaciones (N. Barocelli y J.J. Díaz); Economía en términos sistémicos (Charles François); Pedagogía sistémica y desarrollo de la creatividad (Augusto Barcaglioni); Patología de los sistemas complejos (Charles François); TGS y filosofía de las ciencias (José Ángel Alvarez); Enfoque sistémico en la administración de empresas (Enrique Herrscher, R. Orellano y Eugenio Zwarycz); Problemología: Estudio de los sistemas complejos (Charles François); El decisor eficaz (M.A. Carro); Socialidad: la naturaleza de las sociedades (Charles François).</p>,
            <h4>Jornadas intensivas</h4>,
            <p>Tuvieron lugar en ocho oportunidades y dieron lugar a la publicación de selecciones de los mejores trabajos presentados bajo la forma de Cuadernos GESI:</p>,
            <p>1992: Epistemología-Derecho-Empresa (con la Presencia de John Warfield)</p>,
            <p>1994: Desarrollo de la persona – Auto-organización en sistemas empresariales</p>,
            <p>1995: Problemas ecológicos, educativos y organizacionales (Cuaderno nr.13)</p>,
            <p>1996: Pautas culturales, diversidad cultural y transculturación (Cuaderno nr.14)</p>,
            <p>1997: Pensamiento sistémico y educación (Cuaderno nr.15)</p>,
            <p>1998: Desempleo: Enfoque sistémico de sus causas y consecuencias (Cuaderno nr.16)</p>,
            <p>1999: Enfoque sistémico de la Globalización (Cuaderno nr.17)</p>,
            <p>2000: Conflicto, negociación y mediación en áreas multidisciplinarias (Cuaderno nr.18)</p>,
            <h4>Jornadas breves</h4>,
            <p>Los años 2008, 2009 y 2010 fueron propicios para una nutrida serie de Jornadas en las que se trataron temas como:</p>,
            <p>Ontogénesis, Psicogénesis y Filogénesis (Alfredo Barbosa); Propuesta Metodológica para Analizarla Crisis Global (Enrique Herrscher); Pensamiento Sistémico-Cibernético (Roberto Porebski); Niveles para implementar sistemas de supervivencia (Néstor Domínguez); El síndrome cultural de Chernobyl, mitos y verdades (Roberto Porebski); Realidad: ¿Ilusión o Sofisma? (Oscar Di Marco); Modelos parala Gestióndela Complejidaden las Organizaciones (Alfredo Barbosa); “Transferencia del Valor Económico sin Dinero” (Luis Alberto Marquez y Carlos Louge); El Pensamiento de Sigmund Freud (E. Ariovich); El Pensamiento de Jacques M.E. Lacan (Marta Ramo); Cómo adquirimos conciencia y consciencia (Oscar di Marco), Educación y aprendizaje (Augusto Barcaglioni); La aplicación de la Sistémica y la Cibernética al Derecho (Ernesto Grün); Los sistemas políticos desde un punto de vista sistémico (Antonio Martino); Introducción ala Teoríade los sistemas mentales (J.M. Figini); Prospectiva Sistémica (Ricardo Araujo); Metodología de estudio para sistemas blandos – P. Checkland (Ricardo Araujo); Introducción ala Sistémicayla Cibernéticapara ingenieros (Sergio Moriello). “Borges, Teoría Cuántica y los Universos Paralelos” Oscar A. Di Marco; La serie Educación: “Elementos clave para incluir en la formación de formadores” “Propuesta de una Actividad Experiencial para el Ministerio de Educación”; “Redes y Comunidades de Aprendizaje” por (Gladys Bassa, Fabiana Crespo, Eva Sarka y Silvia Zweifel); “Las TICs y la temática virtual en educación bajo Normas ISO 9000” (Alfredo Barbosa). “Las escuelas en las zonas de riesgo. De la práctica a la teoría” Ana M. Vichi y Roberto Porebski; “En pos de un encuentro deseable y necesario: Educación-Economía-Ecología” (Silvia Zweifel); “Aprendizaje de nivel III en Gregory Bateson: aprendizaje de la disposición a revisar nuestros propios paradigmas” (Elisa Tina Chisleanschi); entre otras.</p>,
            <h4>Talleres sistémicos</h4>,
            <p>“Aprendizaje Generativo” (Elisa Tina Chisleanschi y Eva Sarka)</p>,
            <p>“Lo que no puede faltar en la educación” (Gladys Bassa y Eva Sarka)</p>,
            <p>“Economía & Ecología: hacia un encuentro sistémico” (Silvia Zweifel) con Fundación HABITAT & Desarrollo, en la Cámara de Comercio C.A.BA.</p>,
            <h4>Mesas Redondas</h4>,
            <p>En numerosas oportunidades en colaboración con instituciones relacionadas, es una modalidad transitada por el Grupo de Estudio. En los últimos años junto con la Universidad Tecnológica Nacional en Buenos Aires, en el año 2010 con instancias de Mesa Redonda enriquecidas con una serie de debates desde la perspectiva sistémica sobre los siguientes temas:</p>,
            <p>“Crisis Económica-Financiera Global” (Luis Samolski, Alfredo Barbosa y Carlos Louge)</p>,
            <p>“El Pensamiento de Sigmund Freud” (Eduardo Arovich -freudiano-, Marta Ramó -lacaniana- y Alfredo Barbosa -junguiano-).</p>,
            <p>“Cerebro-Subjetividad-Sociedad” (Elisa -Tina- Chisleanschi, Alfredo Barbosa y Sergio Moriello).</p>,
            <h4>Works in progress</h4>,
            <p>En el GESI suelen abrirse espacios para exponer conceptos en proceso de elaboración. Ejemplo de ellos son: “Aprendizaje de nivel III en Gregory Bateson: aprendizaje de la disposición a revisar nuestros propios paradigmas” (Elisa Tina Chisleanschi); Propuesta de una Actividad Experiencial para Educación (Elisa Tina Chisleanschi, Eva Sarka, Gladys Bassa, Fabiana Crespo y Silvia Zweifel); Indicadores de una organización pensada sistémicamente (Enrique Herrscher);  “Educación-Ecología-Economía” (Silvia Zweifel)</p>,
            <h4>Seminarios y Coloquios</h4>,
            <p>Entre las actividades de este tipo se destacan:</p>,
            <p>Problemología. Estudio y manejo de los problemas complejos mediante el enfoque y la metodología sistémica. Seminario, por Charles François en la Universidad de San Miguel, Buenos Aires</p>,
            <p>II Seminario Internacional de Teoría General del Derecho. Seminario, por Ernesto Grün en la Universidad de Medellín, Colombia.</p>,
            <p>Gestión de la Complejidad, Metodología Sistémica y sus Aplicaciones. Seminario, por Enrique Herrscher y Sergio Moriello en YMCA, la Asociación Cristiana de Jóvenes, Buenos Aires.</p>,
            <p>Noción de Sistema, aplicado al análisis social. Seminario, por Charles François en YMCA, la Asociación Cristiana de Jóvenes y en el marco de Desarrollo sobre Liderazgo orientado a Jóvenes Dirigentes, Buenos Aires.</p>,
            <p>Transdisciplinariedad: los Conceptos, los modelos y la metodología sistémica y la Importancia práctica de su Estudio y Difusión. Coloquio con la participación de Markus Schwaninger (Suiza) y Charles François. Organizado por la FundarIngenio, Santiago del Estero, Argentina.</p>,
            <p>Gobernanza y Gobernabilidad, colectivo con selección de aportes. 2005</p>,
            <p>Sistema Mente-Cerebro; colectivo con selección de aportes. 2009</p>,
            <p>Socialidad: Naturaleza y Desarrollo de la Comunicación en las Sociedades. Por Charles François, USAL, Facultad de Ciencias Jurídicas, Buenos Aires, 2008</p>,
            <p>La Economía en Términos Sistémicos; ciclo de 3 sesiones. Por Charles François, USAL, Facultad de Ciencias Jurídicas, Buenos Aires, 2010.</p>,
            <p>Los cuatro últimos títulos, editados por el GESI en formato digital y papel.</p>,
            <h4>Congresos y Reuniones Regionales</h4>,
            <p>La consolidación dela Asociación Latinoamericana de Sistemas (ALAS) en el año 2005 dio lugar a periódicos eventos de intercambio formalizados en Reuniones Regionales y Congresos en torno a grandes temas de interés social: la gobernabilidad y la participación ciudadana, la educación sistémica y la educación sobre sistemas, las aplicaciones inter-transdisciplinarias de la sistémica y la cibernética, y la pobreza estructural en la región entre otras.</p>,
            <h4>Conversaciones del Extremo Sur</h4>,
            <p>Inspiradas en las “Conversaciones de Fuschl” que organiza las IFSR desde la década del ochenta, en marzo del 2012, en Ushuaia se ha iniciado una versión latinoamericana. En Fuschl, cada dos años se reúnen unas treinta personas para mantener conversaciones informadas. En ellas no hay disertaciones magistrales, ni oradores estrellas, ni ponencias, en cambio hay conversaciones informadas en torno a un tema preestablecidos, en general alguno de los grandes temas de la sociedad. Es tratado por subtemas que se conversan en instancias de grupos pequeños y que enriquecen las conversaciones en instancias plenarias. La experiencia ha dejado una estela de entusiasmo, por lo que se estima que la versión latinoamericana consolida su versión con encuentros bianuales a partir de abril del 2013.</p>,
            <h4>Publicaciones</h4>,
            <p>En sus inicios, la búsqueda editorial fundamental fue la de crear un acervo bibliográfico básico en idioma español que diera cuenta de los abordajes de los sistemas complejos y sus problemáticas, las teorías disponibles, los avances en la investigación y aplicaciones. Es así que se realizaron traducciones de trabajos y artículos. Por otra parte, la actividad del GESI ha sido un factor estimulante para que sus integrantes y allegados emprendieran, a título propio, la realización de libros en el marco de la perspectiva sistémica.</p>,
            <p>La labor en el ámbito del GESI ha quedado reflejada en ediciones impresas y boletines electrónicos, y actualmente mediante artículos pedagógicos y temáticos en el Magazine digital. Es de destacar el Diccionario de Teoría General de Sistemas y Cibernética elaborado por Charles François y editado por GESI en colaboración con el Instituto Andino de Sistemas (IAS) de Perú. Es una obra de referencia que inspira el proyecto de una “Enciclopedia WIKI de sistémica, cibernética y complejidad”</p>,
            <p>El ambiente del GESI es propicio para que surjan grupos de estudio, de investigación y de trabajo en colaboración. Por eso su red es fuerte y la actividad de quienes han participado, la de quienes hoy participan dejan nuestra traza de muchas maneras en los más diversos ámbitos: en el país, la región y el mundo.</p>
        ],
        [
            <p>En la historia de GESI, se conformaron los siguientes equipos multidisciplinarios de trabajo:</p>,
            <ul>
                <li>Grupo Mar</li>
                <li>Grupo Economía Amable</li>
                <li>Grupo Educación</li>
            </ul>
        ],
        [
            <img src={charles_banner} alt={"Charles François"}></img>,
            <p>El GESI ha surgido y mantenido su vitalidad gracias al compromiso personal de Charles François. Su trayectoria personal está inseparablemente entrelazada con este grupo de estudio e institución: es su pilar y referente cohesivo.</p>,
            <h2>Breve CV de Charles François</h2>,
            <img src={charles_1} alt={"Charles François"}></img>,
            <p>Nació en Bruselas (Bélgica) en septiembre de 1922, cursó estudios de Ciencias Comerciales y Consulares enla Universidad Librede Bruselas.</p>,
            <p>Se instaló en África Central en 1945 (en Bukavu, Congo) como funcionario, y desde 1948 como empresario, desarrollando asimismo actividades de escritor y periodista hasta 1960.</p>,
            <p>Emigró a Argentina en 1963, y a partir de 1966, estuvo a cargo de la Oficina Comercial de la Embajada de Bélgica en Buenos Aires, hasta su retiro de esas funciones en 1987, para dedicarse plena y activamente a la investigación y la docencia de la metodología Sistémica y Cibernética, que había despertado su interés a través de la lectura de la obra fundamental de Norbert Wiener “Cibernética”. Es miembro de la actual ISSS (International Society for the Systems Sciences) desde 1955, comenzó a introducir y difundir mediante seminarios y conferencias en espacios académicos locales los conceptos de la teoría general de los sistemas y la cibernética, a partir de 1973. La transmisión de esos conceptos y prácticas inspiraron y dieron lugar a la fundación del GESI – Grupo de Estudio de Sistemas (antes Asociación Argentina de Teoría General de Sistemas y Cibernética) en colaboración con un grupo de profesionales de distintas disciplinas, en el Instituto de Cibernética dela Sociedad Científica Argentina. Presidió al GESI entre 1984 y 1990, siendo posteriormente su Presidente Honorario.</p>,
            <p>La Asociación, como resultado de su labor participativa en el exterior, y la de sus colaboradores más activos, ha sido reconocida como Argentine branch (rama argentina) de la International Society for the Systems Sciences de los Estados Unidos, y como miembro activo de la International Federation for Systems Research con sede en Linz, Austria. François participó en numerosas Reuniones sistémicas en el exterior, particularmente en las austríacas de la Universidad de Viena y en las Conversaciones de Fuschl, localidad cercana a Salzburg, dedicadas fundamentalmente al desarrollo y a la difusión de la metodología aplicada en la Educación; es miembro activo de éstas y de ALAS (Asociación Latinoamericana de Sistémica, fundada en 1992 y consolidada en 2005), que lo distinguió con el cargo de Presidente Honorario y miembro fundador desde 2007 de ELAPDIS, Escuela Latinoamericana de Pensamiento Sistémico.</p>,
            <p>Charles François estableció asimismo los contactos con las sociedades española, mejicana y peruana siendo miembro vitalicio del Instituto Andino de Sistemas de Lima (Perú) y Profesor Visitante habiéndole aportado numerosos cursos y seminarios que concitan aún permanente interés por parte de estudiosos en las temáticas de sistemas y prospectiva en aquel país y la región latinoamericana. Desde el GESI, organizó y dictó también un gran número de cursos, seminarios, y conferencias. Ha propiciado activamente la realización de las Jornadas Sistémicas Anuales del GESI, dedicadas a temas de interés general enfocados desde la perspectiva sistémica (Educación, Empleo, Negociación, entre otras), con la participación de sistemistas del interior de Argentina y del exterior; es autor de varios Cuadernos, Seminarios, Conferencias y TGS al dia, editados por el GESI para paliar en los comienzos del GESI y otras agrupaciones, la escasa información sobre Sistémica y Cibernética en idioma español.</p>,
            <p>Es asiduo participante en reuniones nacionales e internacionales en Europa y las dos Américas, François estrechó vínculos con miembros de diversas instituciones y se dedicó durante años a la tarea de profesor visitante en varias Universidades e instituciones de estudio, de Argentina y Latinoamérica.</p>,
            <p>Es autor de numerosos trabajos publicados en revistas científicas, en publicaciones empresariales, académicas, y en periódicos, así como aportado una considerable cantidad de ponencias editadas en las Actas de reuniones nacionales e internacionales.</p>,
            <p>Entre otras ediciones, publicó su Introducción a la Prospectiva en 1978, en editorial El Ateneo de Buenos Aires. En 1992, su Diccionario de T.G.S y Cibernética en castellano, fue editado por GESI, siendo la primera obra de referencia en la temática en idioma español.</p>,
            <p>En 1997, editó su International Encyclopedia of Systems and Cybernetics (Saur Verlag, Munich, Alemania), reimpresa en 1999.</p>,
            <p>En 2004 editó la segunda edición de su International Encyclopedia of Systems and Cybernetics (KG Saur-Thomson, Munich, Alemania, 2004), considerablemente revisada y ampliada, en dos volúmenes.</p>,
            <p>En el mes de Octubre 2004, el Instituto Andino de Sistemas de Lima, Perú, ha publicado en edición DVD su Seminario sobre Prospectiva Sistémica, y en 2006 su Seminario sobre Problemología, una indagación de los problemas complejos a través del enfoque sistémico, ambas disponibles en el sitio web del IAS.</p>,
            <p>Es miembro de Consejos Asesores y Comités Editoriales de varias publicaciones relacionadas con las temáticas sistémicas objeto de sus investigaciones, proyectos y trabajos. Integra el Comité Internacional de Honor de la World Organization of Systems and Cybernetics y es miembro de la Academia Internacional de Ciencias Sistémicas y Cibernéticas (IFSR)</p>,
            <p>Como investigador y docente, François ha realizado numerosas versiones de Cursos sobre TGS y Cibernética y la más reciente es su Curso de Teoría General de Sistemas y Cibernética, con representaciones gráficas editado en formato CDrom en 2007, por el Ing. Sergio Moriello, exvicepresidente del GESI.</p>,
            <p>Amigos y colaboradores locales y del exterior aportaron a la edición de la obra “Ensayos sobre Sistémica y Cibernética” sus contribuciones sobre diferentes temáticas sistémicas, en oportunidad de festejar su 80º. Aniversario en 2002.</p>,
            <p>En abril de 2007, en oportunidad de su reunión internacional anual,la American Societyfor Cybernetics lo distinguió por sus constantes y significativos aportes, con la medalla Norbert Wiener.</p>,
            <p>En noviembre de 2007, el Instituto Tecnológico de Buenos Aires (ITBA) en el marco de la 2da. Reunión Internacional de Dinámica de Sistemas, le brindó un homenaje por su trayectoria y le otorgó el nombramiento de Profesor Honorario; también el Instituto Galileo Galilei de Santiago del Estero lo honró con la placa artística al Maestro Sistemista, tallada en madera de la zona, por sus aportes docentes hacia los miembros dela Institución, y de otras provincias argentinas.</p>,
            <p>François es miembro de Consejos Asesores y Comités Editoriales de varias publicaciones relacionadas con las temáticas sistémicas objeto de sus investigaciones, proyectos y trabajos. Integra el Comité Internacional de Honor de la World Organization of Systems and Cybernetics, recibió en 2007 la Medalla Dorada Norbert Wiener de la American Society for Cybernetics por sus constantes y significativos aportes, en 2014 fue designado Fellow de la International Federation of Systems Research (IFSR) de Austria. Y es Académico de la IASCYS, International Academy for Systems and Cybernetics Sciences.</p>,
            <p>Después del dictado de sus seminarios sobre Socialidad y Comunicación en las Organizaciones, y Economía en Términos Sistémicos en 2010, François prosiguió aportando contribuciones a las reuniones sistémicas, y a las series editadas por el GESI; ha encaminado un estudio exhaustivo acerca del origen y el desarrollo de las relaciones entre elementos o individuos, en los distintos niveles naturales de organización, desde la física hasta las sociedades vegetales, animales y humanas, para desarrollos ulteriores. Avanza asimismo en la versión en inglés de su Curso sobre TGS y Cibernética con representaciones gráficas.</p>,
            <h2>Brief CV of Charles François</h2>,
            <img src={charles_3} alt={"Charles François"}></img>,
            <p>Charles François was born in Belgium in 1922. He studied Consular and Commercial Sciences at Brussels Free University. He stayed from 1945 to 1960 at Belgian Congo creating and developing his own commercial business and also studying and writing chronicles about social developments; later on he moved to Argentina and was in charge of the Commercial Office of the Belgian Embassy in Buenos Aires from 1966 to his retirement in 1987. His interest in Cybernetics and Systems started in 1952 through Norbert Wiener´s fundational work on “Cybernetics”, and in 1955 he established contact with the Society for General Systems Research (now International Society for the Systems Sciences). In 1973 he began to give lectures and tutorials within the Argentine Scientific Society and in 1976 he founded and was elected president of the Argentine Association for the Study of Systems and Cybernetics (GESI), Argentine Branch of the ISSS, being presently its Honorary President. At that moment he established closed connections with the Spanish, Peruvian and Mexican systems Societies with the purpose to connect all of them, and propitiate the creation of other groups of study. He was distinguished as Honorary President of ALAS (Asociación Latinoamericana de Sistémica) in 2006.</p>,
            <p>François is a member, and since 2014 Fellow of the International Federation for Systems Research (IFSR), Austria, participating since its beginnings, many years ago, in its Meetings and in the Fuschl Conversations, organized by the Federation.</p>,
            <p>He is member of the International Honorary Committee of the World Organization of Systems and Cybernetics (WOSC), Luminary Member of the ISSS, Member of the International Academy of Systems and Cybernetics Sciences, and Golden Medal Norbert Wiener, from the American Society of Cybernetics for his contributions in this field of research.</p>,
            <p>His main subjects of interest and study are Economics, Sociology, Prospective, and Education, with a methodology based on Cybernetics and General Systems Theory, and Systemic-Cybernetic language and semantics.</p>,
            <p>He is author of books, among them, an Introduction to Prospective (a systemic approach to the subject, original work in French translated to Spanish); a Dictionary of General Systems Theory and Cybernetics (first in the Latin American world, in Spanish); Systemic approaches to the study of societies (in Spanish); The use of systemic-cybernetic models as a scientific methodology (in Spanish) numerous contributions in Proceedings of Symposia, tutorials of general systems theory and cybernetics in different versions, and many articles in periodicals devoted to Systems and Cybernetics.</p>,
            <p>He participates of editorial boards of main journals: Systems Research and Behavioral Science, Systems Practice, Revue Internationale de Systémique, among others.</p>,
            <p>He is author and founding editor of the International Encyclopedia of Systems and Cybernetics, editions 1997 and 1999, and second edition of 2004, enlarged in two volumes, which gives an overview of more than 40 years of developments in Systems and Cybernetics.</p>,
            <p>Many educational institutions in Argentina and abroad recognized his contributions and life work devoted in great part to the research and diffusion of the systemic methodology, and appoint him Honorary Professor. The book “Ensayos sobre Sistémica y Cibernética”, ed. Dunken, Buenos Aires, 2002, was compiled by members of GESI and supported by GESI and the IFSR in 2002, with contributions of systemists of all around the world in opportunity of his 80th. anniversary.</p>,
            <p>On February 2007 he has been awarded with the Norbert Wiener Medal of the American Society of Cybernetics for his contributions in this field of research.</p>
        ],
        [
            <h3>¿Qué es un contexto generativo transformador?</h3>,
            <p>Contextos cuyas dinámicas de interacción y propósitos habilitan la creación de nuevas interrelaciones y promueven transformaciones en las existentes. De manera que se propicia lo deseable y posible a partir de lo existente, tanto en el intorno como en el entorno. Es decir, se genera y nutre un proceso que va más allá de las fronteras del sistema.</p>,
            <p>El GESI, a partir de octubre del 2011, se ha propuesto un proceso de autoecoorganización en vistas a constituirse en una organización representativa de los conocimientos que desarrolla y difunde promoviendo dentro de la propia organización los procesos virtuosos pertinentes.</p>,
            <h4>Sus ejes, en una primera etapa, son:</h4>,
            <ul>
                <li>Valoración de la identidad y de la historia.</li>
                <li>Fortalecimiento organizacional y desarrollo de las capacidades institucionales.</li>
                <li>Fortalecimiento de la práctica colaborativa en la RED de pertenencia.</li>
                <li>Sitio WEB como condensador y difusor de la épica del GESI, sus valores, actividades y modos de ser y hacer.</li>
                <li>Propiciación, gestión y estudio de procesos sinergéticos de diversa índole como inspirador para las actividades actuales y proyectos en idea."</li>
            </ul>
        ],
        [
            <p>Es abierta y distribuída: Cualquier persona/institución puede formar parte en vistas a propósitos compartidos. Cada integrante (nodo) de la red es un productor de información y de conocimiento que contribuye a enriquecer el todo.</p>,
            <p>Colaborativa y participativa:Propende a la interacción entre sus integrantes y a generar proyectos conjuntos</p>,
            <p>Policéntrica y poliárquica: Cada nodo genera una subred. Sin embargo, en el ámbito interno del GESI tiene una jerarquía organizacional institucionalizada.</p>,
            <p>Está conformada por colaboradores fundacionales, amigos, y allegados así como los integrantes de instituciones relacionadas. Con algunos de ellos y con instituciones con las que compartimos un mutuo interés en relación con nuestras temáticas de investigación y prácticas mantenemos una estrecha colaboración, estableciendo proyectos específicos, ya sea informalmente, o mediante convenios marco.</p>,
            <p>El GESI ha contado desde sus comienzos con el valioso acompañamiento de investigadores, docentes y miembros que hicieron posibles su organización, el desempeño exitoso de sus actividades institucionales, su crecimiento, los contactos con importantes instituciones, y su influencia en el medio sistémico local, de nuestra región y del exterior.Personalidades colaborativas como las del Dr. Máximo Valentinuzzi, Lic. José A. Alvarez, Lic.Daniel Vila, Prof. Elsa Vaamonde, Ctdor.Isaac Bleger,Dante Falco,Dra.Dora Gregorio,M.I. Pagani,S. Miller, A. Giangrandi,Dr. Ricardo Guarinoni,Dra.Alicia Cittadini,Arqs. S. Flores, M. Ludueña y C. Sklowin,Edy Pichot, Graciela Daniel,E. Zwarycz, A. Giangrandi, Dres.Eduardo Vizer,Bronstein y Piscitelli, y tantos otros que deberían mencionarse en este listado agradecido, sin cuyos diversos aportes para fortalecer y dinamizar nuestras actividades sistémicas y cibernéticas, siempre renovadas y creativas, hubieran dificultado la dinámica y la continuidad mantenida por nuestro GESI desde los años 70’s hasta los más recientes. </p>,
            <p>Citaremos seguidamente a colaboradores fundacionales y también a los que destacamos por seguir compartiendo nuestras comunicaciones y actividades en curso </p>,
            <Accordion>
                <AccordionTab header={"Mechthild Adameit"}>
                    <p>Economista con trayectoria en cuestiones socioambientales en Europa, China y Uruguay: Organiza y coordina talleres de diseño de futuros. Apoya la construcción y gestión de redes de organizaciones y/o individuos. Facilita la integración de intereses diversos en proyectos compartidos. Mentoring para cuestiones laborales y nuevos entornos culturales y apoyo al aprendizaje. Con la Economista Silvia Zweifel es Co-fundadora del Grupo ECONOMÍA AMABLE: especialistas en innovación & bienvivir para propiciar una Economía Amable con las personas y el medio ambiente.</p>
                    <p>Contacto: mechthild.adameit@gmx.de</p>
                </AccordionTab>
                <AccordionTab header={"Walter Amado"}>
                    <p>Licenciado en Seguridad y Salud Ocupacional, Diplomado en Ergonomía Universidad de Concepción de Chile. Director de consultora Holos Ergonomía Ocupacional. Lidera equipos interdisciplinares. Profesor de grado y posgrado en Ergonomía en distintas universidades, Favaloro, UCALP, UNTREF y UNICEN. Expresidente de la Asociación de Ergonomía Argentina ADEA. Publicación de Macroergonomía con enfoque Sistémico en Libro: Ergonomía: Historia, miradas y aplicaciones de la ADEA (2019), y publicación en la revista científica INNOVA UNTREF (2020).</p>
                    <p>wamado@me.com</p>
                    <p>wamado@netwerk.com.ar</p>
                </AccordionTab>
                <AccordionTab header={"Ricardo Barrera"}>
                    <p>ryba.rb@ryba.com.ar</p>
                </AccordionTab>
                <AccordionTab header={"Augusto Barcaglioni"}>
                    <p>Docente universitario. Investigador en filosofía cognitiva y pedagogía constructivista. Doctor en Ciencias de la Educación (UCA). Consultor organizacional para el entrenamiento de personas y equipos de alta performance. Desarrollo de habilidades cognitivo-emocionales para el desarrollo del liderazgo. Creatividad para la resolución de problemas, el abordaje de la complejidad y la mejora del clima laboral y de los procesos de toma de decisión estratégica. Creador del Método “Cognitio” de Aprendizaje Acelerativo (MCA) para niveles gerenciales y de alta dirección. Premio de la Academia Nacional de Educación (1998).</p>
                    <p>Contacto: barcaglioni@fibertel.com.ar;</p>
                    <p> Más Info: www.barcaglioni.com, https://barcaglioni.blogspot.com.ar/</p>
                </AccordionTab>
                <AccordionTab header={"Fabiana Crespo"}>
                    <p>Periodista. Comunicadora de ideas y enfoques en ámbitos educativos, sociales, políticos, culturales e institucionales con un especial interés en los valores éticos. Vincula su motivación social con el trabajo individual, propiciatorio de bienestar, en el convencimiento que ambos procesos son complementarios. Con esa perspectiva pone el énfasis en elevar los estados de conciencia, el autoconocimiento, la autovaloración y el respeto. En síntesis, el desarrollo de subjetividades con posibilidades de autorrealización, lo que contribuye al logro de inserciones comunitarias que multipliquen oportunidades para todos.</p>
                    <p>Contacto: fabianacrespo@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Elisa Telma (Tina) Chisleanschi"}>
                    <p>Doctora en Psicología por la Universidad de Buenos Aires(UBA). Terapeuta Familiar. Investigadora en Aprendizaje de la Ética. Estudió psicología para profundizar en los mecanismos más íntimos del aprendizaje y poder contribuir a que sean procesos liberadores, creativos, enriquecedores, colaborativos y gozosos. Procesos que han sido indagados tanto en la consulta psicoterapéutica como en la cátedra universitaria y la investigación. Su interés por la educación reencuentra actualmente un nuevo sendero en la investigación de la formación de formadores en ética desde la perspectiva de la complejidad.</p>
                    <p>Contacto: tinachisle@hotmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Eduardo del Caño"}>
                    <p>Médico sanitarista de vasta trayectoria, colaborador fundacional y permanente de nuestro Grupo de Estudio, desde sus inicios a medidados de los año 70´s en la Sociedad Científica Argentina; miembro de la Asociación de Médicos Municipales de la ciudad de Buenos Aires y destacado estudioso y docente en diversos ámbitos. También se distinguió como bibliotecario profesional, y músico organista. Fallecido el 17 de Agosto de 2015.</p>
                </AccordionTab>
                <AccordionTab header={"Valeria Delgado"}>
                    <p>valeriaveronica@hotmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Néstor Domínguez"}>
                    <p>Marino e ingeniero electrónico. Profesor universitario e investigador de posgrado jubilado. Con experiencia de 15 años en estudios estratégicos. Especialista en sistemas navales y asesor en temas espaciales de la Armada y de la Casa de Cultura de Córdoba. Estudioso de la licenciatura filosofía hasta el ciclo final de la carrera. Todo ello, y las actividades correspondientes, le han despertado un interés por la sistémica, la cibernética y la prospectiva, que aplica y alterna con investigaciones sobre temas del mar, históricos, filosóficos y de defensa nacional. Al respecto escribe libros y artículos que se difunden en el país y el extranjero.</p>
                    <p>nestorides133@gmail.com</p>
                    <p>nadominguez80@yahoo.com.ar</p>
                </AccordionTab>
                <AccordionTab header={"Valeria Marina Elizalde"}>
                    <p>Licenciada en Historia (UNLPam) y Doctora en Historia (UNLP), con postgrado en Metodología en Investigación Científica (UNla). Posee certificado de Estudios Superiores de Francés (Alianza Francesa). Se dedica a Consultorías en Metodología Científica a demanda participa en proyectos científico-académicos de Nivel de Postgrado. Se desempeña como docente titular de la Maestría en Gestión Empresaria; integra entidades científicas nacionales e internacionales. </p>
                </AccordionTab>
                <AccordionTab header={"Gladys Noemí Figueredo de Bassa"}>
                    <p>Educadora. Especialista en integración curricular bilingüe. Asesora pedagógica para la creación de escuelas bilingües en distintos lugares del país. Su dedicación al estudio e investigación en el área de la educación surge de la experiencia con niños de espectros socio-económicamente opuestos de la sociedad. Esto la lleva a abocarse a la formación docente de quienes se interrogan ante las necesidades y capacidades de sus educandos, se sienten cómodos ante la incomodidad, y asumen el desafío de buscar soluciones creativas y operativas. Es por ello que ha encontrado en el pensamiento sistémico y la complejidad nutrientes potentes para su reflexión y práctica.</p>
                    <p>Contacto: gnfbassa@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Charles François"}>
                    <p>Investigador y docente de Sistémica y Cibernética. Es mentor y fundador del GESI; Propició la enseñanza y difusión de los conceptos, y la creación de grupos de interés sistémico y cibernético en la región Latinoamericana estableciendo valiosas vinculaciones entre éstos y varias instituciones sistémicas del exterior. Es autor de obras de referencia y de publicaciones en ediciones locales y extranjeras. Es Presidente Honorario del GESI y de la Asociación Latinoamericana de Sistémica(ALAS); profesor honorario del ITBA, miembro de honor del Business Science Laboratory de Italia y de Systèmes et Organisations de Bélgica, miembro luminaria de la International Society for the Systems Sciences (ISSS) y miembro fellow de la International Federation for Systems Research (IFSR) y académico de la International Academy of Systems Science and Cybernetics. Nuestro mentor falleció el 31 de julio de 2019</p>
                    <p>El Archivo de Antecedentes, Trabajos y Actuaciones del Prof. Charles François, libros de su biblioteca, así como el Archivo del GESI (Grupo de Estudio de Sistemas Integrados) y copia de sus ediciones,  forman parte por Convenio de Donación Legal, del Patrimonio de la Biblioteca Nacional Mariano Moreno, representada en el Acto por su Director el Prof, Juan Sasturain y su esposa, la Sra. Gloria Nazer de François, firmado a los 30 dias del Mes de Junio de 2022.</p>
                    <p>Contacto vigente, Gloria de François: françoischg@fibertel.com.ar</p>
                </AccordionTab>
                <AccordionTab header={"Ricardo Frías"}>
                    <p>rfrias@entdf.edu.ar</p>
                </AccordionTab>
                <AccordionTab header={"Walter Fritz"}>
                    <p>Ingeniero y estudioso de robótica, docente en diversos ámbitos de la Informática, brindó entre otras instituciones de enseñanza, valiosos aportes al GESI en sus actividades, así como genero apoyo a su difusión durante muchos años. Walter falleció el 12 de Abril de 2021</p>
                </AccordionTab>
                <AccordionTab header={"Ernesto Grün"}>
                    <p>Abogado y mediador. Pintor aficionado. Doctor en Derecho y Ciencias Sociales (UBA). Por 45 años ha sido profesor de Teoría General del Derecho y Filosofía del Derecho, Facultad de Derecho (UBA). Ex Presidente de la Asociación Argentina de Teoría General de Sistemas y Cibernética y Ex Vicepresidente de la Asociación Latinoamericana de Sistémica (ALAS). Dicta cursos y conferencias sobre sistémica y cibernética, particularmente en su aplicación al derecho en países de la región. Es autor de libros y numerosos artículos. Es socio de la International Society for the System Sciences y miembro del Consejo de Redacción de la Revista Telemática de Filosofía del Derecho.</p>
                    <p>grun.ernesto@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Ricardo Guibourg"}>
                    <p>Abogado y docente investigador universitario. Doctor en Derecho y Ciencias Sociales UBA). Profesor titular emérito de Teoría General del Derecho y Filosofía del Derecho (UBA); Director del Departamento y de la Maestría de Filosofía del Derecho (UBA); Profesor invitado en el Doctorado de la Universidad de Mar del Plata. Ha sido profesor en: Universidad Católica (Paraguay), Universidad de Génova (Italia) y Universidad de Brescia (Italia). Ex Juez de la Cámara Nacional de Apelaciones del Trabajo. Ex Presidente de la Asociación Argentina de Filosofía del Derecho. Ex Presidente de la Asociación Argentina de Derecho del Trabajo y de la Seguridad Social. Ex Presidente de la Asociación Argentina de Teoría General de Sistemas y Cibernética. Es Vicepresidente de IVR.</p>
                    <p>pachigui@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Enrique Herrscher"}>
                    <p>Docente. Consultor y escritor. Montañista retirado. Contador Público y Licenciado en Administración (UBA); Doctor en Administración (UNMisiones); Directivo y asesor de empresas grandes y PYMEs. Profesor “honorario ad vitam” de la UBA y Profesor de Postgrado (MBA) en cinco universidades nacionales argentinas. Ex Presidente de la International Society for the Systems Sciences (ISSS). Co-fundador y ex Vicepresidente de la Asoc. Latinoamericana de Sistémica (ALAS). Académico de la International Academy of Systems Science and Cybernetics. Titular del En Nuestro colaborador fundacional, falleció el 30 de diciembre de 2019</p>
                </AccordionTab>
                <AccordionTab header={"Alexander Laszlo"}>
                    <p>57º. Presidente y Chair del Consejo de Presidentes de la Sociedad Internacional de las Ciencias de Sistemas (ISSS). Dirección de la Innovación Sistemica de la Escuela de Postgrado del ITBA, Argentina. Presidencia de Syntony Leadership y ex Director del Programa de Doctorado en Administración de la Escuela de Graduados en Administración y Dirección de Empresas (EGADE-ITESM), México. Enseña liderazgo evolutivo, colaboración y pensamiento sistémico en una variedad de MBAs y programas de Doctorado a nivel internacional.</p>
                    <p>alexander@sytonyquest.org</p>
                    <p>alexander.laszlo@bcsss.org</p>
                </AccordionTab>
                <AccordionTab header={"Antonio Anselmo Martino"}>
                    <p>Docente. Profesor emérito de la Universidad del Salvador. Profesor Emérito de la Universidad de Pisa. Miembro de la Academia Nacional de Derecho y Ciencias Sociales de Córdoba. Miembro asociado del Center for Artificial Intelligence and Cognate learning of the University of Greenwich, Miembro de la “European Association of Legislation”, Miembro del Instituto de Derecho Constitucional de la Academia de Derecho y Ciencias Sociales de Buenos Aires. Director del Manual del Digesto Argentino.</p>
                    <p>Contacto: aamartino@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Sergio Moriello"}>
                    <p>sergiomoriello@hotmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Gloria Nazer"}>
                    <p>Docente, bibliotecaria nacional y documentalista. Desde sus aprendizajes y actividades laborales en instituciones de investigación, crecieron su interés y sus posibilidades para brindar variados aportes personales también a espacios especialmente valorados y más cercanos dedicados al estudio y la difusión de conceptos y prácticas que apuntan, entre otras premisas y con visión amplia, a la comprensión de los valores culturales, la convivencia y el respeto para el fortalecimiento del tejido social y las relaciones más armoniosas entre el humano, su hábitat y la naturaleza. En tal sentido, su colaboración para con el GESI en las actividades docentes, editoriales y de comunicación se remontan a finales de los años 70´s; y su participación como apoyo a la realización de trabajos y ediciones de Charles François, así como la difusión de las mismas, ha sido y sigue activa y muy reconocida, en lo personal e institucional.</p>
                    <p>françoischg@fibertel.com.ar</p>
                    <p>gesicontacto6@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Rodolfo Reginaldo Porley Corbo"}>
                    <p>Comunicador Investigador Independiente c.i.i. uruguayo-sueco Con experiencias de medio siglo en trece países, 35 medios y otras tantas funciones, una veintena de roles profesionales multi-mediáticos, incluyendo investigación e interacción con la enseñanza, en particular la educación ambiental. Coautor de proyectos y organizaciones culturales civiles, con enfoque integrador resumido como Uruguay Entero-Sur, basados en el diálogo profundo extra académico. Con pensamiento de complejidad y transdisciplinariedad, y una alianza critica de movimientos sociales, científicos y técnicos. Postula que el derecho de informar y ser informado se actualice como DD.HH. a la Comunicación, potenciado como bien público, compromiso ético-social y otros requisitos.</p>
                    <p>Contacto: porley@chasque.net</p>
                </AccordionTab>
                <AccordionTab header={"José María Romero Maletti"}>
                    <p>Ingeniero Industrial (UBA), profesor universitario (FI de UBA y UCA), en temas de dirección. Investigador. Ha desarrollado: un nuevo paradigma de objetivos y políticas, la transferencia tecnológica del FAST (Functional Analysis System Technique), aplicada a procesos de conducción; la teoría del suceso de la comunicación ampliando la del proceso; una teoría de la creatividad; mejoró el modelo de Kepner & Tregoe; un modelo matricial del planeamiento estratégico. Organizó el IV Congreso de Políticas de Ingeniería del CAI en el Area Educación. Entre sus publicaciones se destaca: “La dirección en tiempos de cambio”.</p>
                </AccordionTab>
                <AccordionTab header={"José Luis Roces"}>
                    <p>Docente y gestor de cambios institucionales.Ingeniero Industrial (UBA) y Posgrado en Management Science (Templeton College,Oxford). Profesor en Dirección,Organización y Liderazgo (UBA,UADE,UDESA,ITBA) desde hace 40 años. Ocupó cargos directivos, como Rector (ITBA) Director (Organización Techint, Banco Santander Rio y otros) Autor de libros, artículos, conferencista y jurado internacional en temas de Educación, Pensamiento sistémico y responsabilidad social empresaria. Apasionado de la educación como proceso de transformación de la conciencia, para lograr una sociedad perdurable.</p>
                    <p>jorces@itba.edu.ar</p>
                </AccordionTab>
                <AccordionTab header={"Eva María Sarka"}>
                    <p>Docente e investigadora, extensionista. Dedicada a la formación de formadores en universidades y diversas organizaciones. Promueve programas y proyectos interdisciplinarios e interinstitucionales a nivel nacional y L.A. en las que la RED actúa como metáfora. Diseña espacios de aprendizaje vivenciales (comunidades de aprendizaje), orientados al desarrollo del potencial integral y creativo del ser humano en interrelación responsable con sus contextos. Promueve la emergencia del observador-participante-protagonista para que la plenitud subjetiva entrame con la del sujeto colectivo local, regional y planetario, con mirada anticipatoria. Su sustento ético es el respeto hacia la diversidad y la congruencia en el propio sentipensar-hacer. Su visión es re-unir el camino del conocimiento con el de la vida.</p>
                    <p>Contacto: eva.sarka@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Fabián Szulanski"}>
                    <p>Ingeniero Civil (UBA) y MPhil -c- de Dinamica de Sistemas (Bergen, Noruega). Facilitador de creación de valor. Coach de aprendizaje y de toma de decisiones. Mentor de expertos. En el ITBA, fue director del Centro de Dinámica de Sistemas; y creador y director del Learning Lab. Actualmente en la red de desarrollo del Departamento de Innovación Educativa. Creador de metodologías de agregado de valor, siempre de manera integrativa. Ha participado en encuentros regionales e internacionales de Dinámica de Sistemas, también como evaluador.</p>
                    <p>fabian.szulanski@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Fernando Zabala"}>
                    <p>Ingeniero Químico (U.T.N. Fac. Reg. La Plata -1987-), y especialización de posgrado en Ingeniería Gerencial en la misma Casa (2013).</p>
                    <p>Profesor Titular de las Cátedras “Pensamiento Sistémico”, “Administración General” y “Conducción del Personal” en la misma institución universitaria. En la Maestría en Ingeniería Ambiental de dicha casa, docente del módulo en “Gestión Integral de los Residuos Sólidos Urbanos”. Director o codirector de tesistas de maestrando en ésta y otras universidades argentinas y extranjeras.</p>
                    <p>Docente del Centro de Desarrollo de Competencias (para funcionarios y mandos medios) del Instituto Provincial de Administración Pública Prov. de Buenos Aires (I.P.A.P.), en los módulos “Visión Estratégica”, “Liderazgo” y “Toma de Decisiones”.</p>
                    <p>Acreditado como Profesional Senior Experto en “Producción Limpia” y “Control de la Contaminación Industrial” por ante el B.I.D.</p>
                    <p>Consultor independiente en: Liderazgo; Estrategia/Prospectiva; Producción Limpia y Gestión Integral de los R.S.U.</p>
                    <p>En el Sector Público he sido Jefe de Personal, y Jefe de Recursos Naturales y Medio Ambiente</p>
                    <p>fcristianzabala@gmail.com</p>
                </AccordionTab>
                <AccordionTab header={"Silvia Zweifel"}>
                    <p>Economista con larga experiencia en el sector financiero, en equipos de alta performance en negocios y riesgos. Articula arte y ciencia para propiciar innovaciones sociales significativas: Coordina grupos de cocreación de futuros deseables. Desarrollo de equipos de pensamiento innovativo y resolución de problemas por abordajes no habituales. Mentoring de conversaciones significativas en contextos de reflexión para la construcción de preguntas-respuestas y la toma de decisiones para individuos y organizaciones. Propicia una Economía Amable con las personas y el medio ambiente: es coordinadora del Grupo ECONOMÍA AMABLE integrado por especialistas en innovación & bienvivir.</p>
                    <p>silviazweifel@gmail.com; Más info: https://silviazweifel.com.ar</p>
                </AccordionTab>
            </Accordion>,
            <h2>INSTITUCIONES RELACIONADAS</h2>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://academiadelmar.com.ar"}>ACADEMIA del Mar</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://www.airs.it"}>AIRS Associazione Italiana per la Ricerca sui Sistemi</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.afscet.asso.fr"}>AFSCET Association Française de Science des Systèmes</a>,
            <span className={"no_link"}>ALAS Asociación Latinoamericana de Sistémica</span>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.asc-cybernetics.org"}>ASC Sociedad Americana de Cibernética</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.bcsss.org/de/"}>BERTALANFFY Center for Systems and Cybernetics</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://glossarium.bitrum.unileon.es/glossary"}>BITrum - Universidad de León</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://cegesco.blogspot.com.ar"}>CEGESCO</a>,
            <a href={"mailto:rbya_rb@rbya.com.ar"}>CESDES Centro Patagónico de Estrategias Sistémicas para el Desarrollo</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://www.mmm.ulg.ac.be/"}>CAOS Centro de Hiperincursión y la anticipación en los sistemas ordenados</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.complejidadhabana.com"}>Cátedra de Estudio de la Complejidad del Instituto de Filosofía de La Habana</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.transcomplejidad.org"}>Cátedra de Complejidad y transdisciplinariedad Educativa</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://www.salvador.edu.ar/vrid/ead/cet.htm"}>Cátedra Itinerante de Complejidad Edgar Morin</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.acasa.upenn.edu"}>Centro Ackoff</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://ciret-transdisciplinarity.org"}>CIRET Centro Internacional de Investigaciones y Estudios Transdisciplinarios</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.iigss.net"}>IGSS Instituto Internacional de Estudios General de Sistemas</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.pensamientocomplejo.com.ar"}>Comunidad de Pensamiento Complejo</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://aedojas.com.ar/"}>Alberto E. Dojas</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://claude.rochet.pagesperso-orange.fr/"}>La Complejidad implícita C. Rochet</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://comdig.unam.mx"}>Complexity Digest</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.elapdis.org"}>ELAPDIS Escuela Latinoamericana de Pensamiento y Diseño Sistémico</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.silviazweifel.com.ar"}>Economía Amable.Épica del aprendizaje personal-colectivo</a>,
            <a href={"mailto:bububeccar@yahoo.com.ar;sherrera@unse.edu.ar"}>FUNDARINGENIO Fundación para el Talento y el Ingenio</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.desdeamerica.org.ar"}>Fundación Desde América</a>,
            <a href={"mailto:jdian@unileon.es"}>GlossaLab</a>,
            <a href={"mailto:dantepm@usp.br"}>Grupo Brasileño de Sistemas, Prof. Dante Pinheiro Martinelli</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://sistemica.uniandes.edu.co"}>Grupo de Investigación TESO Universidad de los Andes, Bogotá</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.hsss.gr/eng/index.html"}>HSSS Sociedad Helénica para sistémicas Estudios</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.iasvirtual.net"}>IAS Instituto Andino de Sistemas</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.isss.org/world"}>ISSS Sociedad Internacional para las Ciencias de Sistemas</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://ifsr.org"}>IFSR Federación Internacional para la Investigación de Sistemas</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.itba.edu.ar"}>ITBA Instituto Tecnológico de Buenos Aires</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.complexsystems.org"}>Instituto para el Estudio de Sistemas Complejos</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.sepi.esimez.ipn.mx/sistemas/"}>Instituto Politécnico Nacional, Méjico, Unidad Zapatenco</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://sociocybernetics.org/"}>ISA Asociación Internacional de Sociología</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.systemsinstitute.com"}>ISI International Systems Institute</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://jmonzo.blogspot.com"}>Instituto Internacional de Informática y Sistémica John Warfield</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.gmu.edu"}>La solución Wandwaver</a>,
            <a href={"mailto:coordinacion.ps.unr@gmail.com;cocofuks@gmail.com"}>Maestría en Pensamiento Complejo,Universidad Nacional de Rosario,Argentina</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.multiversidadreal.org"}>Multiversidad Mundo Real Edgar Morin</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.wcsaglobal.org"}>Mundial de la Academia de Ciencias de la Complejidad</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.pegasuscom.com"}>Pegasus Communications Inc.</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.ijsci.org"}>Pentagrama Centro de Investigación</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.barcaglioni.blogspot.com.ar"}>Pensamiento Creativo</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://pespmc1.vub.ac.be/"}>Principia Cibernética</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.isss.org/primer/primer.htm"}>Proyecto Primer</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.theorsociety.com"}>Sociedad de Investigación Operativa</a>,
            <a href={"mailto:rrcora@sesge.org"}>Sociedad Española de Sistemas Generales</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.uv.es/pla/SESGE/index.html"}>Skliar, Osvaldo: Arte digital</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.systemdynamics.org"}>System Dynamics Society</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://www.tendencias21.net"}>Tendencias Científicas</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://www.ues-eus.eu/fr/accueil-francais/"}>Unión Europèene de Systemique</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"http://www.unp.edu.ar/"}>Universidad Nacional de la PATAGONIA San Juan Don Bosco</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.untdf.edu.ar"}>Universidad Nacional de TIERRA DEL FUEGO Antártida e Islas del Atlántico Sur</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.frba.utn.edu.ar"}>UTN Universidad Tecnológica Nacional – Buenos Aires</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.frrg.utn.edu.ar"}>UTN Universidad Tecnológica Nacional – Regional Río Grande extensión Ushuaia</a>,
            <a target={"_blank"} rel={"noreferrer noopener"} href={"https://www.cybsoc.org/wosc"}>WOSC Organización Mundial de Sistemas y Cibernética</a>
        ],
        [
            <h2>Prof. Dora Lía Gregorio</h2>,
            <img src={doraGregorio} alt={"foto de dora gregorio"}/>,
            <p>La Prof. Dora Lía Gregorio (1935-2016) egresada en Filosofía de la Facultad de Humanidades y Ciencias de la Educación de la Universidad Nacional de La Plata en 1969, se dedicó al conocimiento de la Lógica, la Lingüística y la Sistémica. Con maestría en Educación Psico-informática de la Facultad de Ciencias Sociales de la Universidad Nacional de Lomas de Zamora, Investigadora tesista UBACYT entre el 95 y el 97 y 98-2000.; “Didáctica y Epistemología I y ll” en el Ciclo Básico Común de la Universidad Nacional de Buenos Aires y el Liceo Naval, dictó asimismo la materia Introducción al Conocimiento Científico en el Instituto de Enseñanza Media ISFDYT Nº 9, en otros institutos de enseñanza media de la ciudad de Buenos Aires, y en el Ciclo Básico de la UBA: Didáctica y Epistemología I y II y publicó diversos artículos, manuales y libros.</p>,
            <p>De su exhaustiva indagación en la Semántica de la TGS y la Cibernética, la Sección Miscelánea del GESI ofrece un texto correspondiente a su "Glosario de Conceptos Básicos de Teoría General de los Sistemas para ser aplicados a las Ciencias” publicado en nuestra edición: Ensayos sobre Sistémica y Cibernética. Ed. Dunken, Buenos Aires, 2003.</p>,
            <h2>Charles François</h2>,
            <h3>Homenaje colectivo</h3>,
            <a href={homenajeCharles}>Edición de homenaje colectivo a Charles François - PDF</a>,
            <h3>Tributo por Silvia Zweifel - Economía Amable & Futuros Deseables</h3>,
            <p>Charles François, ejerció un liderazgo inspirador, alentando la ampliación de las fronteras del conocimiento…</p>,
            <iframe src="https://www.youtube-nocookie.com/embed/_meELVRtzy8"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>,
            <h2>Prof. Enrique Herrscher</h2>,
            <p>CONDOLENCIAS RECIBIDAS POR EL FALLECIMIENTO DE NUESTRO SOCIO FUNDADOR</p>,
            <h3>José Luis Roces escribió:</h3>,
            <p>Estimados colegas del GESI, en el día de la fecha a través de un aviso fúnebre me he informado que el pasado 30/12/19 ha fallecido nuestro dilecto y recordado miembro fundador Enrique Herrscher.</p>,
            <p>En lo institucional, el recuerdo por todos compartido y valorado de una de las personas que distinguió la historia y la trayectoria nacional e internacional de GESI. En lo personal, mi reconocimiento por quien en 1978 me introdujo al pensamiento sistémico y a conocer a Charles François. Con él hemos vivido la confraternidad de la YMCA (Young Men Christian Association) por décadas.</p>,
            <p>Al compartir estas memorias, seguramente cada uno de ustedes encontrará un momento para su digno recuerdo.</p>,
            <h3>Gloria Nazer escribió:</h3>,
            <p>Ante esta tristísima noticia acompaño a cada uno de ustedes en el pesar de su partida y transmitir sinceras condolencias a su apreciada familia, por lo cual también copio su dirección email en el presente mensaje.</p>,
            <p>Informaré de su fallecimiento al Secretario Académico de la IASCYS a quien ya estoy copiando.</p>,
            <p>Enrique partió de entre nosotros a diez días de su último cumpleaños 89…pero tantos años de compartir proyectos, vicisitudes e intercambios con sus colegas y amigos, regresan a nosotros evocándolo en plenitud en esta imagen de momentos felices en nuestro hogar, que les adjunto. Afectuosos saludos a todos.</p>,
            <h3>Ricardo Barrera escribió:</h3>,
            <p>Fue mi tutor, me impulsó, me enseñó, brindó su amistad y afecto, me permitió colaborar en muchos escritos. Los que tuvimos el privilegio de su trato, tenemos la obligación de proteger y difundir su legado. Bendito seas, Enrique.</p>,
            <h3>Eva Sarka escribió:</h3>,
            <p>Cuando recibí la noticia de la partida de Enrique no pude dejar de imaginar el encuentro en otras "dimensiones” con Charles. Se agolparon en mi mente las diferentes facetas de Enrique...siempre disponible y dispuesto con su sonrisa suave a las "bondades" de la Sistémica en el mundo organizacional. Su metáfora predilecta era la de escalar una montaña…cosa que había experimentado en su propia vida y reflejado en sus numerosos libros. También lo recuerdo serio y terminante cuando se producía alguna discusión entre amigos o colegas sistémicos. ¿Por qué? porque para él la Sistémica era una concepción de vida… que implicaba una ética en los comportamientos y en los modos de relacionarse.</p>,
            <p>Estimado Enrique, decidiste hace años alejarte silenciosamente de los diferentes ámbitos en que transcurrió tu vida, y así te fuiste…humildemente.</p>,
            <p>Te extrañamos entonces y te seguiremos extrañando. Que tu esposa e hijos encuentren consuelo.</p>,
            <h3>Jorge Llanos Panduro escribió:</h3>,
            <p>Penosa noticia. Tuvimos en el Perú hace ya varios años al profesor Enrique Herrscher, quien nos dejó impregnada una visión impresionante del manejo sistémico integral de la organización, tema para el cual lo invitamos a la Universidad Nacional de Ingeniería. Nuestro aprecio a todos los que como él contribuyeron y aún siguen contribuyendo al despliegue de Pensamiento de Sistemas en América Latina y en el mundo. Su partida nos deja muy dolidos, pero con el ánimo de hacer honor a las enseñanzas que dejó en muchos de nosotros. Un abrazo a su familiares y amigos a quienes les duele su lamentable partida.</p>,
            <h3>Gary Metcalf, USA escribió:</h3>,
            <p>It is indeed sad news, after hearing about our loss of Charles not so long ago…Two strong figures in the universe would not seem to just disappear without leaving shadows of some kind…</p>,
            <h3>Stuart Umpleby escribió;</h3>,
            <p>This is indeed very sad news. He was a pillar of the systems community in Latin America and the world.</p>,
            <h3>Pierre Bricage, Secretario de la IASCYS escribió:</h3>,
            <p>Dear Academicians,</p>,
            <p>The Rector of the ITBA, Prof. J.L.Roces, had to inform about the death of Prof. Enrique Herrscher on December 30, 2019. It was ten days after his last birthday on December 20.</p>,
            <p>The argentine and latin american systemic community is very moved by this recent disappearance of a great argentine contributor to the study, activities and dissemination of systemic concepts and ideas, and an appreciated friend of many of them.</p>,
            <h3>Ricardo Guibourg escribió:</h3>,
            <p>Estimados colegas y amigos:</p>,
            <p>Lamento muchísimo la partida del amigo Herrscher. Recuerdo las largas conversaciones que tuve con él cuando los dos estábamos en la comisión directiva del GESI, y cuánto aprendí de su experiencia.</p>,
            <p>Un cordial saludo a todos, y a la memoria de nuestro amigo.</p>,
            <h3>Dante Pinheiro Martinelli escribió:</h3>,
            <p>Obrigado por nos transmitir essa notícia, embora seja muito triste.</p>,
            <p>A comunidade sistémica perde muito com a sua partida, responsável que foi pelo grande desenvolvimento do pensamento sistémico na América Latina, juntamente com Charles François, que infelizmente também nos deixou recentemente.</p>,
            <p>Enrique foi o grande responsável por nos apoiar e cobrar a criação dos Congressos Brasileiros de Sistemas, desde 2005 e já com 14 edições. Ele esteve presente, como palestrante em 2005, e Charles François em 2006.</p>,
            <p>Que Deus o proteja e conforte a família! Um grande abraço a todos!!!</p>,
            <h3>Hernán Lopez Garay escribió:</h3>,
            <p>Mis más sinceras condolencias a los familiares de Enrique, a la comunidad sistémica en general, y del GESI en particular, a la cual le hizo tan importantes aportes.</p>,
            <h3>Ricardo Rodriguez Ulloa escribió:</h3>,
            <p>Con gran pesar recibo la triste noticia del fallecimienot de Enrique, apreciado amigo y gran sistemista de talla internacional, Ex-Presidente de la ISSS en el 2004.</p>,
            <p>Con la partida de Enrique, la Sistémica Latinoamericana pierde a uno de sus principales líderes y exponentes de este pensamiento. Gran enstusiasta, interesado permanente en la sistémica, excelente docente, autor de una cantidad apreciable de obras sistémicas, pero especialmente, una persona de elevada calidad humana.</p>,
            <p>Miembro Honorario del IAS desde el 2004, en que lo tuvimos en Lima, en ocasión del XVI Congreso Latinoamericano de Estrategia, guardaremos su memoria y los gratos momentos compartidos con él, en las diversas ocasiones que tuvimos el gusto de estar juntos.</p>,
            <p>Mis condolencias a sus familiares y a los amigos del GESI, por tan irreparable pérdida.</p>,
            <h3>Ricardo Araujo escribió:</h3>,
            <p>Muchas gracias por mantenerme informado. También lamento profundamente la pérdida de este miembro muy importante del GESI, que tanta difusión ha dado con sus libros a la actividad que nos ocupa. Deseo también transmitir mis condolencias a su familia que siempre lo acompañó y contuvo. Al resto de los miembros de esta Institución les envío un cordial saludo.</p>,
            <h3>Dr. Michael Jackson escribió:</h3>,
            <p>I was so sorry to hear of Enrique’s passing. Heartfelt condolences to you and to all his family and friends in Argentina.</p>,
            <p>Enrique was always extremely helpful and encouraging to me during my career. He was a kind and gentle man. I well remember a wonderful trip to Buenos Aires when you and he entertained me so well. I still have an oil painting of the La Boca district on my wall.</p>,
            <p>The world has lost a great systems thinker and a wonderful man. All best wishes but in great sorrow, Mike.</p>,
            <h3>Tina Chisleanschi escribió:</h3>,
            <p>Queridos amigos del mundo sistémico</p>,
            <p>Nos toca hoy despedirnos de uno de los grandes, que como Charles François, lo fue tanto por su pensamiento como por su ética: Enrique Herrscher.</p>,
            <p>Por suerte podemos recoger gran parte de su aporte reflexivo en los numerosos libros que publicó.</p>,
            <p>Por eso me pareció dejar en su homenaje un par de anécdotas que pueden, como seguramente atesorarán tantos otros, hablar de su entusiasmo por la vida, la apuesta al pensamiento colectivo y la solidaridad, una solidaridad discreta y humilde.</p>,
            <p>Estábamos esperando en un aula de una Institución que acogía las reuniones del GESI, y mientras esperábamos a los convocados, Enrique siempre tenía una sonrisa y algo para compartir. La charla derivó en su experiencia de montañista y ahí nomás, se subió a una silla y luego a un pupitre y fue casi saltando de pupitre en pupitre para apoyar con hechos sus palabras. Daba la impresión de la espontaneidad de un niño: conservaba fresca la alegría de jugar…Tendría en ese momento cerca de ochenta años…</p>,
            <p>En otra conversación simplemente ofreció regalarme todos sus libros…</p>,
            <p>Fue el gestor de las Conversaciones del Extremo Sur. En una de sus versiones, un invitado de un país vecino, manifestó su interés por asistir pero su imposibilidad económica. Cuando Enrique se enteró, le facilitó todos los medios para llegar y pudo estar con nosotros…</p>,
            <p>Y así, en cada encuentro, me iba generando cariño y ternura.</p>,
            <p>Puedo decir que me despido de un ser querido.</p>,
            <h3>Markus Schwaninger escribió:</h3>,
            <p>Enrique Herrscher was a very good colleague of mine. We worked together on some projects. For example, he lectured at my University in a new course “Doing Business in Latin America”.</p>,
            <p>Now, I would like to write his wife Sonia a letter of condolences.</p>,
            <p>I would be grateful if you could communicate me her postal address.</p>,
            <p>Sincerely, and with fond recollections of Charles.</p>,
        ]
    ]

    return (
        <div id={"about"}>
            <ListScroll titles={titles} content={content}/>
        </div>
    )
}