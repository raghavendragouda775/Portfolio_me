import React from 'react';
import { ButtonPrimary } from './Button';
import logo from "../images/loo.jpeg";

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
 
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/raghavendragouda775' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raghavendra-timmanagoudar-283698258/' },
  { label: 'Instagram', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 gap-10 mb-10 flex flex-col items-center text-center lg:text-left lg:items-start">
          {/* Left Side */}
          <div className="mb-6 lg:mb-0">
            <h2 className='headline-1 mb-4 text-xl lg:text-3xl'>
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary 
              href="mailto:raghutimmanagouda22@gmail.com" 
              label='Start Project' 
              icon="chevron_right"
            />
          </div>

          {/* Right Side - Sitemap and Socials */}
          <div className="grid grid-cols-2 gap-8 lg:pl-20 w-full md:w-auto">
            {/* Sitemap */}
            <div>
              <p className='mb-4 text-lg font-semibold'>Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a 
                      href={href} 
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-white'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className='mb-4 text-lg font-semibold'>Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-white'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section with Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <a href="/" className="flex items-center gap-2 mb-4 md:mb-0">
            <img src={logo} height={40} width={40} alt="Logo" className="rounded-full" />
            <span className="text-white font-bold">Raghu</span>
          </a>
          <p className='text-sm text-zinc-500'>&copy;2024 <span className='text-zinc-300'>Raghu</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
