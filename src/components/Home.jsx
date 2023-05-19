import React from "react";
import headshot from "../assets/headshot.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Home = () => {
    return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 text-white ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className=" text-4xl sm:text-7xl font-bold text-white">
                    I'm a Full Stack Dev.
                </h2>
                <p className="text-gray-500 py-4 max-w-medium">
                    I have lots of xp
                </p>

                <div>
                    <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </button>
                </div>
            </div>
            <img src={headshot} alt="my profile" className="rounded-2xl mx-auto w-1/3 md:w-half" />
        </div>
    </div>
    );
};

export default Home;
