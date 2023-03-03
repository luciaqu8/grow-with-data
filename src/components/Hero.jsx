import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            
            {/* B4 Title */}
            <p className='text-[#00df9a]  font-bold p-2'>ADMINISTRA TU DATOS</p>
            
            {/* Title */}
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            
            {/* After Title */}
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Rápido y flexible en B2B, BTC y SAS.</p>
                
                {/* Typed effect */}
                {/*<Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-4' strings={['B2B', 'BTC', 'SAS']} typeSpeed={120} backSpeed={140} loop/>*/}
            </div>

            {/* Description */}
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Analice datos para aumentar sus ingresos en plataformas B2B, BTC y SAS.</p>
        
            {/* Button */}
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Empiece ya!</button>
        </div>
    </div>
  )
}

export default Hero