import React from 'react';
import img from '../images/web.jpg'; 
import img2 from '../images/app.webp';
import img3 from '../images/customization.png';
import img4 from '../images/Consultant.jpg';
import maintain from '../images/maintainance.png'
import install from '../images/Install.png'
import support from '../images/support.png'
import custom from '../images/Custom.png'

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">1. Installation Services</h2>
                                    <p className="text-md font-medium">
                                    •<b>Site Assessment:</b> Comprehensive site analysis to determine the best pump and motor solutions for your needs.<br/>
                                    •<b>System Design:</b> Custom system design to ensure efficient and effective installation.<br/>
                                    •<b>Professional Setup:</b> Certified technicians for installation to guarantee proper setup and operation.<br/>
                                    •<b>Post-Installation Testing:</b> Ensuring systems are fully operational and meet all performance standards.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">2. Maintenance and Repair</h2>
                                    <p className="text-md font-medium">
                                    •<b>Routine-Inspections:
                                        </b>Scheduled maintenance checks to prevent breakdowns and extend the lifespan of equipment.<br/>
                                    •<b>Emergency Repairs:</b> 24/7 emergency repair services to minimize downtime.<br/>
                                    •<b>Spare Parts Replacement:</b> Supply and replacement of genuine spare parts for various pump and motor models.<br/>
                                    •<b>Performance Optimization:</b> Adjustments and calibrations to enhance the efficiency and performance of your systems.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="mt-8 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center mt-20">3.   Customization and Upgrades</h2>
                                    <p className="text-md font-medium">
                                    •<b>Tailored Solutions:</b> Customizing pumps and motors to fit specific application requirements.<br/>
                                    •<b>System Upgrades:</b> Modernizing older systems with the latest technology for improved performance.<br/>
                                    •<b>Energy Efficiency Enhancements:</b> Implementing energy-saving upgrades to reduce operational costs.<br/>
                                    •<b>Capacity Expansion:</b> Modifying systems to handle increased demand or capacity requirements.<br/>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center mt-10">4. Consultation and Technical Support</h2>
                                    <p className="text-md font-medium">
                                    •<b>Product Selection Guidance:</b> Expert advice to help you choose the right pumps and motors based on your needs.<br/>
                                    •<b>Technical Troubleshooting:</b> Assistance with diagnosing and resolving technical issues.<br/>
                                    •<b>Training and Education:</b> Providing training sessions for staff on the proper use and maintenance of equipment.<br/>
                                    •<b>Remote Support:</b> Offering remote assistance and support for troubleshooting and guidance.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                <div>
                    <img src={install}className='h-14'></img>
                </div>
                <h3 className="text-3xl text-blue-900 font-bold">We <span className='font-black'>Install</span></h3>
                <div>
                    <p className='my-3 text-xl text-gray-600 font-semibold'>
                        With a team of certified professionals, we offer expert installation services for water pumps and motors, ensuring optimal performance and longevity of your systems.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                <div>
                    <img src={maintain}className='h-20'></img>
                </div>
                <h3 className="text-3xl text-blue-900 font-bold">We <span className='font-black'>Maintain</span></h3>
                <div>
                    <p className='my-3 text-xl text-gray-600 font-semibold'>
                        Our maintenance services ensure that your water pumps and motors are running smoothly, reducing downtime and extending the life of your equipment.
                    </p>
                </div>
            </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                <div>
                    <img src={custom}className='h-20'></img>
                </div>
                <h3 className="text-3xl text-blue-900 font-bold">We <span className='font-black'>Customize</span></h3>
                <div>
                    <p className='my-3 text-xl text-gray-600 font-semibold'>
                        Our customization services allow you to tailor your water pump and motor systems to meet your specific needs, ensuring maximum efficiency and performance.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                <div>
                    <img src={support}className='h-20'></img>
                </div>
                <h3 className="text-3xl text-blue-900 font-bold">We <span className='font-black'>Support</span></h3>
                <div>
                    <p className='my-3 text-xl text-gray-600 font-semibold'>Our technical support services are available 24/7 to help you troubleshoot any issues, ensuring your systems are always running at peak performance.</p>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}

export default Services;