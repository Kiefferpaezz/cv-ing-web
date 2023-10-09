import { SideLeft } from '../components/SideLeft'
import { SideRight } from '../components/SideRight'
import { Main } from '../components/Main'
import { Footer } from '@/components/Footer'

const Index = () => {
  return (
    <div className=" flex gap-[20px] min-h-screen bg-[#f0f0f6] text-black">
      <SideLeft name="Kieffer Paez" profesion="Estudiante Ing. Sistemas" photo="/img/foto1.png" alt="Kieffer Paez" />
      <section className='flex flex-col w-full min-h-screen pl-[335px] pr-[120px] gap-8'>
        <Main />
        <Footer />
      </section>
      <SideRight />
    </div>
  )
}

export default Index; 