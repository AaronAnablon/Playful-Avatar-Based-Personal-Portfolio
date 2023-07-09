
import { forwardRef } from 'react';

function Contact({ title }, ref) {
  return (
    <div ref={ref}>
      <div className="min-h-screen flex align-center justify-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default forwardRef(Contact);

