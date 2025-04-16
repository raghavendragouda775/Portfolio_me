// Skill.jsx
import React from 'react';
import css from "../images/css3.png";
import js from "../images/javascript.svg";
import react from "../images/react.png";
import nodejs from "../images/nodejs.png";
import express from "../images/expressjs.png";
import mongodb from "../images/mongodb.png";
import git from "../images/git.png";
import github from "../images/github.png";
import docker from "../images/docker.png";
import kube from "../images/kubernetes.png"
import terra from "../images/terraform.png"

const skillsRow1 = [css, js, react, nodejs, express, react ];
const skillsRow2 = [mongodb, git, github, docker,kube,terra];

const Row = ({ icons, reverse = false }) => (
  <div
    className={`flex gap-10 animate-marquee whitespace-nowrap ${reverse ? "animate-marquee-reverse" : ""}`}
  >
    {[...icons, ...icons].map((icon, i) => (
      <div
        key={i}
        className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300 transform"
      >
        <img
          src={icon}
          alt="skill"
          className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
        />
      </div>
    ))}
  </div>
);

const Skill = () => {
  return (
    <section className="bg-zinc-900 text-white py-20 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">🛠️ Tools I Use</h2>

      <div className="space-y-10">
        <Row icons={skillsRow1} />
        <Row icons={skillsRow2} reverse />
      </div>
    </section>
  );
};

export default Skill;
