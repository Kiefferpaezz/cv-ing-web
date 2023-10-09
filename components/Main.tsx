import { Perfil } from './Perfil'
import { Conocimientos } from './Conocimientos'
import { Educacion } from './Educacion'
import { Portafolio } from './Portafolio'

const Main = () => {
  return (
        <main className=" bg-[#f0f0f6]  w-full flex flex-col gap-8">
            <Perfil photo="/img/foto2.png" alt="Kieffer Paez" />
            <Conocimientos/>
            <Educacion/>
            <Portafolio/>
        </main>

  )
}

export { Main }
