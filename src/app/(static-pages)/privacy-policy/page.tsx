import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Privacy Policy & Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <nav className="mb-8">
        <ul className="flex gap-4 text-sm">
          <li><a href="#privacy" className="text-emerald-600 hover:underline">Privacy Policy</a></li>
          <li><a href="#terms" className="text-emerald-600 hover:underline">Terms of Service</a></li>
          <li><Link href="/contact" className="text-emerald-600 hover:underline">Contact</Link></li>
        </ul>
      </nav>

      <section id="privacy" className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Privacy Policy</h2>

        <p className="text-sm text-gray-700 mb-3">
          FreshCart ("we", "us", "our") values your privacy. This policy explains what information we collect,
          how we use it, and your choices. By using our services you agree to the collection and use described here.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">1. Information we collect</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>Account information: name, email, phone, and shipping addresses.</li>
          <li>Order and payment details required to process purchases.</li>
          <li>Usage data: pages visited, searches, and interactions to improve the product.</li>
          <li>Device data and analytics, including cookies and similar technologies.</li>
        </ul>

        <h3 className="text-sm font-medium text-gray-900 mt-4">2. How we use your data</h3>
        <p className="text-sm text-gray-700 mt-2">
          We use collected information to process orders, communicate about purchases, provide customer
          support, personalize your shopping experience, and comply with legal obligations.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">3. Sharing and disclosure</h3>
        <p className="text-sm text-gray-700 mt-2">
          We do not sell personal information. We may share data with service providers (payment processors,
          delivery partners) and when required by law. Aggregated or anonymized data may be used for analytics.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">4. Cookies & tracking</h3>
        <p className="text-sm text-gray-700 mt-2">
          We use cookies and similar tools for session management, analytics, and personalization. You can
          control cookies via your browser settings; some site features may be affected.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">5. Your rights</h3>
        <p className="text-sm text-gray-700 mt-2">
          Depending on your jurisdiction, you may access, correct, or request deletion of your personal data.
          Contact us via the Contact page for requests or questions.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">6. Security</h3>
        <p className="text-sm text-gray-700 mt-2">
          We implement reasonable safeguards to protect personal information, but no system is completely secure.
          If a breach occurs, we will follow applicable notification obligations.
        </p>
      </section>

      <section id="terms" className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Terms of Service</h2>

        <p className="text-sm text-gray-700 mb-3">
          These Terms govern your use of FreshCart. By accessing or using our site and services you accept these terms.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">1. Account & eligibility</h3>
        <p className="text-sm text-gray-700 mt-2">
          You must provide accurate account information and be authorized to use any payment method applied to your account.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">2. Orders & pricing</h3>
        <p className="text-sm text-gray-700 mt-2">
          All orders are subject to product availability and confirmation of the order price. Prices and promotions
          may change and are only valid as displayed at checkout.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">3. Shipping & returns</h3>
        <p className="text-sm text-gray-700 mt-2">
          Shipping options, estimated delivery times, and return policies are provided on the site. Returns and refunds
          are handled according to our returns policy; certain perishable goods may be non-returnable.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">4. Intellectual property</h3>
        <p className="text-sm text-gray-700 mt-2">
          All content on the site (text, graphics, logos) is owned or licensed by FreshCart. You may not reproduce or
          distribute content without permission.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">5. Limitation of liability</h3>
        <p className="text-sm text-gray-700 mt-2">
          To the extent permitted by law, FreshCart's liability for claims arising from use of the service is limited.
          We are not liable for indirect, incidental, or consequential damages.
        </p>

        <h3 className="text-sm font-medium text-gray-900 mt-4">6. Governing law & changes</h3>
        <p className="text-sm text-gray-700 mt-2">
          These Terms are governed by the laws applicable to FreshCart's operation. We may update these Terms and
          the Privacy Policy; material changes will be posted with an updated "Last updated" date.
        </p>
      </section>

      <section className="text-sm text-gray-700">
        <h3 className="text-base font-medium text-gray-900 mb-2">Contact</h3>
        <p className="mb-3">
          For privacy or terms questions, contact us at{' '}
          <Link href="/contact" className="text-emerald-600 hover:underline">Contact page</Link> or email support@freshcart.example
        </p>

        <p className="text-xs text-gray-400 mt-6">
          This page provides a summary for convenience and does not replace the full legal terms.
        </p>
      </section>
    </main>
  )
}
