import { ButtonPerfil } from './ButtonPerfil'
import { ContactoDialog } from './Dialogs/ContactoDialog'
import React from 'react'

interface PerfilProps {
  photo: string
  alt: string

}
const Perfil = ({ photo, alt }: PerfilProps) => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

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
        <ButtonPerfil text="Contactar" handleClick={handleClickOpen} />
      </div >
      <div className="w-4/12 flex items-end pt-6 h-full">
        <img src={photo} alt={alt} className='object-cover w-auto aspect-square' />
      </div>
      <ContactoDialog
        open={open}
        setOpen={setOpen}
        title="¡Gracias por contactarme!"
        description="Actualmente estoy interesado en explorar nuevas oportunidades profesionales, y me gustaría mantenerme en contacto contigo si surge algo interesante. Gracias por considerarme."
        image="/img/messirve.gif"
        link="https://wa.link/zo0jm7"
      />
    </div>
  )
}
export { Perfil }
