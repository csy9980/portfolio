import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="About">
        <BentoGrid className="max-w-7xl mx-auto">
            {gridItems.map((item, i)=> (
                <BentoGridItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    className={ i === 0 || i === 3 || i === 4
          ? "col-span-2 md:col-span-2 lg:col-span-2" 
          : "col-span-2 md:col-span-1 lg:col-span-1" }
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    spareImg={item.spareImg}
                 />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid