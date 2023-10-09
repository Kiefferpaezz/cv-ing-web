interface ButtonDialogProps {
  text: string
  handleClick?: () => void

}

const ButtonDialog = ({ text, handleClick }: ButtonDialogProps) => {
  return (
        <button className="flex gap-3 items-center bg-amarillo rounded-md py-2 px-4  hover:scale-95 hover:bg-amber-500" onClick={handleClick}>
            <span>{text}</span>
        </button>
  )
}
export { ButtonDialog }
