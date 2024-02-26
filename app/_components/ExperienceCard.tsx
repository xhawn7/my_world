import React from 'react'

const ExperienceCard = ({ item }: any) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6  -start-3 bg-lightBackground dark:bg-darkBackground">
        {item.face}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold ">
        {item.name}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-darkWhite dark:text-darkWhite">
        {item.time}
      </time>
      <p className="mb-4 text-base font-normal text-darkWhite">
        {item.cardDetailedText}
      </p>
    </li>
  )
}

export default ExperienceCard
