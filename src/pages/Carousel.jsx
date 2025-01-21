import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data/data';

function Carouselslide() {
    return (
        <Carousel fade>
            {data.slide.map((item) => (
                <Carousel.Item key={item.id} className="relative">
                    <img
                        className="d-block w-full h-[500px] md:h-[600px] object-cover  "
                        src={item.img}
                        alt={`${item.title}`}
                    />
                    {/* Overlay for text */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    {/* Text Content */}
                    <Carousel.Caption className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <h3 className="text-3xl md:text-4xl font-bold md:mt-18">{item.title}</h3>
                        <p className="w-[291px] md:w-[450px] text-lg md:text-xl mt-8 ">{item.description}</p>
                        <a
                            href={item.buttonLink}
                            className="mt-4 px-6 py-3 bg-blue hover:bg-pinky text-white text-lg font-semibold rounded-full shadow-lg transition duration-300"
                        >
                            {item.buttonText}
                        </a>
                    </Carousel.Caption>

                </Carousel.Item>
            ))}
        </Carousel>

    );


}

export default Carouselslide