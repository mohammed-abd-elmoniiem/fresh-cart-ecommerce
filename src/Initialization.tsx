'use client'

import React from 'react'
import useStore from './store/useStore'
import { useQuery } from '@tanstack/react-query'
import { fetchWishlist } from './features/wishlist/wishlist.actions'

export default function Initialization({children}:{children:React.ReactNode}) {

    useStore()

   

 
  return (
    <>
    {
        children
    }

    </>
  )
}
