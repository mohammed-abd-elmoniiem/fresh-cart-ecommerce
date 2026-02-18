'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Thumbs, Autoplay } from 'swiper/modules'
import { gsap } from 'gsap'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

const slides = [
 
  {
    id: 2,
    title: 'Luxury Fashion',
    desc: 'Premium trends for 2026.',
    category: '/category/fashion',
    deal: 35,
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?w=1600',
  },
  {
    id: 3,
    title: 'Sneaker Drops',
    desc: 'Limited edition collections.',
    category: '/category/sneakers',
    deal: 50,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600',
  },
  {
    id: 4,
    title: 'Gaming Setup',
    desc: 'Build your ultimate battlestation.',
    category: '/category/gaming',
    deal: 45,
    image: 'https://images.unsplash.com/photo-1603484477859-abe6a73f9366?q=80&w=1600',
  },
  {
    id: 5,
    title: 'Watches Collection',
    desc: 'Timeless elegance.',
    category: '/category/watches',
    deal: 30,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1600',
  },
  {
    id: 6,
    title: 'Streetwear',
    desc: 'Urban vibes & bold styles.',
    category: '/category/streetwear',
    deal: 25,
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?w=1600',
  },
  {
    id: 7,
    title: 'Home Decor',
    desc: 'Modern & aesthetic living.',
    category: '/category/home',
    deal: 20,
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600',
  },
  {
    id: 8,
    title: 'Fitness Gear',
    desc: 'Train harder every day.',
    category: '/category/fitness',
    deal: 35,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1600',
  },
  {
    id: 9,
    title: 'Perfume Collection',
    desc: 'Signature luxury scents.',
    category: '/category/perfume',
    deal: 40,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1600',
  },
  {
    id: 10,
    title: 'Accessories',
    desc: 'Complete your look.',
    category: '/category/accessories',
    deal: 28,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?w=1600',
  },
]

export default function PremiumSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const animateSlide = (deal: number) => {
    gsap.fromTo(
      textRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    )

    gsap.fromTo(
      counterRef.current,
      { innerText: 0 },
      {
        innerText: deal,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power1.out',
      }
    )

    gsap.fromTo(
      progressRef.current,
      { width: '0%' },
      { width: '100%', duration: 5, ease: 'linear' }
    )
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination, Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(swiper) =>
          animateSlide(slides[swiper.realIndex].deal)
        }
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full group">
              <Image
                src={slide.image}
                fill
                alt={slide.title}
                className="object-cover scale-110 group-hover:scale-105 transition duration-[3000ms]"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 linear-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div
                  ref={textRef}
                  className="text-white max-w-xl px-10 backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20"
                >
                  <h2 className="text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>

                  <p className="text-gray-200 mb-6">
                    {slide.desc}
                  </p>

                  <div className="text-4xl font-bold text-yellow-400 mb-6">
                    Up to <span ref={counterRef}>0</span>% OFF 🔥
                  </div>

                  <Link
                    href={slide.category}
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
                  >
                    Shop Now →
                  </Link>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div
                  ref={progressRef}
                  className="h-full bg-yellow-400"
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={6}
        spaceBetween={10}
        className="absolute bottom-3 left-0  -translate-y-full  w-8/10 flex gap-3 "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-20 rounded-xl border overflow-hidden border-white/30 swiper-pagination-bullet-active">
              <Image
                src={slide.image}
                fill
                alt="thumb"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
