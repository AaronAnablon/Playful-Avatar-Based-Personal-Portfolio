import { forwardRef } from 'react';
import Image from 'next/image';;
import phone from '../../public/phone.png'
import laptop from '../../public/laptop.png'
import tablet from '../../public/tablet.png'
import { motion } from "framer-motion";

function Services({ title }, ref) {

    return (
        <div className='overflow-hidden mx-auto' ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, delay: 1 }}>
                <h2 className='text-4xl m-10 flex justify-start'>{title} ---</h2>
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ delay: 1 }}>
                <div className='services'>
                    <div className='services1'></div>
                    <div className='services2 mx-6'><p className='text-2xl text-red-600'>Websites</p> including static and dynamic websites that meets your needs. Price starts as low as $30.00.</div>
                    <div className='services3 mx-6'><p className='text-2xl text-red-600'>Mobile applications</p> including IOS application and Android applications. This is perfect to offer to your potential clients or customers that they can use to ease their efforts in engaging to your business.</div>
                    <div className='services4 mx-6'><p className='text-2xl text-red-600'>Technical support.</p> As a computer and cellphone technician, I am equiped with different skills in troubleshooting faulty devices. I can assist you with your needs for your tech including Laptop, desktop, printers and hand held devices.</div>
                    <Image className='services5' height={200} width={200} src={"/svg/website.svg"} alt='website' />
                    <Image className='services6' height={200} width={200} src={"/svg/mobile.svg"} alt='mobile' />
                    <Image className='services7' height={200} width={200} src={"/svg/technical_support.svg"} alt='technical support' />
                    <div className='services8 border-t-4 border-red-700 mx-20'></div>
                </div>
            </motion.div>
        </div>
    );
}

export default forwardRef(Services);
