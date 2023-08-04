import { forwardRef } from 'react';
import Image from 'next/image';
import AboutText from '@/helpers/AboutText';
import { ImPushpin } from "react-icons/im";
import { motion } from 'framer-motion';

function About({ title }, ref) {
  return (
    <div ref={ref}>
      <div className="min-h-screen flex flex-col align-center justify-center">
        <h2 className='text-4xl m-10 flex justify-start'>{title} ---</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 justify-center'>
          <div className='indent-6 w-full px-8'>
            <p>{AboutText.p1}</p>
            <p>{AboutText.p2}</p>
            <p>{AboutText.p3}</p>
            <p>{AboutText.p4}</p>
            <p>{AboutText.p5}</p>
          </div>
          <div className="grid w-full grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ delay: 1, type: 'spring' }}
              className="relative h-full flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, }}
                whileInView={{ opacity: 1, scale: 1, top: 0, right: 60 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 2, transition: -3, type: 'spring' }}
                className='text-red-700 absolute top-0 z-10'><ImPushpin size={38} /></motion.div>
              <Image src={AboutText.image3} alt="Image 3"
                className="absolute right-0 top-0 rotate-12 h-48 w-96 object-cover border-4" />
              <div className='text-blue-700 absolute -rotate-90 top-48 left-32 z-10'><ImPushpin size={38} /></div>
              <Image src={AboutText.image2} alt="Image 2"
                className="absolute left-0 top-52 -rotate-6 h-48 w-96 object-cover border-4" />
              <Image src={AboutText.image1} alt="Image 1"
                className="absolute bottom-0 left-0 -rotate-2 h-48 w-96 object-cover border-4" />
              <motion.div
                initial={{ opacity: 0, scale: 0.5, }}
                whileInView={{ opacity: 1, scale: 1, bottom: 180, right: 60 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 3, transition: 3, type: 'spring' }}
                className='text-red-500 absolute rotate-6 bottom-44 left-44 z-10'>
                <ImPushpin size={38} /></motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ delay: 1, type: 'spring' }}
              className="relative h-full flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, }}
                whileInView={{ opacity: 1, scale: 1, top: 0, right: 120, rotate: 270 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 1, transition: 3, type: 'spring' }}
                className='text-blue-700 absolute z-10'><ImPushpin size={38} /></motion.div>
              <Image src={AboutText.image4} alt="Image 1"
                className="h-48 w-96 object-cover border-4" />
              <Image src={AboutText.image5} alt="Image 2"
                className="h-48 w-96 object-cover border-4" />
              <Image src={AboutText.image6} alt="Image 3"
                className=" h-48 w-96 object-cover border-4" />
              <motion.div
                initial={{ opacity: 0, scale: 0.5, }}
                whileInView={{ opacity: 1, scale: 1, bottom: 180, right: 100,rotate: 270 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 3, transition: 3, type: 'spring' }}
                className='text-red-600 absolute z-10'>
                <ImPushpin size={38} /></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default forwardRef(About);
