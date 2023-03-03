import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare }  from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>

            {/* React LOGO */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

            {/* Text after LOGO */}
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi libero sequi odio soluta architecto ea magnam excepturi explicabo. .</p>
            
            {/* Social Icons */}
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} className='cursor-pointer'/>
                <FaInstagram size={30} className='cursor-pointer'/>
                <FaTwitterSquare size={30} className='cursor-pointer'/>
                <FaGithubSquare size={30} className='cursor-pointer'/>
                <FaDribbbleSquare size={30} className='cursor-pointer'/>
            </div>
        </div>

        {/* Solutions */}
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>Analytics</li>
                    <li className='py-2 text-sm cursor-pointer'>Marketing</li>
                    <li className='py-2 text-sm cursor-pointer'>Commerce</li>
                    <li className='py-2 text-sm cursor-pointer'>Insights</li>
                </ul>
            </div>

        {/* Support */}
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>Precios</li>
                    <li className='py-2 text-sm cursor-pointer'>Documentación</li>
                    <li className='py-2 text-sm cursor-pointer'>Guía</li>
                    <li className='py-2 text-sm cursor-pointer'>API Status</li>
                </ul>
            </div>

            {/* Company */}
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>About</li>
                    <li className='py-2 text-sm cursor-pointer'>Blog</li>
                    <li className='py-2 text-sm cursor-pointer'>Trabajos</li>
                    <li className='py-2 text-sm cursor-pointer'>Carreras</li>
                </ul>
            </div>

            {/* Legal */}
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>Reclamos</li>
                    <li className='py-2 text-sm cursor-pointer'>Políticas</li>
                    <li className='py-2 text-sm cursor-pointer'>Terminos</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer