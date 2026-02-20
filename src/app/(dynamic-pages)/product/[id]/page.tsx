import SingleProductScreen from '@/src/features/home/singleProduct/singleProduct.screen';
import { getSingleProduct } from '@/src/features/home/singleProduct/singleProduct.server';
import { productData } from '@/src/utils/types';
import React from 'react'

export default async function Product({params}:{params:Promise<{id:string}>}) {

  const {id} = await params;
  const product: productData | null = await getSingleProduct(id);
  if(product == null ) {
    return (
      <div className='container mx-auto'>
        <p className="text-center text-gray-500">Product not found</p>
      </div>
    )
  }

  return (
    <div className='container mx-auto'>

      <SingleProductScreen product={product} />
    </div>
  )
}
