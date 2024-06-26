import React from 'react';
import Image1 from "../../assets/shirt/shirt.png";
import Image2 from "../../assets/shirt/shirt2.png";
import Image3 from "../../assets/shirt/shirt3.png";

import { FaStar } from 'react-icons/fa';

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero doloribus officiis id totam mollitia deleniti expedita aliquid rem optio!"
    },
    {
        id: 2,
        img: Image2,
        title: "Printed Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero doloribus officiis id totam mollitia deleniti expedita aliquid rem optio!"
    },
    {
        id: 3,
        img: Image3,
        title: "Women Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero doloribus officiis id totam mollitia deleniti expedita aliquid rem optio!"
    },
];

const TopProducts = ({ handleOrderPopup }) => {
    return (
        <div>
            <div className='container'>
                {/* Header Section */}
                <div className="text-center mb-24">
                    <p data-aos="fade up" className='text-sm text-primary'>
                        Top Rated Products For You
                    </p>
                    <h1 data-aos="fade up" className='text-3xl font-bold'>
                        Best Products
                    </h1>
                    <p data-aos="fade up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est at provident incidunt omnis porro velit dolorem veritatis tempore, soluta doloremque.
                    </p>
                </div>
                {/* Body Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {ProductsData.map((data) => (
                        <div
                            key={data.id}
                            data-aos="zoom-in"
                            className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/40 dark:hover:bg-primary hover:text-white relative shadow-xl duration-200 group max-w-[300px]'
                        >
                            {/* Image Section */}
                            <div className='h-[100px]'>
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                />
                            </div>
                            {/* Details Section */}
                            <div className='p-4 text-center'>
                                {/* Star Section */}
                                <div className='w-full flex items-center justify-center gap-4'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <button
                                    onClick={handleOrderPopup}
                                    className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'

                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProducts;

