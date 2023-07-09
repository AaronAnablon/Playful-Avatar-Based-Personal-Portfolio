import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../app/globals.css';
import { GiSundial, GiMoon } from "react-icons/gi";
import Image from 'next/image';
import logo from '../../public/logo.png'
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";

const Header = ({ setViewPort }) => {
    const { isDarkMode, setIsDarkMode } = useTheme();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleScrollToSection = (ref) => {
        setViewPort(ref)
        setMobileMenuOpen(false); // Close the mobile menu after clicking on a menu item
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='px-10 z-50 h-16 grid grid-cols-2 sticky flex flex-row top-0 bg-slate-600 text-slate-50'>
            <div className={`grid md:grid-cols-12 grid-cols-4 justify-start items-center ${isMobileMenuOpen ? 'hidden': ''}`}>
                <Image onClick={() => handleScrollToSection("homeRef")} className='bg-white rounded-full' src={logo} alt='logo' />
            </div>
            <div className={`flex justify-end items-center space-x-4 md:space-x-8 ${isMobileMenuOpen ? 'flex-col gap-3 w-max ml-12 p-24 bg-slate-600 md:flex-row' : ''}`}>
                <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <GiTireIronCross size={28} className='fixed top-3 right-14'/> : <GiHamburgerMenu size={28} />}
                </div>
                <div className={`p-1 cursor-pointer hover:bg-gray-400 rounded-lg ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`} onClick={() => handleScrollToSection("homeRef")}>Home</div>
                <div className={`p-1 cursor-pointer hover:bg-gray-400 rounded-lg ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`} onClick={() => handleScrollToSection("skillsRef")}>Skills</div>
                <div className={`p-1 cursor-pointer hover:bg-gray-400 rounded-lg ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`} onClick={() => handleScrollToSection("projectsRef")}>Projects</div>
                <div className={`p-1 cursor-pointer hover:bg-gray-400 rounded-lg ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`} onClick={() => handleScrollToSection("contactRef")}>Contact</div>
                <button
                    onClick={() => handleThemeToggle()}
                    className={`flex p-1 ml-2 cursor-pointer w-12 rounded-lg items-center 
          ${isMobileMenuOpen ? 'block' : 'hidden md:block'} 
          ${isDarkMode ? 'justify-start bg-gray-300' : 'justify-end bg-gradient-to-r from-blue-100 to-yellow-200'}`}
                >
                    {isDarkMode ? <GiMoon /> : <GiSundial className='text-yellow-600' />}
                </button>
            </div>
        </div>
    );
}

export default Header;
