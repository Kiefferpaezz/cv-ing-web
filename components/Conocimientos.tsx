import { CardConocimientos } from './CardConocimientos'
import { TbDeviceImacCode } from 'react-icons/tb'
import { DiScrum } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { BsRobot } from 'react-icons/bs'
import { SiCanva } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { Titulo } from './Titulo'

const Conocimientos = () => {
  return (
        <div className="flex flex-col gap-10">
            <Titulo title="Conocimientos" subtitle=" Habilidades y destrezas que he desarrollado durante mi período de educación universitaria en diversas áreas." />
            <div className="flex flex-col items-center  gap-3">
                <div className="flex gap-3 w-full ">
                    <CardConocimientos title="Desarrollo Web" description="Blog, E-Commerce" icon={TbDeviceImacCode} />
                    <CardConocimientos title="UI/UX Desingn" description="Mobile App, Website Design" icon={FiFigma} />
                    <CardConocimientos title="Machine Learning" description="Análisis de datos y desarrollo de modelos predictivos y analíticos" icon={BsRobot} />
                </div>
                <div className="flex gap-3">
                    <CardConocimientos title="Github" description="Gestión de repositorios de código y colaboración en proyectos de desarrollo" icon={AiFillGithub} />
                    <CardConocimientos title="Metodologías Ágiles" description="Metodología Scrum para la gestión de proyectos" icon={DiScrum} />
                    <CardConocimientos title="Publicidad" description="Diseño de contenido para redes sociales" icon={SiCanva} />
                </div>
            </div>
        </div>
  )
}

export { Conocimientos }
