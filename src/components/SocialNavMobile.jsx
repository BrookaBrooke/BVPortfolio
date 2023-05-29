import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from'react-icons/hi';
import { BsFillPersonLinesFill, BsTwitch } from 'react-icons/bs';
import brookeSweResume1 from '../assets/brookeSweResume1.pdf';


const SocialNavMobile = () => {
    const links = [
        {
            id:1,
            child: <FaLinkedin/>,
            href: 'https://www.linkedin.com/in/brookevonderheid/',

        },
        {
            id:2,
            child: <FaGithub/>,
            href: 'https://github.com/BrookaBrooke',

        },
        {
          id:3,
          child: <BsTwitch/>,
          href: 'https://www.twitch.tv/brookabrooke',

      },
        {
            id:4,
            child: <HiOutlineMail/>,
            href: 'mailto:brooke.vondy@gmail.com',

        },
        {
            id:5,
            child: <BsFillPersonLinesFill/>,
            href: brookeSweResume1,


        }
    ]



  return (
    <div name="socials" className=" text-white md:h-screen">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <h1 className="text-4xl inline border-b-4 border-gray-500">Social Media Links</h1>
         </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-6 gap-2 px-2 py-2 sm:px-0">
  {links.map(({ id, child, href }) => (
    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
      <img
        src={child}
        alt=""
        className="rounded-md duration-200 hover:scale-105"
      />
      <div className="flex items-center justify-center">

        <a href={href} target="_blank" rel="noreferrer">
        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-2">
          {child}
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

export default SocialNavMobile
