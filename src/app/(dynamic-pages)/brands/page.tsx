import BrandsScreen from '@/src/features/brands/brands.screen'
import React from 'react'

export default function Brands() {
  return (
    <div className='container mx-auto py-4'>
       <h2 className='capitalize p-3 text-xl bg-main/5 border-main border-l-8'>brands</h2>
      <BrandsScreen/>
    </div>
  )
}
