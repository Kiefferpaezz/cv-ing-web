import { CardConocimientos } from "./CardConocimientos";
import { TbDeviceImacCode } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";
import { SiCanva } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Titulo } from "./Titulo";


const Conocimientos = () => {
    return (
        <div className="flex flex-col gap-10">
            <Titulo title="Conocimientos" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." />
            <div className="flex flex-col items-center  gap-3">
                <div className="flex gap-3 w-full ">
                    <CardConocimientos title="Desarrollo Web" description="Blog, E-Commerce" icon={TbDeviceImacCode} />
                    <CardConocimientos title="UI/UX Desingn" description="Mobile App, Website Design" icon={FiFigma} />
                    <CardConocimientos title="Machine Learning" description="saasdsdasad" icon={BsRobot} />
                </div>
                <div className="flex gap-3">
                    <CardConocimientos title="Github" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." icon={AiFillGithub} />
                    <CardConocimientos title="Publicidad" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." icon={SiCanva} />
                    <CardConocimientos title="HTML" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." icon={TbDeviceImacCode} />
                </div>
            </div>
        </div>
    );
}

export { Conocimientos }