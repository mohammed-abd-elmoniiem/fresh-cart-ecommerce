
'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchBrands } from './brands.action'
import BrandCard from './brandCard'
import Loading from '@/src/app/loading'

export default function BrandsScreen() {

     const {status ,data,isLoading,error}=useQuery({
        queryKey:['brandsData'],
        queryFn:fetchBrands
     })

     if(status == 'success'){
        console.log(data)
     }

     if(status == 'error'){
        console.log(error)
     }
     if(isLoading) return <Loading/>
  return (
    <div className='flex flex-wrap gap-4 justify-center py-5'>

      

     

      {status == 'success'&& data.data.map((brand)=><BrandCard key={brand._id} brand={brand} />)}
  
      {status=='error' &&<div>Error loading brands</div>}
    </div>
  )
}
