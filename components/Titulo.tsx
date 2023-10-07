interface TituloProps {
    title: string;
    subtitle: string;
}

const Titulo = ({title, subtitle}: TituloProps) => {
    return(
        <div className="flex flex-col items-center gap-3">
                <span className="text-3xl font-semibold text-center">{title}</span>
                <span className="text-center justify-center items-center ml-40 mr-40  text-gris">{subtitle}</span>
            </div>
    )
}

export {Titulo}