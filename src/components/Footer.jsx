import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa"
function Footer() {
  return (
    <div className='max-w-[1520] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>YumiEats</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum doloribus rerum placeat neque perspiciatis veniam earum aliquam necessitatibus sunt fugit repellat facilis nobis itaque reiciendis maiores, similique, omnis porro?
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-1.5 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>Usa</li>
                        <li className='py-2 text-sm'>Canada</li>
                        <li className='py-2 text-sm'>India</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>Usa</li>
                        <li className='py-2 text-sm'>Canada</li>
                        <li className='py-2 text-sm'>India</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>Usa</li>
                        <li className='py-2 text-sm'>Canada</li>
                        <li className='py-2 text-sm'>India</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer