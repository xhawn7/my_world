'use client'
import React from 'react'
import ComponentsWrapper from './ComponentsWrapper'
import Project from './Project'

const projects = [
  [
    {
      title: 'Taskify',
      subTitle: 'next',
      describe: `用next仿照trello制作的一款GTD,主要用了tailwind、clerk、prisma(mysql云数据库)等技术栈`,
      url: 'https://next-trello-amber.vercel.app/',
      icon: 'https://next-trello-amber.vercel.app/logo.svg'
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
