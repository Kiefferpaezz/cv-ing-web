import { FaFacebookF } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { Icons } from './Icons';
import { GrTwitter } from 'react-icons/gr';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';


const SideRight = () => {
    return (
        <aside className="w-[95px] h-full bg-white py-16 fixed top-0 right-0">
            <section className="flex flex-col items-center gap-4">
                <div className='text-xl font-bold'>Redes</div>
                <div className='bg-amarillo rounded-full p-3'>
                    <a className='text-azul text-xl hover:cursor-pointer' href='https://www.facebook.com/PaezKieffer/' target="_blank">
                        <Icons Icons={FaFacebookF} />
                    </a>
                </div>
                <div className='bg-amarillo rounded-full p-3' >
                    <a className='text-azul text-xl hover:cursor-pointer' href='https://www.instagram.com/kieffer_paez_/' target="_blank">
                        <Icons Icons={BiLogoInstagramAlt} />
                    </a>
                </div>
                <div className='bg-amarillo rounded-full p-3'>
                    <a className='text-azul text-xl hover:cursor-pointer' href='https://twitter.com/Kieffer_pa' target="_blank">
                        <Icons Icons={GrTwitter} />
                    </a>
                </div>
                <div className='bg-amarillo rounded-full p-3'>
                    <a className='text-azul text-xl hover:cursor-pointer' href='https://www.linkedin.com/in/kieffer-p%C3%A1ez-639b9a122/' target="_blank">
                        <Icons Icons={BiLogoLinkedin} />
                    </a>
                </div>
                <div className='bg-amarillo rounded-full p-3'>
                    <a className='text-azul text-xl hover:cursor-pointer' href='https://youtube.com/@kiefferpaez706?si=p8DZKEg3v8t-2n_D' target="_blank">
                        <Icons Icons={BsYoutube} />
                    </a>
                </div>
                <div className='bg-amarillo rounded-full p-3'>
                    <a className='text-azul text-xl hover:cursor-pointer' href='https://github.com/Kiefferpaezz' target="_blank">
                        <Icons Icons={AiFillGithub} />
                    </a>
                </div>
            </section>
        </aside>
    )
}

export { SideRight }