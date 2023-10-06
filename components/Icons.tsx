import { IconType } from "react-icons";

interface IconsProps {
    Icons: IconType;
}

const Icons = ({ Icons, }: IconsProps) => {
    return (
        <div className='flex items-center'>
            <span><Icons/></span>
        </div>
    )
}
export { Icons}