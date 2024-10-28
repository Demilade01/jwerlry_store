import Link from 'next/link';
import React from 'react'

const Feature = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 shadow-md rounded-lg text-center border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Why choose us?</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet ipsum dolor amet</p>
          <Link href="/about" className="text-blue-600 font-medium inline-flex items-center">
            More about us <span className="ml-2">→</span>
          </Link>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Collection</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet ipsum dolor amet</p>
          <Link href="/collections" className="text-blue-600 font-medium inline-flex items-center">
            See collection <span className="ml-2">→</span>
          </Link>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Jewelry</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet ipsum dolor amet</p>
          <Link href="/custom-jewelry" className="text-blue-600 font-medium inline-flex items-center">
            More about us <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
}

export default Feature