'use client';
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineBars3} from "react-icons/hi2";
import {GoArrowUpRight} from "react-icons/go";
import {FaPhoneAlt} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {IoIosMail} from "react-icons/io";
import {FaInstagram} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa6";
import Image from 'next/image'
import HeroImage from '../public/assets/images/hero.jpg';
import BImage1 from '../public/assets/images/b1.png';
import BImage2 from '../public/assets/images/b2.png';
import BImage3 from '../public/assets/images/b3.png';
import BImage4 from '../public/assets/images/b4.png';

import PImage1 from '../public/assets/images/p1.png';
import PImage2 from '../public/assets/images/p2.png';
import PImage3 from '../public/assets/images/p3.png';
import PImage4 from '../public/assets/images/p4.png';
import PImage5 from '../public/assets/images/p5.png';
import PImage6 from '../public/assets/images/p6.png';

import PDImage1 from '../public/assets/images/pd1.png';
import PDImage2 from '../public/assets/images/pd2.png';
import PDImage3 from '../public/assets/images/pd3.png';
import PDImage4 from '../public/assets/images/pd4.png';
import PDImage5 from '../public/assets/images/pd5.png';
import PDImage6 from '../public/assets/images/pd6.png';

import BtmImage from '../public/assets/images/btm.jpg';
import BgMapImage from '../public/assets/images/bg-map.png';
import BgWaveImage from '../public/assets/images/wave.png';


