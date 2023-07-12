import { forwardRef } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import enrollment from '../../public/Enrollment System.png'
import ecommerce from '../../public/Ecommerce.png'
import matrix from '../../public/Matrix.png'

function Projects({ title }, ref) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div ref={ref}>
      <h2>{title}</h2>
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 my-10 z-10">
          <div
            className={`md:w-96 w-30 bg-fixed bg-white`}
            key={1}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {hoveredCard === 1 ? <div className="bg-slate-300 h-full">This is desc</div> :
              <Image src={ecommerce} alt='Ecommerce' />
            }
          </div>
          <div
            className={`md:w-96 w-30 bg-white`}
            key={2}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {hoveredCard === 2 ? <div className="bg-slate-300 h-full">This is desc</div> :
              <Image src={enrollment} alt='enrollment' />
            }
          </div>
          <div
            className={`md:w-96 w-30 bg-white`}
            key={3}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {hoveredCard === 3 ? <div className="bg-slate-300 h-full">This is desc</div> :
              <Image src={matrix} alt='matrix' />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
