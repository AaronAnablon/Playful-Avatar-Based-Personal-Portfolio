import { forwardRef, useEffect, useRef } from 'react';
import TextMessage from '@/helpers/TextMessage';
import { useInView } from "framer-motion";

const Message = ({ setMessage }) => {

    return (
        <div className="h-screen w-full text-9xl flex items-center justify-center">
        <TextMessage setMessage={setMessage}/>
        </div>
    );
}
export default Message;