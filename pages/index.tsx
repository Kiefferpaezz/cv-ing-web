import { SideLeft } from '../components/SideLeft'
import { SideRight } from '../components/SideRight'
import { Main } from '../components/Main'

const Index = () => {
  return (
    <div className=" flex gap-[20px] min-h-screen bg-[#f0f0f6] text-black">
      <SideLeft name="Kieffer Paez" profesion="Estudiante Ing. Sistemas" photo="/img/foto1.png" alt="Kieffer Paez" />
      <Main/>
      <SideRight />
    </div>
  )
}

export default Index; 