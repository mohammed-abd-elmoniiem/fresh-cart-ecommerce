'use client'

import React from 'react'
import Link from 'next/link'
import { getSingleProduct } from './singleProduct.server'
import { productData } from '../../../utils/types'
import ProductReviews from './singleProductsReviews'
import ProductImages from './singleProductImages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../../cart/cart.actions'
import { addProductToCart } from '../../cart/cart.servcies'
import AddButton from './component/AddButton'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { stateStype } from '@/src/store/reduxStore/reduxStore'
import { useQuery } from '@tanstack/react-query'
import { addToWishlist } from '../../wishlist/wishlist.actions'
import { queryClient } from '@/src/providers'
import Loading from '@/src/app/loading'

export default   function SingleProductScreen({product }: { product:productData | null }) {
  // const product: productData | null = await getSingleProduct(id);
// const auth = useSelector((state: stateStype) => state.authReducer)
//     const {data:product,isLoading ,error ,status} = useQuery({
//       queryKey:['singleProduct'],
//       queryFn:async()=>{
//         return await getSingleProduct(id)
//       }
//     })


    // if(isLoading)return <Loading/>
    if(product == null ) {
      toast.error('cant load the product data,try again!')
    
    }

    
    



  
       

    const handleAddToWishlist = async (id:string) => {


          const response =   await addToWishlist(id )
        
      if (response.status === 'success') {
        toast.success('Added to wishlist')
        queryClient.invalidateQueries({
          queryKey:['wishlistData']
        })
        console.log(response)
        
      } else {
        toast.error('Failed to add to wishlist')
      }
   

   
  }

  console.log('single product data', product)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-center text-gray-500">Product not found</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          {/* image slider (client) */}
          <ProductImages images={product.images} />

          {/* {product.availableColors && product.availableColors.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xs text-gray-500 mb-2">Available colors</h4>
              <div className="flex gap-2">
                {product.availableColors.map((c: any, i: number) => (
                  <span
                    key={i}
                    title={String(c)}
                    className="w-6 h-6 rounded-full ring-1 ring-gray-200"
                    style={{ backgroundColor: String(c) }}
                  />
                ))}
              </div>
            </div>
          )} */}
        </section>

        <section>
          <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
          <p className="text-sm text-gray-500 mt-1 truncate">{product.brand?.name}</p>

          <div className="mt-4 flex items-center gap-4">
            {/* <div>
              {product.priceAfterDiscount ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-rose-600">
                    ${product.priceAfterDiscount.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
              )}

              <div className="text-xs text-gray-500 mt-1">Qty available: {product.quantity}</div>
            </div> */}

            <div className="ml-auto text-right">
              <div className="text-sm font-semibold">
                {(product.ratingsAverage ?? 0).toFixed(1)} <span className="text-amber-500">★</span>
              </div>
              <div className="text-xs text-gray-500">{product.ratingsQuantity} reviews</div>
            </div>
          </div>

          <div className="mt-6 ">
            <h3 className="text-sm font-medium text-gray-800">Description</h3>
            <p className="mt-2 font-light text-[12px] text-gray-600 ">{product.description}</p>
          </div>

          <div className="mt-6 flex gap-3">
          <AddButton id={product._id}/>
            <button className="px-4 py-3 border border-neutral-200 rounded-md text-sm hover:bg-gray-50"

            onClick={()=>{
                handleAddToWishlist(product._id)
                

              }}
            
            >
              Wishlist
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              Category:{' '}
              <Link href={`/category/${product.category?.slug ?? product.category?._id}`} className="text-main">
                {product.category?.name}
              </Link>
            </p>
            <p className="mt-1">
              Subcategories:{' '}
              {product.subcategory?.map((s) => (
                <Link
                  key={s._id}
                  href={`/subcategory/${s.slug}`}
                  className="text-main mr-2"
                >
                  {s.name}
                </Link>
              ))}
            </p>

            <p className="mt-4">
              Created: <span className="text-gray-700">{new Date(product.createdAt).toLocaleDateString()}</span>
            </p>
          </div>

          {/* reviews - mounted client component */}
          <ProductReviews productId={product._id} reviews={(product as any).reviews ?? null} />
        </section>
      </div>
    </div>
  )
}

