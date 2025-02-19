
export const View01 = () => {
  return (
    <>
        <main className="w-full h-screen bg-[#04152D] flex justify-center items-center">
            <section className="w-[80%] h-[200px] flex flex-col justify-center items-center space-y-[15px]">
                {/* icons */}
                <div className=" flex gap-5">

                    <div className="w-11 h-11  rounded-full bg-[#21395c] p-[10px] shadow-btns">
                        <img src="public/code-window.png" alt=""/>
                    </div>

                    <div className="w-11 h-11  rounded-full bg-[#21395c] p-[10px] shadow-btns">
                        <img src="public/user.png" alt="" className="w-full h-full"/>
                    </div>

                    <div className="w-11 h-11  rounded-full bg-[#21395c] p-[10px] shadow-btns">
                        <img src="public/Github_dark.svg" alt=""/>
                    </div>
                    
                </div>

                {/* Welcome To My / Portfolio Website */}
                <div>
                    <h1 className="text-white text-5xl font-semibold text-center">
                        Welcome To My 
                        <sapn className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text font-bold ">Portfolio Website</sapn>
                    </h1>
                </div>

            </section>
        </main>
    </>
  )
}
