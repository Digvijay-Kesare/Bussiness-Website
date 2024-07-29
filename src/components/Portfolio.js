import React from 'react';
import v4 from '../images/motors/v4.png';
import v6 from '../images/motors/v6.png';
import selfpriming from '../images/motors/selfpriming.png';
import mblock from '../images/motors/mblock.png'

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">V4</h4>
                                <div class="flex justify-center items-start">
                                    <img src={v4} class="text-md h-80 mt-4 block"/>
                                </div>


                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">V6</h4>
                                <div class="flex justify-center items-start">
                                    <img src={v6} class="text-md h-80 mt-4 block"/>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">SELF-PRIMING</h4>
                            <div class="flex justify-center items-start">
                                    <img src={selfpriming} class="text-md h-60 mt-4 block"/>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">MONOBLOCK</h4>
                                <div class="flex justify-center items-start">
                                    <img src={mblock} class="text-md h-60 mt-4 block"/>
                                </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
        </>
    )
}

export default Portfolio;