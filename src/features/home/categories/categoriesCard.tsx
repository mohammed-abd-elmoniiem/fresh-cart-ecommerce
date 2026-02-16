import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Category } from './categoreies.types'

export default function CategoriesCard({ category }: { category: Category }) {
  const href = `/subcategory/${ category._id }`
  const src = category.image
  console.log(src)

  return (
    <Link href={href} className="block h-15 grow" aria-label={category.name}>
      <div className="bg-white rounded-lg  shadow-sm hover:shadow-md transition flex itmems-center ">
        <div className="   w-12 aspect-square bg-gray-100 flex justify-center items-center ">
          <Image src={src} alt={category.name}  className="object-contain " width={100} height={100}/>
        </div>

        <div className="p-2">
          <h3 className="text-lg font-light text-gray-900  py-1 px-3 rounded-sm -translate-x-4">{category.name}</h3>
          
        </div>
      </div>
    </Link>
  )
}
