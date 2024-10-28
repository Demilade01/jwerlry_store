import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* Left Image */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/assets/images/hero1.png"
            alt="Jewelry model left"
            width={500}
            height={700}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Radiance &amp; Refinement
          </h2>
          <p className="text-gray-600 mb-6">
            Step into the world of Elysian Gems, where beauty meets craftsmanship
          </p>
          <Link href="/discover" className='inline-flex items-center px-6 py-2 bg-white text-white border-[2px] rounded-xl font-semibold hover:bg-slate-400 duration-300'>
            <button className='text-black'>
              Discover
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/assets/images/hero2.png"
            alt="Jewelry model right"
            width={500}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero