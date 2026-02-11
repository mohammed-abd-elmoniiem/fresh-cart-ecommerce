

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../assets/freshcart-logo.svg'


export default function NavBar() {
  return (
    <div>

      <div className="top flex justify-between text-[12px] font-light capitalize container mx-auto border-b border-dashed  border-neutral-400">
        <ul className="flex gap-3">

          <li className="">
            <a href="" className="">
              +1(800) 123-4567
            </a>
          </li>

           <li className="">
            <a href="" className="">
              support@freshCart.com
            </a>
          </li>

        </ul>

        <ul className=" flex gap-3">

          <li className="">
             <Link href={'/track-order'}>
              track order
            </Link>
          </li>
          <li className="">
             <Link href={'/about'}>
              about
            </Link>
          </li>
          <li className="">
            <Link href={'/contact'}>
              contact
            </Link>
          </li>

          <li className="">
            <select name="currency" id="" className="">
              <option >EGP</option>
              <option >USD</option>
              <option >EAU</option>

            </select>
          </li>

           <li className="">
            <select name="lang" id="" className="">
              <option value ='en' >english</option>
              <option value={'ar'} >العربية</option>
              

            </select>
          </li>


        </ul>
      </div>

      <div className="center flex justify-between items-center flex-wrap  text-sm  capitalize container mx-auto p-2 ">

        <div className="logo">

          <Link href={'/'}>
           <Image src = {logo } className='min-w-40 ' width={200} height={100} alt='logo'/>
          </Link>
         

        </div>

        <div className="search border border-neutral-600/40 rounded-md p-1">

          <input type="search" className="" placeholder='search for products' />

        </div>

        <div className="pages text-neutral-800">

          <ul className="flex gap-2">

            <li className="">
              <Link href={'/wishlist'}>
                wishlist
              </Link>
            </li>

            <li className="">
              <Link href={'/wishlist'}>
                compare
              </Link>
            </li>
            
            <li className="">
              <Link href={'/cart'}>
                cart
              </Link>
            </li>
            
            <li className="">
              <Link href={'/profile'}>
                account
              </Link>
            </li>

             <li className="">
              <Link href={'/login'}>
                login
              </Link>
            </li> <li className="">
              <Link href={'/signup'}>
                sign up
              </Link>
            </li>


          </ul>

        </div>
      </div>


    </div>
  )
}
