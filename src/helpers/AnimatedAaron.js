import Image from 'next/image';
import man from '../../public/man.gif';
import standing from '../../public/standing.gif';

const AnimatedAaron = ({ scrolledText, isWalking, handleScroll, statusText }) => {
    return (
        <div className={``}>
            <div className='fixed z-0 right-28 top-64 flex justify-center'>
                {scrolledText &&
                    <div className={`flex items-center w-full md:mb-44 mb-96`}>
                        <div className="text-lg bg-blue-200 text-slate-500 rounded-lg p-10">
                            Ohh! You scrolled. Scroll down and let us see what Aaron have.
                        </div>
                        <div className="w-0 h-0 
                        border-t-[1rem]
                        border-l-[6rem]
                        border-b-[1rem]
                        md:border-t-[3rem] border-t-transparent 
                        md:border-l-[24rem] border-l-blue-200
                        md:border-b-[3rem] border-b-transparent"
                        />
                    </div>
                }
                {statusText &&
                    <div className={`flex items-center w-full md:mb-44 mb-96`}>
                        <div className="text-lg bg-blue-200 text-slate-500 rounded-lg p-10">
                            Successfully Sent!
                        </div>
                        <div className="w-0 h-0 
                        border-t-[1rem]
                        border-l-[6rem]
                        border-b-[1rem]
                        md:border-t-[3rem] border-t-transparent 
                        md:border-l-[24rem] border-l-blue-200
                        md:border-b-[3rem] border-b-transparent"
                        />
                    </div>
                }
                <div className='fixed z-0 right-0 top-64'>
                    {isWalking ? (
                        <Image src={man} alt="Walking" onClick={handleScroll} priority={true} />
                    ) : (
                        <Image src={standing} alt="Stand" onClick={handleScroll} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AnimatedAaron;