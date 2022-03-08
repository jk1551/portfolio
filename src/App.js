/* This example requires Tailwind CSS v2.0+ */
import React, { useRef } from 'react';
import Profile from './Images/profile.jpeg';
import AboutTiles from './Data/AboutTiles'
import projects from './Data/Projects';
import contactInfo from './Data/ContactInfo';

export default function App() {

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const scrollToFirst = () => ref1.current.scrollIntoView({behavior: "smooth"});
  const scrollToSecond = () => ref2.current.scrollIntoView({behavior: "smooth"});
  const scrollToThird = () => ref3.current.scrollIntoView({behavior: "smooth"});

  return (
    <>
    <main class="min-h-fit max-h-screen overflow-y-scroll snap snap-y snap-mandatory">


      {/* Home Page Section */}
    <section ref={ref0} class="justify-center w-full h-screen bg-black bg-cover bg-center snap-start">
    <div class="flex flex-col items-center">
      {/* Header */}
      <div><h1 className='text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 xs: text-6xl md:text-8xl font-thin p-10 text-center'>Joe King</h1></div>
      {/* Photo */}
      <div className="flex flex-wrap justify-center">
        <div className="xs: p-8 md:p-16">
          <img src={Profile} alt="Profile" className="shadow rounded-full h-48 w-48 align-middle border-none" />
        </div>
      </div>
      {/* SubHeader */}
      <div class="text-white"><h2 className='text-white text-4xl font-thin p-10 text-center'>Front End Developer</h2></div>
      {/* Arrow */}
      <div class="text-white xs:m-10 md:m-8 xl: m-50"><button onClick={scrollToFirst} class="justify-center width-24 animate-bounce font-bold py-4 px-4 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
    </button>
    </div>
    </div>
  </section>


  {/* About Section */}
  <section ref={ref1} class="w-full min-h-fit h-screen bg-white snap-start">
  <div className="sm: py-1 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I started to learn how to code sophomore year of college and never looked back. 
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {AboutTiles.map((tile) => (
              <div key={tile.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-14 w-14 rounded-md bg-blue-800 text-white">
                    <tile.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="ml-20 text-lg leading-6 font-medium text-gray-900">{tile.name}</p>
                </dt>
                <dd className="mt-2 ml-20 text-base text-gray-500">{tile.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    {/* Arrow */}
    <div class="text-black flex xs:m-10 md:m-8 xl: m-50 justify-center">
      <button onClick={scrollToSecond} class="justify-center width-24 font-bold py-4 px-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    </button>
    </div>
  </section>


  {/* Project Section */}
  <section ref={ref2} class="w-full min-h-fit h-screen bg-black to-white snap-start">
  <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Projects
          </p>
        </div>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {projects.map((project) => (
              <div key={project.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-white">
                  <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-white">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* Arrow */}
    <div class="text-white flex xs:m-10 md:m-8 xl:m-50 justify-center">
      <button onClick={scrollToThird} class="justify-center width-24 font-bold py-4 px-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    </button>
    </div>
  </section>


  <section ref={ref3} class="w-full bg-white snap-start">
    {/* Arrow */}
    <div class="text-black flex xs:m-10 md:m-8 xl:m-50 justify-center">
      <button onClick={scrollToFirst} class="justify-center width-24 font-bold py-4 px-4 rounded-full">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
    </button>
    </div>
  <div class="p-4 w-full text-center bg-white shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Interested in Chatting?</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Contact Info:</p>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      {contactInfo.map((info) => 
      <a href={info.href} class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
        <info.icon className="h-8 w-8 mr-4" aria-hidden="true" />
      <div class="text-left">
          <div class="mb-1 text-xs">{info.header}</div>
          <div class="-mt-1 font-sans text-sm font-semibold">{info.main}</div>
      </div>
      </a>
      )}
      </div>
    </div>
  </section>
</main>
</>
  )
}
