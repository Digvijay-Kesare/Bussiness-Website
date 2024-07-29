import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/hero-img.png';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left lg:-mt-24">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                            Discover Powerful Water Pumps and Motors For Your Every Need.
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">Reliable, efficient, and designed to perform in the most demanding conditions.Find the perfect solution for your residential, commercial, or industrial needs.</div>

                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full object-cover mt-30 h-100 lg:mt-[100px]" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;