'use client'
import React from 'react'
import ComponentsWrapper from './ComponentsWrapper'
import Project from './Project'
import taskify from '../../public/taskify.svg'
import toDoIcon from '../../public/7todos.png'
import me from '../../public/images.jpeg'

const projects = [
  [
    {
      title: 'Taskify',
      subTitle: 'Next',
      describe: `用Next框架仿照trello制作的一款GTD,主要用了tailwind、clerk、prisma(mysql云数据库)等技术栈`,
      url: 'https://next-trello-amber.vercel.app/',
      icon: taskify
    }
  ],
  [
    {
      title: '7-todos',
      subTitle: 'React',
      describe: `对比react的7种状态管理, 分别是props/useContext/HOC/Mobx/redux-thunk/redux-toolkit/zustand，同样实现一个GTD，用这7款状态管理代码对比`,
      url: 'https://7-todos.vercel.app/',
      icon: toDoIcon
    }
  ],
  [
    {
      title: 'my-2nd-site',
      subTitle: 'React',
      describe: `用next写了自己的个人网站`,
      url: 'https://xhawn.netlify.app',
      icon: me
    }
  ]
]
export default function Projects() {
  return (
    <section className="snap-center" id="projects">
      <ComponentsWrapper
        title="DEMOS"
        cls="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 "
      >
        {projects.map((project, index) => (
          <ul className="space-y-8" key={index}>
            {project.map((item, itemIndex) => (
              <Project item={item} key={`item_${itemIndex}`} />
            ))}
          </ul>
        ))}
      </ComponentsWrapper>
    </section>
  )
}
