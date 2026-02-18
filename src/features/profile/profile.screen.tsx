'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileImage from '../../assets/images/review-author.png'
import Image from 'next/image'
import {
  faCamera,
  faGear,
  faGears,
  faCartShopping,
  faHeart,
  faHouse,
  faRightFromBracket,
  faLock,
  faBoxOpen,
  faCity,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { stateStype } from '@/src/store/reduxStore/reduxStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

// ...existing code...
export default function ProfileScreen() {
  const authData = useSelector((state: stateStype) => state.authReducer)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    try {
      // best-effort logout: clear local auth and notify store
      localStorage.removeItem('token')
      dispatch?.({ type: 'auth/logout' })
    } finally {
      router.push('/')
    }
  }

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-wrap md:flex-row gap-6 py-8">
      

        {/* Profile main */}
        <div className="flex-1 bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="relative w-44 aspect-square rounded-full p-2">
              <Image
                className="bg-neutral-300 w-full h-full object-cover rounded-full border border-stone-700"
                src={profileImage}
                alt="profile img"
                priority
              />

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-2 text-primary-c text-3xl rounded-full bg-white shadow-md">
                <FontAwesomeIcon icon={faCamera} />
              </div>

              <Link
                href="/change-my-password"
                className="absolute -top-2 -left-2 text-lg flex items-center p-2 rounded-full bg-white shadow-md"
                aria-label="Change password"
              >
                <FontAwesomeIcon icon={faGear} />
              </Link>
            </div>

            {!authData.isAuthentication ? (
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="py-3 text-stone-900">You must login first.</p>

                <div className="flex gap-4 items-center">
                  <Link className="py-2 px-6 bg-main text-white rounded-md shadow-lg" href="/login">
                    login
                  </Link>
                  <Link className="py-2 px-6 bg-main text-white rounded-md shadow-lg" href="/signup">
                    sign up
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-stone-800">
                <h2 className="uppercase text-3xl">{authData.userInfo?.name}</h2>
                <p className="text-sm font-light">{authData.userInfo?.email}</p>
                <p className="text-sm font-light">{authData.userInfo?.id}</p>
              </div>
            )}
          </div>
        </div>

          {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border border-neutral-200 font-light rounded-lg p-4 shadow-sm">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <FontAwesomeIcon icon={faHouse} className="w-4" />
                <span className="text-sm font-medium">Home</span>
              </Link>
            </li>

            <li>
              <Link href="/cart" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="text-sm font-medium">Cart</span>
              </Link>
            </li>

            <li>
              <Link href="/wishlist" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <FontAwesomeIcon icon={faHeart} />
                <span className="text-sm font-medium">Wishlist</span>
              </Link>
            </li>

            <li>
              <Link href="/allorders" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <FontAwesomeIcon icon={faBoxOpen} />
                <span className="text-sm font-medium">Your orders</span>
              </Link>
            </li>

               <li>
              <Link href="/my-addresses" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50">
                <FontAwesomeIcon icon={faCity} />
                <span className="text-sm font-medium">my addresses</span>
              </Link>
            </li>

            <li>
              <Link
                href="/change-my-password"
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
              >
                <FontAwesomeIcon icon={faLock} />
                <span className="text-sm font-medium">Forgot / Update password</span>
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )

}