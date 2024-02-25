import React from 'react'

type ProjectProps = {
  item: {
    title: string
    subTitle: string
    describe: string
    url: string
    icon: string
  }
}
const Project = ({ item }: ProjectProps) => {
  return (
    <li className="text-sm leading-6">
      <div className="relative group">
        <div className="absolute transition rounded-lg opacity-25 -inset-1  blur duration-400 group-hover:opacity-100 group-hover:duration-200 dark:bg-lightGreen bg-darkGreen"></div>
        <a href={item.url} className="cursor-pointer" target="_blank">
          <div className="relative p-6 space-y-6 leading-none rounded-lg dark:bg-darkBlack bg-lightWhite ">
            <div className="flex items-center space-x-4">
              <img
                src={item.icon}
                className="w-12 h-12 bg-center bg-cover border rounded-full"
                alt="trello"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-darkGreen dark:text-lightGreen">
                  {item.title}
                </h3>
                <p className=" text-md ">{item.subTitle}</p>
              </div>
              <span className="mb-2 flex-shrink-0 py-1 px-2 text-[0.6rem] opacity-100 md:opacity-0 group-hover:opacity-100 transition-all ease duration-75 rounded-full bg-darkGreen text-lightBackground dark:bg-lightGreen dark:text-darkBackground  flex items-center justify-center">
                <span>在线预览</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 translate-x-0.5 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="leading-normal  text-md">{item.describe}</p>
          </div>
        </a>
      </div>
    </li>
  )
}

export default Project
