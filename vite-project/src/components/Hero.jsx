import React, { useState, useEffect } from 'react';
import myimage from "../images/myimage.png";
import { ButtonPrimary, ButtonOutline } from './Button.jsx';

const Hero = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false); // Stop animation after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <section id='home' className='pt-28 lg:pt-36'>
      <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
        {/* Left Content */}
        <div>
          <div className='flex items-center gap-3'>
            <figure className='img-box w-9 h-9 rounded-lg'>
              <img src={myimage} alt="Myimage" width={40} height={40} className='img-cover' />
            </figure>
            <div className='flex items-center gap-2 text-zinc-400 text-sm tracking-wider'>
              <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
              </span>
              <span>Available for Work</span>
            </div>
          </div>
          <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
            Building Scalable Modern Websites for the Future
          </h2>
          
          <div className="mt-8">
            {/* Buttons */}
            <div className="flex gap-6 lg:-ml-60 lg:-mr-4 justify-center">
              <ButtonPrimary href="/Resume.pdf" label='Download CV' icon="download" />
              <ButtonOutline href="#about" label='Scroll down' icon="arrow_downward" />
            </div>
          </div>
        </div>

        {/* Right Image (Visible only on small screens and animated) */}
        <div className="lg:hidden flex justify-center mt-8">
          <figure
            className={`w-full max-w-[480px] bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden ${
              animate ? "animate-slide-in" : ""
            }`}
          >
            <img
              src={myimage}
              alt="myimage"
              className="w-full"
            />
          </figure>
        </div>

        {/* Large Screen Image - No changes needed */}
        <div className='hidden lg:block'>
          <figure
            className={`w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden ${
              animate ? "animate-bounce" : ""
            }`}
          >
            <img
              src={myimage}
              alt="myimage"
              width={656}
              height={800}
              className='w-full'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
