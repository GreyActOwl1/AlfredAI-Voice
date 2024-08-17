import React from 'react';
import Image from 'next/image';
const Hero = () => {
    return (
        <div className="pt-8 w-full md:m-1 md:max-w-7xl md:mx-auto bg-transparent">
        <div className='flex flex-col-reverse xl:flex-row xl:justify-between'>
            {/*Giggle Talk Section*/}
            <div className='relative flex flex-col pt-36 gap-y-6'>
                {/*Giggle Talk Text*/}
            <h1 className='text-center text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl tracking-widest text-black'>Giggle Talk</h1>
           {/*Talk With Toys Text*/}
            <p className='text-xl lg:text-3xl text-black font-bold text-center xl:text-start xl:ml-8 tracking-wide'>Talk with toys</p>
            {/* Click on Bear to interact text*/}
            <p className="absolute right-12 left-20 sm:text-center xl:left-[350px] xl:right-0 top-6 xl:top-[380px] xl:bottom-20 pt-2 xl:pt-16 text-gray-800 text-xl tracking-wide"> Click on the Bear to interact</p>

            </div>
            {/* Bear Image */}
        <Image src="/images/BearImage.png" alt="Bear Image" width={600} height={400} className="object-contain pr-8 sm:place-self-center md:object-cover"/>
        </div>
            
        </div>
    );
}

export default Hero;
