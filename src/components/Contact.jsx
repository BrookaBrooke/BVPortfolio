import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <h1 className='text-4xl inline border-b-4 border-gray-500'>Contact</h1>
                <p className='py-6'>Submit this form to get in touch</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/f0120ee4-03d5-4f4f-b9ed-7043d1bbe2f9" method="POST" className='flex flex-col 20full md:w-1/2'>
                    <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name="email" placeholder="Enter your email" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                   <textarea name="message" placeholder="Enter your message" rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                   <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 m-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Chat!</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact
