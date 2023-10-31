import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[13%] px-12 absolute text-white bg-gradient-to-r from-black-500 w-screen aspect-video'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='py-7 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black text-xl px-12 p-4 mx-2 rounded hover:bg-opacity-80'>▶ Play</button>
            <button className='bg-gray-500 text-white text-xl px-12 p-4 mx-2 bg-opacity-50 rounded'>More Info</button>
         </div>
    </div>
  )
}

export default VideoTitle