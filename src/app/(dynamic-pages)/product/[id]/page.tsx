import SingleProductScreen from '@/src/features/home/singleProduct/singleProduct.screen';
import React from 'react'

export default async function Product({params}:{params:Promise<{id:string}>}) {

  const {id} = await params;
  return (
    <div className='container mx-auto'>
     
      <SingleProductScreen id={id} />
    </div>
  )
}
