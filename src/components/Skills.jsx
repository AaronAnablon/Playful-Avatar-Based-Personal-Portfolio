import { forwardRef, useEffect, useState, useRef } from 'react';
import cards from '../helpers/skillsCards'
import Slider from "react-slick";
import { useTheme } from '../contexts/ThemeContext';
import NavCards from '@/helpers/NavCards';
import { motion, useAnimate, useInView } from "framer-motion";

function Skills({ title }, ref) {
  const { isDarkMode } = useTheme();
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  const navSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
  
    if (isInView) {
      animate(scope.current, { opacity: 100 })
    } else {
      animate(scope.current, { opacity: 0})
    }
  }, [isInView])

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <div ref={ref}>
      <div className="h-screen">
        <div className="relative">
          <motion.div ref={scope}>
            <h2 className='text-md bg-red-500 w-24 ml-64 text-center rounded-md h-24 rotate-[-45deg] md:text-xl'>{title}</h2>
          </motion.div>
          <div className='flex items-center z-10 justify-center'>
            <div
              className={`${isDarkMode ? 'bg-slate-600' : 'bg-slate-300'} md:w-96 w-64 rounded-md transition-transform delay-700 duration-1000'}
            `}>
              <Slider asNavFor={nav2} ref={slider1} {...navSettings}>
                {cards.map((card) =>
                  <div key={card.id} className='flex items-center justify-center'>
                    <div className='w-11/12 h-1/2 flex p-4 justify-center items-center'>{card.card}</div>
                    <div className='flex text-xs cursor-pointer md:text-xl mt-6 items-center justify-center'>{card.desc}</div>
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
        <NavCards nav1={nav1} cards={cards} slider2={slider2} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default forwardRef(Skills);
