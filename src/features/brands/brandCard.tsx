import React from 'react'
import { Brand } from './brands.types'
import Image from 'next/image'
import Link from 'next/link'

export default function BrandCard({ brand }:{brand:Brand}) {
  return (
    <Link className='flex flex-col items-center gap-2 rounded-lg shadow p-2 '

    href={`/brand/${brand._id}/products`}
    
    >
        <div className="w-12 aspect-square  border border-main rounded-full overflow-hidden  ">
            <Image src={brand.image} alt={brand.name} width={100} height={100} className='w-full h-full object-contain '/>

        </div>

        <p className="">
            {brand.name}
        </p>
    </Link>
  )
}
