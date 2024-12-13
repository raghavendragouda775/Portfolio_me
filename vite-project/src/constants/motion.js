export const navbarVariants = {
  default: {
    backgroundColor: "rgba(0,0,0,0.2)",
    boxShadow: "0px 3px 5px rgba(0,0,0,0)",
    height: "80px",
  },
  active: {
    backgroundColor: "rgba(0,0,0,0.8)",
    boxShadow: "0px 3px 5px rgba(0,0,0,0.1)",
    height: "64px",
  },
  slideStart: {
    y: -100,
  },
  slideEnd: {
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.3,
    },
  },
};

export const mobileNavbarVariants = {
  hidden: {
    right: "-100%",
    opacity: 0,
  },
  visible: {
    right: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
