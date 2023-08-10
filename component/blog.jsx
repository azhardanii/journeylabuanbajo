'use client';

import Link from 'next/link';
import dataBlog from './data/blog';

export default function Blog() {
    return (
        <div className="max-w-[1240px] my-32 mx-auto">
            <div className="flex flex-col px-8 pb-3 items-center text-center">
                <h1>Our Recent Blogs</h1>
                <span className="inline-block mt-2 md:mt-0 md:mr-[17rem] mb-10 w-[5.5rem] h-1 bg-gradient-to-r from-[#0f75bc] to-[#154b9a]"></span>
                <p className="py-3 -mt-10">Provide any information Labuan Bajo and much more about traveling</p>
            </div>

            <div className="flex lg:hidden w-full flex-wrap gap-3 items-start justify-center mt-2">
                {dataBlog
                    .slice(3, 7)
                    .reverse()
                    .map((content) => {
                        return (
                            <div
                                className="w-[46%] lg:w-[30%] shadow-lg"
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
                                            .substring(0, 80)
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
                                        href={content.slug}
                                        onClick={() => {
                                            window.scrollTo({ top: 0 });
                                        }}>
                                        <button className="w-full">Read More Article</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className="hidden lg:flex w-full flex-wrap gap-10 items-start justify-center mt-2">
                {dataBlog
                    .slice(4, 7)
                    .reverse()
                    .map((content) => {
                        return (
                            <div
                                className="w-[46%] lg:w-[30%] shadow-lg"
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
                                        href={content.slug}
                                        onClick={() => {
                                            window.scrollTo({ top: 0 });
                                        }}>
                                        <button className="w-full">Read More Article</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <Link
                href="/blog"
                className="flex justify-center mt-16"
                onClick={() => {
                    window.scrollTo({ top: 0 });
                }}>
                <button className="px-10">View All Blogs</button>
            </Link>
        </div>
    );
}
