import logo from '../../public/logo.png'
import Image from 'next/image';
import { IoIosMail } from 'react-icons/io';
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import me from '../../public/me.webp'

const Footer = ({ setViewPort }) => {
    const handleScrollToSection = (reference) => {
        setViewPort(reference)
    }
    return (
        <>
            <div className={`bg-slate-600 z-10 py-10 grid md:grid-cols-4 text-white grid-cols-1 gap-4 items-center`}>
                <div className={`flex justify-center items-center`}>
                    <Image width={60} onClick={() => handleScrollToSection("homeRef")} className='bg-white rounded-full' src={logo} alt='logo' />
                </div>
                <div className='text-center'>
                    "It can&ldquo;t beat hardwork and perseverance. Try and inspire regardless of challenges."
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <IoIosMail size={38} />
                    <AiFillGithub size={34} />
                    <BsFacebook size={28} />
                    <BsLinkedin size={28} />
                </div>
                <div className='flex justify-center'>
                    <Image width={100} src={me} alt='me' />
                </div>
            </div>
            <p className='text-sm flex justify-center'>Alrights Reserve 2023</p>
        </>
    );
}

export default Footer;
