import { forwardRef, useEffect, useState, useRef } from 'react';
import cards from '../helpers/skillsCards'
import Slider from "react-slick";
import { useTheme } from '../contexts/ThemeContext';
import NavCards from '@/helpers/NavCards';
import { motion, useAnimate, useInView } from "framer-motion";
import Carousel from '@/helpers/Carousel';

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
      animate(scope.current, { opacity: 0 })
    }
  }, [isInView])

  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav2(slider2.current);
  }, []);

  const images = [
    '/testimonials/mes2.png',
    '/testimonials/mes3.png',
    '/testimonials/mes1.png',
  ];


  return (
    <div ref={ref}>
      <div className="h-max">
        <div className="relative">
          <motion.div ref={scope}>
            <h2 className='text-4xl ml-10 flex justify-start'>{title} ---</h2>
          </motion.div>
          <div className='flex items-center z-10 justify-center'>
            <div
              className={`flex justify-center flex-wrap gap-4'}
            `}>
              {cards.map((card) =>
                <div key={card.id}
                  className={`${isDarkMode ? 'bg-slate-600' : 'bg-slate-300'} m-2 rounded-lg grid items-center justify-center`}>
                  <div className='w-32 h-32 flex p-4 justify-center items-center'>{card.card}</div>
                  <div className='flex text-xs cursor-pointer md:text-xl items-center justify-center'>{card.desc}</div>
                </div>
              )}
            </div>
          </div>
          <h2 className='text-4xl ml-10 mt-20 flex justify-start'>TESTTIMONIALS ---</h2>
          <div className='flex justify-center'>
            <div
              className={` w-3/4 h-96 m-14 rounded-md transition-transform delay-700 duration-1000'}
            `}>
              <div className='px-20 mx-32'>
                <Carousel images={images} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default forwardRef(Skills);
