import { forwardRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

function About({ title }, ref) {
  const { isDarkMode } = useTheme()
  return (
    <div ref={ref}>
      <div className="pb-16">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ delay: 1, type: 'spring' }}
            className="about-container">
            <div className='div1'></div>
            <div className='div2 p-6 rounded-lg m-6 bg-slate-700 bg-opacity-50 grid items-center text-slate-50'><p className='indent-8'>I am a full stack web developer helping people make their design and ideas into life. I make websites and applications work perfectly and cost efficient. Always.</p></div>
            <div className='div3 p-6 rounded-lg m-6 bg-slate-700 bg-opacity-50 grid items-center text-slate-50'><p className='indent-8'>As a developer is not just a developer&#39; I&apos;m your digital partner. Let&apos;s break through the digital boundaries and create an online presence that speaks volumes, engages users, and drives success.</p></div>
            <div className='div4 p-6 rounded-lg m-6 bg-slate-700 bg-opacity-50 grid items-center text-slate-50'><p className='indent-8'>I thrive on working closely with clients to understand their vision and goals. Your dreams, combined with my technical expertise, pave the way for digital masterpieces.</p></div>
            <Image className='div8' height={500} width={500} src={"/svg/digital_content.svg"} alt='digital_content' />
            <Image className='div9' height={500} width={500} src={"/svg/collaborate.svg"} alt='finance_analyst' />
            <Image className='div10' height={500} width={500} src={"/svg/financial_analyst.svg"} alt='financial_analyst' />
          </motion.div>
        </div>
      </div>
    </div >
  );
}

export default forwardRef(About);
