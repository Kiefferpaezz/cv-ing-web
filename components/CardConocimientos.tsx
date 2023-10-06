import { IconType } from "react-icons";
import Image from "next/image";

interface CardConocimientosProps {
    title: string;
    description: string;
    icon: IconType;
}

const CardConocimientos = ({ title, description, icon: Icon }: CardConocimientosProps) => {
    return (
        <div className='flex flex-col bg-white w-[270px] text-center py-2'>
            <Icon className='w-12 h-12' />
            <span className='text-2xl'>{title}</span>
            <span className='text-gris'>{description}</span>
        </div >
    )
}

export { CardConocimientos }