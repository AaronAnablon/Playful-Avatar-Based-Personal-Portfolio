import { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

interface TextMessageProps {
    setScrolledText: (value: boolean) => void;
}

const TextMessage: React.FC<TextMessageProps> = ({ setScrolledText }) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { amount: 0.5 });
    
    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: 1 });
            setScrolledText(true)
        } else {
            animate(scope.current, { opacity: 0 });
            setScrolledText(false)
        }
    }, [isInView, animate, scope, setScrolledText]);

    return (
        <div ref={scope} className="flex items-center">
        </div>
    );
};

export default TextMessage;
