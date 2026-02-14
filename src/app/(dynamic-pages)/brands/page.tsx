import BrandsScreen from '@/src/features/brands/brands.screen'
import React from 'react'

export default function Brands() {
  return (
    <div className='container mx-auto py-4'>
       <h2 className="text-center my-6 text-2xl font-light text-gray-800">
         All Brands
      </h2>
      <BrandsScreen/>
    </div>
  )
}
