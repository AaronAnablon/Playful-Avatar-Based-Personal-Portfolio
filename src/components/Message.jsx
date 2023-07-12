import { forwardRef, useEffect, useRef } from 'react';
import TextMessage from '@/helpers/TextMessage';
import { useInView } from "framer-motion";

const Message = ({ setMessage }) => {
    const elementRef = useRef(null)
    const isInView = useInView(elementRef);
    useEffect(() => {
        if (isInView) {
            setMessage(true)
            console.log('isInView')
        } else {
            setMessage(false)
        }
      }, [isInView]);
    return (
        <div ref={elementRef} className="h-screen w-full text-9xl flex items-center justify-center">
        <TextMessage />
        </div>
    );
}
export default Message;