'use client'
import React from 'react'
import type { Review as ReviewType } from './SingleProducts.type'

export default function ProductReviews({ reviews }: { reviews: ReviewType[] | null }) {
  if (!reviews || reviews.length === 0) {
    return <div className="text-sm text-gray-500">No reviews yet.</div>
  }

  return (
    <div className="mt-6">
      <h4 className="text-sm font-medium">Reviews ({reviews.length})</h4>
      <ul className="mt-3 space-y-4">
        {reviews.map((r) => (
          <li key={r._id} className="p-3 shadow bg-main/5 rounded-md">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{r.user?.name ?? 'Anonymous'}</div>
              <div className="text-sm text-amber-500">{r.rating.toFixed(1)}★</div>
            </div>

            {r.review && <p className="text-sm text-gray-700 mt-2">{r.review}</p>}

            {r.createdAt && (
              <div className="text-xs text-gray-400 mt-2">{new Date(r.createdAt).toLocaleDateString()}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}