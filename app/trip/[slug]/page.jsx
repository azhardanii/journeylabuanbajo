'use client';

import { useEffect, useState } from 'react';
import {
    BsArrowLeftSquareFill,
    BsArrowRightSquareFill,
    BsClockHistory,
    BsPeople,
    BsGeoFill,
    BsShareFill,
} from 'react-icons/bs';
import { RWebShare } from 'react-web-share';
import DatePicker from 'react-widgets/DatePicker';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import dataTrip from '../../../component/data/trip';
import SpeedBoatSailing from '../../../component/trip/SpeedBoatSailing';
import DeckBoatSailing from '../../../component/trip/DeckBoatSailing';
import Phinisi2D1NSailing from '../../../component/trip/Phinisi2D1NSailing';
import Phinisi3D2NSailing from '../../../component/trip/Phinisi3D2NSailing';
import SailingKomodoNationalPark from '../../../component/trip/SailingKomodoNationalPark';
import OverlandWaeRebo from '../../../component/trip/OverlandWaeRebo';
import Navbar from '../../../component/navbar';
import Footer from '../../../component/footer';

export default function Trip() {
    const params = useParams();
    const url = params.slug;

    const price = dataTrip
        .filter((p) => url === p.url)
        .map((p) => {
            return p.price;
        });

    const mepo = dataTrip
        .filter((p) => url === p.url)
        .map((p) => {
            return p.mepo;
        });

    const title = dataTrip
        .filter((p) => url === p.url)
        .map((p) => {
            return p.title;
        });

    const [item] = useState(dataTrip[0].banner);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = item.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, item]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => clearInterval(slider);
    }, [index]);

    let day = new Date();
    let nextDay = new Date(new Date(day).setDate(day.getDate() + 1));

    const [value, setValue] = useState({});
    const [date, setDate] = useState(`${nextDay.getDate()}-${nextDay.getMonth() + 1}-${nextDay.getFullYear()}`);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue((values) => ({ ...values, [name]: value }));
    };

    const [calc, setCalc] = useState({
        adult: 0,
        child: 0,
    });

    const handleSum = (e) => {
        const newCalc = { ...calc, [e.target.name]: e.target.value };

        setCalc(newCalc);
        calcTotal(newCalc);
    };

    const [total, setTotal] = useState(0);
    const calcTotal = (newCalc) => {
        const { adult, child } = newCalc;
        const newTotal = (parseInt(adult) + parseInt(child)) * price.join('.').split('.').join('');
        setTotal(newTotal);
    };

    let reverse = total.toString().split('').reverse().join(''),
        rupiah = reverse.match(/\d{1,3}/g);
    rupiah = rupiah.join('.').split('').reverse().join('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(
            `https://wa.me/6281335672442?text=Booking ${title}\n
        Tanggal: ${date}\n
        Meeting Point: ${mepo}\n
        Full Name: ${value.fullname}\n
        Phone Number: ${value.phone}\n
        Email: ${value.mail}\n
        Adult: ${calc.adult}\n
        Children: ${calc.child}\n
        Total Payment: Rp. ${rupiah}\n
        Note: ${value.note}`,
            '_blank'
        );
    };

    return (
        <>
            {dataTrip
                .filter((content) => url === content.url)
                .map((content) => {
                    return (
                        <div key={content.url}>
                            <div className="w-full h-20 bg-slate-900/60 relative">
                                <Navbar />
                            </div>
                            <div className="max-w-[1240px] px-8 py-10 md:pt-28 mx-auto">
                                <div className="flex flex-col pb-3 items-center text-center">
                                    <h1>{content.title}</h1>
                                    <span className="inline-block mt-2 md:mt-0 md:mr-[30rem] mb-10 w-24 h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                                    <div className="py-3 -mt-9 flex flex-wrap justify-center gap-x-4 gap-y-3">
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
                                </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row pb-32 px-5 md:px-16 xl:px-32 gap-5">
                                <div className="w-full lg:w-[70%] border border-[#ccc]">
                                    {/* Slider */}
                                    <div className="w-full h-60 md:h-72 lg:h-96 relative flex overflow-hidden mb-6">
                                        {content.banner.map((item, itemIndex) => {
                                            const { id, url } = item;
                                            let position = 'nextSlide';
                                            if (itemIndex === index) {
                                                position = 'activeSlide';
                                            }
                                            if (itemIndex === index - 1 || (index === 0 && itemIndex === item.length - 1)) {
                                                position = 'lastSlide';
                                            }

                                            return (
                                                <div
                                                    key={id}
                                                    className={`absolute top-0 left-0 w-full h-full transition duration-1000 bg-cover bg-center ${position}`}
                                                    style={{
                                                        backgroundImage: `url(${url})`,
                                                    }}></div>
                                            );
                                        })}
                                        <BsArrowLeftSquareFill
                                            onClick={() => setIndex(index - 1)}
                                            className="absolute top-[50%] text-3xl text-white/80 cursor-pointer left-3 md:left-5 ml-0"
                                        />
                                        <BsArrowRightSquareFill
                                            onClick={() => setIndex(index + 1)}
                                            className="absolute top-[50%] text-3xl text-white/80 cursor-pointer right-3 md:right-5 mr-0"
                                        />
                                    </div>

                                    {(() => {
                                        switch (url) {
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

                                <form
                                    onSubmit={handleSubmit}
                                    className="w-full lg:w-[30%] max-h-max p-5 border border-[#ccc] flex flex-col">
                                    <div className="flex justify-between items-center border-b border-[#ccc] pb-3">
                                        <h1 className="text-3xl font-bold">Rp. {content.price}</h1>
                                        <div className="-mt-1 p-2.5 cursor-pointer bg-slate-300/30">
                                            <RWebShare
                                                data={{
                                                    text: 'We are profesional travel agent on the West Maggarai, East Nusa Tenggara Province, Indonesia. Cosiness that we offer as a tour guide to accompany your trip in East Nusa Tenggara and arround it will be unforgettable experience for you.',
                                                    url: 'https://journeylabuanbajo.com',
                                                    title: 'Journey Labuan Bajo',
                                                }}>
                                                <BsShareFill size={18} />
                                            </RWebShare>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5 mt-5">
                                        <div className="w-full flex flex-col gap-3">
                                            <label htmlFor="bookDate">Booking Date</label>
                                            <DatePicker
                                                id="bookDate"
                                                name="bookDate"
                                                defaultValue={nextDay}
                                                onChange={(e) => {
                                                    setDate(`${e.getDate()}-${e.getMonth() + 1}-${e.getFullYear()}`);
                                                }}
                                                valueEditFormat={{
                                                    dateStyle: 'long',
                                                }}
                                                valueDisplayFormat={{
                                                    dateStyle: 'long',
                                                }}
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-3">
                                            <label htmlFor="mepo">Meeting Point</label>
                                            <input
                                                type="text"
                                                id="mepo"
                                                name="mepo"
                                                className="w-full border border-[#ccc] p-2 focus:outline-0"
                                                defaultValue={content.mepo}
                                                readOnly
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-3">
                                            <label htmlFor="fullname">Full Name</label>
                                            <input
                                                type="text"
                                                id="fullname"
                                                name="fullname"
                                                className="w-full border border-[#ccc] p-2 focus:outline-0"
                                                onChange={handleChange}
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-3">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="number"
                                                id="phone"
                                                name="phone"
                                                className="w-full border border-[#ccc] p-2 focus:outline-0"
                                                onChange={handleChange}
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                        <div className="w-full flex flex-col gap-3">
                                            <label htmlFor="mail">Email</label>
                                            <input
                                                type="email"
                                                id="mail"
                                                name="mail"
                                                className="w-full border border-[#ccc] p-2 focus:outline-0"
                                                onChange={handleChange}
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                        <div className="w-full flex gap-5">
                                            <div className="w-1/2 flex flex-col">
                                                <label htmlFor="adult">Adult</label>
                                                <input
                                                    type="number"
                                                    id="adult"
                                                    name="adult"
                                                    className="w-full border border-[#ccc] p-2 focus:outline-0"
                                                    onChange={handleSum}
                                                    autoComplete="off"
                                                    value={calc.adult}
                                                    min={0}
                                                    required
                                                />
                                            </div>
                                            <div className="w-1/2 flex flex-col">
                                                <label htmlFor="child">Children</label>
                                                <input
                                                    type="number"
                                                    id="child"
                                                    name="child"
                                                    className="w-full border border-[#ccc] p-2 focus:outline-0"
                                                    onChange={handleSum}
                                                    autoComplete="off"
                                                    value={calc.child}
                                                    min={0}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col gap-3">
                                            <label htmlFor="note">Note</label>
                                            <textarea
                                                rows="5"
                                                id="note"
                                                name="note"
                                                className="w-full border border-[#ccc] p-2 focus:outline-0"
                                                onChange={handleChange}
                                                autoComplete="off"
                                                required></textarea>
                                        </div>
                                        <p className="font-medium text-base text-center">Total Payment: Rp. {rupiah}</p>
                                        <input
                                            className="p-3 bg-blue-500 text-white cursor-pointer"
                                            type="submit"
                                            value="Booking"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    );
                })}

            <div className="w-full flex justify-center mb-10">
                <h2>Pilihan Paket Open Trip Lain yang Mungkin Anda Minati</h2>
            </div>
            <div className="mx-auto max-w-[1240px]">
                <div className="flex flex-col lg:flex-row flex-wrap gap-10 items-start justify-center mb-20">
                    {dataTrip.map((content) => {
                        return (
                            <div
                                className={`w-full sm:w-1/2 lg:w-[30%] shadow-lg ${
                                    url === content.url ? 'hidden' : 'block'
                                }`}
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
                                        href={`../trip/${content.url}`}
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