export default function Home() {
    // 👇️ Toggle class on click Show Menu Bar (Button)
    const ClickShowMenuBar = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            nav.classList.add('show_menu');
        }
    };

    // 👇️ Toggle class on click Close Menu Bar (Button)
    const ClickCloseMenuBar = () => {
        const nav = document.getElementById('mobile_menu');
        if (nav) {
            nav.classList.remove('show_menu');
        }
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
                                              className="active font-[500] hover:text-primary transition">Home</Link>
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
                        <div className="md:hidden tab-mobile flex items-center gap-2">
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
                                <h1 className="font-semibold text-[20px]">Alliance <span
                                    className="text-primary">Exports</span></h1>
                            </Link>
                        </div>
                        <div onClick={ClickCloseMenuBar} className="icon text-xl cursor-pointer hover:text-primary">
                            <AiOutlineClose/>
                        </div>
                    </div>

                    <div className="navbar-wrapper pl-12 pt-8 space-y-5">
                        <Link href='/' className="active block font-[500] hover:text-primary transition">
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

            {/* Hero Section */}
            <section id="hero-section">
                <div className="container pt-24 md:pt-5">
                    <div
                        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12"
                        style={{
                            backgroundImage: `linear-gradient(0deg, rgb(21 20 20 / 52%), rgb(0 0 0 / 54%)),url(${HeroImage.src})`,
                            // height: '100vh',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="h-full w-full overflow-hidden bg-fixed">
                            <div className="h-full flex items-center">
                                <div className="text-area text-white">
                                    <h1 className="font-semibold text-[25px] sm:text-[40px] md:text-[60px] leading-[35px] sm:leading-[50px] md:leading-[70px]">
                                        Bringing the Best<br/> of Australia to<br/> your Table
                                    </h1>
                                    <p className="mt-5 text-[14px] sm:w-full lg:w-2/4">
                                        Welcome to AllianceExports, where the rich flavors of Australia meet the
                                        world.
                                        Specializing in premium Australian seafood and wines, we are committed to
                                        delivering authentic, high-quality products to discerning palates across
                                        China,
                                        Asia, Europe, and North America. Experience the taste of luxury with us.
                                    </p>

                                    <div
                                        className="button-area mt-5 block sm:flex space-y-3 sm:space-y-0 items-center gap-4">
                                        <button className="button ml-1">
                                            Contact Us
                                        </button>

                                        <button className="button-two ml-1">
                                            See Our Products
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section id="journey-section" className="mt-0"
                     style={{
                         backgroundImage: `linear-gradient(0deg, rgb(128 122 122 / 0%), rgb(243 230 230 / 11%)),url(${BgWaveImage.src})`,
                         backgroundPosition: '0% 0%',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'contain',
                     }}
            >
                <div className="container pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="col text-area h-full flex flex-col justify-center">
                            <div className="tag">
                                <span
                                    className="bg-[#D6ECF9] text-xs font-[500] rounded-lg py-2 px-4">Our Journey</span>
                            </div>
                            <h1 className='mt-4 text-4xl font-semibold'>From Ocean to Table</h1>
                            <p className="mt-4 text-[14px]">
                                At AllianceExports, we are more than just exporters; we are curators of an Australian
                                legacy. Our mission is to bring the finest seafood and wines from the bountiful coasts
                                and lush vineyards of Australia directly to your table. Our commitment to quality and
                                authenticity drives us to source only the best, ensuring every product carries the true
                                essence of Australia.
                            </p>
                        </div>

                        <div className="col ml-14 image-area">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col">
                                    <Image src={BImage1} alt="BImage1"/>
                                    <Image src={BImage3} className="mt-4" alt="BImage2"/>
                                </div>

                                <div className="col">
                                    <Image src={BImage2} alt="BImage2"/>
                                    <Image src={BImage4} className="mt-4" alt="BImage1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seafood Section */}
            <section id="seafood-section">
                <div className="container pt-32">
                    <div className="text-area">
                        <div className="tag">
                            <span className="bg-[#D6ECF9] text-xs font-[500] rounded-lg py-2 px-4">Seafood</span>
                        </div>
                        <h1 className='mt-4 text-4xl font-semibold'>A Symphony of Flavors</h1>
                        <p className="mt-4 text-[14px] md:w-1/2">
                            Dive into our selection of premium Australian seafood. From the succulent Lobster to the
                            delicate King George Whiting, every catch is a testament to our promise of quality. Our
                            seafood is harvested with sustainable practices, ensuring a continuous bounty for
                            generations to come.
                        </p>
                    </div>
                </div>

                <div className="container mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PImage1} className="w-full" alt="PImage1"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Southern Rock
                                        Lobster</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>

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

                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PImage4} className="w-full" alt="PImage4"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Coral Trout</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>

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

                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PImage6} className="w-full" alt="PImage6"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Moreton Bay
                                        Lobster</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wines Section */}
            <section id="wines-section">
                <div className="container pt-32">
                    <div className="text-area">
                        <div className="tag">
                            <span className="bg-[#D6ECF9] text-xs font-[500] rounded-lg py-2 px-4">Wines</span>
                        </div>
                        <h1 className='mt-4 text-4xl font-semibold'>Elegance in Every Bottle</h1>
                        <p className="mt-4 text-[14px] md:w-1/2">
                            Explore our collection of fine Australian wines, each bottle a story of its own. From robust
                            reds to crisp whites, our wines are carefully selected to represent the diverse terroirs of
                            Australia.
                        </p>
                    </div>
                </div>

                <div className="container mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PDImage1} className="w-full" alt="PDImage1"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Mystery Shiraz A
                                        Great Everyday Selection</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PDImage2} className="w-full" alt="PDImage2"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Starrs Reach
                                        Riverland Grenache 2020</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PDImage3} className="w-full" alt="PDImage3"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Brokenwood
                                        Rayner Vineyard Shiraz 2019</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PDImage4} className="w-full" alt="PDImage4"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Stonehaven
                                        Stepping Stone Sauvignon Blanc 2023</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PDImage5} className="w-full" alt="PDImage5"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Willow Bridge
                                        Dragonfly Sauvignon Blanc Semillon 2023</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col mt-6 product-box">
                            <Link href="product-detail">
                                <Image src={PDImage6} className="w-full" alt="PDImage6"/>
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <h2 className="font-semibold text-[18px] sm:text-[17px] md:text-xl">Taylors Promised
                                        Land Pinot Grigio 2023</h2>
                                    <div className="icon bg-primary p-2 rounded-lg text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delight Section */}
            <section id="delight-section">
                <div className="container pt-20">
                    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12"
                         style={{
                             backgroundImage: `linear-gradient(0deg, rgb(21 20 20 / 22%), rgb(0 0 0 / 24%)),url(${BtmImage.src})`,
                             height: '60vh',
                         }}>
                        <div className="h-full flex items-center">
                            <h1 className="font-semibold text-xl sm:text-2xl md:text-5xl text-white">
                                Delight in Australia Finest! Contact us to learn more about our unparalleled seafood
                                and wine collection
                            </h1>
                        </div>
                    </div>
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
                                                id="username" type="text" placeholder="Your Name"/>

                                            <input
                                                className="mt-3 appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="email" required placeholder="Your Mail"/>

                                            <input
                                                className="mt-3 appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="text" placeholder="Your Number"/>

                                            <textarea name="message" id="message" placeholder="How Can We Help"
                                                      className="mt-3 appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
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
                                    <h1 className="font-semibold text-white text-md">
                                        Alliance
                                        <span className="text-primary">Exports</span>
                                    </h1>
                                </Link>
                            </div>
                            <p className="mt-2 text-[14px] text-gray-400">Bringing the Best of Australia to your
                                Table</p>
                        </div>

                        <div className="my-4 col space-y-3">
                            <Link href='/' className="text-white hover:text-primary font-[500] block">About Us</Link>
                            <Link href='/' className="text-white hover:text-primary font-[500] block">About Us</Link>
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
    )
}
