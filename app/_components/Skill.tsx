'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  skill: {
    url: string
    progress: string
    alt: string
  }
}

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={skill.url}
        alt={skill.alt}
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out group-hover:bg-darkGreen dark:group-hover:bg-lightGreen w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 rounded-lg z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-lightWhite dark:text-darkBlack opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  )
}
