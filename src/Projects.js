import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import {project} from "../../resources/project";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects "/>
      <div className="flex py-10 gap-20 sm:flex-col">
              <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                {project.map(
                (project,index) => (
                  <div onClick={() => {
                    setSelectedItemIndex(index);
                  }}
                  className="cursor-pointer">
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#50dba826] py-3 " : "text-white border-x-tertiary"}`}>
                      {project.title}
                      </h1>
                    </div>
                )
              )}
              </div>
              <div className="flex items-center gap-10 sm:flex-col">
                <img src={project[selectedItemIndex].image} alt="" className="h-60 w-72"/>
                <div className="flex flex-col gap-5">
                <h1 className="text-secondary text-xl">
                  {project[selectedItemIndex].title}
                </h1>
                 <p className="text-white">{project[selectedItemIndex].description}</p>
                <p className="text-white">
            Hi! I'm a passionate Computer Science student with a strong interest
            in software development, algorithms, and innovative technologies. I
            love solving problems and building meaningful projects.
          </p>
              </div></div>
            </div>
    </div>
  )
}

export default Projects