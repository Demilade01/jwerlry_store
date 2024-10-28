import Image from 'next/image'
import Link from 'next/link'

const OurPromise = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 ">
      <div className="container mx-auto">
      <h2 className="text-2xl text-black font-semibold text-center mb-8">Our Promises</h2>

      <div className="flex justify-between items-center mb-8">
      {['promise1.png', 'promise2.png', 'promise3.png', 'promise4.png', 'promise5.png'].map((icon, index) => (
        <div key={index} className="w-16 h-16 relative">
        <Image
          src={`/assets/images/${icon}`}
          alt={`Promise ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        </div>
      ))}
      </div>
      <hr className="border-t border-gray-300 mb-8" />
      <div className="flex items-center justify-center bg-black p-4">
        <div className="w-1/2 relative">
          <Image
        src="/assets/images/promise_bg.png"
        alt="Why"
        layout="responsive"
        width={100}
        height={100}
        className=""
          />
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="font-semibold text-white text-4xl pb-10">Why Quality Matters</h3>
          <p className="text-white pb-10">Experience the excellence of Verosa’s dedication to precision. Meticulously chosen diamonds combined with intricate designs and high quality craftsmanship.</p>
          <Link href="/discover" className='inline-flex items-center px-6 py-2 bg-black text-white border-[2px] rounded-xl font-semibold hover:bg-slate-400 duration-300'>
            <button className='text-white'>
              Discover
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}

export default OurPromise