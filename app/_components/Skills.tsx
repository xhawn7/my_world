'use client'
import React from 'react'
import Skill from './Skill'
import ComponentsWrapper from './ComponentsWrapper'
import { skills } from '../_config/skills'

export default function Skills() {
  return (
    <section className="snap-center" id="skills">
      <ComponentsWrapper title="技能树" cls="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </ComponentsWrapper>
    </section>
  )
}
