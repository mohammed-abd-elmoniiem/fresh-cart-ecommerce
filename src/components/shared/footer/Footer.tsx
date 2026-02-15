// ...existing code...
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../assets/freshcart-logo.svg'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')



  return (
    <footer className="bg-gray-50 border-t border-neutral-200 mt-12 overflow-hidden py-4">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col gap-6 items-center space-y-6 ">

            {/* logo & description - left on desktop */}

            <div className=" ">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-32 ">
                <Image src={logo} alt="FreshCart" width={150} className="object-contain" />
              </div>
              {/* <span className="text-xl font-semibold text-gray-900">FreshCart</span> */}
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              Fresh groceries delivered fast. Quality produce, trusted brands and local favorites.
            </p>
          </div>


          {/* subscribe - first on mobile, right-most on desktop */}
          <div className=" bg-white w-full max-w-lg shadow-xl p-2 rounded-md ">
            
            <p className="text-sm text-gray-600 mb-3">Get updates, offers and new arrivals.</p>

            <form className="flex gap-2">
              <label htmlFor="footer-subscribe" className="sr-only">Email</label>
              <input
                id="footer-subscribe"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="flex-1 px-3 py-2 rounded-md border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-main text-white rounded-md text-sm hover:bg-main/70 disabled:opacity-60"
               
              >
                {'Subscribe'}
              </button>
            </form>

          </div>

          {/* quick links & customer (center) */}
          <div className="flex flex-wrap justify-between w-full max-w-lg  ">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Quick links</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><Link href="/shop" className="hover:text-emerald-600">Shop</Link></li>
                <li><Link href="/categories" className="hover:text-emerald-600">Categories</Link></li>
                <li><Link href="/deals" className="hover:text-emerald-600">Deals</Link></li>
                <li><Link href="/about" className="hover:text-emerald-600">About us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Customer</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><Link href="/help" className="hover:text-emerald-600">Help Center</Link></li>
                <li><Link href="/shipping" className="hover:text-emerald-600">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-emerald-600">Returns</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-600">Contact</Link></li>
              </ul>
            </div>
          </div>

        
        
        </div>

        {/* copyright - always at the end */}
        <div className="mt-8 border-t pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-xs">
            Built with care — FreshCart
          </div>
          <div className="text-center md:text-right text-xs">
            © {new Date().getFullYear()} FreshCart. All rights reserved.

             </div>
        </div>
      </div>
    </footer>
  )
}