import React from 'react';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';






const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/raghavendragouda775',
      icon: <FaGithub />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raghavendra-timmanagoudar-283698258/',
      icon: <FaLinkedin />,
    },
    {
      label: 'Instagram',
      href: '#',
      icon: <FaInstagram />,
    },
  ];
  

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch gap-10">
        {/* Left Section */}
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch]">
            Contact me for collaboration
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            Reach out to discuss opportunities or projects.
          </p>
          <div className="flex items-center gap-4 mt-auto">
            {socials.map(({ href, icon, label }, key) => (
              <a
                key={key}
                href={href}
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section (Form) */}
        <form
          action="https://getform.io/f/blllwonb"
          method="POST"
          className="xl:pl-10 2xl:pl-20 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="text-field"
                placeholder="Raghu"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="text-field"
                placeholder="raghutimmanagoudar22@gmail.com"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="text-field resize-y min-h-32 max-h-80"
              placeholder="Hi!"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
