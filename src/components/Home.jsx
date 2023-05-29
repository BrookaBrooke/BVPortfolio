import React from "react";
import headshot2 from "../assets/headshot2.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
    return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 text-white ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className=" text-4xl sm:text-7xl font-bold text-white">
                    Brooke Vonderheid, FullStack Software Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-medium">
                    As a freelance web dev, I offer several services including static websites, web applications, and mobile applications.
                    Because I am passionate about learning new technologies and building new products, I love being challenged by
                    fresh and new ideas for applications. Reach out further via my contact form for my rates.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
            <img src={headshot2} alt="my profile" className="rounded-2xl px-2 mx-auto w-2/3 md:w-half" />
        </div>
    </div>
    );
};

export default Home;
