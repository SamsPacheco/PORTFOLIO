import React, { useRef, useState } from 'react'
import { motion, useInView } from "framer-motion"


export const Experience = () => {

  const [showAnimation, setshowAnimation] = useState(true);
  const ref = useRef();
  const isInView = useInView( ref, { once: true, amount: 0.2 });

  return (
    <main className='w-[85%] h-max mx-auto flex flex-col justify-center py-5'>

      <motion.h1 className='text-3xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'
      ref={ref}
      initial={{ opacity: 0, y: 50}}
      animate={ isInView ? { opacity: [.2,.4,.8, 1], y: 0 } : {} }
      transition={{ duration: .5, ease: "easeOut" }}
      >Portfolio Showcase
      </motion.h1>
      <motion.p className='text-[#e1cef7] text-center max-w-[500px] mx-auto py-1 mb-5 mt-2 md:mt-0'
      ref={ref}
      initial={{ opacity: 0, y: 50}}
      animate={ isInView ? { opacity: [.2,.4,.8, 1], y: 0 } : {} }
      transition={{ duration: .5, ease: "easeOut" }}>Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path</motion.p>

      <section className='space-y-8 my-4'>

      {/* bnts */}
      <div className='md:flex gap-5 h-max space-y-3 md:space-y-0'>
        <motion.button 
          className='w-full text-white flex flex-col items-center justify-center flex-1 py-2 hover:bg-[#3f4f70] rounded-md border-[1px] border-[#061a37] bg-[#061a37]'
            onClick={() => setshowAnimation(true)}
            ref={ref}
            initial={{ opacity: 0, x: -100}}
            animate={ isInView ? { opacity: [.2,.4,.8, 1], x: 0 } : {} }
            transition={{ duration: .5, ease: "easeOut" }}
          >
          <img src="/tag.png" alt="icon-tag" className='w-5 py-1' />
          PROJECTS
        </motion.button>
        <motion.button 
          className='w-full text-white flex flex-col items-center justify-center flex-1 py-2 hover:bg-[#3f4f70] rounded-md border-[1px] border-[#061a37] bg-[#061a37]'
          onClick={() => setshowAnimation(false)}
          ref={ref}
            initial={{ opacity: 0, x: 100}}
            animate={ isInView ? { opacity: [.2,.4,.8, 1], x: 0 } : {} }
            transition={{ duration: .5, ease: "easeOut" }}
          >
          <img src="/cubes-stacked.png" alt="stack-icon" className='w-5 py-1'/>
          TECHNOLOGIES
        </motion.button>
      </div>



      {/* cards -> projects & technologies */}

      {
        showAnimation ?

          <motion.div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
            key="projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.article className='flex-1 h-[350px] border border-white rounded-lg cursor-pointer overflow-auto relative'
              initial={{ scale: 1, rotate: 0 }}  // Estado inicial
              whileHover={{
                scale: 1.05,     
                rotate: 3,          
                transition: {        
                  duration: 0.3,     
                  ease: 'easeInOut'            },
              }}
             
            >

              <img src="public/projects/project_1.jpeg" alt="project-1" className='w-full h-[340px] rounded-[10px] object-fill md:object-cover object-top'/>
              <div className='w-full h-full bg-white/50 absolute top-0 hidden'>

              </div>
            </motion.article>
            <article className='flex-1 h-[350px] border border-white rounded-lg cursor-pointer'></article>
            <article className='flex-1 h-[350px] border border-white rounded-lg cursor-pointer'></article>
          </motion.div>


        :

        <motion.div className='py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-2 gap-7 md:px-10 md:gap-y-11 place-items-center mx-auto'
          key="tech"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: [.2, .4, .6, .8, 1], y: 0,  scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/html5.svg" alt="HTML-icon"/>
          <p>HTML</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/css_old.svg" alt="Css-icon"/>
          <p>CSS</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/javascript.svg" alt="Js-icon"/>
          <p>JavaScript</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/React_dark.svg" alt="react-icon" />
          <p>React Js</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/node.png" alt="node-icon"/>
          <p>Node Js</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className="img-icon"src="/icon-technologies/mongodb.svg" alt=""/> 
          <p>MongoDB</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/git.svg" alt="api-icon"/>
          <p>Git</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/redux.svg" alt="redux-icon"/>
          <p>Redux</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="/icon-technologies/firebase.svg" alt="redux-icon"/>
          <p>Firebase</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon mt-2"src="/icon-technologies/bootstrap.svg" alt="bootstrap-icon"/>
          <p>Bootstrap</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className="img-icon"src="/icon-technologies/api.png" alt="api-icon"/>
          <p>API</p> 
        </article>


        <article className='circle-icon space-y-1 w-[113px] xs:w-[138px]'> 
          <img className=" img-icon"src="/icon-technologies/tailwindcss.svg" alt="tailwindcss-icon"/>
          <p>TailwindCss</p>
        </article>

      </motion.div>

      }
      

      </section>

    </main>
  )
}

