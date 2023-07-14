import { forwardRef } from 'react';
import Image from 'next/image';
import AboutText from '@/helpers/AboutText';

function About({ title }, ref) {
  return (
    <div ref={ref}>
      <div className="min-h-screen flex flex-col align-center justify-center">
        <h2 className='text-6 bg-red-500 text-slate-200 flex justify-center'>{title}</h2>
        {AboutText.map((text) =>
          <div className='grid grid-cols-1'>
            <h2 className='text-4xl'>{text.title}</h2>
            <div key={text.id} className='grid-cols-1'>
              <div className='flex h-72'>
                <div className='rounded-r-full w-1/2 overflow-hidden'>
                  <Image className='object-fit' src={text.image1} alt={text.title} />
                </div>
                <p className='indent-8 w-1/2 mx-6'>{text.paragraph0}</p>
              </div>
              <div className='flex h-72'>
                <p className='indent-8 w-1/2 mx-6'>{text.paragraph2}</p>
                <div className='rounded-l-full w-1/2 overflow-hidden'>
                  <Image className='object-fit' src={text.image0} alt={text.title} />
                </div>
              </div>
              <div className='flex h-72'>
                <div className='rounded-r-full w-1/2 overflow-hidden'>
                  <Image className='object-fit' src={text.image2} alt={text.title} />
                </div>
                <p className='indent-8 w-1/2 mx-6'>{text.paragraph1}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default forwardRef(About);
