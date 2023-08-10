'use client';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BsTags } from 'react-icons/bs';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import dataBlog from '../../../component/data/blog';
import Navbar from '../../../component/navbar';
import Footer from '../../../component/footer';

export default function Blog() {
    const params = useParams();
    const slug = params.slug;
    const page = dataBlog.map((e) => e.slug).indexOf(slug);
    return (
        <>
            <article>
                {dataBlog
                    .filter((content) => slug === content.slug)
                    .map((content) => {
                        return (
                            <div key={content.slug}>
                                <div className="relative">
                                    <Navbar />
                                    <div className="w-full h-20 bg-slate-900/50 absolute"></div>
                                    <img
                                        src={content.banner}
                                        className="w-full"
                                        alt="#"
                                    />
                                    <h2 className="absolute left-0 right-0 mx-0 md:mx-56 text-center top-[46%] md:top-1/2 bg-slate-100/60 py-4 md:pt-5 md:pb-6">
                                        {content.title}
                                    </h2>
                                </div>

                                <div
                                    className="pt-14 pb-10 px-5 md:px-20 text-justify"
                                    dangerouslySetInnerHTML={{
                                        __html: content.para,
                                    }}></div>

                                <div className="flex gap-2 pb-14 px-5 md:px-20">
                                    <BsTags size={20} />
                                    <p className="text-sm">{content.tag}</p>
                                </div>
                            </div>
                        );
                    })}
                <div className="flex justify-center pb-20 pt-10">
                    <div className="flex items-center flex-col md:flex-row gap-10">
                        {dataBlog.slice(page - 1, page).map((prev) => {
                            return (
                                <Link
                                    onClick={() => {
                                        window.scrollTo({ top: 0 });
                                    }}
                                    href={`/${prev.slug}`}
                                    key={prev.slug}>
                                    <div className="flex items-center max-w-xs gap-4">
                                        <BiLeftArrowAlt
                                            size={25}
                                            className="w-16"
                                        />
                                        <p>{prev.title}</p>
                                    </div>
                                </Link>
                            );
                        })}

                        <Link
                            href="/blog"
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}>
                            <div>
                                <button>View All Blogs</button>
                            </div>
                        </Link>

                        {dataBlog.slice(page + 1, page + 2).map((next) => {
                            return (
                                <Link
                                    onClick={() => {
                                        window.scrollTo({ top: 0 });
                                    }}
                                    href={`/${next.slug}`}
                                    key={next.slug}>
                                    <div className="flex items-center max-w-xs gap-4">
                                        <p className="text-right">{next.title}</p>
                                        <BiRightArrowAlt
                                            size={25}
                                            className="w-16"
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
}
