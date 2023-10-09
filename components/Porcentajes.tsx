interface PorcentajesProps {
  label: string
  porcentaje: number
}

const Porcentajes = ({ label, porcentaje }: PorcentajesProps) => {
  return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <span>{label}</span>
                <span>{porcentaje}%</span>
            </div>
            <div className="border border-b-amber-200 bg-white rounded-full p-1 flex items-center w-full h-1.5">
                <div style={{ width: `${porcentaje}%` }} className='bg-amber-200 rounded-full h-1'></div>
            </div>
        </div>
  )
}
export { Porcentajes }
