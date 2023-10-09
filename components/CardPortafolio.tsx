import React from 'react'
import { ButtonPort } from './ButtonPort'
import { PortafolioDialog } from './Dialogs/PortafolioDialog'

interface CardPortafolioProps {
  title: string
  description: string
  image: string
  link: string
  dialogDescription: string
}

const CardPortafolio = ({ title, description, image, link, dialogDescription }: CardPortafolioProps) => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <div className="flex flex-col bg-white  items-start gap-4 pt-8 py-4 min-w-[30%]">
      <img src={image} alt="Blabla" className="object-contain w-full aspect-video" />
      <div className="flex flex-col items-start p-4 gap-3">
        <span className="text-lg font-medium">{title}</span>
        <span className="text-gris">{description}</span>
        <ButtonPort text='Ver más' handleClick={handleClickOpen} />
        <PortafolioDialog
          open={open}
          setOpen={setOpen}
          title={title}
          description={dialogDescription}
          image={image}
          link={link}
        />
      </div>
    </div>
  )
}

export { CardPortafolio }
