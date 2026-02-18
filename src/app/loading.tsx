'use client'

import React from 'react'

export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* Animated Glow Orbs */}
      {/* <div className="absolute w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[140px] top-[-200px] left-[-200px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px] bottom-[-150px] right-[-150px] animate-pulse"></div> */}

      {/* Glass Card */}
      <div className="relative  bg-linear-to-br from-slate-100 via-slate-200 to-white border border-white/10 shadow-2xl rounded-3xl px-12 py-10 flex flex-col items-center gap-8">

        {/* Premium Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-[3px] border-black/10"></div>

          <div className="absolute w-20 h-20 rounded-full border-[3px] border-transparent border-t-lime-500 border-r-main animate-spin"></div>

          <div className="absolute w-14 h-14 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 blur-xl opacity-40"></div>
        </div>

        {/* Text Section */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide bg-linear-to-r from-black to-gray-400 bg-clip-text text-neutral-900 capitalize">
            working on it
          </h2>

          <p className="text-sm text-neutral-800 animate-pulse">
            Please wait while we load everything beautifully...
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-linear-to-r from-main to-lime-500 animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>

      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>

    </div>
  )
}
