import React from 'react'


const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div className=''>
        <button className='bg-gray-600 p-4 px-12 text-lg text-white rounded-lg hover:bg-opacity-50'> ▶️Play</button>
        <button className='bg-gray-600 p-4 px-12 mx-2 text-lg text-white rounded-lg hover:bg-opacity-50'>More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle
