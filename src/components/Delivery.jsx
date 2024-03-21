import React from 'react'

function Delivery() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='max-w-[1520] mx-auto grid md:grid-cols-2'>
      <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>Get The App</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convience on-demand</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quam exercitationem temporibus itaque assumenda a perspiciatis. Pariatur ut beatae delectus rem, labore officia perspiciatis deleniti animi corrupti expedita ab facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis animi magni adipisci, corporis nesciunt maxime voluptates necessitatibus aperiam, officia, maiores laborum eveniet ut at excepturi eaque eius incidunt sequi?</p>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Delivery