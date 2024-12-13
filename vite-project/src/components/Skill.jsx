import React from 'react';
import SkillCard from './SkillCard';

const Skill = () => {
    const skillItem = [
       
        {
          imgSrc: 'src/images/css3.png',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: 'src//images/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: 'src/images/nodejs.png',
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: 'src/images/expressjs.png',
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
      
      ];
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2">Essential Tools I Use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create high-performing websites & applications
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;





