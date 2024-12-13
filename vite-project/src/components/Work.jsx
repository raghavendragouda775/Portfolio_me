import React from 'react'
import PorojectCard from './PorojectCard';

 const Work = () => {
    const works = [
        {
          imgSrc: 'src/images/project-1.png',
          title: 'CodeHub',
          tags: ['scokets','development'],
          projectLink: 'https://codeeditor-ste1.onrender.com'
        },
        {
          imgSrc: 'src/images/project-2.png',
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