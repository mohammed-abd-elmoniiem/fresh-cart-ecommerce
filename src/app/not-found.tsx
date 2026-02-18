import React from 'react'

import notFoundImage from '../assets/images/404.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
  return (
    <div className='container mx-auto flex flex-col items-center py-6'>

      <div className="">
        <Image src={notFoundImage} width={300} height={200} alt='not found image' />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl capitalize">oops! Page not found</p>

        <div className="flex gap-4">
          <Link href={'/'} className='flex gap-2  items-center bg-main p-2 rounded-md text-white w-fit'>

          <FontAwesomeIcon icon={faHome}/>
             back to home
          </Link>

            <Link href={'/profile'} className='flex gap-2  items-center border border-main p-2 rounded-md text-main w-fit'>

          <FontAwesomeIcon icon={faUser}/>
             your accound
          </Link>


        </div>
      </div>
  
    
    </div>
  )
}
