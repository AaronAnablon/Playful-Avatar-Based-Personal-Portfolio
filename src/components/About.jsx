import { forwardRef } from 'react';
import Image from 'next/image';
import AboutText from '@/helpers/AboutText';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

function About({ title }, ref) {
  const { isDarkMode } = useTheme()
  return (
    <div ref={ref}>
      <div className="min-h-screen flex flex-col align-center justify-center">
        <h2 className='text-4xl m-10 flex justify-start'>{title} ---</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 justify-center'>
          <div className='indent-6 w-full px-8 z-10'>
            <div className='flex items-center'><div className={`m-6 pr-6 py-4 text-2xl text-center ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-900 bg-slate-200'} rounded-md`}>1</div><p className='mx-0 my-4 md:mx-10'>{AboutText.p1}</p></div>
            <div className='flex items-center'><p className='mx-0 my-4 md:mx-10'>{AboutText.p2}</p><div className={`m-6 pr-6 py-4 text-2xl text-center ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-900 bg-slate-200'} rounded-md`}>2</div></div>
            <div className='flex items-center'><div className={`m-6 pr-6 py-4 text-2xl text-center ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-900 bg-slate-200'} rounded-md`}>3</div><p className='mx-0 my-4 md:mx-10'>{AboutText.p3}</p></div>
            <div className='flex items-center'><p className='mx-0 my-4 md:mx-10'>{AboutText.p4}</p><div className={`m-6 pr-6 py-4 text-2xl text-center ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-900 bg-slate-200'} rounded-md`}>4</div></div>
            <div className='flex items-center'><div className={`m-6 pr-6 py-4 text-2xl text-center ${isDarkMode ? 'text-white bg-slate-800' : 'text-slate-900 bg-slate-200'} rounded-md`}>5</div><p className='mx-0 my-4 md:mx-10'>{AboutText.p5}</p></div>
          </div>
          <div style={{backgroundImage: 'url("/bg.svg")'}} className="grid bg-content lg:h-[48rem] h-[32rem] p-0 sm:px-16 lg:px-16 lg:py-32 w-full gap-10 grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ delay: 1, type: 'spring' }}
              className="relative h-full">
              <Image src={AboutText.image3} alt="Image 3"
                className="absolute right-0 top-0 h-36 w-36 object-cover border-4" />
              <Image src={AboutText.image2} alt="Image 2"
                className="absolute left-0 top-48  h-36 w-36 object-cover border-4" />
              <Image src={AboutText.image1} alt="Image 1"
                className="absolute bottom-0 right-0  h-36 w-36 object-cover border-4" />

            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ delay: 1, type: 'spring' }}
              className="relative h-full flex flex-col">
              <Image src={AboutText.image4} alt="Image 1"
                className="absolute top-0 left-0 h-36 w-36 object-cover border-4" />
              <Image src={AboutText.image5} alt="Image 2"
                className="absolute top-48 right-0 h-36 w-36 object-cover border-4" />
              <Image src={AboutText.image6} alt="Image 3"
                className="absolute bottom-0 left-0 h-36 w-36 object-cover border-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default forwardRef(About);
