import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 '>
        <h1 className='text-white'>Hi , I am</h1>
        <h1 className='text-6xl sm:text-3xl text-secondary font semibold'>Deepika Pal</h1>
        <h1 className='text-6xl sm:text-3xl text-white font-semibold'>I build things for the web.</h1>
        <p className='text-white w-2/3'>
          I am Fullstack Web Developer. Currently I am looking for a job as a Web Developer. I have experience in building web applications using React, Node.js, Express.js, and MongoDB. I am passionate about learning new technologies and improving my skills.
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro