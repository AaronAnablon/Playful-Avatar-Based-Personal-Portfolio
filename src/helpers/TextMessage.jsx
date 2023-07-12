import { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

const TextMessage = () => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { threshold: 0.5 });

    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: 1 });
        } else {
            animate(scope.current, { opacity: 0 });
        }
    }, [isInView]);

    return (
        <div ref={scope} className="flex w-full items-center h-screen">
            <div className="text-lg bg-white text-slate-500 h-max w-max rounded-lg p-10">
                Ohh! you scrolled. Scroll more and let's see what Aaron has.
            </div>
            <div className="w-0 h-0 
        border-t-[3rem] border-t-transparent 
        border-l-[18rem] border-l-white 
        border-b-[3rem] border-b-transparent"
            ></div>
        </div>
    );
};

export default TextMessage;
