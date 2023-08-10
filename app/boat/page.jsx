'use client';

import Link from 'next/link';
import { BsClockHistory, BsCalendarWeek } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';
import dataBoat from '../../component/data/boat';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';

export default function BoatList() {
    return (
        <>
            <div className="w-full h-20 bg-slate-900/60 relative">
                <Navbar />
            </div>
            <div className="max-w-[1240px] px-8 py-32 mx-auto">
                <div className="flex flex-col pb-3 items-center text-center">
                    <h1>Journey Labuan Bajo Boat Charter</h1>
                    <span className="inline-block mt-2 md:mt-0 md:mr-[38rem] mb-10 w-24 h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                    <p className="py-3 -mt-10">Best choice for your Private Trip on Labuan Bajo</p>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap gap-10 items-start justify-center mt-2">
                    {dataBoat.map((content) => {
                        return (
                            <div
                                className="w-full sm:w-1/2 lg:w-[30%] shadow-lg"
                                key={content.url}>
                                <div
                                    className="w-full h-56 bg-center bg-no-repeat bg-cover"
                                    style={{
                                        backgroundImage: `url(${content.banner})`,
                                    }}></div>
                                <div className="p-5 flex flex-col gap-4">
                                    <h3>{content.title}</h3>
                                    <div className="pb-3 flex flex-wrap gap-3">
                                        <div className="flex gap-1.5 items-center text-sm">
                                            <FaMoneyBillWave size={18} />
                                            <div className="flex flex-col gap-0 -mt-2.5">
                                                <span className="text-[9px]">Start From</span>
                                                <span className="-mt-2">Rp. {content.price}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 items-center text-sm">
                                            <BsClockHistory size={18} />
                                            {content.time}
                                        </div>
                                        <div className="flex gap-1.5 items-center text-sm">
                                            <BsCalendarWeek size={18} />
                                            Everyday
                                        </div>
                                    </div>
                                    <Link
                                        href={content.url}
                                        onClick={() => {
                                            window.scrollTo({ top: 0 });
                                        }}>
                                        <button className="w-full">More Details</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}
