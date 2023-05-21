import React, { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';
import { RxDotFilled } from 'react-icons/rx';
import bgImage1 from '../images/bg2.jpg';
import bgImage2 from '../images/bg4.jpg';
import bgImage3 from '../images/bg5.jpg';
import { images } from '../components/images';
import gcmp from '../images/gcmp.jpg';

const AnimatedCount = ({ value, duration }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCountAnimation();
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    const startCountAnimation = () => {
        let start = 0;
        const end = parseInt(value);
        const range = end - start;
        let currentCount = start;
        const incrementTime = Math.floor(duration / range);

        const timer = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);

            if (currentCount === end) {
                clearInterval(timer);
            }
        }, incrementTime);
    };

    return (
        <div className="text-3xl font-bold text-white" ref={countRef}>
            {count}+
        </div>
    );
};
const Home = () => {
    const slides = [
        {
            url: `${bgImage1}`,
        },
        {
            url: `${bgImage2}`,
        },
        {
            url: `${bgImage3}`,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div>
            <div className="h-[580px] w-full m-auto relative group mb-40 ">
                <div className="absolute top-1/3 z-10 left-28">
                    <h1 className='text-white xl:text-5xl mb-5 lg:text-4xl md:text-3xl'>WELCOME TO RENEWTECH</h1>
                    <h2 className='text-white xl:text-2xl lg:text-lg md:text-base'>Empowering Innovation, Sustaining Progress</h2>
                </div>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full bg-center bg-cover duration-500 relative  bg-fixed'
                >
                    <div className='flex justify-center py-2 absolute bottom-0 w-full'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer text-white'
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
            <div className="w-full flex flex-col h-[60vh] justify-center items-center mb-40">
                <h1 className="text-xl dark:text-white mb-10">OUR SUPPORTING PARTNERS</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[65vw]">
                    <div class="bg-white rounded-lg shadow-lg border border-none p-4">
                        <img src={images.sp1} alt="" class="mx-auto object-contain w-96 h-40" />
                    </div>
                    <div class="bg-white rounded-lg border border-none p-4">
                        <img src={images.sp2} alt="" class="mx-auto object-contain w-96 h-40" />
                    </div>
                    <div class="bg-white rounded-lg shadow-lg border border-none p-4">
                        <img src={images.sp3} alt="" class="mx-auto object-contain w-96 h-40" />
                    </div>
                    <div class="bg-white rounded-lg border border-none p-4">
                        <img src={images.sp4} alt="" class="mx-auto object-contain w-96 h-40" />
                    </div>
                    <div class="bg-white rounded-lg shadow-lg border border-none p-4">
                        <img src={images.sp5} alt="" class="mx-auto object-contain w-96 h-40" />
                    </div>
                    <div class="bg-white rounded-lg border border-none p-4">
                        <img src={images.sp6} alt="" class="mx-auto object-contain w-96 h-40" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mb-36">
                <h1 className="text-xl dark:text-white">READ OUR BLOGS</h1>
                <div class="flex flex-wrap items-center container mx-auto w-[65vw] my-10">
                    <div class="w-full md:w-7/12">
                        <h2 class="text-2xl md:text-2xl font-bold mb-4 dark:text-white font-font2">Green Data Storage! <span class="text-gray-500">Sustainable Solutions for Cloud Storage and Backup</span></h2>
                        <p class="text-lg md:text-base leading-relaxed font-font1 dark:text-gray-200">Discuss environmentally friendly options for data storage, such as cloud providers that prioritize renewable energy usage and employ efficient data management practices</p>
                    </div>
                    <div class="w-full md:w-5/12">
                        <img src={images.gdc} alt="Placeholder" class="mx-auto object-contain w-full h-auto md:w-96 md:h-64" />
                    </div>
                </div>
                <div class="flex flex-wrap items-center container mx-auto w-[65vw] my-10">
                    <div class="w-full md:w-7/12 order-last">
                        <h2 class="text-2xl md:text-2xl font-bold mb-4 dark:text-white font-font2">Renewable Energy-Powered Gadgets! <span class="text-gray-500">Exploring Solar-Powered Laptops and Mobile Devices</span></h2>
                        <p class="text-lg md:text-base leading-relaxed font-font1 dark:text-gray-200">Discuss the development of solar-powered laptops, solar phone chargers, and other renewable energy solutions for powering electronic gadgets</p>
                    </div>
                    <div class="w-full md:w-5/12 order-first">
                        <img src={images.sollap} alt="Placeholder" class="mx-auto object-contain w-full h-auto md:w-96 md:h-64" />
                    </div>
                </div>


                <div class="flex flex-wrap items-center container mx-auto w-[65vw] my-10">
                    <div class="w-full md:w-7/12">
                        <h2 class="text-2xl md:text-2xl font-bold mb-4 dark:text-white font-font2">Green Computing! <span class="text-gray-500">Promoting Sustainability in the Digital Age</span></h2>
                        <p class="text-lg md:text-base leading-relaxed font-font1 dark:text-gray-200">Discuss the concept of green computing, including strategies for minimizing electronic waste, extending device lifespan, and adopting energy-efficient practices</p>
                    </div>
                    <div class="w-full md:w-5/12">
                        <img src={gcmp} alt="Placeholder" class="mx-auto object-contain w-full h-auto md:w-96 md:h-64" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center w-full h-[50vh] mb-36">
                <div className="flex items-center justify-center w-full h-[25vh] bg-green-800 text-white">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mx-10">Number of Customers</h2>
                        <AnimatedCount value="1250" duration={1500} />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mx-10">Number of Products Sold</h2>
                        <AnimatedCount value="1500" duration={1500} />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mx-10">Number of Five-Star Ratings</h2>
                        <AnimatedCount value="90" duration={1500} />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col h-[60vh] justify-center items-center mb-40">
            <h1 className="text-xl dark:text-white">WHAT WE OFFER</h1>
                <div className="flex flex-row justify-center items-center w-full h-[80vh]">
                    <div class="bg-white w-80 h-80 shadow-lg shadow-green-700/50 p-2 my-10 mx-3 rounded">
                        <img class="w-24 h-24 rounded-full mx-auto mb-4" src={images.logo1} alt="it" />
                        <h2 class="text-xl font-semibold mb-2">Worldwide Wonders</h2>
                        <p class="text-gray-700">Travel the globe through our storefront and explore the finest sustainable electronic gadgets from different countries, handpicked to meet your eco-friendly lifestyle</p>
                    </div>
                    <div class="bg-white w-80 h-80 shadow-lg shadow-green-700/50 p-2 my-10 mx-3 rounded">
                        <img class="w-24 h-24 rounded-full mx-auto mb-4" src={images.logo3} alt="green" />
                        <h2 class="text-xl font-semibold mb-2">Green Packaging</h2>
                        <p class="text-gray-700">Embrace sustainable shipping practices and join us in safeguarding the environment by choosing our eco-friendly packaging solutions that minimize waste and leave a positive impact on the planet</p>
                    </div>
                    <div class="bg-white w-80 shadow-lg shadow-green-700/50 h-80 p-2 my-10 mx-3 rounded">
                        <img class="w-24 h-24 rounded-full mx-auto mb-4" src={images.logo2} alt="pac" />
                        <h2 class="text-xl font-semibold mb-2">Peace of Mind</h2>
                        <p class="text-gray-700">Your peace of mind is our priority. Enjoy worry-free ownership with our comprehensive warranty and dedicated support, ensuring your sustainable gadgets are protected and supported every step of the way.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
