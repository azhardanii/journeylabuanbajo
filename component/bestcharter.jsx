'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GiClick } from 'react-icons/gi';
import { TfiAlarmClock } from 'react-icons/tfi';
import { BsStarFill, BsStarHalf, BsPeople, BsCalendar2Week } from 'react-icons/bs';

export default function BestCharter() {
    const [deluxe, setDeluxe] = useState(false);
    const [superior, setSuperior] = useState(false);
    const [standard, setStandard] = useState(false);
    const [opendeck, setOpenDeck] = useState(false);
    const [speedboat, setSpeedBoat] = useState(false);
    const [luxury, setLuxury] = useState(false);

    return (
        <div className="max-w-[1240px] my-32 mx-auto">
            <div className="flex flex-col px-8 pb-3 items-center text-center">
                <h1>The Most Popular Boat Charter</h1>
                <span className="inline-block mt-2 md:mt-0 md:mr-[24.5rem] mb-10 w-24 h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                <p className="py-3 -mt-10">Best Choice for Your Private Trip on Labuan Bajo</p>
            </div>

            <div className="flex px-5 md:px-0 gap-5 md:gap-8 lg:gap-3 flex-wrap justify-center lg:justify-between mx-auto">
                <div
                    onClick={() => {
                        setDeluxe(true);
                    }}
                    className="relative w-full lg:w-[49.4%] overflow-hidden transform transition duration-500 hover:scale-y-105 cursor-pointer">
                    <img
                        className="h-full w-full"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/deluxephinisi.webp"
                        alt="Journey Labuan Bajo Deluxe Phinisi"
                    />
                    <div className="bg-slate-900/10 lg:bg-slate-900/20 absolute top-0 left-0 w-full h-full transform transition duration-1000 hover:bg-slate-900/0">
                        <div className="flex absolute left-1 sm:left-4 bottom-8 sm:bottom-14 text-yellow-300 gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                        </div>
                        <GiClick
                            className="absolute top-1 sm:top-4 right-1 sm:right-4 text-white"
                            size={20}
                        />
                        <p className="absolute text-white font-semibold text-sm top-1 right-6 sm:top-4 sm:right-10">
                            More Info
                        </p>
                        <p className="left-0 sm:left-4 bottom-0 bg-slate-400/70 px-2 sm:bottom-4 text-lg sm:text-2xl font-bold text-white absolute">
                            Deluxe Phinisi Charter
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setSuperior(true);
                    }}
                    className="relative w-full lg:w-[49.4%] overflow-hidden transform transition duration-500 hover:scale-y-105 cursor-pointer">
                    <img
                        className="h-full w-full"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/superiorphinisi.webp"
                        alt="Journey Labuan Bajo Superior Phinisi"
                    />
                    <div className="bg-slate-900/10 lg:bg-slate-900/20  absolute top-0 left-0 w-full h-full transform transition duration-1000 hover:bg-slate-900/0">
                        <div className="flex absolute left-1 sm:left-4 bottom-8 sm:bottom-14 text-yellow-300 gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                        </div>
                        <GiClick
                            className="absolute top-1 sm:top-4 right-1 sm:right-4 text-white"
                            size={20}
                        />
                        <p className="absolute text-white font-semibold text-sm top-1 right-6 sm:top-4 sm:right-10">
                            More Info
                        </p>
                        <p className="left-0 sm:left-4 bottom-0 bg-slate-400/70 px-2 sm:bottom-4 text-lg sm:text-2xl font-bold text-white absolute">
                            Superior Phinisi Charter
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setStandard(true);
                    }}
                    className="relative w-full lg:w-[32.5%] overflow-hidden transform transition duration-500 hover:scale-y-105 cursor-pointer">
                    <img
                        className="h-full w-full"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/standardboat.webp"
                        alt="Journey Labuan Bajo Standard Boat"
                    />
                    <div className="bg-slate-900/10 lg:bg-slate-900/30 absolute top-0 left-0 w-full h-full transform transition duration-1000 hover:bg-slate-900/0">
                        <div className="flex absolute left-1 sm:left-4 bottom-8 sm:bottom-14 text-yellow-300 gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarHalf size={17} />
                        </div>
                        <GiClick
                            className="absolute top-1 sm:top-4 right-1 sm:right-4 text-white"
                            size={20}
                        />
                        <p className="absolute text-white font-semibold text-sm top-1 right-6 sm:top-4 sm:right-10">
                            More Info
                        </p>
                        <p className="left-0 sm:left-4 bottom-0 bg-slate-400/70 px-2 sm:bottom-4 text-lg sm:text-2xl font-bold text-white absolute">
                            Phinisi Standard Charter
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setOpenDeck(true);
                    }}
                    className="relative w-full lg:w-[32.5%] overflow-hidden transform transition duration-500 hover:scale-y-105 cursor-pointer">
                    <img
                        className="h-full w-full"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/opendeck.webp"
                        alt="Journey Labuan Bajo Open Deck Boat"
                    />
                    <div className="bg-slate-900/10 lg:bg-slate-900/30 absolute top-0 left-0 w-full h-full transform transition duration-1000 hover:bg-slate-900/0">
                        <div className="flex absolute left-1 sm:left-4 bottom-8 sm:bottom-14 text-yellow-300 gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarHalf size={17} />
                        </div>
                        <GiClick
                            className="absolute top-1 sm:top-4 right-1 sm:right-4 text-white"
                            size={20}
                        />
                        <p className="absolute text-white font-semibold text-sm top-1 right-6 sm:top-4 sm:right-10">
                            More Info
                        </p>
                        <p className="left-0 sm:left-4 bottom-0 bg-slate-400/70 px-2 sm:bottom-4 text-lg sm:text-2xl font-bold text-white absolute">
                            Open Deck Charter
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setSpeedBoat(true);
                    }}
                    className="relative w-full lg:w-[32.5%] overflow-hidden transform transition duration-500 hover:scale-y-105 cursor-pointer">
                    <img
                        className="h-full w-full"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/speedboat.webp"
                        alt="Journey Labuan Bajo Speed Boat"
                    />
                    <div className="bg-slate-900/10 lg:bg-slate-900/30  absolute top-0 left-0 w-full h-full transform transition duration-1000 hover:bg-slate-900/0">
                        <div className="flex absolute left-1 sm:left-4 bottom-8 sm:bottom-14 text-yellow-300 gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarHalf size={17} />
                        </div>
                        <GiClick
                            className="absolute top-1 sm:top-4 right-1 sm:right-4 text-white"
                            size={20}
                        />
                        <p className="absolute text-white font-semibold text-sm top-1 right-6 sm:top-4 sm:right-10">
                            More Info
                        </p>
                        <p className="left-0 sm:left-4 bottom-0 bg-slate-400/70 px-2 sm:bottom-4 text-lg sm:text-2xl font-bold text-white absolute">
                            Speed Boat Charter
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setLuxury(true);
                    }}
                    className="relative w-full lg:w-[60%] mx-auto overflow-hidden transform transition duration-500 hover:scale-y-105 cursor-pointer">
                    <img
                        className="h-full w-full"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/luxuryphinisi.webp"
                        alt="Journey Labuan Bajo Luxury Phinisi"
                    />
                    <div className="bg-slate-900/10 lg:bg-slate-900/30 absolute top-0 left-0 w-full h-full transform transition duration-1000 hover:bg-slate-900/0">
                        <div className="flex absolute left-1 sm:left-4 bottom-8 sm:bottom-14 text-yellow-300 gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                        </div>
                        <GiClick
                            className="absolute top-1 sm:top-4 right-1 sm:right-4 text-white"
                            size={20}
                        />
                        <p className="absolute text-white font-semibold text-sm top-1 right-6 sm:top-4 sm:right-10">
                            More Info
                        </p>
                        <p className="left-0 sm:left-4 bottom-0 bg-slate-400/70 px-2 sm:bottom-4 text-lg sm:text-2xl font-bold text-white absolute">
                            Phinisi Luxury Charter
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal Ship */}
            <div
                className={
                    deluxe
                        ? 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center z-[60]'
                        : 'hidden'
                }>
                {/* Modal Header */}
                <div className="flex p-4 items-center justify-between bg-white w-11/12 md:w-1/2 border-b rounded-t mt-10">
                    <div className="flex items-end text-sm sm:text-base font-normal text-slate-600">
                        start from
                        <p className="pl-2 text-2xl sm:text-3xl text-slate-900 font-semibold">IDR 35jt</p>
                        /trip
                    </div>
                    <button
                        type="button"
                        className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            setDeluxe(false);
                        }}>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 bg-white w-11/12 md:w-1/2 space-y-6 max-h-[80%]">
                    <div className="text-3xl font-bold text-slate-900">
                        Deluxe Phinisi Charter
                        <p className="text-yellow-300 flex gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                        </p>
                    </div>
                    <p className="flex items-center gap-1 text-xs sm:gap-2 sm:text-base leading-relaxed text-slate-500">
                        <TfiAlarmClock size={17} /> 2D 1N | <BsPeople size={18} /> Private Trip | <BsCalendar2Week />{' '}
                        Everyday
                    </p>
                    <p className="text-base leading-relaxed text-slate-500">
                        Kapal Tradisional asli buatan dari Kabupaten Bulukumba Sulawesi Selatan Indonesia ini sangat populer
                        dikalangan wisatawan yang sedang travelling ke Labuan Bajo. Kapal yang telah dimodifikasi sedemikian
                        rupa dari wujud aslinya dengan fasilitas mirip hotel kelas Deluxe.
                    </p>
                </div>
                {/* Modal footer */}
                <div className="flex p-4 bg-white w-11/12 md:w-1/2 space-x-2 border-t border-slate-200 rounded-b mb-10">
                    <button
                        onClick={(e) => {
                            window.open(
                                'https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Saya ingin menyewa kapal Deluxe Phinisi, tolong segera direspon!',
                                '_blank'
                            );
                            setDeluxe(false);
                            e.preventDefault();
                        }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        I Want This
                    </button>
                    <Link
                        href="/deluxe-phinisi-charter"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="text-slate-500 cursor-pointer bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-slate-400 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-[60]">
                        Read More Info
                    </Link>
                </div>
            </div>
            <div
                className={
                    superior
                        ? 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center z-[60]'
                        : 'hidden'
                }>
                {/* Modal Header */}
                <div className="flex p-4 items-center justify-between bg-white w-11/12 md:w-1/2 border-b rounded-t mt-10">
                    <div className="flex items-end text-sm sm:text-base font-normal text-slate-600">
                        start from
                        <p className="pl-2 text-2xl sm:text-3xl text-slate-900 font-semibold">IDR 22jt</p>
                        /trip
                    </div>
                    <button
                        type="button"
                        className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            setSuperior(false);
                        }}>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 bg-white w-11/12 md:w-1/2 space-y-6 max-h-[80%]">
                    <div className="text-3xl font-bold text-slate-900">
                        Superior Phinisi Charter
                        <p className="text-yellow-300 flex gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                        </p>
                    </div>
                    <p className="flex items-center gap-1 text-xs sm:gap-2 sm:text-base leading-relaxed text-slate-500">
                        <TfiAlarmClock /> 2D 1N | <BsPeople /> Private Trip | <BsCalendar2Week /> Everyday
                    </p>
                    <p className="text-base leading-relaxed text-slate-500">
                        Kapal Tradisional asli buatan dari Kabupaten Bulukumba Sulawesi Selatan Indonesia ini sangat populer
                        dikalangan wisatawan yang sedang travelling ke Labuan Bajo. Kapal yang telah dimodifikasi sedemikian
                        rupa dari wujud aslinya dengan fasilitas mirip hotel kelas Superior.
                    </p>
                </div>
                {/* Modal footer */}
                <div className="flex p-4 bg-white w-11/12 md:w-1/2 space-x-2 border-t border-slate-200 rounded-b mb-10">
                    <button
                        onClick={(e) => {
                            window.open(
                                'https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Saya ingin menyewa kapal Superior Phinisi, tolong segera direspon!',
                                '_blank'
                            );
                            setSuperior(false);
                            e.preventDefault();
                        }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        I Want This
                    </button>
                    <Link
                        href="/superior-phinisi-charter"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="text-slate-500 cursor-pointer bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-slate-400 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-[60]">
                        Read More Info
                    </Link>
                </div>
            </div>
            <div
                className={
                    standard
                        ? 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center z-[60]'
                        : 'hidden'
                }>
                {/* Modal Header */}
                <div className="flex p-4 items-center justify-between bg-white w-11/12 md:w-1/2 border-b rounded-t mt-10">
                    <div className="flex items-end text-sm sm:text-base font-normal text-slate-600">
                        start from
                        <p className="pl-2 text-2xl sm:text-3xl text-slate-900 font-semibold">IDR 9jt</p>
                        /day
                    </div>
                    <button
                        type="button"
                        className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            setStandard(false);
                        }}>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 bg-white w-11/12 md:w-1/2 space-y-6 max-h-[80%]">
                    <div className="text-3xl font-bold text-slate-900">
                        Phinisi Standard Charter
                        <p className="text-yellow-300 flex gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarHalf size={17} />
                        </p>
                    </div>
                    <p className="flex items-center gap-1 text-xs sm:gap-2 sm:text-base leading-relaxed text-slate-500">
                        <TfiAlarmClock /> 2D 1N | <BsPeople /> Private Trip | <BsCalendar2Week /> Everyday
                    </p>
                    <p className="text-base leading-relaxed text-slate-500">
                        Kapal kayu khusus ini mempunyai fasilitas kabin yang telah tersedia kamar tidur ber AC serta
                        fasilitas penunjang lainnya, direkomendasikan bagi anda yang ingin merasakan Travelling Tour Sailing
                        Komodo dengan sensasi menginap diatas kapal dengan biaya yang terjangkau dan ramah kantong saat trip
                        di Taman Nasional Komodo Labuan Bajo dengan kapasitas hingga maksimal 8 orang.
                    </p>
                </div>
                {/* Modal footer */}
                <div className="flex p-4 bg-white w-11/12 md:w-1/2 space-x-2 border-t border-slate-200 rounded-b mb-10">
                    <button
                        onClick={(e) => {
                            window.open(
                                'https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Saya ingin menyewa kapal Standard, tolong segera direspon!',
                                '_blank'
                            );
                            setStandard(false);
                            e.preventDefault();
                        }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        I Want This
                    </button>
                    <Link
                        href="/standard-phinisi-charter"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="text-slate-500 cursor-pointer bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-slate-400 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-[60]">
                        Read More Info
                    </Link>
                </div>
            </div>
            <div
                className={
                    opendeck
                        ? 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center z-[60]'
                        : 'hidden'
                }>
                {/* Modal Header */}
                <div className="flex p-4 items-center justify-between bg-white w-11/12 md:w-1/2 border-b rounded-t mt-10">
                    <div className="flex items-end text-sm sm:text-base font-normal text-slate-600">
                        start from
                        <p className="pl-2 text-2xl sm:text-3xl text-slate-900 font-semibold">IDR 3.5jt</p>
                        /trip
                    </div>
                    <button
                        type="button"
                        className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            setOpenDeck(false);
                        }}>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 bg-white w-11/12 md:w-1/2 space-y-6 max-h-[80%]">
                    <div className="text-3xl font-bold text-slate-900">
                        Open Deck Charter Komodo
                        <p className="text-yellow-300 flex gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarHalf size={17} />
                        </p>
                    </div>
                    <p className="flex items-center gap-1 text-xs sm:gap-2 sm:text-base leading-relaxed text-slate-500">
                        <BsPeople /> Private Trip | <BsCalendar2Week /> Everyday
                    </p>
                    <p className="text-base leading-relaxed text-slate-500">
                        Kapal Wooden Biat Open deck adalah kapal kayu yang biasa berlayar tour Sailing Komodo di Labuan Bajo.
                        Tipe Sewa Kapal Labuan bajo ini tidak mempunyai kabin, sehingga digunakan hanya untuk Tour Sailing
                        Komodo 1 hari saja dan hanya menjangkau tempat wisata maksimal 4 destinasi seperti Pulau Padar, Pink
                        Beach, Pulau Rinca, dan Pulau Kalong untuk menikmati sunset.
                    </p>
                </div>
                {/* Modal footer */}
                <div className="flex p-4 bg-white w-11/12 md:w-1/2 space-x-2 border-t border-slate-200 rounded-b mb-10">
                    <button
                        onClick={(e) => {
                            window.open(
                                'https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Saya ingin menyewa kapal Open Deck, tolong segera direspon!',
                                '_blank'
                            );
                            setOpenDeck(false);
                            e.preventDefault();
                        }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        I Want This
                    </button>
                    <Link
                        href="/open-deck-charter"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="text-slate-500 cursor-pointer bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-slate-400 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-[60]">
                        Read More Info
                    </Link>
                </div>
            </div>
            <div
                className={
                    speedboat
                        ? 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center z-[60]'
                        : 'hidden'
                }>
                {/* Modal Header */}
                <div className="flex p-4 items-center justify-between bg-white w-11/12 md:w-1/2 border-b rounded-t mt-10">
                    <div className="flex items-end text-sm sm:text-base font-normal text-slate-600">
                        start from
                        <p className="pl-2 text-2xl sm:text-3xl text-slate-900 font-semibold">IDR 7jt</p>
                        /trip
                    </div>
                    <button
                        type="button"
                        className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            setSpeedBoat(false);
                        }}>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 bg-white w-11/12 md:w-1/2 space-y-6 max-h-[80%]">
                    <div className="text-3xl font-bold text-slate-900">
                        Speed Boat Charter Komodo
                        <p className="text-yellow-300 flex gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarHalf size={17} />
                        </p>
                    </div>
                    <p className="flex items-center gap-1 text-xs sm:gap-2 sm:text-base leading-relaxed text-slate-500">
                        <BsPeople /> Private Trip | <BsCalendar2Week /> Everyday
                    </p>
                    <p className="text-base leading-relaxed text-slate-500">
                        Sewa Speed Boat mengakomodir anda yang mempunyai waktu terbatas untuk travelling Sailing Komodo di
                        Labuan Bajo. Agar anda lebih cepat menjelajahi gugusan pulau di destinasi Wisata di Taman Nasional
                        Komodo.
                    </p>
                    <p className="text-base leading-relaxed text-slate-500">
                        Keunggulan kapal Speed Boat ini bisa mengelilingi banyak kepulauan di labuan bajo seperti Pulau
                        Komodo, Pulau Rinca, Pulau Padar, Pulau Kanawa, Long Pink Beach, Manta Ray Point, Gili Laba, Pulau
                        Sebayur, Pulau Seraya, Kalong, Kambing serta Kelor. Sehngga sangat singkat untuk berpindah-pindah
                        dari tempat wisata satu ke tempat wisata lainnya.
                    </p>
                </div>
                {/* Modal footer */}
                <div className="flex p-4 bg-white w-11/12 md:w-1/2 space-x-2 border-t border-slate-200 rounded-b mb-10">
                    <button
                        onClick={(e) => {
                            window.open(
                                'https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Saya ingin menyewa kapal Speed Boat, tolong segera direspon!',
                                '_blank'
                            );
                            setSpeedBoat(false);
                            e.preventDefault();
                        }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        I Want This
                    </button>
                    <Link
                        href="/speed-boat-charter"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="text-slate-500 cursor-pointer bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-slate-400 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-[60]">
                        Read More Info
                    </Link>
                </div>
            </div>
            <div
                className={
                    luxury
                        ? 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center z-[60]'
                        : 'hidden'
                }>
                {/* Modal Header */}
                <div className="flex p-4 items-center justify-between bg-white w-11/12 md:w-1/2 border-b rounded-t mt-10">
                    <div className="flex items-end text-sm sm:text-base font-normal text-slate-600">
                        start from
                        <p className="pl-2 text-2xl sm:text-3xl text-slate-900 font-semibold">IDR 45jt</p>
                        /day
                    </div>
                    <button
                        type="button"
                        className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            setLuxury(false);
                        }}>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 bg-white w-11/12 md:w-1/2 space-y-6 max-h-[80%]">
                    <div className="text-3xl font-bold text-slate-900">
                        Luxury Phinisi Charter
                        <p className="text-yellow-300 flex gap-1">
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                            <BsStarFill size={17} />
                        </p>
                    </div>
                    <p className="flex items-center gap-1 text-xs sm:gap-2 sm:text-base leading-relaxed text-slate-500">
                        <TfiAlarmClock /> 2D 1N | <BsPeople /> Private Trip | <BsCalendar2Week /> Everyday
                    </p>
                    <p className="text-base leading-relaxed text-slate-500">
                        Kapal Tradisional asli buatan dari Kabupaten Bulukumba Sulawesi Selatan Indonesia ini sangat populer
                        dikalangan wisatawan yang sedang travelling ke Labuan Bajo. Kapal yang telah dimodifikasi sedemikian
                        rupa dari wujud aslinya dengan fasilitas mirip hotel kelas Luxury.
                    </p>
                </div>
                {/* Modal footer */}
                <div className="flex p-4 bg-white w-11/12 md:w-1/2 space-x-2 border-t border-slate-200 rounded-b mb-10">
                    <button
                        onClick={(e) => {
                            window.open(
                                'https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Saya ingin menyewa kapal Luxury Phinisi, tolong segera direspon!',
                                '_blank'
                            );
                            setLuxury(false);
                            e.preventDefault();
                        }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        I Want This
                    </button>
                    <Link
                        href="/luxury-phinisi-charter"
                        onClick={() => {
                            window.scrollTo({ top: 0 });
                        }}
                        className="text-slate-500 cursor-pointer bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-slate-400 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-[60]">
                        Read More Info
                    </Link>
                </div>
            </div>
        </div>
    );
}
