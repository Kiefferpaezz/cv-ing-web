import { CardConocimientos } from "./CardConocimientos";
import { TbDeviceImacCode } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";
import { SiCanva } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";


const Conocimientos = () => {
    return (
        <div>
            <span className="text-3xl font-semibold text-center block mx-auto">Mis Conocimientos</span>
            <span className="text-center flex justify-center items-center ml-40 mr-40 mt-4 text-gris">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, harum error necessitatibus commodi cupiditate officiis! Illo id aperiam cum voluptate, eos eum repellat tempora aliquid nam inventore facilis asperiores veniam.</span>
            <div className="flex flex-col items-center">
                <div className="flex  ">
                    <CardConocimientos title="Desarrollo Web" description="Blog, E-Commerce" icon={TbDeviceImacCode} />
                    <CardConocimientos title="UI/UX Desingn" description="Mobile App, Website Design" icon={FiFigma} />
                    <CardConocimientos title="Machine Learning" description="saasdsdasad" icon={BsRobot} />
                </div>
                <div className="flex">
                    <CardConocimientos title="Github" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." icon={AiFillGithub} />
                    <CardConocimientos title="Publicidad" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." icon={SiCanva} />
                    <CardConocimientos title="HTML" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." icon={TbDeviceImacCode} />
                </div>
            </div>
        </div>
    );
}

export { Conocimientos }