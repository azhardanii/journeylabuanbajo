'use client';

import { useState } from 'react';
import { BsClockHistory, BsPeople, BsGeoFill, BsStarFill } from 'react-icons/bs';
import Phinisi2D1NSailing from './trip/Phinisi2D1NSailing';
import Phinisi3D2NSailing from './trip/Phinisi3D2NSailing';
import SailingKomodoNationalPark from './trip/SailingKomodoNationalPark';
import OverlandWaeRebo from './trip/OverlandWaeRebo';
import SpeedBoatSailing from './trip/SpeedBoatSailing';
import DeckBoatSailing from './trip/DeckBoatSailing';
import dataTrip from './data/trip';

export default function PopularTrip() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');

    return (
        <div className="max-w-[1240px] my-32 mx-auto">
            <div className="flex flex-col px-8 pb-3 items-center text-center">
                <h1>The Most Popular Open Trip Packages</h1>
                <span className="inline-block mt-2 md:mt-0 md:mr-[35rem] mb-10 w-[5.5rem] h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                <p className="py-3 -mt-10">Presents any sharing trip packages that you can freely choose</p>
            </div>

            <div className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-8 items-start justify-center mt-2">
                {dataTrip.map((content) => {
                    return (
                        <div
                            className="w-[46%] md:w-[32%] shadow-lg"
                            key={content.url}>
                            <div
                                className="w-full h-56 bg-center bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: `url(${content.banner[0].url})`,
                                }}></div>
                            <div className="py-5 px-4 flex flex-col gap-4">
                                <h3>{content.title}</h3>
                                <div className="pb-3 flex flex-wrap gap-x-4 gap-y-3">
                                    <div className="flex gap-1.5 items-center text-sm">
                                        <BsPeople size={18} />
                                        {content.type}
                                    </div>
                                    <div className="flex gap-1.5 items-center text-sm">
                                        <BsClockHistory size={18} />
                                        {content.time}
                                    </div>
                                    <div className="flex gap-1.5 items-center text-sm">
                                        <BsGeoFill size={18} />
                                        {content.mepo}
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        setModalOpen(true);
                                        setModalData(content);
                                    }}
                                    className="w-full">
                                    Read More
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                className={
                    modalOpen
                        ? 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center z-[60]'
                        : 'hidden'
                }>
                {/* Modal Header */}
                <div className="flex px-4 py-6 items-center justify-between bg-white w-11/12 md:w-1/2 border-b rounded-t mt-10">
                    <div className="flex items-end">
                        <div className="pl-2 text-2xl sm:text-[42px] items-center text-slate-900 font-semibold flex gap-2">
                            Rp. {modalData.price}
                            <div className="text-sm tracking-wider text-slate-500 font-semibold flex flex-col">
                                /orang
                                <p className="text-yellow-300 flex gap-1">
                                    <BsStarFill size={15} />
                                    <BsStarFill size={15} />
                                    <BsStarFill size={15} />
                                    <BsStarFill size={15} />
                                    <BsStarFill size={15} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => {
                            setModalOpen(false);
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
                        <span className="sr-only">Tutup</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 bg-white w-11/12 md:w-1/2 space-y-6 max-h-[80%] overflow-y-scroll">
                    <div className="text-3xl font-bold text-slate-900 flex justify-center">
                        <h2>{modalData.title}</h2>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-3 justify-center">
                        <div className="flex gap-1.5 items-center text-sm">
                            <BsPeople size={18} />
                            {modalData.type}
                        </div>
                        <div className="flex gap-1.5 items-center text-sm">
                            <BsClockHistory size={18} />
                            {modalData.time}
                        </div>
                        <div className="flex gap-1.5 items-center text-sm">
                            <BsGeoFill size={18} />
                            {modalData.mepo}
                        </div>
                    </div>
                    <div>
                        {(() => {
                            switch (modalData.url) {
                                case 'sailing-komodo-speed-boat':
                                    return <SpeedBoatSailing />;
                                case 'sailing-komodo-open-deck':
                                    return <DeckBoatSailing />;
                                case 'sailing-komodo-reguler-2d1n':
                                    return <Phinisi2D1NSailing />;
                                case 'sailing-komodo-reguler-3d2n':
                                    return <Phinisi3D2NSailing />;
                                case 'sailing-komodo-phinisi-3d2n':
                                    return <SailingKomodoNationalPark />;
                                case 'overland-wae-rebo':
                                    return <OverlandWaeRebo />;
                                default:
                                    return 'Data Not Found!';
                            }
                        })()}
                    </div>
                </div>
                {/* Modal footer */}
                <div className="flex p-4 bg-white w-11/12 md:w-1/2 space-x-2 border-t border-slate-200 rounded-b mb-10">
                    <button
                        onClick={(e) => {
                            window.open(
                                `https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Apakah saya bisa reservasi untuk paket perjalanan ${modalData.title}, tolong segera direspon!`,
                                '_blank'
                            );
                            setModalOpen(false);
                            e.preventDefault();
                        }}
                        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Booking Now!
                    </button>
                    <a
                        href="/"
                        onClick={(e) => {
                            window.open(
                                `https://wa.me/6281335672442?text=Haloo Kak Admin Journey Labuan Bajo. Mau tanya-tanya tentang ${modalData.title} dong, tolong segera direspon!`,
                                '_blank'
                            );
                            setModalOpen(false);
                            e.preventDefault();
                        }}
                        className="text-center text-slate-500 cursor-pointer bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border-2 border-slate-400 text-sm font-medium px-5 py-2.5 hover:text-slate-900 focus:z-[60]">
                        Any Question?
                    </a>
                </div>
            </div>
        </div>
    );
}
