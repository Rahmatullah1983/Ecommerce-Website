
// export default Banner
import React from 'react';
import BannerImage from "../../assets/women/women2.jpg";
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
    return (
        <div className='mt-10 min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* Image Section */}
                    <div data-aos="zoom-in">
                        <img src={BannerImage} alt="Banner" className='max-w-[400px] h-[350px] w-full mx-10 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                    </div>
                    {/* Text Details Section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 data-aos="fade-up" className='text-2xl sm:text-3xl font-bold'>
                            Winter Sale upto 50% Off
                        </h1>
                        <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error, nemo aspernatur quis ab ratione consequatur autem odit ipsa eveniet.
                        </p>
                        <div className='flex flex-col gap-2'>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GrSecure className='text-3xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-2'>
                                <IoFastFood className='text-3xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-2'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                                <p>Easy Payment Method</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

