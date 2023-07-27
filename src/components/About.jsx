import { forwardRef } from 'react';
import Image from 'next/image';
import AboutText from '@/helpers/AboutText';

function About({ title }, ref) {
  return (
    <div ref={ref}>
      <div className="min-h-screen flex flex-col align-center justify-center">
        <h2 className='text-4xl ml-10 flex justify-star'>{title} ---</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-96 justify-center'>
          <div className="grid w-full mt-32 lg:mt-0 grid-cols-2">
            <div className="relative h-full flex">
              <Image src={AboutText.image3} alt="Image 3" className="absolute bottom-0 right-0 h-32 w-3/5 lg:w-1/2 lg:h-1/2 object-cover border-4" />
              <Image src={AboutText.image2} alt="Image 2" className="absolute  m-4 top-32 left-0 h-32 w-3/5 lg:w-1/2 lg:h-1/2 object-cover border-4" />
              <Image src={AboutText.image1} alt="Image 1" className="absolute top-0 right-0 h-32 w-3/5 lg:w-1/2 lg:h-1/2 object-cover border-4" />
            </div>
            <div className="relative h-full flex">
              <Image src={AboutText.image4} alt="Image 1" className="absolute  top-0 left-0 h-32 w-3/5 lg:w-1/2 lg:h-1/2 object-cover border-4" />
              <Image src={AboutText.image5} alt="Image 2" className="absolute  m-4 top-32 right-0 h-32 w-3/5 lg:w-1/2 lg:h-1/2 object-cover border-4" />
              <Image src={AboutText.image6} alt="Image 3" className="absolute bottom-0 left-0 h-32 w-3/5 lg:w-1/2 lg:h-1/2 object-cover border-4" />
            </div>
          </div>
          <div className='indent-6 w-full px-8'>
            <p>{AboutText.p1}</p>
            <p>{AboutText.p2}</p>
            <p>{AboutText.p3}</p>
            <p>{AboutText.p4}</p>
            <p>{AboutText.p5}</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default forwardRef(About);
