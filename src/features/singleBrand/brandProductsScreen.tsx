import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchBrandProducts } from './brandProduct.action'
import { productData } from '@/src/utils/types'
import Card from '../home/card/card'

export default function BrandProductsScreen({brand}:{brand:string}) {

      const{data , status ,error} = useQuery({
        queryKey:['brandProducts'],
        queryFn:async()=>{
            return await fetchBrandProducts(brand)
        }
      })

      if(status == 'pending'){
          return <div>Loading...</div>
      }

      if(status === 'error'){
          return <div>Error: {error.message}</div>
      }

      console.log(data)

  return (
    <div>
        {data && data.data.map((product:productData)=><Card key={product.id} product={product} />)}
    </div>
  )
}
