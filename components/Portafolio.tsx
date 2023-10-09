import { CardPortafolio } from './CardPortafolio'
import { Titulo } from './Titulo'

const Portafolio = () => {
  return (
    <div className="flex flex-col  w-full overflow-hidden gap-10 ">
      <Titulo title="Portafolio" subtitle="Explora mi portafolio y contribuciones en diversos proyectos." />
      <div className="flex gap-16 w-full overflow-x-auto">
        <CardPortafolio title="US Stock Perfomance Predictor" description="Aplicación de machine learning que predice acciones de empresas estadounidenses" image="/img/stock.png" dialogDescription="Aplicación web que usa un modelo (random forest regressor) para predicir en que acciones invertir de ciertas empresas estadounidenses,  Además de esta parte funcional,
la aplicación web contiene otra herramienta que permite que el usuario pueda ingresar los valores desde un archivo excel y en este se genere una gráfica con la predicción, dado esto el usuario puede guardar como imagen la gráfica y descargar la predicción como archivo excel. " link="https://github.com/Kiefferpaezz/frontend-modelo-predictor" />
        <CardPortafolio title="BlackJack 21" description="Juego de BlackJack usando WebSockets" image="/img/blackjack.png" dialogDescription="Este juego es una versión en línea del clásico juego de cartas Blackjack, también conocido como 21. El objetivo principal del juego es vencer a la casa (la computadora o el crupier) al obtener una mano de cartas cuyo valor total esté lo más cerca posible de 21, sin pasarse de ese número." link="https://github.com/jhonatantm9/juego_blackjack" />
        <CardPortafolio title="Dominó" description="Juego de dominó desarrollado en C#" image="/img/domino.png" dialogDescription="Juego de dominó entre 4 jugadores, implementando el uso manejo de listas ligadas, En este juego, cada jugador tomará turnos para colocar fichas de dominó en una cadena que se formará en el centro de la mesa. El objetivo es ser el primero en quedarse sin fichas. " link="https://github.com/jhonatantm9/juego-domino" />
        <CardPortafolio title="Star Wars API" description="Diseño de una pagina web usando una API de Star Wars" image="/img/stwars.png" dialogDescription="Esta página web es una plataforma interactiva diseñada para brindar a los usuarios acceso a una amplia variedad de información relacionada con el universo de Star Wars. Está construida utilizando tecnologías web estándar como JavaScript, CSS y HTML, lo que permite una experiencia de usuario atractiva y amigable." link="https://extraordinary-speculoos-edcce3.netlify.app/" />
        <CardPortafolio title="RecordPet" description="Aplicación de escritorio de una tienda de mascotas" image="/img/pet.png" dialogDescription="RecordPet es una aplicación de escritorio que permite el registro de información de una tienda de mascotas para sus clientes, ventas, proveedores y productos. Dentro de la aplicación es posible generar las facturas asociadas a las compras realizadas por sus clientes." link="https://github.com/Santiago1023/RecordPet" />
        <CardPortafolio title="Buscaminas" description="Juego de Buscaminas desarollado en Java" image="/img/Buscaminas.png" dialogDescription="Juego de buscaminas, en este juego, los jugadores pueden seleccionar el nivel de dificultad (fácil, medio o difícil) o el modo personalizado para configurar el tamaño del tablero y la cantidad de minas. " link="https://github.com/jhonatantm9/Buscaminas-Logica-III" />
      </div>
    </div>
  )
}

export { Portafolio }
