'use client';

import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

export default function WaButton() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);

            const wa = document.querySelector('.wa');
            if (scroll >= 425) {
                wa.classList.remove('-bottom-1/4');
                wa.classList.add('bottom-5');
            } else {
                wa.classList.remove('bottom-5');
                wa.classList.add('-bottom-1/4');
            }
        });
    });

    return (
        <div className="wa fixed -bottom-1/4 right-5 z-50 transition-all duration-1000">
            <a
                href="https://wa.me/6281335672442"
                target="_blank"
                rel="noreferrer"
                className="relative flex justify-center items-center w-14 h-14 rounded-full bg-green-500 cursor-pointer">
                <div className="absolute right-1">
                    <div className="relative flex h-5 w-5 mb-11 -mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <div className="flex justify-center items-center">
                            <span className="relative inline-flex justify-center items-center rounded-full h-5 w-5 bg-red-500"></span>
                            <p className="absolute text-white text-xs font-medium pt-[1px] pr-[1px]">1</p>
                        </div>
                    </div>
                </div>
                <BsWhatsapp className="text-3xl text-white ml-0.5 mb-0.5" />
            </a>
        </div>
    );
}
