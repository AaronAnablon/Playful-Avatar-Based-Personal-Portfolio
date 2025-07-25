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
      <div className="h-max flex justify-center mt-32">
        <div className={`${theme} grid sm:grid-cols-1 md:grid-cols-2 z-30`}>
          <div className='p-4 flex md:ml-10 ml-0 items-center'>
            <div>
              <p >Hello! You found me.</p>
              <motion.h1
                initial={{ opacity: 0,x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: 'spring' }}
                className='lg:text-8xl text-6xl'>I AM AARON ANABLON</motion.h1>
              <p>Full Stack Web Developer</p>
              <button
                className='rounded-full flex items-center text-xl text-white m-10 px-6 py-4 bg-rose-red-600 hover:bg-rose-red-700 animate-bounce transition-colors duration-200 shadow-lg hover:shadow-xl'
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
            transition={{ type: 'spring' }}
            className='rounded-full bg-gradient-to-b from-red-700  to-opacity-50 to-80% overflow-hidden flex z-40 px-16 justify-center'>
            <Image src={profile} width={500} height={500} alt='profile' />
          </motion.div>
        </div>
      </div>

    </div>
  );
}

export default forwardRef(Blog);

