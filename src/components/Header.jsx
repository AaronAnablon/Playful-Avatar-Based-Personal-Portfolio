import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { GiSundial, GiMoon } from "react-icons/gi";
import Image from 'next/image';
import logo from '../../public/logo.png'
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";


const Header = ({ setViewPort }) => {
    const { isDarkMode, setIsDarkMode } = useTheme();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsScrolled(prevScrollPos < currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleThemeToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleScrollToSection = (ref) => {
        setViewPort(ref)
        setMobileMenuOpen(false);
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`w-full text-xl text-white flex justify-center mx-auto px-10 py-4 z-40 lg:h-max top-0 fixed
                ${prevScrollPos > 300 ?
                (isMobileMenuOpen ? 'h-screen w-3/4 bg-gradient-to-b from-rose-red-600 to-gray-700 z-50 fixed' : 'w-full bg-gradient-to-r from-rose-red-600 to-gray-700 opacity-90 shadow-lg backdrop-blur-sm')
                :
                (isMobileMenuOpen ? 'h-screen bg-gradient-to-b from-rose-red-600 to-gray-700 z-50 w-3/4' : "w-full bg-gradient-to-r from-rose-red-600 to-gray-800 to-60%")
            } ${isScrolled ? "hidden" : "visible"} `} >

            <div className='h-16 flex w-full justify-between'>
                <div className={`grid justify-start items-center ${isMobileMenuOpen ? 'hidden' : ''}`}>
                    <Image height={50} width={50} onClick={() => handleScrollToSection("homeRef")} className='bg-white rounded-full' src={logo} alt='logo' />
                </div>
                <div className={` 
                        ${isMobileMenuOpen ? 'w-full relative h-max pt-20 grid gap-2 justify-start items-center'
                        : 'flex justify-end items-center space-x-4 md:space-x-8'}`}>
                    <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <GiTireIronCross size={28} className='absolute top-6 right-0' /> : <GiHamburgerMenu size={28} />}
                    </div>
                    <div className={`p-1 cursor-pointer hover:bg-rose-red-500 hover:bg-opacity-50 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'flex w-full justify-start' : 'hidden md:block'}`} onClick={() => handleScrollToSection("homeRef")}>Home</div>
                    <div className={`p-1 cursor-pointer hover:bg-rose-red-500 hover:bg-opacity-50 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'flex w-full justify-start' : 'hidden md:block'}`} onClick={() => handleScrollToSection("servicesRef")}>Services</div>
                    <div className={`p-1 cursor-pointer hover:bg-rose-red-500 hover:bg-opacity-50 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'flex w-full justify-start' : 'hidden md:block'}`} onClick={() => handleScrollToSection("skillsRef")}>Skills</div>
                    <div className={`p-1 cursor-pointer hover:bg-rose-red-500 hover:bg-opacity-50 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'flex w-full justify-start' : 'hidden md:block'}`} onClick={() => handleScrollToSection("projectsRef")}>Projects</div>
                    <div className={`p-1 cursor-pointer hover:bg-rose-red-500 hover:bg-opacity-50 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'flex w-full justify-start' : 'hidden md:block'}`} onClick={() => handleScrollToSection("contactRef")}>Contact</div>
                    <div className={`p-1 cursor-pointer hover:bg-rose-red-500 hover:bg-opacity-50 rounded-lg transition-colors duration-200 ${isMobileMenuOpen ? 'flex w-full justify-start' : 'hidden md:block'}`} onClick={() => handleScrollToSection("aboutRef")}>About</div>
                    <button
                        onClick={() => handleThemeToggle()}
                        className={` p-1 ml-2 cursor-pointer w-12 rounded-lg items-center 
          ${isMobileMenuOpen ? 'block' : 'hidden md:block'} flex
          ${isDarkMode ? 'justify-start bg-gray-300' : 'justify-end bg-gradient-to-r from-blue-100 to-yellow-200'}`}
                    >
                        {isDarkMode ? <GiMoon /> : <GiSundial className='text-yellow-600' />}
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Header;
