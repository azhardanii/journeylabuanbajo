import { BiMailSend } from 'react-icons/bi';
import { Poppins } from '@next/font/google';
import Navbar from './navbar';
import Footer from './footer';
import PopularTrip from './populartrip';
import BestCharter from './bestcharter';
import About from './about';
import CallAction from './callaction';
import Destination from './destination';
import Blog from './blog';

const pop = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

export default function Landing() {
    return (
        <>
            <div className="w-full h-screen relative">
                <Navbar />
                <video
                    className="w-full h-full object-cover"
                    src="/beachVid.mp4"
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 md:p-8">
                    <h1 className="text-[1.4rem] xs:text-[1.7rem] md:text-4xl">Journey Labuan Bajo.</h1>
                    <h2 className="py-4 text-[.9rem] xs:text-lg -mt-2 md:mt-0 md:text-3xl">
                        Let's Explore Heaven of the World
                    </h2>
                    <form className="flex justify-between items-center w-full sm:w-3/4 lg:w-[600px] mx-auto border py-1 pr-1 pl-4 rounded-md text-black bg-gray-100/90">
                        <div className="flex justify-between">
                            <input
                                className={`bg-transparent w-auto sm:w-[400px] border-transparent focus:outline-0 focus:border-transparent focus:ring-0 ${pop.className}`}
                                type="text"
                                placeholder="Subscribe with Email"
                            />
                        </div>
                        <div className="-ml-4 xs:ml-0">
                            <button className="rounded-md">
                                <BiMailSend
                                    className="icon"
                                    style={{ color: '#fff' }}
                                    size={22}
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <PopularTrip />
            <BestCharter />
            <About />
            <CallAction />
            <Destination />
            <Blog />
            <Footer />
        </>
    );
}
