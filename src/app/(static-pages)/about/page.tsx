// ...existing code...
import React from 'react'
import Image from 'next/image'
import Logo from '../../../assets/freshcart-logo.svg'
import Link from 'next/link'

export default function About() {
  return (
    <main className=" container mx-auto px-4 py-12">
      <header className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div className="relative w-52 aspect-video shrink-0">
          <Image src={Logo} alt="FreshCart logo" fill className="object-contain" />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">About FreshCart</h1>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">
            FreshCart is an online grocery marketplace built to make healthy, high-quality food
            convenient and affordable. We combine local produce, trusted brands and fast delivery
            so customers can shop confidently from home.
          </p>
        </div>
      </header>

      <section className="grid gap-8 md:grid-cols-3 mb-10">
        <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
          <p className="mt-2 text-sm text-gray-600">
            Deliver fresh groceries quickly while supporting local farmers and sustainable
            practices. We focus on quality, transparency and great customer experience.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">How it works</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Browse thousands of products across categories and brands.</li>
            <li>Choose delivery or pickup times that fit your schedule.</li>
            <li>Secure checkout and real‑time order updates.</li>
          </ul>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Why choose us</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-2">
            <li>Fresh, inspected produce and reliable suppliers.</li>
            <li>Competitive prices, deals and flexible delivery.</li>
            <li>Easy returns and responsive support team.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm mb-10">
        <h2 className="text-xl font-semibold text-gray-900">Our values</h2>
        <p className="mt-3 text-sm text-gray-600">
          We believe in honesty, sustainability and convenience. From transparent sourcing to
          careful packaging and timely deliveries, every step is designed to protect the quality
          of the items you receive and the wellbeing of the communities we partner with.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-6 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Ready to shop?</h3>
          <p className="mt-2 text-sm text-gray-600">Explore our catalog and get fresh groceries delivered to your door.</p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-main text-white rounded-md text-sm shadow hover:bg-main/80"
          >
            Shop now
          </Link>
          <Link
            href="/contact"
            className="inline-block px-4 py-2 border border-neutral-200 rounded-md text-sm hover:bg-gray-50"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  )
}