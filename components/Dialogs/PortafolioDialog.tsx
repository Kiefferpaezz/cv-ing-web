import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { type Dispatch, type SetStateAction } from 'react'
import { ButtonDialog } from '../ButtonDialog'

interface PortafolioDialoProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  title: string
  description: string
  image: string
  link: string
}

const PortafolioDialog = ({ open, setOpen, title, description, image, link }: PortafolioDialoProps) => {
  return (
    <Dialog open={open}
      onClose={() => { setOpen(false) }}>
      <DialogTitle className='text-center font-semibold'>{title}</DialogTitle>
      <DialogContent>
        <div className='flex flex-col items-center gap-3'>
          <img src={image} alt={title} className='w-full rounded-sm' />
          <span className='text-center'>{description}</span>
          <div className='flex gap-3'>
            <a href={link} className='bg-amarillo rounded-md py-2 px-4  hover:scale-95 hover:bg-amber-500 font-semibold' target='_blank' rel="noreferrer">Ir a GitHub</a>
            <ButtonDialog text='Cerrar' handleClick={() => { setOpen(false) }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { PortafolioDialog }
