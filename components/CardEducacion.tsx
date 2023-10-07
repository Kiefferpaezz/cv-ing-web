interface CardEducacionProps {
    institution: string;
    ocupation: string;
    date: string;
    title: string;
    description: string;
}

const CardEducacion = ({ institution, ocupation, date, title, description }: CardEducacionProps) => {
    return (
        <div className="flex content-between p-8">
            <div className="flex flex-col gap-4 w-2/5">
                <span className="font-medium">{institution}</span>
                <div className="flex gap-2 text-sm">
                    <span>{ocupation}</span>
                    <span className="bg-amarillo text-white px-3">{date}</span>
                </div>
            </div>
            <div className=" flex flex-col gap-4 w-3/5">
                <span className="font-medium ">{title}</span>
                <span className="text-gris">{description}</span>
            </div>
        </div>
    )
}

export { CardEducacion }