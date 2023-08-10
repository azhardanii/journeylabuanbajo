'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CgMenuGridR } from 'react-icons/cg';
import { MdDirectionsBoat } from 'react-icons/md';
import {
    AiOutlineClose,
    AiFillHome,
    AiFillEdit,
    AiFillPushpin,
    AiFillRead,
    AiFillPhone,
    AiFillFolderOpen,
} from 'react-icons/ai';

export default function MenuButton() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);

            const menu = document.querySelector('.menu');
            if (scroll >= 425) {
                menu.classList.remove('-translate-x-20');
                menu.classList.add('translate-x-0');
            } else {
                menu.classList.remove('translate-x-0');
                menu.classList.add('-translate-x-20');
            }
        });
    });

    const [detail, setDetail] = useState(false);

    return (
        <>
            <div
                onClick={() => {
                    setDetail(!detail);
                }}
                className="fixed top-[45%] left-0 -translate-x-20 z-50 menu transition duration-700 ease-in-out">
                <div className="relative flex flex-col justify-center items-center w-fit h-16 md:h-20 bg-slate-900/80 rounded-tr-md rounded-br-md cursor-pointer px-1">
                    <CgMenuGridR className="text-2xl md:text-3xl text-white mt-0.5" />
                    <div className="flex flex-col text-white font-medium -mt-1 md:-mt-[5px]">
                        <p className="text-[13px] md:text-base">ME</p>
                        <p className="text-[13px] md:text-base -mt-1.5 md:-mt-2">NU</p>
                    </div>
                </div>
            </div>
            <div
                onClick={() => {
                    setDetail(!detail);
                }}
                className={`fixed top-[45%] left-0 -translate-y-[36%] z-50 transition duration-700 ease-in-out ${
                    detail ? 'translate-x-0' : '-translate-x-48'
                }`}>
                <div className="relative flex flex-col gap-5 justify-center items-start w-fit h-fit bg-slate-800 rounded-tr-md rounded-br-md px-5 py-7 text-white">
                    <Link
                        href="/"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="flex items-center gap-2 cursor-pointer">
                        <AiFillHome size={20} />
                        <p>Home</p>
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="flex items-center gap-2 cursor-pointer">
                        <AiFillEdit size={20} />
                        <p>About</p>
                    </Link>
                    <Link
                        href="/trip"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="flex items-center gap-2 cursor-pointer">
                        <AiFillPushpin size={20} />
                        <p>Open Trip</p>
                    </Link>
                    <Link
                        href="/boat"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="flex items-center gap-2 cursor-pointer">
                        <MdDirectionsBoat size={20} />
                        <p>Boat Charter</p>
                    </Link>
                    <Link
                        href="/blog"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="flex items-center gap-2 cursor-pointer">
                        <AiFillRead size={20} />
                        <p>Blog</p>
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="flex items-center gap-2 cursor-pointer">
                        <AiFillPhone size={20} />
                        <p>Contact</p>
                    </Link>
                    <a
                        href="https://wa.me/6281335672442"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="flex items-center gap-2 cursor-pointer">
                        <AiFillFolderOpen size={20} />
                        <p>Booking</p>
                    </a>
                    <div className="absolute w-7 h-7 rounded-full bg-white border-[3px] border-slate-800 -top-2 -right-2 flex justify-center items-center cursor-pointer">
                        <AiOutlineClose
                            size={18}
                            className="text-slate-800"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
