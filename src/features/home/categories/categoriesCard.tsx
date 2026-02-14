import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Category } from './categoreies.types'

export default function CategoriesCard({ category }: { category: Category }) {
  const href = `/subcategory/${ category._id }`
  const src = category.image 

  return (
    <Link href={href} className="block w-12" aria-label={category.name}>
      <div className="bg-white rounded-lg  shadow-sm hover:shadow-md transition flex p-2 ">
        <div className="  w-22 rounded-full aspect-square overflow-hidden bg-gray-100 flex justify-center items-center ">
          <Image src={src} alt={category.name}  className="object-contain rounded-full  w-full" width={50} height={50}/>
        </div>

        <div className="p-2">
          <h3 className="text-lg font-light text-gray-900  py-1 px-3 rounded-sm -translate-x-4">{category.name}</h3>
          
        </div>
      </div>
    </Link>
  )
}
