import { forwardRef } from 'react';
import profile from '../../public/profile.png'
import Image from 'next/image';

function Blog({ title }, ref) {

  return (
    <div ref={ref}>

      <div className="h-max flex justify-cente mt-24">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 z-30">
          <div className="p-4 flex ml-10 items-center">
            <div>
              <p>Hello! You found me.</p>
              <h1 className='lg:text-8xl text-6xl'>I AM AARON ANABLON</h1>
              <p>Full Stack Web Developer</p>
              <p>Hire me!</p>
            </div>
          </div>
          <div className='rounded-full bg-red-700 overflow-hidden flex z-40 justify-center'>
            <Image src={profile} alt='profile' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default forwardRef(Blog);

