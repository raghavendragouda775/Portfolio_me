import React from 'react'
import PorojectCard from './PorojectCard';
import project1 from "../images/project-1.png"
import project2 from "../images/project-2.png"

 const Work = () => {
    const works = [
        {
          imgSrc: project1,
          title: 'CodeHub',
          tags: ['scokets','development'],
          projectLink: 'https://codeeditor-ste1.onrender.com'
        },
        {
          imgSrc: project2,
          title: 'E-LEARN Platform',
          tags: ['API', 'Development'],
          projectLink: 'https://elearning-frontend-x1kn.vercel.app/'
          
        },
       
      ];
  return (
    <section id="work" className='section'>
        <div className="container">
            <h2 className='headline-2  mb-8'>
                 My Porfolio Works 
            </h2>
            <div className='grid gap-6 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]'>
                {
                    works.map(({imgSrc,title,tags,projectLink},key)=>(
                        <PorojectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work
