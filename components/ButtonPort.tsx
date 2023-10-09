import { MdOutlineChevronRight } from 'react-icons/md'

interface ButtonPortProps {
  text: string
  handleClick?: () => void

}

const ButtonPort = ({ text, handleClick }: ButtonPortProps) => {
  return (
        <button className="text-amarillo font-medium hover:text-blue-600" rel="noreferrer" onClick={handleClick}>
            <span>{text}</span>
            <MdOutlineChevronRight className="inline text-xl" />
        </button>
  )
}

export { ButtonPort }
