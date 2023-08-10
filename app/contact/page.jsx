'use client';

import { useState } from 'react';
import { MdShareLocation, MdPhoneInTalk, MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';

export default function Contact() {
    const [value, setValue] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(
            `https://wa.me/6281335672442?text=
        Name: ${value.name}\n
        Email: ${value.email}\n
        Message: ${value.note}`,
            '_blank'
        );
    };

    return (
        <>
            <div className="w-full h-20 bg-slate-900/60 relative">
                <Navbar />
            </div>
            <div className="w-full px-8 xl:px-24 py-24 lg:py-32 mx-auto bg-fixed bg-center bg-cover bg-[url('https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/map.svg')]">
                <div className="flex flex-col pb-3 items-center text-center">
                    <h1>Let's Talk Yours Journey</h1>
                    <span className="inline-block mt-2 lg:mt-0 lg:mr-[23.5rem] mb-10 w-24 h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                    <p className="py-3 -mt-10">Any question or problem? With love we will help you!</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 mt-10">
                    <div className="w-full lg:w-1/2 flex flex-col gap-7 items-center text-center">
                        <h3>Fill this form for we know what happen with you</h3>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col w-full gap-5">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-[#ccc] p-4 focus:outline-0"
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="*Your Name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-[#ccc] p-4 focus:outline-0"
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="*Your Email"
                                required
                            />
                            <textarea
                                rows="6"
                                id="note"
                                name="note"
                                className="w-full border border-[#ccc] p-4 focus:outline-0"
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="*Your Message"
                                required></textarea>
                            <input
                                className="p-3 bg-[#0f75bc] text-white cursor-pointer mt-0.5"
                                type="submit"
                                value="Send Now"
                            />
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-7 mt-10 lg:mt-0 items-center">
                        <h3 className="text-center">Don't be shy, being friendly is our priority</h3>
                        <div className="flex gap-1 shadow-xl bg-white">
                            <div className="flex flex-col gap-2 p-4 w-full">
                                <b>Office Address</b>
                                <p>
                                    Jl. Kelapa Gading Wae Kasambi RT. 02 RW. 01, Batu Cermin, Labuan Bajo - Komodo, Kab.
                                    Manggarai Barat, NTT - Indonesia
                                </p>
                            </div>
                            <MdShareLocation className="bg-[#0f75bc] w-[65px] lg:w-20 text-white px-1 lg:px-2 h-auto" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <div className="flex w-auto gap-0 lg:gap-1 shadow-xl bg-white">
                                <MdPhoneInTalk className="bg-[#0f75bc] w-12 md:w-14 lg:w-16 text-white px-1 lg:px-2 h-auto" />
                                <div className="flex flex-col gap-1 p-3 lg:p-4 w-full">
                                    <b>Phone Number</b>
                                    <p>+6281335672442</p>
                                </div>
                            </div>
                            <div className="flex gap-0 lg:gap-1 shadow-xl bg-white w-auto">
                                <MdOutlineMarkEmailUnread className="bg-[#0f75bc] hidden lg:block w-40 lg:w-16 text-white px-1 lg:px-2 h-auto" />
                                <div className="flex flex-col gap-1 p-3 lg:p-4 w-full">
                                    <b>Email Address</b>
                                    <p>info@journeylabuanbajo.com</p>
                                </div>
                                <MdOutlineMarkEmailUnread className="bg-[#0f75bc] block lg:hidden w-16 text-white px-2 h-auto" />
                            </div>
                        </div>
                        <div className="flex gap-1 shadow-xl bg-white w-full">
                            <div className="flex flex-col items-center gap-3 pt-4 w-full">
                                <b className="text-[17px]">Follow us on social media :</b>
                                <div className="flex justify-between w-full">
                                    <RiInstagramFill className="w-1/4 h-auto cursor-pointer py-3 px-5 md:px-16 lg:px-[50.5px] text-[#0f75bc] border-4 border-r-0 border-[#0f75bc]" />
                                    <FaFacebook className="w-1/4 h-auto cursor-pointer py-3 px-5 md:px-16 lg:px-[50.5px] text-[#0f75bc] border-4 border-r-0 border-[#0f75bc]" />
                                    <FaTwitter className="w-1/4 h-auto cursor-pointer py-3 px-5 md:px-16 lg:px-[50.5px] text-[#0f75bc] border-4 border-r-0 border-[#0f75bc]" />
                                    <FaYoutube className="w-1/4 h-auto cursor-pointer py-3 px-5 md:px-16 lg:px-[50.5px] text-[#0f75bc] border-4 border-[#0f75bc]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1523259920036!2d119.8979050252654!3d-8.48456603078195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8339e86fec2c8af%3A0x50eb435760b589ea!2sJourney%20Labuan%20Bajo!5e0!3m2!1sen!2sid!4v1679757791516!5m2!1sen!2sid"
                className="border-0 w-full h-[720px]"
                allowfullscreen
                title="Journey Labuan Bajo Location"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </>
    );
}
