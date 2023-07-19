import { forwardRef } from 'react';
import Image from 'next/image';
import ProjectCards from '@/helpers/ProjectCards';
import phone from '../../public/phone.png'
import laptop from '../../public/laptop.png'
import tablet from '../../public/tablet.png'
import { BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';

function Projects({ title }, ref) {

  return (
    <div ref={ref}>
      <h2 className='text-4xl ml-10 flex justify-start'>{title} ---</h2>
      <div className="h-max w-full flex items-center justify-center">
        <div>
          {ProjectCards && ProjectCards.map((card, index) => (
            <div className={`grid grid-cols-2 h-64`} key={card.id}>
              <div className='flex flex-col h-full justify-center items-center mx-6'>
                <p className='indent-6'>{card.desc}</p>
                <Link href={card.url} target="_blank" rel="noopener noreferrer"><BiLinkExternal size={38}/></Link>
              </div>
              <div className='flex px-10'>
                <div className='relative w-4/12'>
                  {card.tablet && <>
                    <Image src={tablet} alt='tablet' className='absolute z-10 inset-0' />
                    <Image src={card.tablet} alt='tablet' className='absolute overflow-hidde p-2 z-0 inset-0' />
                  </>}
                </div>
                <div className='relative w-full'>
                  <Image src={laptop} alt='laptop' className='absolute z-10 w-full inset-0' />
                  <Image src={card.desktop} alt='desktop' className='absolute md:px-12 lg:px-14 mt-6 overflow-hidden z-0 inset-0' />
                </div>
                <div className='relative w-2/12'>
                  {card.phone && <>
                    <Image src={phone} alt='phone' className='absolute z-10 w-full inset-0' />
                    <Image src={card.phone} alt='phone' className='absolute overflow-hidden p-1 z-0 inset-0' />
                  </>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
