'use client'
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import type { productData } from '../../../utils/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
  product: productData
}

export default function ProductImages({ images }: { images: string[] }) {




    
  const [index, setIndex] = useState(0)
  const count = images.length

  function prev() {
    setIndex((i) => (i - 1 + count) % count)
  }
  function next() {
    setIndex((i) => (i + 1) % count)
  }

  if (count === 0) {
    return null
  }

  return (
    <div>
      <div className="relative w-full h-96 bg-white rounded-md overflow-hidden">
        <Image
          src={images[index]}
          alt='product image'
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />

        {count > 1 && (
          <>
            <button
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white shadow-xl rounded-full bg-main/80 hover:bg-white hover:text-main aspect-square w-10"
              type="button"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

              <button
              aria-label="Previous image"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 text-white shadow-xl rounded-full bg-main/80 hover:bg-white aspect-square w-10 hover:text-main"
              type="button"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex gap-2 p-3 overflow-x-auto mt-3">
          {images.map((src, i) => {
            const active = i === index
            return (
              <button
                key={src + i}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={active}
                className={`w-20 h-20  rounded-md overflow-hidden focus:outline-none transition ${
                  active ? 'ring-2 ring-emerald-500' : 'border border-neutral-200'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image src={src} alt='image' fill className="object-cover" />
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}