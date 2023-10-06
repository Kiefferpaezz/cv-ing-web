import { IconType } from "react-icons";

interface ItemIconProps {
    Icon: IconType;
    label: string;
}

const ItemIcon = ({ Icon, label }: ItemIconProps) => {
    return (
        <div className='flex items-center gap-3'>
            <span><Icon/></span>
            <span>{label}</span>
        </div>
    )
}
export { ItemIcon }