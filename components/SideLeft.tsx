import Image from 'next/image'
import { Line } from './Line'
import { Porcentajes } from './Porcentajes'
import { InfoData } from './InfoData'
import { ItemIcon } from './ItemIcon'
import { AiOutlineBlock } from 'react-icons/ai'

interface SideLeftProps {
  name: string
  profesion: string
  photo: string
  alt: string
}
const SideLeft = ({ name, profesion, photo, alt }: SideLeftProps) => {
  return (
        <aside className="fixed top-0 left-0 w-[310px] h-full bg-white p-6" >
            <section className='flex flex-col mx-auto w-4/5 gap-1'>
                <div className='flex flex-col relative items-center'>
                    <Image src={photo} alt={alt} width={150} height={150} className="rounded-full aspect-square bg-no-repeat bg-center" />
                    <span className='w-[16px] h-[16px] bg-verde rounded-full absolute right-10 bottom-5'></span>
                </div>
                <span className="text-center">{name}</span>
                <span className='text-center text-[20] text-gris'>{profesion}</span>
            </section>
            <Line />
            <section className='flex flex-col '>
                <InfoData text='Edad:' val='22' />
                <InfoData text='Residencia:' val='Medellín - CO' />
                <InfoData text='Teléfono:' val='+57 3124027912' />
                <InfoData text='Email:' val='paezkieffer@gmail.com' />
            </section>
            <Line />
            <section className='flex flex-col gap-1'>
                <div className='text-xl font-bold'>Idiomas</div>
                <div>
                    <Porcentajes porcentaje={100} label='Español' />
                </div>
                <div>
                    <Porcentajes porcentaje={60} label='Inglés' />
                </div>
            </section>
            <Line />
            <section className='flex flex-col gap-1'>
                <div className='text-xl font-bold'>Conocimientos</div>
                <div>
                    <Porcentajes porcentaje={70} label='HTML' />
                </div>
                <div>
                    <Porcentajes porcentaje={70} label='CSS' />
                </div>
                <div>
                    <Porcentajes porcentaje={60} label='JavaScript' />
                </div>
                <div>
                    <Porcentajes porcentaje={50} label='Python' />
                </div>
            </section>
            <Line />
            <section className='flex flex-col gap-1'>
                <div className='text-xl font-bold'>Habilidades</div>
                <div className='flex flex-col'>
                    <ItemIcon Icon={AiOutlineBlock} label='Trabajo en equipo' />
                    <ItemIcon Icon={AiOutlineBlock} label='Comunicación' />
                    <ItemIcon Icon={AiOutlineBlock} label='Creatividad' />
                </div>
            </section>
            <Line />
        </aside >
  )
}

export { SideLeft }
