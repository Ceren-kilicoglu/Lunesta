import React from 'react';
import { data } from '../data/data';

function ShopCard() {
    return (
        <div className='bg-gwhit h-max-content p-8 '>
            <div className='flex flex-col items-center gap-3 mt-12'>
                <h3 className='text-3xl text-brand font-bold'>{data.shopcard[0].title}</h3>
                <p className='text-stext text-base w-[193px] text-center'>{data.shopcard[0].text}</p>
            </div>

            <div className="flex flex-col flex-grow sm:flex-row sm:gap-x-4  mt-12 w-max-screen sm:flex-wrap justify-center">

                <div className="">
                    <img
                        src={data.shopcard[1].img}
                        alt={data.shopcard[1].buttonText}
                        className="lg:w-[510px] lg:h-[520px] object-cover"
                    />
                    <button
                        onClick={() => window.location.href = data.shopcard[1].buttonLink}
                        className="relative bottom-14 left-8 text-black bg-gwhit hover:bg-gr hover:text-white  font-medium  text-sm px-5 py-2.5  "
                    >
                        {data.shopcard[1].buttonText}
                    </button>
                </div>


                <div className="">
                    <img
                        src={data.shopcard[2].img}
                        alt={data.shopcard[2].buttonText}
                        className="lg:w-[239px] lg:h-[520px] object-cover"
                    />
                    <button
                        onClick={() => window.location.href = data.shopcard[2].buttonLink}
                        className="relative bottom-14 left-8 text-black bg-gwhit hover:bg-gr hover:text-white  font-medium  text-sm px-5 py-2.5 "
                    >
                        {data.shopcard[2].buttonText}
                    </button>
                </div>
                <div className='md:flex lg:flex-col md:gap-x-4'>

                    <div className="">
                        <img
                            src={data.shopcard[3].img}
                            alt={data.shopcard[3].buttonText}
                            className=" lg:w-[239px] lg:h-[240px] object-cover"
                        />
                        <button
                            onClick={() => window.location.href = data.shopcard[3].buttonLink}
                            className="relative bottom-14 left-8 text-black bg-gwhit hover:bg-gr hover:text-white  font-medium  text-sm px-5 py-2.5 "
                        >
                            {data.shopcard[3].buttonText}
                        </button>
                    </div>


                    <div className="">
                        <img
                            src={data.shopcard[4].img}
                            alt={data.shopcard[4].buttonText}
                            className="lg:w-[239px] lg:h-[240px] object-cover"
                        />
                        <button
                            onClick={() => window.location.href = data.shopcard[4].buttonLink}
                            className="relative bottom-14 left-8 text-black bg-gwhit hover:bg-gr hover:text-white  font-medium  text-sm px-5 py-2.5 "
                        >
                            {data.shopcard[4].buttonText}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShopCard;

