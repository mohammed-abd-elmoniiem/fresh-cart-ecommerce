


import BrandProductsScreen from '@/src/features/singleBrand/brandProductsScreen'
import React from 'react'

export default async function page({params}:{params:Promise<{brand:string}>}) {

    const {brand} = await params

    
  return (
    <div className='flex justify-center'>
      <BrandProductsScreen brand={brand} />
    </div>
  )
}
