import { forwardRef, useEffect } from 'react';
import Image from 'next/image';
import ProjectCards from '@/helpers/ProjectCards';
import phone from '../../public/phone.png'
import laptop from '../../public/laptop.png'
import tablet from '../../public/tablet.png'
import { BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';
import { motion } from "framer-motion";

function Projects({ title }, ref) {

  return (
    <div className='overflow-hidden' ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 2, delay: 1 }}>
        <h2 className='text-4xl ml-10 flex justify-start'>{title} ---</h2>
      </motion.h2>
      <div className="h-max w-full mb-40 lg:mb-0 flex items-center justify-center">
        <div className='grid grid-cols-1 gap-48'>
          {ProjectCards && ProjectCards.map((card) => (
            <div className={`grid lg:grid-cols-2 grid-cols-1`} key={card.id}>
              <div className='flex flex-col h-full justify-center items-center mx-6'>
                <p className='indent-6'>{card.desc}</p>
                <Link href={card.url} target="_blank" rel="noopener noreferrer"><BiLinkExternal size={38} /></Link>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 2, delay: 1 }}>
                <div className='flex px-10'>
                  <div className='relative w-4/12'>
                    {card.tablet && <>
                      <Image src={tablet} alt='tablet' className='absolute z-10 inset-0' />
                      <Image src={card.tablet} alt='tablet' className='absolute  p-1 lg:p-2 md:p-4 z-0 inset-0' />
                    </>}
                  </div>
                  <div className='relative w-full'>
                    <Image src={laptop} alt='laptop' className='absolute z-10 w-full inset-0' />
                    <Image src={card.desktop} alt='desktop' className='absolute px-8 md:px-20 lg:px-14 lg:mt-4 mt-2 md:mt-6  z-0 inset-0' />
                  </div>
                  <div className='relative w-2/12'>
                    {card.phone && <>
                      <Image src={phone} alt='phone' className='absolute z-10 w-full inset-0' />
                      <Image src={card.phone} alt='phone' className='absolute  p-0.5 md:p-1 z-0 inset-0' />
                    </>}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
