'use client';

import { useState } from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { TbMapSearch } from 'react-icons/tb';
import { ImCamera } from 'react-icons/im';
import { FaCommentsDollar } from 'react-icons/fa';

export default function About() {
    const [weGo, setWeGo] = useState('');
    const [tripType, setTripType] = useState('');

    const handleWeGo = (e) => {
        console.log(e.target.value);
        setWeGo(e.target.value);
    };
    const handleTripType = (e) => {
        console.log(e.target.value);
        setTripType(e.target.value);
    };

    return (
        <div className="max-w-[1240px] mx-auto my-32 px-10 grid lg:grid-cols-3">
            <div className="p-1 lg:col-span-2 gap-1 flex flex-col justify-evenly">
                <div>
                    <h2>Journey Labuan Bajo Ready to Serve Your Exploration</h2>
                    <p className="py-3 text-justify">
                        We are profesional travel agent on the West Maggarai, East Nusa Tenggara Province, Indonesia.
                        Cosiness that we offer as a tour guide to accompany your trip in East Nusa Tenggara and arround it
                        will be unforgettable experience for you.
                    </p>
                </div>
                <div className="gap-4 flex flex-col md:flex-row pt-5">
                    <div className="w-full flex-col flex gap-4">
                        <div className="w-full flex items-center mb-5 md:text-center">
                            <button>
                                <RiCustomerService2Fill size={30} />
                            </button>
                            <div className="px-2">
                                <h3 className="text-base">Leading Service</h3>
                                <p className="text-xs">
                                    We serve your any issues or questions on chat 24/7 by our customer service.
                                </p>
                            </div>
                        </div>
                        <div className="w-full mb-5 md:mb-0 flex flex-row-reverse md:flex-row items-center text-right md:text-center">
                            <button>
                                <TbMapSearch size={30} />
                            </button>
                            <div className="px-2">
                                <h3 className="text-base">The Best Destination</h3>
                                <p className="text-xs">
                                    We take you to go awesome place for your best holiday experience which always remembered.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-col flex gap-4">
                        <div className="w-full flex items-center mb-5 md:text-center">
                            <button>
                                <ImCamera size={30} />
                            </button>
                            <div className="px-2">
                                <h3 className="text-base">Documentation Included</h3>
                                <p className="text-xs">
                                    Your photos and videos most important part of your journey, we totally understand that.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex flex-row-reverse md:flex-row items-center text-right md:text-center">
                            <button>
                                <FaCommentsDollar size={30} />
                            </button>
                            <div className="px-2">
                                <h3 className="text-base">Competitive Price</h3>
                                <p className="text-xs">
                                    The price we provide is comparable with facilities will you get, even more that.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-1 w-[98%] flex flex-col items-center lg:items-end">
                <div className="text-center pt-16 lg:pt-0">
                    <p className="text-lg font-semibold">GET AN ADDITIONAL 10% OFF!</p>
                    <p className="text-lg py-[.65rem] mb-1">12 Hours Left</p>
                    <p className="py-2 text-white font-bold bg-gray-800">SAFE IT AND BOOK NOW</p>
                    <form className="w-auto pt-8 -ml-1">
                        <div className="flex flex-col my-2 pb-2">
                            <select
                                value={weGo}
                                onChange={handleWeGo}
                                className="border-2 p-2">
                                <option
                                    value={''}
                                    disabled>
                                    Where we go?
                                </option>
                                <option value={'Padar Island'}>Padar Island</option>
                                <option value={'Sailing Komodo'}>Sailing Komodo</option>
                                <option value={'Wae Rebo Overland'}>Wae Rebo Overland</option>
                            </select>
                        </div>
                        <div className="flex flex-col my-2 pb-2">
                            <select
                                value={tripType}
                                onChange={handleTripType}
                                className="border-2 p-2">
                                <option
                                    value={''}
                                    disabled>
                                    Choose Type of Trip
                                </option>
                                <option value={'Open Trip'}>Open Trip</option>
                                <option value={'Private Trip'}>Private Trip</option>
                            </select>
                        </div>
                        <button className="w-full">Let's Goo, Start Your Jouney!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
