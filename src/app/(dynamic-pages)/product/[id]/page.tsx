import SingleProductScreen from '@/src/features/home/singleProduct/singleProduct.screen';
import React from 'react'

export default async function Product({params}:{params:Promise<{id:string}>}) {

  const {id} = await params;
  return (
    <div>
      <h1>{id}</h1>
      <SingleProductScreen id={id} />
    </div>
  )
}
