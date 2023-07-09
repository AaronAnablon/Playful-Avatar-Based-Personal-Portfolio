import { forwardRef, useEffect, useState } from 'react';
import cards from '../helpers/skillsCards'


function Skills({ title }, ref) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const previousIndex = (currentIndex - 1 + cards.length) % cards.length;
  const futureIndex = (currentIndex + 1) % cards.length;

const handlePrevious = () => {
  setTimeout(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false); 
      setCurrentIndex((currentIndex - 1 + cards.length) % cards.length)
    }, 1000);
  }, 1000);
}

const handleNext = () => {
  setTimeout(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false); 
      setCurrentIndex((currentIndex + 1) % cards.length)
    }, 1000);
  }, 1000);
}

  return (
    <div ref={ref}>
      <div className="h-screen flex justify-center items-center">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex sm:justify-start justify-center items-center gap-4">
            <div className={`bg-slate-800 md:p-10 p-2  rounded-md md:w-64 md:h-64 w-20 h-20`}>
              {cards[previousIndex].card}
            </div>
            <div className={`${animate ? 'translate-x-[-100%] duration-1000' : ''} bg-slate-800 md:p-10 p-2 gap-4 grid md:text-lg text-xs justify-items-center rounded-md w-32 h-32 md:w-96 md:h-96`}>
              {cards[currentIndex].card}
              {cards[currentIndex].desc}
            </div>
            <div className={`${animate ? 'translate-x-[-100%] duration-1000' : ''} bg-slate-800 md:p-10 p-2 rounded-md md:w-64 md:h-64 w-20 h-20`}>
              {cards[futureIndex].card}</div>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button onClick={handlePrevious}>
              Previous
            </button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
