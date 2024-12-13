import React from 'react';
import PropTypes from 'prop-types';
import project1 from "../images/project-1.png";

const PorojectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div className={"relative p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
      {/* Image Section */}
      <figure className='img-box mb-4 w-full h-36 rounded-md overflow-hidden'>
        <img src={imgSrc} alt={title} loading='lazy' className='w-full h-full object-cover' />
      </figure>
      
      {/* Content Section */}
      <div className='flex flex-col gap-2'>
        {/* Title */}
        <h3 className="text-base font-semibold text-zinc-50">{title}</h3>
        
        {/* Tags */}
        <div className='flex flex-wrap gap-2'>
          {tags.map((label, key) => (
            <span key={key} className='px-2 py-1 text-xs text-zinc-400 bg-zinc-50/10 rounded'>
              {label}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <div className="flex justify-end mt-2">
          <a
            href={projectLink}
            target='_blank'
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium bg-sky-400 text-zinc-950 rounded-md hover:bg-sky-300 transition"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

PorojectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default PorojectCard;
