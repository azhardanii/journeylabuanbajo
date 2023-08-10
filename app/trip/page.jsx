'use client';

import Link from 'next/link';
import { BsClockHistory, BsPeople, BsGeoFill } from 'react-icons/bs';
import dataTrip from '../../component/data/trip';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';

export default function TripList() {
    return (
        <>
            <div className="w-full h-20 bg-slate-900/60 relative">
                <Navbar />
            </div>
            <div className="max-w-[1240px] px-8 py-32 mx-auto">
                <div className="flex flex-col pb-3 items-center text-center">
                    <h1>Journey Labuan Bajo Tour Packages</h1>
                    <span className="inline-block mt-2 md:mt-0 md:mr-[38rem] mb-10 w-24 h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                    <p className="py-3 -mt-10">Presents any tour packages that you can freely choose</p>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap gap-10 items-start justify-center mt-2">
                    {dataTrip.map((content) => {
                        return (
                            <div
                                className="w-full sm:w-1/2 lg:w-[30%] shadow-lg"
                                key={content.url}>
                                <div
                                    className="w-full h-56 bg-center bg-no-repeat bg-cover"
                                    style={{
                                        backgroundImage: `url(${content.banner[0].url})`,
                                    }}></div>
                                <div className="p-5 flex flex-col gap-4">
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
                                    <Link
                                        href={`trip/${content.url}`}
                                        onClick={() => {
                                            window.scrollTo({ top: 0 });
                                        }}>
                                        <button className="w-full">Check it Out</button>
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
