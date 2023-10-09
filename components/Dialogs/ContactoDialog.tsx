import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { type Dispatch, type SetStateAction } from 'react'
import { ButtonDialog } from '../ButtonDialog'

interface ContactoDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  title: string
  description: string
  image: string
  link: string
}

const ContactoDialog = ({ open, setOpen, title, description, image, link }: ContactoDialogProps) => {
  return (
    <Dialog open={open}
      onClose={() => { setOpen(false) }}>
      <DialogTitle className='text-center font-semibold'>{title}</DialogTitle>
      <DialogContent>
        <div className='flex flex-col items-center gap-3'>
          <img src={image} alt="gif de messi" className='w-full rounded-sm' />
          <div className='flex flex-col items-center gap-4'>
            <span className='text-center'>{description}</span>
          </div>
          <div className='flex gap-3'>
            <a href={link} className='bg-amarillo rounded-md py-2 px-4  hover:scale-95 hover:bg-amber-500 font-semibold' target='_blank' rel="noreferrer">WhatsApp</a>
            <ButtonDialog text='Cerrar' handleClick={() => { setOpen(false) }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export { ContactoDialog }
