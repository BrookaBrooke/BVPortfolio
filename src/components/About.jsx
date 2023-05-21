
const About = () => {
    return (
        <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-20">
                    Born in Dallas Texas, I began my career journey a few years ago, jumping from the
                    field of customer service to the field of software engineering. My education includes
                    engineering courswork from Arizona State University, as well as a certification of FullStack
                    Web Development from Hack Reactor, where I learned frontend and backend developement, as well
                    as the developement of REST APIs.
                </p>

                <br/>
                <p className="text-xl">
                    I specialize in Python and Javascript based applications built with the Django and FastAPi Frameworks.
                    Below listed are a few of my completed projects and examples of my abilities.
                </p>
            </div>
        </div>
    )
}

export default About;
