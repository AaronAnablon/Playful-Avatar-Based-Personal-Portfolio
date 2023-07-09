import { forwardRef } from 'react';
import { useState } from 'react';

const cardData = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  { id: 4, text: 'Card 4' },
  { id: 5, text: 'Card 5' },
  { id: 6, text: 'Card 6' },
];

function Projects({ title }, ref) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousIndex = (currentIndex - 1 + cardData.length) % cardData.length;
  const futureIndex = (currentIndex + 1) % cardData.length;
  return (
    <div ref={ref}>
      <div className="min-h-screen flex align-center justify-center">
        <h2>{title}</h2>
        <div>
          <div className="flex justify-center">
            <div className="card">{cardData[previousIndex].text}</div>
            <div className="card">{cardData[currentIndex].text}</div>
            <div className="card">{cardData[futureIndex].text}</div>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={() => setCurrentIndex((currentIndex - 1 + cardData.length) % cardData.length)}>
              Previous
            </button>
            <button onClick={() => setCurrentIndex((currentIndex + 1) % cardData.length)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);

