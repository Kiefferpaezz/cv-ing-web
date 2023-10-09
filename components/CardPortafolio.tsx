import { MdOutlineChevronRight } from 'react-icons/md'

interface CardPortafolioProps {
  title: string
  description: string
  image: string
  link: string
}

const CardPortafolio = ({ title, description, image, link }: CardPortafolioProps) => {
  return (
        <div className="flex flex-col bg-white  items-start gap-4 pt-8 py-4 min-w-[30%]">
            <img src={image} alt="Blabla" className="object-contain w-full aspect-video" />
            <div className="flex flex-col p-4 gap-3">
                <span className="text-lg font-medium">{title}</span>
                <span className="text-gris">{description}</span>
                <a href={link} target='_blank' className="text-blue font-medium hover:text-blue-600" rel="noreferrer">
                    <span>Ver más</span>
                    <MdOutlineChevronRight className="inline text-xl" />
                </a>
            </div>
        </div>
  )
}

export { CardPortafolio }
