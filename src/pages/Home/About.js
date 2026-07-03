import React from "react";
import SectionTitle from "../../components/SectionTitle";
function About() {
  const skills = [
          "javaScript",
          "React",
          "NodeJS",
          "ExpressJs",
          "MongoDB",
          "Python",
          "C"
        ]
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-wc
            src="https://lottie.host/838fbc0f-19d0-4e94-baba-c51e59e97ed2/AQjra8Hdq4.lottie"
            background="transparent"
            speed="1"
            autoplay
            className="w-full h-full"
          ></dotlottie-wc>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hi! I'm a passionate Computer Science student with a strong interest
            in software development, algorithms, and innovative technologies. I
            love solving problems and building meaningful projects.
          </p>
          <p className="text-white">
            Hi! I'm a passionate Computer Science student with a strong interest
            in software development, algorithms, and innovative technologies. I
            love solving problems and building meaningful projects.
          </p>
        </div>
      </div>
      < div className="py-5">
        <h1 className="text-tertiary text-xl">Here are a few technologies I've been working with recently:</h1>
       <div className="flex flex-wrap gap-10 mt-5">
        {
        skills.map((skills,index) => (
        <div className='border border-tertiary py-3 px-10'>
          <h1 className="text-tertiary">{skills}</h1>
        </div>
        ))
       }
       </div>
      </div>
    </div>
  );
}

export default About;
