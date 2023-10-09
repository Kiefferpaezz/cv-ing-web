import { HiOutlineArrowRight } from 'react-icons/hi'

interface PerfilProps {
  photo: string
  alt: string
}
const Perfil = ({ photo, alt }: PerfilProps) => {
  return (
        <div className="w-full h-50  bg-white flex justify-between items-center px-7">
            <div className="w-8/12 p-9 flex flex-col items-start py-12 gap-2" >
                <span className="text-4xl font-bold">Soy Kieffer Paez</span>
                <span className='text-4xl font-bold'>
                    <span className="text-amarillo text-4xl font-bold ">Estudiante </span>
                    Ing. Sistemas
                </span>
                <span>Me considero una persona responsable y metódica.
                    Tengo un gran interés por las tecnologías de la información y la comunicación, disfruto aprendiendo sobre las últimas tendencias y desarrollos en el campo de la ingeniería de sistemas.</span>
                <button className="flex gap-3 items-center bg-amarillo rounded-sm py-2 px-4 mt-6">
                    <span>Contactar</span>
                    <HiOutlineArrowRight />
                </button>
            </div >
            <div className="w-4/12 flex items-end pt-6 h-full">
                <img src={photo} alt={alt} className='object-cover w-auto aspect-square' />
            </div>
        </div>
  )
}
export { Perfil }
