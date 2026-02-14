import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Category } from './categoreies.types'

export default function SubCategoriesCard({ category }: { category: Category }) {
  const href = `/categories/${ category.category }/products`
  const src = category.image ?? '/placeholder.png'

  return (
    <Link href={href} className="block" aria-label={category.name}>
      <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ">
       

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{category.name}</h3>
          <p className="text-sm text-gray-500 mt-1">Browse products in this category</p>
        </div>
      </div>
    </Link>
  )
}
