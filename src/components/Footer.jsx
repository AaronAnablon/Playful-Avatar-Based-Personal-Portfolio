import logo from '../../public/logo.png'
import Image from 'next/image';
import { IoIosMail } from 'react-icons/io';
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import me from '../../public/me.webp'
import Link from 'next/link';

const Footer = ({ setViewPort }) => {
    const handleScrollToSection = (reference) => {
        setViewPort(reference)
    }
    const handleSendEmail = () => {
        const recipientEmail = 'aaronanablon6@gmail.com';
        const subject = 'Hi Aaron! Can we schedule a meeting?';
        const encodedSubject = encodeURIComponent(subject);
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}`;
        window.open(mailtoLink, '_blank');
      };
    return (
        <>
            <div className={`bg-slate-800 w-full mt-10 z-10 py-10 grid md:grid-cols-4 text-white grid-cols-1 gap-4 items-center`}>
                <div className={`flex justify-center items-center`}>
                    <Image width={60} onClick={() => handleScrollToSection("homeRef")} className='bg-white rounded-full' src={logo} alt='logo' />
                </div>
                <div className='text-center'>
                &quot;It can&ldquo;t beat hardwork and perseverance. Try and inspire regardless of challenges.&ldquo;
                </div>
                <div className='flex gap-4 justify-center items-center'>
                   <button onClick={handleSendEmail}><IoIosMail size={38} /></button> 
                   <Link href='https://github.com/AaronAnablon' target='_blank'><AiFillGithub size={34} /></Link>  
                   <Link href='https://www.facebook.com/techibot' target='_blank'><BsFacebook size={28} /></Link>   
                   <Link href='https://www.linkedin.com/in/aaronpanablon' target='_blank'><BsLinkedin size={28} /></Link>   
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
