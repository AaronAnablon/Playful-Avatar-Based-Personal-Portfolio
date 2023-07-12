import Slider from "react-slick";
import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

const NavCards = ({ cards, nav1, slider2, isDarkMode }) => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        if (isInView) {
            animate(scope.current, { y: 0 })
        } else {
            animate(scope.current, { y: -100 })
        }
    }, [isInView])
    return (
        <div ref={scope}>
            <Slider
                asNavFor={nav1}
                ref={slider2}
                swipeToSlide={true}
                focusOnSelect={true}
                slidesToShow={10}
            >
                {cards.map((card, index) => (
                    <motion.div

                        key={card.id}
                        className={`${isDarkMode ? 'bg-slate-600' : 'bg-slate-300'}
                    ${index > 4 ? 'skew-y-12' : '-skew-y-12'}
                        transition-transform duration-700 cursor-pointer hover:skew-y-0 hover:scale-125 my-10 rounded-md grid-cols-1 items-center justify-center`}>
                        <div className="p-0 md:p-4 flex mx-2 justify-center items-center">
                            {card.card}
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
}

export default NavCards;