import { type IconType } from 'react-icons'

interface CardConocimientosProps {
  title: string
  description: string
  icon: IconType
}

const CardConocimientos = ({ title, description, icon: Icon }: CardConocimientosProps) => {
  return (
        <div className='flex flex-col bg-white text-center py-2 items-center gap-4 w-2/6 rounded-lg'>
            <Icon className='text-[70px] text-amarillo' />
            <span className='text-2xl'>{title}</span>
            <span className='text-gris'>{description}</span>
        </div >
  )
}

export { CardConocimientos }
