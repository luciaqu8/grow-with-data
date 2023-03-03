import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>

                {/* Title */}
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>¿Estás buscando consejos para crecer?</h1>
               
                {/* After Title */}
                <p>Regístrate en nuestro newsletter!</p>
            </div>

            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>

                    {/* Input Mail */}
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Email'/>

                    {/* Button Mail */}
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 text-black'>Notifícame!</button>
                </div>

                    {/* Privacy Policy */}
                <p>Nos importa tu seguridad. Lee nuestras <span className='text-[#00df9a] cursor-pointer'>políticas de privacidad.</span></p>

            </div>
        </div>
    </div>
  )
}

export default Newsletter