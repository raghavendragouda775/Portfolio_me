import React from 'react'
import PropTypes from 'prop-types'

const ButtonPrimary = ({ href, target = '_self', label, icon, classes = '' }) => {
  const buttonClass = `btn ${classes}`;
  return href ? (
    <a href={href} target={target} download="RE.pdf" className={`${buttonClass} btn-primary`}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </a>
  ) : (
    <button className={`${buttonClass} btn-primary`}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

const ButtonOutline = ({ href, target = '_self', label, icon, classes = '' }) => {
  const buttonClass = `btn ${classes}`;
  return href ? (
    <a href={href} target={target} className={`${buttonClass} btn-outline`}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </a>
  ) : (
    <button className={`${buttonClass} btn-outline`}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </button>
  );
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
