import { cn } from '@/lib/utils'
import { Spotlight } from './ui/Spotlight'
import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import {FaLocationArrow } from 'react-icons/fa'


const words = `Welcome to my portfolio`

const Hero = () => {
  return (
    <div className="relative pb-20">
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          {/* text */}
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                
              </h2>
              <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words={words} />
              <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hello, I am Suyoung Choi, a Publisher based in Republic of Korea.</p>
              <a href="project">
                <MagicButton title="Show my work" icon={<FaLocationArrow />} position='right'/>
              </a>
            </div>

          </div>
        </div>


      </div>
      {/* grid effect */}
      <div className="flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)] dark:bg-black"></div>
      </div>


        



        
    </div>
  )
}

export default Hero