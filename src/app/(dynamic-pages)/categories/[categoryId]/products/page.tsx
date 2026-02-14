import Card from '@/src/features/home/card/card';
import { getAllProductsInSubcategory } from '@/src/features/home/categories/categories.actions';
import React from 'react'

export default async function page({params}:{
    params:Promise<{categoryId:string}>
}) {

    const p = await params;
    console.log(p)
    const response = await getAllProductsInSubcategory(p.categoryId);
    console.log('products in sub category response', response)
  return (
    <div className='container mx-auto '>
        <p className="">Products in sub category {p.categoryId}</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {
            response ? response.map((product) => (
               <Card key={product._id} product={product} />
            )) : <p>No products found</p>
        }
        </div>

       

    </div>
  )
}
