"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white p-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex space-x-4 ml-4">
          <Link href="/">Home</Link>
          <div className="w-0.5 h-8 bg-white mx-4" />
          <Link href="/about">About Us</Link>
          <div className="w-0.5 h-8 bg-white mx-4" />
          <Link href="/collections">Collections</Link>
          <div className="w-0.5 h-8 bg-white mx-4" />
          <Link href="/blogs">Blogs</Link>
          <div className="w-0.5 h-8 bg-white mx-4" />
        </div>
        <Image
          src="/assets/images/verosa_logo.png"
          alt="Verosa Logo"
          width={200}
          height={100}
        />
        <div className="flex items-center space-x-4 mr-4">
          <span>Contact Us</span>
          <div className="w-0.5 h-8 bg-white mx-4" />
          <div className="flex gap-4">
          <Image src="/assets/images/facebook.png.png" alt="Facebook" className="w-10 h-10 rounded-full bg-black-200 p-2 object-cover" width={10} height={10} />
          <Image src="/assets/images/instagram.png" alt="Facebook" className="w-10 h-10 rounded-full bg-black-200 p-2 object-cover" width={10} height={10} />
          <Image src="/assets/images/x.png.png" alt="Facebook" className="w-10 h-10 rounded-full bg-black-200 p-2 object-cover" width={10} height={10} />
        </div>

        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        <button onClick={toggleMenu} className="text-white">
          {/* Hamburger Icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
        <Image
          src="/assets/images/verosa_logo.png"
          alt="Verosa Logo"
          width={150}
          height={100}
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-start p-6 space-y-4">
          <button onClick={toggleMenu} className="self-end">
            ✕
          </button>
          <Link href="/" className=''>Home</Link>
          <div className="w-12 h-0.5 bg-white my-4" />
          <Link href="/about">About Us</Link>
          <div className="w-12 h-0.5 bg-white my-4" />
          <Link href="/collections">Collections</Link>
          <div className="w-12 h-0.5 bg-white my-4" />
          <Link href="/blogs">Blogs</Link>
          <div className="w-12 h-0.5 bg-white my-4" />
          <div className="flex space-x-4 pt-4">
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
