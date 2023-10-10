import { CardEducacion } from './CardEducacion'
import { Line } from './Line'
import { Titulo } from './Titulo'

const Educacion = () => {
  return (
        <div className="flex flex-col gap-10">
            <Titulo
                title="Educación"
                subtitle="Formación académica y cursos complementarios."
            />
            <div className="bg-white w-full p-10">
                <CardEducacion
                    institution="Universidad de Antioquia"
                    ocupation="Estudiante"
                    date="2018 - Actualidad"
                    title="Pregado en ingeniería de sistemas"
                    description="Me encuentro cursando el 8vo nivel de ingeniería de sistemas con situación académica sobresaliente y dentro del tercio superior."
                />
                <Line />
                <CardEducacion
                    institution="Universidad Pontificia Bolivariana"
                    ocupation="Estudiante"
                    date="Oct 2022 - Dic 2022"
                    title="Ruta de Formación Especializada en Programación Web"
                    description="Curso de maquetación web con HTML, CSS y JavaScript. Además de un componente de innovación e inglés."
                />
                <Line />
                <CardEducacion
                    institution="InEnglish SchoolLab"
                    ocupation="Estudiante"
                    date="2016 - 2017"
                    title="Tecnica en inglés"
                    description="Durante este período, adquirí habilidades lingüísticas sólidas y mejoré mi dominio del idioma inglés de manera significativa. "
                />
                <Line />
                <CardEducacion
                    institution="Institución Educativa la Frontera"
                    ocupation="Estudiante"
                    date="2012 - 2017"
                    title="Bachiller académico"
                    description="Cursé con éxito y obtuve mi título de Bachiller académico. Esta etapa de mi educación me proporcionó una base sólida en una amplia gama de materias académicas y habilidades clave."
                />
            </div>
        </div>
  )
}

export { Educacion }
