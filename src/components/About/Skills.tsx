import React from 'react'

const SkillList = [
  'Next.js',
  'Tailwindcss',
  'Figma',
  'Javascript',
  'Java',
  'Spring Boot',
  'PHP',
  'Laravel',
  'NodeJS',
  'VueJS',
  'ReactJS',
]

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
      <span className="font-semibold text-4xl text-accent">
        I`m comfortable in...
      </span>

      <ul className="flex flex-wrap mt-8 justify-start">
        {SkillList.map((skill, index) => (
          <li
            key={index}
            className="font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid border-dark rounded mr-6 mb-6 hover:scale-105 transition-all ease-linear duration-200 cursor-pointer"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
