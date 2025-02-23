import React from 'react'

export const Experience = () => {
  return (
    <main className='w-[85%] h-max mx-auto flex flex-col justify-center py-5'>

      <h1 className='text-3xl font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'>Portfolio Showcase
      </h1>
      <p className='text-[#e1cef7] text-center max-w-[500px] mx-auto py-1 mb-5 mt-2 md:mt-0'>Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path</p>

      <section className='space-y-8 my-4'>

      {/* bnts */}
      <div className='md:flex gap-5 h-max space-y-3 md:space-y-0'>
        <button className='w-full text-white flex flex-col items-center justify-center flex-1 py-2 hover:bg-[#3f4f70] rounded-md border-[1px] border-[#061a37] bg-[#061a37]'>
          <img src="public/tag.png" alt="icon-tag" className='w-5 py-1' />
          PROJECTS
        </button>
        <button className='w-full text-white flex flex-col items-center justify-center flex-1 py-2 hover:bg-[#3f4f70] rounded-md border-[1px] border-[#061a37] bg-[#061a37]'>
          <img src="public/cubes-stacked.png" alt="stack-icon" className='w-5 py-1'/>
          TECHNOLOGIES
        </button>
      </div>



      {/* cards -> projects & technologies */}

      <div className='border border-white mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle>
        <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle>
        <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle>
      </div>

      {/* technologies */}
      <div className='py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-y-7 place-items-center max-w-[85%] mx-auto'>

        <article className='circle-icon space-y-1' > 
          <img className=" img-icon "src="public/icon-technologies/html5.svg" alt="HTML-icon"/>
          <p>HTML</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="public/icon-technologies/css_old.svg" alt="Css-icon"/>
          <p>CSS</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="public/icon-technologies/javascript.svg" alt="Js-icon"/>
          <p>JavaScript</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="public/icon-technologies/React_dark.svg" alt="react-icon" />
          <p>React Js</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="public/icon-technologies/node.png" alt="node-icon"/>
          <p>Node Js</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className="img-icon"src="public/icon-technologies/mongodb.svg" alt=""/> 
          <p>MongoDB</p>
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="public/icon-technologies/git.svg" alt="api-icon"/>
          <p>Git</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="public/icon-technologies/redux.svg" alt="redux-icon"/>
          <p>Redux</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon "src="public/icon-technologies/firebase.svg" alt="redux-icon"/>
          <p>Firebase</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className=" img-icon mt-2"src="public/icon-technologies/bootstrap.svg" alt="bootstrap-icon"/>
          <p>Bootstrap</p> 
        </article>

        <article className='circle-icon space-y-1'> 
          <img className="img-icon"src="public/icon-technologies/api.png" alt="api-icon"/>
          <p>API</p> 
        </article>


        <article className='circle-icon space-y-1 w-[113px] xs:w-[138px]'> 
          <img className=" img-icon"src="public/icon-technologies/tailwindcss.svg" alt="tailwindcss-icon"/>
          <p>TailwindCss</p>
        </article>

      </div>

      </section>

    </main>
  )
}

