import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

                {/* Single component */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

                {/* Image Single */}
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                
                {/*Title Single*/}
                <h2 className='text-2xl font-bold text-center py-8'>Usuario único</h2>

                {/*Price Single*/}
                <p className='text-center text-4xl font-bold'>$149</p>

                {/*Description Single*/}
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB de espacio</p>
                    <p className='py-2 border-b mx-8'>Un solo usuario</p>
                    <p className='py-2 border-b mx-8'>Envía hasta 2 GB</p>
                </div>

                {/* Button Single */}
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Inicia prueba gratis</button>
            </div>


            {/* Double component */}
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>

                {/* Image Double */}
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />

                {/*Title Double*/}
                <h2 className='text-2xl font-bold text-center py-8'>Compartido</h2>

                {/*Price Double*/}
                <p className='text-center text-4xl font-bold'>$199</p>

                {/*Description Double*/}
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB de espacio</p>
                    <p className='py-2 border-b mx-8'>3 usuarios permitidos</p>
                    <p className='py-2 border-b mx-8'>Envía hasta 10 GB</p>
                </div>

                {/* Button Double */}
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Inicia prueba gratis</button>
            </div>

            {/* Triple component */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

                {/* Image Triple */}
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />

                {/*Title Triple*/}
                <h2 className='text-2xl font-bold text-center py-8'>Grupo</h2>

                {/*Price Triple*/}
                <p className='text-center text-4xl font-bold'>$299</p>

                {/*Description Triple*/}
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB de espacio</p>
                    <p className='py-2 border-b mx-8'>10 usuarios permitidos</p>
                    <p className='py-2 border-b mx-8'>Envía hasta 20 GB</p>
                </div>

                {/* Button Triple */}
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Inicia prueba gratis</button>
            </div>


        </div>
    </div>
  )
}

export default Cards