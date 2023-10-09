interface InfoDataProps {
  text: string
  val: string
}

const InfoData = ({ text, val }: InfoDataProps) => {
  return (
        <div className='info'>
            <span>{text}</span>
            <span>{val}</span>
        </div>
  )
}

export { InfoData }
