import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '@/components/Header';
import Blog from '@/components/Blog';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Image from 'next/image';
import man from '../../public/man.gif';
import standing from '../../public/standing.gif';
import About from '@/components/About';
import Message from '@/components/Message';
import TextMessage from '@/helpers/TextMessage';

import { FaArrowAltCircleUp } from "react-icons/fa";

export default function App() {
  const { theme } = useTheme();
  const [viewPort, setViewPort] = useState(null);
  const [message, setMessage] = useState()

useEffect(() => {
  console.log(message)
}, [message])

  const refs = {
    homeRef: useRef(null),
    skillsRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null),
  };

  useEffect(() => {
    refs[viewPort]?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [viewPort, refs]);

  const [isWalking, setIsWalking] = useState(false);
  const scrollTimerRef = useRef(null);

  const handleScroll = () => {
    setIsWalking(true);
    setViewPort(null);

    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      setIsWalking(false);
      const scrolledElement = Object.entries(refs).find(([key, ref]) => {
        const rect = ref.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });
      if (scrolledElement) {
        setViewPort(scrolledElement[0]);
      }
    }, 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${theme} max-w-screen-xl flex flex-col justify-content-center mx-auto`}>
      <div className='fixed bg-slate-500 z-20 text-white rounded-full bottom-10 right-10' onClick={() => scrollToTop()}>
        <FaArrowAltCircleUp size={24}/>
      </div>
      {message && <TextMessage />}
      <div className='fixed z-0 md:block right-24 top-64 md:w-72 md:h-72 w-28 h-28'>
        {isWalking ? (
          <Image src={man} alt="Walking" layout='fill' objectFit='fill' onClick={handleScroll} />
        ) : (
          <Image src={standing} alt="Stand" layout='fill' objectFit='fill' onClick={handleScroll} />
        )}
      </div>
      <Header setViewPort={setViewPort} />
      <Blog ref={refs.homeRef} title="Blog" />
      <Message setMessage={setMessage} />
      <Skills ref={refs.skillsRef} title="Skills" />
      <Projects ref={refs.projectsRef} title="Projects" />
      <Contact ref={refs.contactRef} title="Contact" />
      <About ref={refs.contactRef} title="About" />
    </div>
  );
}
