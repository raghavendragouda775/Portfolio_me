import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={`flex items-center gap-4 ring-2 ring-inset ring-zinc-100/10 dark:ring-zinc-50/10 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group ${classes || ''}`}>
      <figure className="w-14 h-14 bg-zinc-700/50 rounded-lg overflow-hidden p-2 group-hover:bg-zinc-900 transition-colors">
        <img
          src={imgSrc}
          alt={label}
          className="w-full h-full object-contain animate-slow-spin"
        />
      </figure>
      <div>
        <h3 className="text-lg font-semibold text-white">{label}</h3>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
