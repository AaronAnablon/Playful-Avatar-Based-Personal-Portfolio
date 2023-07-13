import { forwardRef } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import ProjectCards from '@/helpers/ProjectCards';
import { IoIosDocument,IoIosOpen } from "react-icons/io";


function Projects({ title }, ref) {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div ref={ref}>
      <h2>{title}</h2>
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-10 z-10">
          {ProjectCards && ProjectCards.map((card, index) => (
            <div
              className={`h-96 w-1/2 bg-fixed bg-white`}
              key={card.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === index ? (
                <div className="bg-slate-300 h-full text-slate-600 p-5 grid grid-cols-1 justify-center items-center">
                  {card.desc}
                  <div className='flex justify-center gap-10 items-center'>
                    <IoIosOpen size={45}/>
                    <IoIosDocument size={40}/>
                    </div>
                </div>
              ) : (
                <Image src={card.image} alt={card.name} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
