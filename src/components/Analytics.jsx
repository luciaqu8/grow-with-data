import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

            {/* Image */}
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>

                {/* After Title */}
                <p className='text-[#00df9a] font-bold'>DASHBOARD</p>

                {/*Title*/}
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Gestión centralizada de datos</h1>

                {/*Text*/}
                <p>Este es un texto de ejemplo:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestiae, blanditiis placeat possimus earum officiis error fuga cum ipsum id. Magnam dolore voluptatibus debitis delectus laborum, recusandae accusantium odio fugiat.</p>
            
                {/* Button */}
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3'>Más información</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics