'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../assets/freshcart-logo.svg'
import { faCartFlatbed, faExclamationTriangle, faFileArrowUp, faHeart, faSignIn, faSignOut, faSignOutAlt, faSpinner, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Fanwood_Text } from 'next/font/google'
import { useSelector } from 'react-redux'
import { stateStype, storeType } from '@/src/store/reduxStore/reduxStore'
import  useLogOut  from '@/src/hooks/useLogOut'
import { useQuery } from '@tanstack/react-query'
import { fetchWishlist } from '@/src/features/wishlist/wishlist.actions'
import { toast } from 'react-toastify'




export default function NavBar() {

  

  const {logout}  = useLogOut()

   const {status,data,isLoading} = useQuery({
      queryKey: ['wishlistData'],
      queryFn: async () => {
        return await fetchWishlist()
      }
    })

    if(status=='success'){
      toast.success('Wishlist loaded successfully')
      console.log(data)

    }else if(status=='error'){
      toast.error('Failed to load wishlist')
    }

  const numsOfItems = useSelector((state:stateStype)=>state.cartReducer.numOfCartItems)

  const isAuthenticated = useSelector((state:stateStype)=>state.authReducer.isAuthentication)
  return (
    <div className=''>

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

      <div className="center flex justify-center sm:justify-between items-center gap-2 flex-wrap  text-sm  capitalize container mx-auto p-2 ">

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

            <li >
              <Link href={'/wishlist'}className="flex flex-col gap-1 justify-center items-center hover:text-main  relative w-full " >

                {isLoading&& <FontAwesomeIcon className='absolute top-0 right-0' icon={faSpinner} spin />}
                {status === 'error' && <FontAwesomeIcon icon={faExclamationTriangle} />}
                {status === 'success' &&(
                  <span className="absolute bottom-4 -right-2  bg-main flex justify-center items-center  w-4  
                  aspect-square text-white rounded-full">
                    {data.data.length}
                  </span>
                )}

                <FontAwesomeIcon className='text-neutral-600 text-lg' icon={faHeart}/>
                wishlist
              </Link>
            </li>

            {/* <li className="">
              <Link href={'/wishlist'}>
                compare
              </Link>
            </li> */}
            
            <li className="">
              <Link href={'/cart'} className="flex flex-col gap-1 justify-center items-center hover:text-main relative ">
              <FontAwesomeIcon icon={faCartFlatbed}/>
                cart

                <span className="absolute -top-1 -right-1 bg-main flex justify-center items-center  w-4 text-[10px]  aspect-square text-white rounded-full">
                  {numsOfItems}
                </span>
              </Link>
            </li>
            
           
            {
              isAuthenticated?<>


                      <li className="">
                      <Link href={'/profile'} className="flex flex-col gap-1 justify-center items-center hover:text-main ">
                      <FontAwesomeIcon icon={faUser}/>
                        account
                      </Link>
                    </li>
                      <li className="" >
                      <button 
                      onClick={logout}
                      className="flex flex-col gap-1 justify-center items-center hover:text-red-500 ">
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                        log out
                      </button>
                      
                        
                    </li>
              </>:<>
                      <li className="">
                    <Link href={'/login'} className="flex flex-col gap-1 justify-center items-center hover:text-main ">
                    <FontAwesomeIcon icon={faSignIn}/>

                      login
                    </Link>
                  </li> <li className="">
                    <Link href={'/signup'} className="flex flex-col gap-1 justify-center items-center hover:text-main ">
                      <FontAwesomeIcon icon={faUserPlus}/>
                      sign up
                    </Link>
                  </li>
              
              </>
            }

           

           


          </ul>

        </div>
      </div>

      


    </div>
  )
}
