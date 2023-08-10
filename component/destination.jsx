import { BsStarFill, BsStarHalf } from 'react-icons/bs';

export default function Destination() {
    return (
        <div className="max-w-[1240px] mx-auto my-32 px-8 text-center">
            <h1>The Top of Destinations</h1>
            <span className="inline-block mt-2 md:mt-0 md:mr-[23.5rem] mb-10 w-20 h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
            <p className="py-3 -mt-10">The Best Place with Awesome Landscape</p>
            <div className="grid grid-rows-none md:grid-cols-7 pt-6 gap-4">
                <div className="relative w-full col-span-2 md:col-span-3 row-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/cuncawulang.webp"
                        alt="/"
                    />
                    <div className="flex absolute right-1 sm:right-4 bottom-8 sm:bottom-[53px] text-yellow-300 gap-1">
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                    </div>
                    <p className="right-0 sm:right-4 bottom-0 bg-slate-400/70 px-2 sm:bottom-4 text-lg sm:text-2xl font-bold text-white absolute">
                        Cunca Wulang Waterfall
                    </p>
                </div>
                <div className="relative w-full col-span-2 md:col-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/goarangko.webp"
                        alt="/"
                    />
                    <div className="flex absolute right-1 sm:right-2 bottom-8 sm:bottom-10 text-yellow-300 gap-1">
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                    </div>
                    <p className="right-0 sm:right-2 bottom-0 bg-slate-400/70 px-2 sm:bottom-2 text-lg font-bold text-white absolute">
                        Rangko Cave
                    </p>
                </div>
                <div className="relative w-full col-span-2 md:col-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://2.bp.blogspot.com/-srZTDUsphQ0/XJDbNKZJTMI/AAAAAAAAzzM/E5qVq4Rkv-wfbL_pBC89j3zGhSekJGVdgCLcBGAs/s1600/Waerebo.jpg"
                        alt="/"
                    />
                    <div className="flex absolute right-1 sm:right-2 bottom-8 sm:bottom-10 text-yellow-300 gap-1">
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                    </div>
                    <p className="right-0 sm:right-2 bottom-0 bg-slate-400/70 px-2 sm:bottom-2 text-lg font-bold text-white absolute">
                        Wae Rebo Village
                    </p>
                </div>
                <div className="relative w-full col-span-2 md:col-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://phinemo.com/wp-content/uploads/2018/10/1-187-e1539239061889.jpg"
                        alt="/"
                    />
                    <div className="flex absolute right-1 sm:right-2 bottom-8 sm:bottom-10 text-yellow-300 gap-1">
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                    </div>
                    <p className="right-0 sm:right-2 bottom-0 bg-slate-400/70 px-2 sm:bottom-2 text-lg font-bold text-white absolute">
                        Pink Beach
                    </p>
                </div>
                <div className="relative w-full col-span-2 md:col-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://assets-a2.kompasiana.com/items/album/2020/10/23/74632437-2674174102627982-1847068982205480960-o-5f92d96a8ede48263a708a43.jpg?t=o&v=770"
                        alt="/"
                    />
                    <div className="flex absolute right-1 sm:right-2 bottom-8 sm:bottom-10 text-yellow-300 gap-1">
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarFill size={17} />
                        <BsStarHalf size={17} />
                    </div>
                    <p className="right-0 sm:right-2 bottom-0 bg-slate-400/70 px-2 sm:bottom-2 text-lg font-bold text-white absolute">
                        Mirror Stone Cave
                    </p>
                </div>
            </div>
        </div>
    );
}
