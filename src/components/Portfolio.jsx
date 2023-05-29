import weebroulette1 from "../assets/weebroulette1.jpg"
import carcar from "../assets/carcarpic.jpg"
import moviemixerpic2 from "../assets/moviemixerpic2.jpg"

import React from "react"


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: weebroulette1,
            code: "https://github.com/BrookaBrooke/Weeb-Roulette",
        },
        {
            id:2,
            src: moviemixerpic2,
            code: "https://github.com/BrookaBrooke/movie-mixer",
        },
        {
            id:3,
            src: carcar,
            code: "https://github.com/BrookaBrooke/Car-Car",
        },

    ]


    return (
        <div name="portfolio" className=" text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-oswald inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Listed below is some of my previous work, which should display my
                    abilities in what I can do.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-20 sm:px-0">
          {portfolios.map(({ id, src, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <a href={code} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>

            </div>

        </div>
    )
}

export default Portfolio
