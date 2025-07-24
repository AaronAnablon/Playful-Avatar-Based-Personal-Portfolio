"use client"

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '@/components/Header';
import Blog from '@/components/Blog';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Message from '@/components/Message';
import Footer from '@/components/Footer';
import { FaArrowAltCircleUp } from "react-icons/fa";
import Services from '@/components/Services';

const AnimatedAaron = React.lazy(() => import('@/helpers/AnimatedAaron'))

interface Refs {
  homeRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

export default function Home(): React.JSX.Element {
  const { theme } = useTheme() as { theme: string };
  const [viewPort, setViewPort] = useState<string | null>(null);
  const [scrolledText, setScrolledText] = useState<string | undefined>(undefined);
  const [statusText, setStatusText] = useState<boolean>(false);
  const [isWalking, setIsWalking] = useState<boolean>(false);

  const refs: Refs = {
    homeRef: useRef<HTMLDivElement>(null),
    servicesRef: useRef<HTMLDivElement>(null),
    skillsRef: useRef<HTMLDivElement>(null),
    projectsRef: useRef<HTMLDivElement>(null),
    contactRef: useRef<HTMLDivElement>(null),
    aboutRef: useRef<HTMLDivElement>(null)
  };
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (viewPort && refs[viewPort as keyof Refs]) {
      refs[viewPort as keyof Refs]?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [viewPort, refs]);

  const handleScroll = (): void => {
    setIsWalking(true);
    setViewPort(null);

    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
    scrollTimerRef.current = setTimeout(() => {
      setIsWalking(false);
      const scrolledElement = Object.entries(refs).find(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
      });
      if (scrolledElement) {
        setViewPort(scrolledElement[0]);
      }
    }, 200);
  };

  useEffect(() => {
    if (statusText) {
      const timeout = setTimeout(() => {
        setStatusText(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [statusText]);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="font-mono">
      <div className={`${theme}`}>
        <Header setViewPort={setViewPort} />
        <div className={` max-w-screen-2xl overflow-hidden relative flex flex-col justify-content-center mx-auto`}>
          <div className='fixed bg-slate-500 z-20 text-white rounded-full bottom-10 right-10' onClick={() => scrollToTop()}>
            <FaArrowAltCircleUp size={24} />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Blog ref={refs.homeRef} setViewPort={setViewPort} title="Blog" />
            <AnimatedAaron statusText={statusText} scrolledText={scrolledText} isWalking={isWalking} handleScroll={handleScroll} />
            <Message setScrolledText={setScrolledText} />
            <Services ref={refs.servicesRef} title="Services" />
            <Skills ref={refs.skillsRef} title="Skills" />
            <Projects ref={refs.projectsRef} title="Projects" />
            <Contact setStatusText={setStatusText} ref={refs.contactRef} title="Contact" />
            <About ref={refs.aboutRef} title="About" />
            <Footer setViewPort={setViewPort} />
          </Suspense>
        </div>
      </div>
     
    </main>
  )
}
