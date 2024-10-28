// components/GallerySection.tsx
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Our Collection Gallery</h2>
            <Link href="/gallery" className="text-blue-600 font-medium inline-flex items-center">
              See all <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Gallery Items */}
            <div className="relative">
              <Image src="/assets/images/collection1.png" alt="Verosa earrings" width={300} height={300} className="rounded-lg object-cover" />
              <div className="text-gray-600 mt-2">01 Verosa Earrings</div>
            </div>
            <div className="relative">
              <Image src="/assets/images/collection2.png" alt="Verosa necklaces" width={300} height={300} className="rounded-lg object-cover" />
              <div className="text-gray-600 mt-2">02 Verosa Necklaces</div>
            </div>
            <div className="relative">
              <Image src="/assets/images/collection3.png" alt="Verosa couplebands" width={300} height={300} className="rounded-lg object-cover" />
              <div className="text-gray-600 mt-2">03 Verosa Couplebands</div>
            </div>
            <div className="relative">
              <Image src="/assets/images/collection4.png" alt="Verosa bracelets" width={300} height={300} className="rounded-lg object-cover" />
              <div className="text-gray-600 mt-2">04 Verosa Bracelets</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-8" />
  </section>
  );
}

export default Gallery
