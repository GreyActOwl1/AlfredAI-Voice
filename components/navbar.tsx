import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const NavBar = () => {
    return (
        <div className='bg-transparent h-16 w-[90%] lg:max-w-5xl xl:max-w-6xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href="/"><Image src="/images/Logo.png" alt="Logo" width={45} height={45} className='text-xl md:text-2xl'/></Link>
        {/*About Us Link*/}
        <Link href="/about" className='text-md text-black mr-8 font-medium'>About Us</Link>
        </div>
    );
}

export default NavBar;
