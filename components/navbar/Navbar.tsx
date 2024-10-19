import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-white px-5 md:px-10 py-2 flex flex-row items-center justify-between border-b shadow-xl'>
          {/* logo */}
          <div className='flex flex-row items-center'>
              <div className=''>
              <Image src={"/assets/logo.png"} alt='logoIcon' width={50} height={50} className='text-black w-8 md:w-14 bg-blue-800 rounded-full p-1 md:p-3' />
              </div>
              <h2 className='text-black text-xl md:text-3xl ml-2'>Proprify</h2>
          </div>
          {/* menu bars */}
          <div>
              <ul className='flex flex-row items-center text-black'>
                  <li className='mr-6 border-black border py-1 px-6 rounded-lg text-center'>Home</li>
                  <li className='mr-6 border-black border py-1 px-6 rounded-lg text-center'>Rents</li>
                  <li className='mr-6 border-black border py-1 px-6 rounded-lg text-center'>Sales</li>
                  <li className='mr-4 border-black border py-1 px-6 rounded-lg text-center'>About</li>
              </ul>
          </div>
           {/* list land botton */}
          <div>
              <button className='bg-[#73acf1] p-3 rounded'>
                  Sign up
              </button> 
          </div>
    </div>
  )
}

export default Navbar
