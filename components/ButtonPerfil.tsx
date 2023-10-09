import { HiOutlineArrowRight } from 'react-icons/hi'

interface ButtonProps {
  text: string
  handleClick?: () => void

}

const ButtonPerfil = ({ text, handleClick }: ButtonProps) => {
  return (
    <button className="flex gap-3 items-center bg-amarillo rounded-md py-2 px-4 mt-6 hover:scale-95 hover:bg-amber-500" onClick={handleClick}>
      <span>{text}</span>
      <HiOutlineArrowRight />
    </button>
  )
}
export { ButtonPerfil }
