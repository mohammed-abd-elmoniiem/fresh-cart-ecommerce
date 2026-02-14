'use client'
import React from 'react'
import { QueryClient, useQuery } from '@tanstack/react-query'
import Card from '../home/card/card'
import type { productData } from '../../utils/types'
import { queryClient } from '@/src/providers'
import { fetchWishlist } from './wishlist.actions'



export default function WishListScreen() {
  const { data, isLoading, isError, error, refetch,status } = useQuery({
    queryKey: ['wishlistData'],
    queryFn: fetchWishlist
  })
  const products = data?.data || []

  if(status === 'success'){
    console.log('testing',data)
  }

  

  if (isLoading) {
    return <div className="p-6 text-center text-sm text-gray-500">Loading wishlist…</div>
  }

  if (isError) {
    return (
      <div className="p-6 text-center">
        <p className="text-sm text-rose-600">Error loading wishlist: {(error as Error)?.message}</p>
        <button onClick={() => refetch()} className="mt-3 px-3 py-2 bg-emerald-500 text-white rounded text-sm">
          Retry
        </button>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-gray-500">
        Your wishlist is empty.
      </div>
    )
  }

  return (
    
    <section className="max-w-6xl mx-auto p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">My Wishlist</h1>
        <div className="text-sm text-gray-500">{products.length} item{products.length > 1 ? 's' : ''}</div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <Card key={p.id} product={p} isWished= {true} />
        ))}
      </div>
    </section>
  )
}
