import Image from 'next/image';
import man from '../../public/man.gif';
import standing from '../../public/standing.gif';
import { motion } from 'framer-motion';

const AnimatedAaron = ({ scrolledText, isWalking, handleScroll, statusText }) => {
    return (
        <div>
            <div className='fixed z-10 right-28 top-64 flex justify-center'>
                {scrolledText &&
                    <>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: 'spring' }}
                            className={`fixed top-44 md:top-60 lg:left-20 xl:left-56 md:left-8 left-3 flex items-center md:w-5/6 w-9/12`}>
                            <div className="text-lg grid gap-1 bg-blue-200 text-slate-500 rounded-lg 2xl:p-24 lg:p-12 p-20">
                                <p>Ohh! You scrolled. Scroll down and let us see what Aaron have.</p>
                                <p>Feel free to explore my recently<p>
                                </p></p> launched portfolio website as well. <a href='https://portfolio1-tau-six.vercel.app/'>
                                    <ins>Click here.</ins></a>
                            </div>
                            <div className="w-0 h-0 
                        border-y-[1rem]
                        border-l-[2rem]
                        md:border-y-[3rem] border-t-transparent 
                        md:border-l-[12rem] border-l-blue-200
                        md:border-b-[3rem] border-b-transparent"
                            />
                        </motion.div>
                        <div className='fixed md:w-48 w-32 z-10 xl:right-20 2xl:right-60 right-0 top-64'>
                            {isWalking ? (
                                <Image src={man} alt="Walking" onClick={handleScroll} priority={true} />
                            ) : (
                                <Image src={standing} alt="Stand" onClick={handleScroll} />
                            )}
                        </div>
                    </>


                }
                {statusText &&
                    <>
                        <div className={`fixed top-44 md:top-60 lg:left-20 xl:left-56 md:left-8 left-3 flex items-center md:w-5/6 w-9/12`}>
                            <div className="text-lg bg-blue-200 text-slate-500 rounded-lg p-10">
                                Successfully Sent!
                            </div>
                            <div className="w-0 h-0 
                        border-y-[1rem]
                        border-l-[6rem]
                        md:border-t-[3rem] border-t-transparent 
                        md:border-l-[24rem] border-l-blue-200
                        md:border-b-[3rem] border-b-transparent"
                            />
                        </div>
                        <div className='fixed md:w-48 w-32 z-10 xl:right-20 2xl:right-60 right-0 top-64'>
                            {isWalking ? (
                                <Image src={man} alt="Walking" onClick={handleScroll} priority={true} />
                            ) : (
                                <Image src={standing} alt="Stand" onClick={handleScroll} />
                            )}
                        </div>
                    </>

                }

            </div>
        </div>
    );
}

export default AnimatedAaron;