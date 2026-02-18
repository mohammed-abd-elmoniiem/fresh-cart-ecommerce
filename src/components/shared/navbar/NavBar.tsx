'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../assets/freshcart-logo.svg'
import { faBars, faCartFlatbed, faClose, faExclamationTriangle, faFileArrowUp, faHeart, faSignIn, faSignOut, faSignOutAlt, faSpinner, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Fanwood_Text } from 'next/font/google'
import { useSelector } from 'react-redux'
import { stateStype, storeType } from '@/src/store/reduxStore/reduxStore'
import  useLogOut  from '@/src/hooks/useLogOut'
import { useQuery } from '@tanstack/react-query'
import { fetchWishlist } from '@/src/features/wishlist/wishlist.actions'
import toast from 'react-hot-toast'




export default function NavBar() {

  

  const {logout}  = useLogOut()

  const [toggle, settoggle] = useState(true)

   const {status,data,isLoading} = useQuery({
      queryKey: ['wishlistData'],
      queryFn: async () => {
        return await fetchWishlist()
      }
    })

    if(status=='success'){
      
      console.log(data)

    }else if(status=='error'){
      toast.error('Failed to load wishlist')
    }

  const numsOfItems = useSelector((state:stateStype)=>state.cartReducer.numOfCartItems)

  const isAuthenticated = useSelector((state:stateStype)=>state.authReducer.isAuthentication)
  return (
    <div className='container mx-auto px-2 py-1  bg-white sticky top-0 z-50'>

      <div className="top  hidden md:flex flex-wrap justify-between text-[12px] font-light capitalize container mx-auto border-b border-dashed  border-neutral-400 ">
        <ul className=" flex">

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
             <Link href={'/allorders'}>
              all orders
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

      <div className="center flex justify-between items-center gap-2 flex-wrap  text-sm  capitalize container mx-auto p-1   bg-white">

        <div className="logo">

          <Link href={'/' } className='w-12 sm:w-40'>
           <Image src = {logo } className='  object-contain'  alt='logo'/>
          </Link>

        </div>

        <div className="search hidden md:block border border-neutral-600/40 rounded-md p-1">

          <input type="search" className="" placeholder='search for products' />

        </div>

        <div className="pages text-neutral-800 flex justify-end  ">

          <div className="md:hidden flex items-center">

              <FontAwesomeIcon className="   bg-main  text-white border p-2 text-md rounded-md" icon={toggle ?  faBars : faClose}

                          onClick={()=>{
                            settoggle(!toggle)
                          }}
                          
                          />
          </div>

          
           
          

          <ul className={` ${!toggle?'flex md:flex':'hidden md:flex '} gap-2 absolute bg-white border-l w-2/3   p-2 top-0 right-0 flex-col z-20 justify-start min-h-screen
          md:w-fit
          md:p-0 md:border-none md:static md:flex-row md:min-h-auto `}

          onClick={()=>{
            settoggle(true)

          }}
          
          >

            <li className="md:hidden">

                <FontAwesomeIcon className=" ml-auto bg-rose-500 text-white border p-2 text-md rounded-md" icon={toggle ?  faBars : faClose}

              onClick={()=>{
                settoggle(!toggle)
              }}
              
              />
            </li>

            

            {/* in mobile mode only */}
            


            <div className="search block md:hidden border border-neutral-600/40 rounded-md p-1 font-normal">

              <input type="search" className="" placeholder='search for products' />

            </div>

            {
              isAuthenticated?<>

                      <li >

                         <Link href={'/wishlist'} className="flex md:flex-col  gap-1 justify-start items-center hover:text-main relative ">
                        <FontAwesomeIcon icon={faHeart}/>
                          wishlist
                        <span className="absolute -top-1 -right-1 bg-main flex justify-start items-center   text-[12px] p-1 aspect-square text-white rounded-full">
                          {isLoading&&<FontAwesomeIcon icon={faSpinner} spin/>}
                             {!isLoading&&data?.data?.length || '0'}
                          </span>
                        </Link>

            </li>

                      <li className="">
                        <Link href={'/cart'} className="flex md:flex-col  gap-1 justify-start items-center hover:text-main relative ">

                        <FontAwesomeIcon icon={faCartFlatbed}/>
                          cart

                          <span className="absolute -top-1 -right-1 bg-main flex justify-start items-center   text-[12px] font-normal p-1 aspect-square text-white rounded-full">
                            { numsOfItems}

                            
                          </span>
                        </Link>
                      </li>

                      <li className="">
                      <Link href={'/profile'} className="flex md:flex-col  gap-1 justify-start items-center hover:text-main ">
                      <FontAwesomeIcon icon={faUser}/>
                       profile
                      </Link>
                    </li>
                      <li className="" >
                      <button
                      onClick={logout}
                      className="flex md:flex-col  gap-1 justify-start items-center hover:text-red-500 ">
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                        log out
                      </button>

                    </li>
              </>:<>
                      <li className="">
                    <Link href={'/login'} className="flex md:flex-col  gap-1 justify-start items-center hover:text-main ">
                    <FontAwesomeIcon icon={faSignIn}/>

                      login
                    </Link>
                  </li> <li className="">
                    <Link href={'/signup'} className="flex md:flex-col w-fit gap-1 justify-start items-center hover:text-main ">
                      <FontAwesomeIcon icon={faUserPlus}/>
                      sign up
                    </Link>
                  </li>

              </>
            }

    {/* top */}
             <div className="top  flex md:hidden flex-wrap justify-between text-[12px] capitalize container mx-auto border-b border-dashed  border-neutral-400">
       

        <ul className=" flex flex-col gap-3">
          <h2 className="">quick links</h2>

          <li className="">
             <Link href={'/allorders'}>
               orders
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

          {/* <li className="">
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
          </li> */}

        </ul>


      </div>

          </ul>

        </div>
      </div>

     

    </div>
    // <nav className="bg-black text-blck antialiased">
    //   <div className="px-4 mx-auto 2xl:px-0 py-4">
    //     <div className="flex items-center justify-between">
    //       <div className="flex items-center space-x-8">
    //         <div className="logo">
    //           <Link href={"/"} className="w-12 sm:w-40">
    //             <Image src={logo} className="  object-contain" alt="logo" />
    //           </Link>
    //         </div>
    //         <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
    //           <li>
    //             <Link
    //               href={"/"}
    //               className="flex text-sm font-medium text-gray-900"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li className="shrink-0">
    //             <Link
    //               href={"/"}
    //               className="flex text-sm font-medium text-gray-900 0"
    //             >
    //               Best Sellers
    //             </Link>
    //           </li>
    //           <li className="shrink-0">
    //             <Link
    //               href={"/"}
    //               className="flex text-sm font-medium text-gray-900 "
    //             >
    //               Gift Ideas
    //             </Link>
    //           </li>
    //           <li className="shrink-0">
    //             <Link href={"/"} className="text-sm font-medium text-gray-900">
    //               Today's Deals
    //             </Link>
    //           </li>
    //           <li className="shrink-0">
    //             <Link href={"/"} className="text-sm font-medium text-gray-900 ">
    //               Sell
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex items-center lg:space-x-2">
    //         <button
    //           id="myCartDropdownButton1"
    //           data-dropdown-toggle="myCartDropdown1"
    //           type="button"
    //           className="inline-flex items-center rounded-lg justify-center p-2  text-sm font-medium leading-none text-gray-900 "
    //         >
    //           <span className="sr-only">Cart</span>
    //           <svg
    //             className="w-5 h-5 lg:me-1"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
    //             />
    //           </svg>
    //           <span className="hidden sm:flex">My Cart</span>
    //           <svg
    //             className="hidden sm:flex w-4 h-4 text-gray-900  ms-1"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="m19 9-7 7-7-7"
    //             />
    //           </svg>
    //         </button>
    //         <div
    //           id="myCartDropdown1"
    //           className="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg text-gray-900"
    //         >
    //           <div className="grid grid-cols-2">
    //             <div>
    //               <a
    //                 href="#"
    //                 className="truncate text-sm font-semibold leading-none text-gray-900hover:underline"
    //               >
    //                 Apple iPhone 15
    //               </a>
    //               <p className="mt-0.5 truncate text-sm font-normal text-gray-500 ">
    //                 $599
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-end gap-6">
    //               <p className="text-sm font-normal leading-none text-gray-500">
    //                 Qty: 1
    //               </p>
    //               <button
    //                 data-tooltip-target="tooltipRemoveItem1a"
    //                 type="button"
    //                 className="text-red-600 hover:text-red-700 "
    //               >
    //                 <span className="sr-only"> Remove </span>
    //                 <svg
    //                   className="h-4 w-4"
    //                   aria-hidden="true"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </button>
    //               <div
    //                 id="tooltipRemoveItem1a"
    //                 role="tooltip"
    //                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-gray-900 opacity-0 shadow-sm transition-opacity duration-300"
    //               >
    //                 Remove item
    //                 <div className="tooltip-arrow" data-popper-arrow />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-2">
    //             <div>
    //               <a
    //                 href="#"
    //                 className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
    //               >
    //                 Apple iPad Air
    //               </a>
    //               <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
    //                 $499
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-end gap-6">
    //               <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
    //                 Qty: 1
    //               </p>
    //               <button
    //                 data-tooltip-target="tooltipRemoveItem2a"
    //                 type="button"
    //                 className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
    //               >
    //                 <span className="sr-only"> Remove </span>
    //                 <svg
    //                   className="h-4 w-4"
    //                   aria-hidden="true"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </button>
    //               <div
    //                 id="tooltipRemoveItem2a"
    //                 role="tooltip"
    //                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
    //               >
    //                 Remove item
    //                 <div className="tooltip-arrow" data-popper-arrow />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-2">
    //             <div>
    //               <a
    //                 href="#"
    //                 className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
    //               >
    //                 Apple Watch SE
    //               </a>
    //               <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
    //                 $598
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-end gap-6">
    //               <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
    //                 Qty: 2
    //               </p>
    //               <button
    //                 data-tooltip-target="tooltipRemoveItem3b"
    //                 type="button"
    //                 className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
    //               >
    //                 <span className="sr-only"> Remove </span>
    //                 <svg
    //                   className="h-4 w-4"
    //                   aria-hidden="true"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </button>
    //               <div
    //                 id="tooltipRemoveItem3b"
    //                 role="tooltip"
    //                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
    //               >
    //                 Remove item
    //                 <div className="tooltip-arrow" data-popper-arrow />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-2">
    //             <div>
    //               <a
    //                 href="#"
    //                 className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
    //               >
    //                 Sony Playstation 5
    //               </a>
    //               <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
    //                 $799
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-end gap-6">
    //               <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
    //                 Qty: 1
    //               </p>
    //               <button
    //                 data-tooltip-target="tooltipRemoveItem4b"
    //                 type="button"
    //                 className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
    //               >
    //                 <span className="sr-only"> Remove </span>
    //                 <svg
    //                   className="h-4 w-4"
    //                   aria-hidden="true"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </button>
    //               <div
    //                 id="tooltipRemoveItem4b"
    //                 role="tooltip"
    //                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
    //               >
    //                 Remove item
    //                 <div className="tooltip-arrow" data-popper-arrow />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="grid grid-cols-2">
    //             <div>
    //               <a
    //                 href="#"
    //                 className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
    //               >
    //                 Apple iMac 20"
    //               </a>
    //               <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
    //                 $8,997
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-end gap-6">
    //               <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
    //                 Qty: 3
    //               </p>
    //               <button
    //                 data-tooltip-target="tooltipRemoveItem5b"
    //                 type="button"
    //                 className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
    //               >
    //                 <span className="sr-only"> Remove </span>
    //                 <svg
    //                   className="h-4 w-4"
    //                   aria-hidden="true"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
    //                     clipRule="evenodd"
    //                   />
    //                 </svg>
    //               </button>
    //               <div
    //                 id="tooltipRemoveItem5b"
    //                 role="tooltip"
    //                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
    //               >
    //                 Remove item
    //                 <div className="tooltip-arrow" data-popper-arrow />
    //               </div>
    //             </div>
    //           </div>
    //           <Link
    //             href={"/"}
    //             className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //             role="button"
    //           >
    //             {" "}
    //             Proceed to Checkout{" "}
    //           </Link>
    //         </div>
    //         <button
    //           id="userDropdownButton1"
    //           data-dropdown-toggle="userDropdown1"
    //           type="button"
    //           className="inline-flex items-center rounded-lg justify-center p-2  text-sm font-medium leading-none text-gray-900 "
    //         >
    //           <svg
    //             className="w-5 h-5 me-1"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeWidth={2}
    //               d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //             />
    //           </svg>
    //           Account
    //           <svg
    //             className="w-4 h-4 text-gray-900 ms-1"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="m19 9-7 7-7-7"
    //             />
    //           </svg>
    //         </button>
    //         <div
    //           id="userDropdown1"
    //           className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
    //         >
    //           <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
    //             <li>
    //               <Link
    //                 href={"/"}
    //                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
    //               >
    //                 {" "}
    //                 My Account{" "}
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 href={"/"}
    //                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
    //               >
    //                 {" "}
    //                 My Orders{" "}
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 href={"/"}
    //                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
    //               >
    //                 {" "}
    //                 Settings{" "}
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 href={"/"}
    //                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
    //               >
    //                 {" "}
    //                 Favourites{" "}
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 href={"/"}
    //                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
    //               >
    //                 {" "}
    //                 Delivery Addresses{" "}
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 href={"/"}
    //                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
    //               >
    //                 {" "}
    //                 Billing Data{" "}
    //               </Link>
    //             </li>
    //           </ul>
    //           <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
    //             <Link
    //               href={"/"}
    //               className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
    //             >
    //               {" "}
    //               Sign Out{" "}
    //             </Link>
    //           </div>
    //         </div>
    //         <button
    //           type="button"
    //           data-collapse-toggle="ecommerce-navbar-menu-1"
    //           aria-controls="ecommerce-navbar-menu-1"
    //           aria-expanded="false"
    //           className="inline-flex lg:hidden items-center justify-center rounded-md  p-2 text-gray-900 "
    //         >
    //           <span className="sr-only">Open Menu</span>
    //           <svg
    //             className="w-5 h-5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={24}
    //             height={24}
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeWidth={2}
    //               d="M5 7h14M5 12h14M5 17h14"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       id="ecommerce-navbar-menu-1"
    //       className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
    //     >
    //       <ul className="text-gray-900 text-sm font-medium  space-y-3">
    //         <li>
    //           <Link
    //             href={"/"}
    //             className="hover:text-primary-700 dark:hover:text-primary-500"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href={"/"}
    //             className="hover:text-primary-700 dark:hover:text-primary-500"
    //           >
    //             Best Sellers
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href={"/"}
    //             className="hover:text-primary-700 dark:hover:text-primary-500"
    //           >
    //             Gift Ideas
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href={"/"}
    //             className="hover:text-primary-700 dark:hover:text-primary-500"
    //           >
    //             Games
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href={"/"}
    //             className="hover:text-primary-700 dark:hover:text-primary-500"
    //           >
    //             Electronics
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href={"/"}
    //             className="hover:text-primary-700 dark:hover:text-primary-500"
    //           >
    //             Home &amp; Garden{" "}
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
