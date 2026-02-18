import Link from 'next/link'
import React from 'react'
import Slider from './slider'
import Products from './Products'
import CategoriesScreen from './categories/CategoriesScreen'
import Brands from '@/src/app/(dynamic-pages)/brands/page'


export default function HomeScreen() {

  
  return (
    <div className='w-full flex flex-col py-6 gap-5'>
        {/* {nav bar} */}

         <div className="bottom container mx-auto ">
        <ul className="flex gap-2 font-light capitalize">

          <li className="">
                    <Link href={'/categories'} className="flex flex-col gap-1  justify-center items-center hover:text-main ">

                      category
                    </Link>
            </li>

           <li className="">
                    <Link href={'/brands'} className="flex flex-col gap-1 justify-center items-center hover:text-main ">

                      brands
                    </Link>
            </li>

        </ul>
         </div>

         {/* slider */}

         <div className="w-full relative">
            <Slider/>
         </div>

         <Products/>
         <CategoriesScreen/>

         <Brands/>
    </div>
  )
}
