import { forwardRef } from 'react';
import profile from '../../public/profile.png'
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

function Blog({ title, setViewPort }, ref) {
  const handleScrollToSection = (refer) => {
    setViewPort(refer)
  }
  const { theme } = useTheme()
  return (
    <div ref={ref}>
      <div className="h-max flex bg-gradient-to-r from-gray-600 to-gray-100justify-cente mt-24">
        <div className={`${theme} grid sm:grid-cols-1 md:grid-cols-2 z-30`}>
          <div className='p-4 flex md:ml-10 ml-0 items-center'>
            <div>
              <p>Hello! You found me.</p>
              <motion.h1
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 1, delay: 1 }}
                className='lg:text-8xl text-6xl'>I AM AARON ANABLON</motion.h1>
              <p>Full Stack Web Developer</p>
              <button
                className='rounded-full flex items-center text-xl text-slate-700 m-10 p-y2 px-6 bg-slate-300 animate-bounce'
                onClick={() => handleScrollToSection("contactRef")}>
                Contact me
                <IoIosArrowRoundForward size={34} />
              </button>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className='rounded-full bg-red-700 overflow-hidden flex z-40 px-10 justify-center'>
            <Image src={profile} alt='profile' />
          </motion.div>
        </div>
      </div>

    </div>
  );
}

export default forwardRef(Blog);

