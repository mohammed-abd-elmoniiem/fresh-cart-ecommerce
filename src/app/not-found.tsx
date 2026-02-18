'use client'

import React from 'react'
import notFoundImage from '../assets/images/404.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-neutral-100 via-tone-200 to-gray-300 text-white px-6 py-12">

      {/* Animated Glow Background */}
      {/* <div className="absolute w-[600px] h-[600px] bg-main/30 rounded-full blur-[140px] top-[-200px] left-[-200px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] bottom-[-200px] right-[-200px] animate-pulse"></div> */}

      {/* Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-10 max-w-xl w-full flex flex-col items-center text-center gap-6">

        {/* Image */}
        <div className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <Image
            src={notFoundImage}
            width={360}
            height={240}
            alt="404 Not Found"
            priority
          />
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-neutral-950">
            404
          </h1>
          <p className="text-xl text-gray-700">
            Oops! The page you're looking for doesn’t exist.
          </p>
          <p className="text-sm text-gray-500">
            It might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">

          <Link
            href="/"
            className="group flex items-center justify-center gap-2 bg-main hover:bg-main/90 transition-all duration-300 px-6 py-3 rounded-xl font-medium shadow-lg shadow-main/30 hover:shadow-main/50 hover:scale-105"
          >
            <FontAwesomeIcon icon={faHome} />
            Back to Home
          </Link>

          <Link
            href="/profile"
            className="group flex items-center justify-center gap-2 border border-white hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-300 px-6 py-3 rounded-xl text-main font-medium backdrop-blur-md hover:scale-105"
          >
            <FontAwesomeIcon icon={faUser} />
            Your Account
          </Link>

        </div>

      </div>
    </div>
  )
}
