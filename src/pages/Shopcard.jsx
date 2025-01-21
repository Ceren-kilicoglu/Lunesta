import React from 'react';
import { data } from '../data/data';

function ShopCard() {
    return (
        <div className='bg-gwhit h-max-content p-8'>
            <div className='flex flex-col items-center gap-3 mt-12'>
                <h3 className='text-3xl text-brand font-bold'>{data.shopcard[0].title}</h3>
                <p className='text-stext text-base w-[193px] text-center'>{data.shopcard[0].text}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {data.shopcard.slice(1).map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' :
                            index === 1 ? 'lg:col-span-2' : ''
                            }`}
                    >
                        <img
                            src={item.img}
                            alt={item.buttonText}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                            onClick={() => window.location.href = item.buttonLink}
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gwhit font-semibold text-brand px-4 py-2 rounded-sm shadow-md hover:bg-pinky hover:text-white transition-all duration-300"
                        >
                            {item.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopCard;

