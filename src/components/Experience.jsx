import { useState } from "react"

export const Experience = () => {

  const [showcase, setshowcase] = useState(false)

  return (

    <main className='h-max flex flex-col justify-center py-5 mt-16 md:mt-32'>

      <h1 className='text-3xl md:text-[42px] font-bold bg-gradient-to-r from-[#ff00cc] via-[#ac84ee] to-[#333399] bg-clip-text text-transparent bg-[length:200%_200%] text-center'
      >
        Portfolio Showcase
        <i className="uil uil-graduation-cap px-3"></i>
      </h1>
      <p className='text-[#e1cef7] text-center max-w-[90%] mx-auto py-1 mb-5 mt-2 md:mt-0 text-[20px]'>Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path</p>

      <section className='space-y-8 my-4'>

        {/* bnts */}
        <div className='md:flex gap-5 h-max space-y-3 md:space-y-0'>
          <button
            className={`w-full text-white flex flex-col items-center justify-center flex-1 py-2 ${ showcase ? 'rounded-md border-[1px] border-[#061a37] bg-[#3f4f70]' : 'bg-[#061a37] hover:bg-[#3f4f70]'}`}
            onClick={() => setshowcase(!showcase)}
            >
            <img src="/tag.png" alt="icon-tag" className='w-5 py-1' />
            PROJECTS
          </button>
          <button
            className={`w-full text-white flex flex-col items-center justify-center flex-1 py-2 ${ !showcase ? 'rounded-md border-[1px] border-[#061a37] bg-[#3f4f70]' : 'bg-[#061a37] hover:bg-[#3f4f70]'}`}
            onClick={() => setshowcase(!showcase)}
          >
            <img src="/cubes-stacked.png" alt="stack-icon" className='w-5 py-1' />
            TECHNOLOGIES
          </button>
        </div>


        {
          showcase ?
            <div className='my-10 h-[150px] md:h-[350px] flex justify-center items-center transition-all duration-300 ease-in-out '>
            {/* <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle>
            <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle>
            <aticle className='flex-1 h-[350px] border border-white rounded-lg'></aticle> */}
            <h2 className="text-4xl text-white ">In development...</h2>
            </div>

            :

            <div className='py-10 grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] justify-items-center gap-5 lg:w-[80%] lg:mx-auto md:gap-y-7 mx-auto transition-all duration-300 ease-in-out'>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]' >
              <img className=" w-[65%] p-[7px] " src="/icon-technologies/html5.svg" alt="HTML-icon" />
              <p>HTML</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[2px] " src="/icon-technologies/css_old.svg" alt="Css-icon"/>
              <p className="mt-1">CSS</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px] " src="/icon-technologies/javascript.svg" alt="Js-icon" />
              <p>JavaScript</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px] " src="/icon-technologies/React_dark.svg" alt="react-icon" />
              <p>React Js</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px] " src="/icon-technologies/node.png" alt="node-icon" />
              <p>Node Js</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className="w-[65%] p-[7px]" src="/icon-technologies/mongodb.svg" alt="" />
              <p>MongoDB</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px] " src="/icon-technologies/git.svg" alt="api-icon" />
              <p>Git</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px] " src="/icon-technologies/redux.svg" alt="redux-icon" />
              <p>Redux</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px] " src="/icon-technologies/firebase.svg" alt="redux-icon" />
              <p>Firebase</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px] mt-2" src="/icon-technologies/bootstrap.svg" alt="bootstrap-icon" />
              <p>Bootstrap</p>
            </article>

            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className="w-[65%] p-[7px]" src="/icon-technologies/api.png" alt="api-icon" />
              <p>API</p>
            </article>


            <article className='max-w-[140px] h-[150px] rounded-[10px] p-[10px] bg-[#092f63] flex flex-col items-center justify-center text-white font-bold text-[18px]'>
              <img className=" w-[65%] p-[7px]" src="/icon-technologies/tailwindcss.svg" alt="tailwindcss-icon" />
              <p>TailwindCss</p>
            </article> 

          </div>
        }

        {/* cards -> projects & technologies */}
        {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 */}

          




      </section>

    </main>
  )
}

