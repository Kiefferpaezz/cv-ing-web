import { CardEducacion } from "./CardEducacion"
import { Line } from "./Line"
import { Titulo } from "./Titulo"

const Educacion = () => {
    return (
        <div className="flex flex-col gap-10">
            <Titulo
                title="Educación"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."/>
            <div className="bg-white w-full p-10">
                <CardEducacion
                    institution="Universidad de Antioquia"
                    ocupation="Estudiante"
                    date="2018 - Actualidad"
                    title="Pregado en ingeniería de sistemas"
                    description="Me encuentro cursando el 7to nivel de ingeniería de sistemas con situación académica sobresaliente y dentro del tercio superior."
                />
                <Line />
                <CardEducacion
                    institution="InEnglish SchoolLab"
                    ocupation="Estudiante"
                    date="2016 - 2017"
                    title="sisas1"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
                <Line />
                <CardEducacion
                    institution="Institución Educativa la Frontera"
                    ocupation="Bachiller académico"
                    date="2012 - 2017"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
            </div>
        </div>
    )
}

export { Educacion }