'use server'


import React from 'react'
import { getAllProducts } from './server/home.actions'
import { productData } from '@/src/utils/types'
import toast from 'react-hot-toast'

import Card from './card/card'


export default async  function Products() {

  
    

    const  AllProducts:productData[] = await getAllProducts()
        
        

    

  return (
    <div className='container mx-auto px-4 py-8'>
        <h2 className='capitalize p-3 text-xl bg-main/5 border-main border-l-8'>featured Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5'>
            {AllProducts?.map((product: productData) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}


//  [
//         {
//     sold: 24096,
//     images: [
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg'
//     ],
//     subcategory: [ ],
//     ratingsQuantity: 2,
//     _id: '6428ebc6dc1175abc65ca0b9',
//     title: 'Woman Shawl',
//     slug: 'woman-shawl',
//     description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
//     quantity: 225,
//     price: 191,
//     imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
//     category: {
//       _id: '6439d58a0049ad0b52b9003f',
//       name: "Women's Fashion",
//       slug: "women's-fashion",
//       image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg'
//     },
//     brand: {
//       _id: '64089bbe24b25627a253158b',
//       name: 'DeFacto',
//       slug: 'defacto',
//       image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png'
//     },
//     ratingsAverage: 4.5,
//     createdAt: '2023-04-02T02:43:18.400Z',
//     updatedAt: '2026-02-12T16:39:27.459Z',
//     id: '6428ebc6dc1175abc65ca0b9'
//         }
//         ,
//          {
//     sold: 24096,
//     images: [
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg'
//     ],
//     subcategory: [ ],
//     ratingsQuantity: 2,
//     _id: '6428ebc6dc1175abc65ca0b9',
//     title: 'Woman Shawl',
//     slug: 'woman-shawl',
//     description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
//     quantity: 225,
//     price: 191,
//     imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
//     category: {
//       _id: '6439d58a0049ad0b52b9003f',
//       name: "Women's Fashion",
//       slug: "women's-fashion",
//       image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg'
//     },
//     brand: {
//       _id: '64089bbe24b25627a253158b',
//       name: 'DeFacto',
//       slug: 'defacto',
//       image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png'
//     },
//     ratingsAverage: 4.5,
//     createdAt: '2023-04-02T02:43:18.400Z',
//     updatedAt: '2026-02-12T16:39:27.459Z',
//     id: '6428ebc6dc1175abc65ca0b9'
//         }
//         , {
//     sold: 24096,
//     images: [
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
//       'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg'
//     ],
//     subcategory: [],
//     ratingsQuantity: 2,
//     _id: '6428ebc6dc1175abc65ca0b9',
//     title: 'Woman Shawl',
//     slug: 'woman-shawl',
//     description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
//     quantity: 225,
//     price: 191,
//     imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
//     category: {
//       _id: '6439d58a0049ad0b52b9003f',
//       name: "Women's Fashion",
//       slug: "women's-fashion",
//       image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg'
//     },
//     brand: {
//       _id: '64089bbe24b25627a253158b',
//       name: 'DeFacto',
//       slug: 'defacto',
//       image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png'
//     },
//     ratingsAverage: 4.5,
//     createdAt: '2023-04-02T02:43:18.400Z',
//     updatedAt: '2026-02-12T16:39:27.459Z',
//     id: '6428ebc6dc1175abc65ca0b9'
//         }
//         ,

// ]