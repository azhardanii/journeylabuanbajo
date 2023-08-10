// import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
    return (
        <div className="w-full bg-gray-100">
            <div className="flex flex-col flex-wrap px-8 mx-auto max-w-[1240px] py-16">
                <div className="sm:flex justify-center flex-col items-center">
                    <img
                        src="/jlb-logo-default.svg"
                        alt="Logo Journey Labuan Bajo"
                        width={225}
                        className="mx-auto"
                    />
                    {/* <div className="flex justify-between my-6 mx-0 lg:mx-10 w-full md:w-[620px] pt-10">
                        <FaFacebook className="icon" />
                        <RiInstagramFill className="icon" />
                        <FaTwitter className="icon" />
                        <RiWhatsappFill className="icon" />
                        <FaYoutube className="icon" />
                    </div> */}
                </div>
                {/* <div className="flex justify-between w-full pt-6 md:px-10">
                    <ul className="min-[1190px]:flex min-[1190px]:justify-between min-[1190px]:w-[45%] xl:w-[48%]">
                        <li>Home</li>
                        <li>Trip</li>
                        <li>Ship</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="text-right min-[1190px]:flex">
                        <li>Boat Charter</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Destinations</li>
                        <li>Booking</li>
                    </ul>
                </div> */}
            </div>
            {/* <div className="flex justify-center p-5 w-full">
                Created with 💙 by
                <a
                    href="https://diurnalweb.site"
                    target={'_blank'}
                    rel="noreferrer"
                    className="ml-2 font-bold text-[#154b9a]">
                    WebDev JLB
                </a>
            </div> */}
        </div>
    );
}
