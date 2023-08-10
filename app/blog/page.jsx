'use client';

import Link from 'next/link';
import dataBlog from '../../component/data/blog';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';

export default function BlogList() {
    return (
        <>
            <div className="w-full h-20 bg-slate-900/60 relative">
                <Navbar />
            </div>
            <div className="max-w-[1240px] px-8 py-32 mx-auto">
                <div className="flex flex-col pb-3 items-center text-center">
                    <h1>Journey Labuan Bajo Blogs</h1>
                    <span className="inline-block mt-2 md:mt-0 md:mr-[27.5rem] mb-10 w-24 h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                    <p className="py-3 -mt-10">Provide any information Labuan Bajo and much more about traveling</p>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap gap-10 items-start justify-center mt-2">
                    {dataBlog
                        .map((content) => {
                            return (
                                <div
                                    className="w-full sm:w-1/2 lg:w-[30%] shadow-lg"
                                    key={content.slug}>
                                    <div
                                        className="w-full h-56 bg-center bg-no-repeat bg-cover"
                                        style={{
                                            backgroundImage: `url(${content.banner})`,
                                        }}></div>
                                    <div className="p-5 flex flex-col gap-4">
                                        <h3>{content.title}</h3>
                                        <p>
                                            {content.para
                                                .substring(0, 150)
                                                .replaceAll('<p>', ' ')
                                                .replaceAll('</p>', ' ')
                                                .replaceAll('<strong>', ' ')
                                                .replaceAll('</strong>', ' ')
                                                .replaceAll('<em>', ' ')
                                                .replaceAll('</em>', ' ')
                                                .replaceAll('&nbsp;', ' ')}
                                            ...
                                        </p>
                                        <Link
                                            href={`blog/${content.slug}`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0 });
                                            }}>
                                            <button className="w-full">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                        .reverse()}
                </div>
            </div>
            <Footer />
        </>
    );
}
