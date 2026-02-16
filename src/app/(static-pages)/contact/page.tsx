'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (!res.ok) throw new Error('request failed')
      setName(''); setEmail(''); setSubject(''); setMessage('')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Contact FreshCart</h1>
        <p className="mt-2 text-sm text-gray-600">Questions, feedback or partnership inquiries — we’re here to help.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact form */}
        <section className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-gray-600 mb-1">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-gray-600 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="you@domain.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs text-gray-600 mb-1">Subject (optional)</label>
              <input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Order question, partnership..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-gray-600 mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Write your message..."
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>

              <div className="text-sm">
                {status === 'success' && <span className="text-emerald-600">Message sent — we’ll reply soon.</span>}
                {status === 'error' && <span className="text-rose-600">There was a problem. Please check the form and try again.</span>}
              </div>
            </div>
          </form>
        </section>

        {/* Contact info */}
        <aside className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Get in touch</h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium">Customer Support</p>
              <p className="text-gray-500">support@freshcart.example</p>
            </div>

            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-500">+1 (555) 123-4567</p>
            </div>

            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-500">123 Market Street, Suite 100, YourCity, YourState</p>
            </div>

            <div>
              <p className="font-medium">Business hours</p>
              <p className="text-gray-500">Mon — Fri: 9:00 — 18:00</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600">Quick links</p>
              <nav className="mt-2 flex flex-wrap gap-2">
                <Link href="/" className="text-sm text-emerald-600 hover:underline">Shop</Link>
               <Link href="/wishlist" className="text-sm text-emerald-600 hover:underline">Wishlist</Link>
                <Link href="/cart" className="text-sm text-emerald-600 hover:underline">Cart</Link>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}