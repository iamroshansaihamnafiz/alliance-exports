'use client';
import React from 'react';
import BgMapImage from "../../public/assets/images/bg-map.png";
import {FaPhoneAlt} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {IoLocationSharp} from "react-icons/io5";
import Link from "next/link";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa6";
import {HiOutlineBars3} from "react-icons/hi2";
import {AiOutlineClose} from "react-icons/ai";
import {FaLongArrowAltRight} from "react-icons/fa";
import {FaLongArrowAltLeft} from "react-icons/fa";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import Swiper core and required modules
import {Navigation} from 'swiper/modules';

import Image from "next/image";
import PImage1 from "../../public/assets/images/p1.png";
import {GoArrowUpRight} from "react-icons/go";
import PImage2 from "../../public/assets/images/p2.png";
import PImage3 from "../../public/assets/images/p3.png";
import PImage4 from "../../public/assets/images/p4.png";
import PImage5 from "../../public/assets/images/p5.png";
import PDetailImage from "../../public/assets/images/pdetail.png";

function Page(props) {
    // 👇️ Toggle class on click Show Menu Bar (Button)
    const ClickShowMenuBar = event => {
        const nav = document.getElementById('mobile_menu');
        nav.classList.add('show_menu');
    };

    // 👇️ Toggle class on click Close Menu Bar (Button)
    const ClickCloseMenuBar = event => {
        const nav = document.getElementById('mobile_menu');
        nav.classList.remove('show_menu');
    };

    return (
        <>
            {/* Header Section */}
            <section id="header-section" className="relative">
                <header className="py-6 md:py-4 shadow-sm bg-white w-full fixed md:relative z-50">
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/'>
                                <h1 className="font-semibold text-[20px]">Alliance <span
                                    className="text-primary">Exports</span></h1>
                            </Link>
                        </div>

                        <nav className="hidden md:block overflow-hidden md:overflow-visible">
                            <div className="container flex">
                                <div className="navbar-items flex items-center justify-between flex-grow pl-12">
                                    <div className="flex items-center space-x-10 capitalize">
                                        <Link href='/'
                                              className="text-black font-[500] hover:text-primary transition">Home</Link>
                                        <Link href='/'
                                              className="text-black font-[500] hover:text-primary transition">About</Link>
                                        <Link href='product-detail'
                                              className="text-black font-[500] hover:text-primary transition">Seafood</Link>
                                        <Link href='/'
                                              className="text-black font-[500] hover:text-primary transition">Wines</Link>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <div className="buttons hidden md:flex items-center space-x-1">
                            <button className="button">
                                Contact Us
                            </button>
                        </div>

                        {/* Tab / Mobile Icons */}
                        <div className="block md:hidden tab-mobile flex items-center gap-2">
                            <div onClick={ClickShowMenuBar}
                                 className="w-8 text-center text-gray-700 hover:text-primary transition cursor-pointer">
                                <div className="text-2xl">
                                    <HiOutlineBars3/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu */}
                <div id="mobile_menu" className="block md:hidden bg-white z-50 overflow-hidden w-[300px] h-[100%]">
                    <div className="head flex items-center justify-between px-8 pt-8">
                        <div className="logo">
                            <Link href='/'>
                                <h1 className="font-semibold text-md">Alliance <span
                                    className="text-primary">Exports</span></h1>
                            </Link>
                        </div>
                        <div onClick={ClickCloseMenuBar} className="icon text-xl cursor-pointer hover:text-primary">
                            <AiOutlineClose/>
                        </div>
                    </div>

                    <div className="navbar-wrapper pl-12 pt-8 space-y-5">
                        <Link href='/' className="block text-black font-[500] hover:text-primary transition">
                            Home
                        </Link>
                        <Link href='/' className="block text-black font-[500] hover:text-primary transition">
                            About
                        </Link>
                        <Link href='product-detail'
                              className="block text-black font-[500] hover:text-primary transition">
                            Seafood
                        </Link>
                        <Link href='/' className="block text-black font-[500] hover:text-primary transition">
                            Wines
                        </Link>

                        <div className="buttons flex lg:hidden items-center space-x-1">
                            <button className="button">
                                Contact Us
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Product Details */}
            <section id="product-details-section">
                <div className="container pt-32 md:pt-20 lg:pt-20 xl:pt-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                        <div className="col">
                            <div className="tag">
                                <span className="text-xs">Home/Seafood/</span>
                            </div>

                            <h1 className="text-3xl font-semibold">Southern Rock Lobster</h1>

                            <div className="details mt-8">
                                <h2 className="text-xl font-semibold">Sources & Origin</h2>
                                <p className="mt-2 text-[14px]">Sourced from the clean, cold waters off the southern
                                    coasts of Australia,
                                    particularly in regions like Tasmania, South Australia, and Victoria.</p>
                            </div>

                            <div className="details mt-6">
                                <h2 className="text-xl font-semibold">Sustainability Practices</h2>
                                <p className="mt-2 text-[14px]">
                                    Managed under strict quotas and size limits to ensure long-term sustainability.
                                </p>
                            </div>

                            <div className="details mt-6">
                                <h2 className="text-xl font-semibold">Freshness and Handling Procedures</h2>
                                <p className="mt-2 text-[14px]">
                                    Live lobsters are typically transported in a chilled state to maintain freshness.
                                </p>
                            </div>

                            <div className="details mt-6">
                                <h2 className="text-xl font-semibold">Quality and Grade</h2>
                                <p className="mt-2 text-[14px]">
                                    Known for their rich taste and firm texture, Southern Rock Lobsters are considered a
                                    premium product
                                </p>
                            </div>

                            <div className="details mt-6">
                                <h2 className="text-xl font-semibold">Regulatory Compliance</h2>
                                <p className="mt-2 text-[14px]">
                                    Adherence to Australian fishing regulations and export standards.
                                </p>
                            </div>

                            <div className="details mt-6">
                                <h2 className="text-xl font-semibold">Certifications and Accreditations</h2>
                                <p className="mt-2 text-[14px]">
                                    May include sustainability certifications from relevant authorities.
                                </p>
                            </div>

                            <div className="details mt-6">
                                <h2 className="text-xl font-semibold">Nutritional Information</h2>
                                <p className="mt-2 text-[14px]">
                                    High in protein, omega-3 fatty acids, and low in fat.
                                </p>
                            </div>
                        </div>

                        <div className="col">
                            <Image src={PDetailImage} alt="PDetailImage"/>
                            <button className="button w-full">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seafood Slider Section */}
            <section id="sea-slider-section">
                <div className="container pt-20">
                    <div className="flex items-center justify-between">
                        <div className="head-text">
                            <h1 className="font-semibold text-3xl">Explore Other Seafood</h1>
                        </div>

                        <div className="slider-button flex gap-3">
                            <div className="button-prev-slide cursor-pointer bg-primary py-2 px-2 rounded text-white">
                                <FaLongArrowAltLeft size={15}/>
                            </div>

                            <div className="button-next-slide cursor-pointer bg-primary py-2 px-2 rounded text-white">
                                <FaLongArrowAltRight/>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 1,
                            },
                            639: {
                                slidesPerView: 2,
                            },
                            865: {
                                slidesPerView: 2
                            },
                            1000: {
                                slidesPerView: 3
                            },
                            1500: {
                                slidesPerView: 3
                            },
                            1700: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-content">
                                <div className="col mt-6 product-box">
                                    <Link href="product-detail">
                                        <Image src={PImage1} className="w-full" alt="PImage1"/>
                                        <div className="mt-3 flex items-center justify-between px-2">
                                            <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Southern
                                                Rock
                                                Lobster</h2>
                                            <div className="icon bg-primary p-2 rounded-lg text-white">
                                                <GoArrowUpRight/>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col mt-6 product-box">
                                <Link href="product-detail">
                                    <Image src={PImage2} className="w-full" alt="PImage2"/>
                                    <div className="mt-3 flex items-center justify-between px-2">
                                        <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Eastern King
                                            Prawn</h2>
                                        <div className="icon bg-primary p-2 rounded-lg text-white">
                                            <GoArrowUpRight/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col mt-6 product-box">
                                <Link href="product-detail">
                                    <Image src={PImage3} className="w-full" alt="PImage3"/>
                                    <div className="mt-3 flex items-center justify-between px-2">
                                        <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Queensland
                                            Scallop</h2>
                                        <div className="icon bg-primary p-2 rounded-lg text-white">
                                            <GoArrowUpRight/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col mt-6 product-box">
                                <Link href="product-detail">
                                    <Image src={PImage4} className="w-full" alt="PImage4"/>
                                    <div className="mt-3 flex items-center justify-between px-2">
                                        <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Coral
                                            Trout</h2>
                                        <div className="icon bg-primary p-2 rounded-lg text-white">
                                            <GoArrowUpRight/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col mt-6 product-box">
                                <Link href="product-detail">
                                    <Image src={PImage5} className="w-full" alt="PImage5"/>
                                    <div className="mt-3 flex items-center justify-between px-2">
                                        <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Blue Swimmer
                                            Crabs</h2>
                                        <div className="icon bg-primary p-2 rounded-lg text-white">
                                            <GoArrowUpRight/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>

            {/* Connect Section */}
            <section id="connect-section"
                     style={{
                         backgroundImage: `linear-gradient(0deg, rgb(255 255 255 / 80%), rgb(247 247 247 / 83%)),url(${BgMapImage.src})`,
                     }}>
                <div className="container pt-10">
                    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                            <div className="col">
                                <div className="text-area">
                                    <h1 className='mt-4 text-4xl font-semibold'>Connect with Us</h1>
                                    <p className="mt-4">
                                        Interested in bringing a taste of Australia to your market? Contact
                                        AllianceExports today. Our team is ready to assist you in exploring our products
                                        and services. Reach out to us through the following:
                                    </p>
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <FaPhoneAlt size={15} className="text-primary"/>
                                        </div>
                                        <p className="text-xs">+61 3 1234 5678</p>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <IoIosMail size={15} className="text-primary"/>
                                        </div>
                                        <p className="text-xs">contact@allianceexports.com.au</p>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="icon">
                                            <IoLocationSharp size={15} className="text-primary"/>
                                        </div>
                                        <p className="text-xs">100 Export Lane, Melbourne, Victoria, Australia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="w-full">
                                    <form>
                                        <div className="mb-4">
                                            <input
                                                className="appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                                name="name"
                                                type="text" placeholder="Your Name"/>

                                            <input
                                                className="mt-3 appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                                type="email" required placeholder="Your Mail"/>

                                            <input
                                                className="mt-3 appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="phone"
                                                name="phone"
                                                type="text" placeholder="Your Number"/>

                                            <textarea
                                                className="mt-3 appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="message"
                                                name="message"
                                                placeholder="How Can We Help"
                                            ></textarea>
                                            <button type="submit" className="button mt-4 w-full">
                                                Contact Us
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-10 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
                        <div className="my-4 col">
                            <div className="logo">
                                <Link href='/'>
                                    <h1 className="font-semibold text-white text-[20px]">
                                        Alliance
                                        <span className="text-primary">Exports</span>
                                    </h1>
                                </Link>
                            </div>
                            <p className="mt-2 text-[14px] text-gray-400">Bringing the Best of Australia to your
                                Table</p>
                        </div>

                        <div className="my-4 col space-y-3">
                            <Link href='/' className="text-white hover:text-primary font-[500] block">Home</Link>
                            <Link href='/' className="text-white hover:text-primary font-[500] block">About</Link>
                            <Link href='product-detail' className="text-white hover:text-primary font-[500] block">Seafood</Link>
                            <Link href='/' className="text-white hover:text-primary font-[500] block">Wines</Link>
                        </div>

                        <div className="my-4 col space-y-3">
                            <Link href='/' className="text-white hover:text-primary font-[500] block">Privacy
                                Policy</Link>
                            <Link href='/' className="text-white hover:text-primary font-[500] block">Terms &
                                Conditions</Link>
                        </div>

                        <div className="my-4 col">
                            <div className="flex items-center gap-4">
                                <span><FaInstagram size={20} className="cursor-pointer hover:text-primary text-white"/></span>
                                <span><FaLinkedin size={20}
                                                  className="cursor-pointer hover:text-primary text-white"/></span>
                                <span><FaTwitter size={20}
                                                 className="cursor-pointer hover:text-primary text-white"/></span>
                                <span><FaFacebook size={20}
                                                  className="cursor-pointer hover:text-primary text-white"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Page;