'use client'

import React, { useMemo, useState, useTransition } from 'react'
import type { Review as ReviewType } from './SingleProducts.type'
import { addReviewToProductServer } from './reviewsAction'
import { useSelector } from 'react-redux'
import { stateStype } from '@/src/store/reduxStore/reduxStore'
import { queryClient } from '@/src/providers'
import toast from 'react-hot-toast'

type Props = {
  productId: string,
  reviews: ReviewType[] | null
}

export default function ProductReviews({ reviews, productId }: Props) {


  const auth = useSelector((state:stateStype)=>state.authReducer)
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState('')


  /* =============================
     Derived Data
  ============================== */

  const averageRating = useMemo(() => {
    if (!reviews?.length) return 0
    return reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  }, [reviews])

  const ratingDistribution = useMemo(() => {
    if (!reviews?.length) return [0, 0, 0, 0, 0]

    const counts = [0, 0, 0, 0, 0]
    reviews.forEach((r) => {
      counts[5 - r.rating]++
    })
    return counts
  }, [reviews])

  /* =============================
     Submit Handler (Optimistic Ready)
  ============================== */

  const handleSubmit = async () => {
   
    if (!review.trim()) return;

    if(auth.isAuthentication){


      console.log({ review, rating })

        try{
              const response  = await addReviewToProductServer(productId, { review, rating })

              console.log(response)
           
              toast.success('your review add successfully')



          
            setReview('')
            setRating(5)

        }catch(error){

          console.log(error)

        }


      
  
    }else{
      toast.error('you must be loged in first')
    }

    
  }

  /* =============================
     Components
  ============================== */

  function StarDisplay({
    rating,
    size = 'md',
  }: {
    rating: number
    size?: 'sm' | 'md'
  }) {
    const starSize = size === 'sm' ? 'text-base' : 'text-xl'

    return (
      <div className={`flex items-center gap-1 ${starSize}`}>
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= Math.floor(rating)
          const isHalf =
            star === Math.ceil(rating) && rating % 1 !== 0

          return (
            <div key={star} className="relative">
              <span
                className={`${
                  isFilled
                    ? 'text-amber-500'
                    : 'text-gray-300'
                }`}
              >
                ★
              </span>

              {isHalf && (
                <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-amber-500">
                  ★
                </span>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  /* =============================
     UI
  ============================== */

  return (
    <section className="mt-14 space-y-10">
      {/* ================= Summary ================= */}
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/60 to-white/30 backdrop-blur-xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold tracking-tight">
          Customer Reviews
        </h3>

        {reviews?.length ? (
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            {/* Left: Average */}
            <div>
              <div className="text-5xl font-bold text-main">
                {averageRating.toFixed(1)}
              </div>

              <div className="mt-3">
                <StarDisplay rating={averageRating} />
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Based on {reviews.length}{' '}
                {reviews.length > 1 ? 'reviews' : 'review'}
              </p>
            </div>

            {/* Right: Distribution */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((star, i) => {
                const percent =
                  reviews.length > 0
                    ? (ratingDistribution[i] /
                        reviews.length) *
                      100
                    : 0

                return (
                  <div
                    key={star}
                    className="flex items-center gap-3"
                  >
                    <span className="text-sm w-6">
                      {star}
                    </span>

                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${percent}%` }}
                        className="h-full bg-amber-500 transition-all duration-700"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm text-gray-500">
            No reviews yet. Be the first to review this
            product.
          </p>
        )}
      </div>

      {/* ================= Write Review ================= */}
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-xl transition">
        <h4 className="text-lg font-semibold mb-6">
          Write a Review
        </h4>

        <div className="space-y-6">
          {/* Rating Selector */}
          <div>
            <label className="text-sm font-medium">
              Your Rating
            </label>

            <div className="flex gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-3xl transition-all duration-200 ${
                    star <= rating
                      ? 'text-amber-500 scale-110'
                      : 'text-gray-300'
                  } hover:scale-125`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="text-sm font-medium">
              Your Review
            </label>

            <textarea
              required
              value={review}
              onChange={(e) =>
                setReview(e.target.value)
              }
              rows={5}
              placeholder="Share your honest experience..."
              className="mt-3 w-full rounded-xl border border-gray-300 p-4 text-sm focus:ring-2 focus:ring-main focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
          
            className="px-6 py-3 rounded-xl bg-main text-white font-medium hover:bg-main/90 active:scale-[0.98] transition disabled:opacity-50"
            onClick={()=>{
              console.log('clicked')
              handleSubmit()
            }}
          >
            Submit Review
          </button>
        </div>
      </div>

      {/* ================= Reviews List ================= */}
      {reviews?.length ? (
        <ul className="space-y-6">
          {reviews.map((r) => (
            <li
              key={r._id}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-sm">
                    {r.user?.name ?? 'Anonymous'}
                  </div>

                  <div className="mt-1">
                    <StarDisplay
                      rating={r.rating}
                      size="sm"
                    />
                  </div>
                </div>

                {r.createdAt && (
                  <span className="text-xs text-gray-400">
                    {new Date(
                      r.createdAt
                    ).toLocaleDateString()}
                  </span>
                )}
              </div>

              {r.review && (
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {r.review}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
