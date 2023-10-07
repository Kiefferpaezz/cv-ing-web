import { Perfil } from "./Perfil"
import { Conocimientos } from "./Conocimientos"
import { Educacion } from "./Educacion"

const Main = () => {
    return (
        <main className=" bg-[#f0f0f6] ml-[335px] mr-[120px] w-full flex flex-col gap-8">
            <Perfil photo="/img/foto2.png" alt="Kieffer Paez" />
            <Conocimientos/>
            <Educacion/>
        </main>

    )
}

export { Main }