'use client';

import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { CgPhone } from 'react-icons/cg';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';
import Link from 'next/link';
import WaButton from './wabutton';
import MenuButton from './menubutton';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    };

    return (
        <>
            <div className="flex w-full justify-between items-center h-20 px-4 md:px-8 absolute z-10 text-white">
                <Link
                    href="/"
                    className="cursor-pointer">
                    <img
                        src="/jlb-logo-fullwhite.svg"
                        alt="Journey Labuan Bajo"
                        width={125}
                    />
                </Link>
                <ul className="hidden lg:flex">
                    <Link
                        href="/"
                        className="cursor-pointer">
                        <li>Home</li>
                    </Link>
                    <li className="cursor-pointer">About Us</li>
                    <Link
                        href="/trip"
                        className="cursor-pointer">
                        <li>Open Trip</li>
                    </Link>
                    <Link
                        href="/boat"
                        className="cursor-pointer">
                        <li>Boat Charter</li>
                    </Link>
                    <Link
                        href="/blog"
                        className="cursor-pointer">
                        <li>Blog</li>
                    </Link>
                    <Link
                        href="/contact"
                        className="cursor-pointer">
                        <li>Contact</li>
                    </Link>
                    <a
                        href="https://wa.me/6281335672442"
                        target="_blank"
                        rel="noopener noreferrer">
                        <li className="cursor-pointer">Booking</li>
                    </a>
                </ul>
                <div className="hidden lg:flex">
                    <a
                        href="https://wa.me/6281335672442"
                        target="_blank"
                        rel="noopener noreferrer">
                        <CgPhone
                            className="cursor-pointer mr-3"
                            size={20}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/journeylabuanbajo"
                        target="_blank"
                        rel="noopener noreferrer">
                        <RiInstagramFill
                            className="cursor-pointer mr-3"
                            size={20}
                        />
                    </a>
                    <a href="mailto:journeylabuanbajo@gmail.com">
                        <MdEmail
                            className="cursor-pointer"
                            size={20}
                        />
                    </a>
                </div>

                <div
                    onClick={handleNav}
                    className="block lg:hidden z-10 cursor-pointer">
                    {nav ? (
                        <AiOutlineClose
                            className="text-black cursor-pointer"
                            size={20}
                        />
                    ) : (
                        <HiOutlineMenuAlt4
                            className="cursor-pointer"
                            size={20}
                        />
                    )}
                </div>

                <div
                    onClick={handleNav}
                    className={
                        nav
                            ? 'absolute text-black left-0 top-0 w-full bg-gray-100/95 px-4 md:px-8 py-[1.38rem] flex flex-col'
                            : 'absolute left-[-100%]'
                    }>
                    <ul>
                        <Link
                            href="/"
                            className="cursor-pointer">
                            <img
                                src="/jlb-logo-default.svg"
                                alt="Journey Labuan Bajo"
                                width={125}
                            />
                        </Link>

                        <Link
                            href="/"
                            className="cursor-pointer">
                            <li className="border-b-2 border-gray-400 mt-5">Home</li>
                        </Link>
                        <li className="cursor-pointer border-b-2 border-gray-400">About Us</li>
                        <Link
                            href="/trip"
                            className="cursor-pointer">
                            <li className="border-b-2 border-gray-400">Open Trip</li>
                        </Link>
                        <Link
                            href="/boat"
                            className="cursor-pointer">
                            <li className="border-b-2 border-gray-400">Boat Charter</li>
                        </Link>
                        <Link
                            href="/blog"
                            className="cursor-pointer">
                            <li className="border-b-2 border-gray-400">Blog</li>
                        </Link>
                        <Link
                            href="/contact"
                            className="cursor-pointer">
                            <li className="border-b-2 border-gray-400">Contact</li>
                        </Link>
                        <a
                            href="https://wa.me/6281335672442"
                            target="_blank"
                            rel="noopener noreferrer">
                            <li className="cursor-pointer border-b-2 border-gray-400">Booking</li>
                        </a>

                        <div className="flex justify-between my-6 mx-10 pt-4">
                            <FaFacebook className="icon cursor-pointer" />
                            <a
                                href="https://www.instagram.com/journeylabuanbajo"
                                target="_blank"
                                rel="noopener noreferrer">
                                <RiInstagramFill className="cursor-pointer icon" />
                            </a>
                            <FaTwitter className="icon cursor-pointer" />
                            <a
                                href="https://wa.me/6281335672442"
                                target="_blank"
                                rel="noopener noreferrer">
                                <RiWhatsappFill className="cursor-pointer icon" />
                            </a>
                            <FaYoutube className="icon cursor-pointer" />
                        </div>
                    </ul>
                </div>
            </div>
            <MenuButton />
            <WaButton />
        </>
    );
}
