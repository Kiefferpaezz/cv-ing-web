import { CardPortafolio } from './CardPortafolio'
import { Titulo } from './Titulo'

const Portafolio = () => {
  return (
        <div className="flex flex-col  w-full overflow-hidden gap-10 ">
            <Titulo title="Portafolio" subtitle="Explora mi portafolio y contribuciones en diversos proyectos." />
            <div className="flex gap-16 w-full overflow-x-auto">
                <CardPortafolio title="US Stock Perfomance Predictor" description="Aplicación de machine learning que predice acciones de empresas estadounidenses" image="/img/stock.png" link="https://www.google.com" />
                <CardPortafolio title="BlackJack 21" description="Juego de BlackJack usando WebSockets" image="/img/blackjack.png" link="https://www.google.com" />
                <CardPortafolio title="Dominó" description="Juego de dominó desarrollado en C#" image="/img/domino.png" link="https://www.google.com" />
                <CardPortafolio title="Star Wars API" description="Diseño de una pagina web usando una API de Star Wars" image="/img/stwars.png" link="https://www.google.com" />
                <CardPortafolio title="Luxury Pet" description="Aplicación de escritorio de una tienda de mascotas" image="/img/pet.png" link="https://www.google.com" />
                <CardPortafolio title="Buscaminas" description="Juego de Buscaminas desarollado en Java" image="/img/Buscaminas.png" link="https://www.google.com" />
            </div>
        </div>
  )
}

export { Portafolio }
