'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BsClockHistory, BsCalendarWeek } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';
import dataBoat from '../../component/data/boat';
import PhinisiCharter from '../../component/trip/PhinisiCharter';
import CallAction from '../../component/callaction';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';

export default function Boat() {
    const params = useParams();
    const url = params.slug;

    return (
        <>
            {dataBoat
                .filter((content) => url === content.url)
                .map((content) => {
                    return (
                        <div key={content.url}>
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
                                className="pt-14 px-5 md:px-20 text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: content.para,
                                }}></div>

                            <a
                                href="https://wa.me/6281335672442"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    className="mx-auto my-5"
                                    src="https://transwatranslator.com/wp-content/uploads/2022/03/button-whatsapp.png"
                                    alt="Journey Labuan Bajo Whatsapp Button"
                                />
                            </a>

                            <div className="px-5 md:px-20 text-justify">
                                <p>
                                    Destinasi Nusa Tenggara Timur memiliki keindahan alam yang begitu menakjubkan untuk Anda
                                    datangi, salah satu obyek wisata yang populer di provinsi ini adalah Taman Nasional
                                    Komodo yang terletak tepatnya di kota bernama Labuan Bajo, Manggarai Barat, Flores, NTT
                                    Indonesia.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Sebuah kota kecil yang hiruk pikuk penduduknya banyak berprofesi sebagai nelayan. Kota
                                    ini merupakan pintu masuk bagi Anda yang ingin menikmati salah satu surga destinasi
                                    wisata bahari terbaik di Indonesia.
                                </p>
                                <p>&nbsp;</p>

                                {(() => {
                                    if (
                                        (url === 'phinisi-standard-charter') |
                                        'phinisi-deluxe-charter' |
                                        'phinisi-superior-charter' |
                                        'phinisi-luxury-charter'
                                    ) {
                                        return <PhinisiCharter />;
                                    }
                                })()}

                                <p>&nbsp;</p>
                                <strong>Kenapa Harus Sewa Kapal Labuan Bajo ?</strong>
                                <p>&nbsp;</p>
                                <p>
                                    Ada banyak alasan mengapa para wisatawan lebih memilih untuk sewa kapal di Labuan Bajo
                                    sendiri dibandingkan menggunakan Kapal Sharing Trip Labuan Bajo dengan peserta umum yang
                                    membawa banyak orang. Berikut alasananya:
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>&gt; Sewa Kapal Opsi Paling Tepat untuk Wisata Rombongan</strong>
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Umumnya, para wisatawan yang berangkat berwisata bersama teman-teman, keluarga besar
                                    maupun kolega lebih memilih&nbsp;<strong>sewa kapal di Labuan Bajo&nbsp;</strong>
                                    dibandingkan menggunakan opsi Sharing kapal.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Hal ini karena dengan sewa kapal di labuan bajo, anda dan rombongan dapat menikmati
                                    seluruh fasilitas kapal tanpa sharing dengan orang lain. Semua Fasilitas untuk anda dan
                                    rombongan. Sehingga Trip private Sailing Komodo live on Board bisa maksimal anda nikmati
                                    bersama teman-teman, keluarga besar maupun kolega anda.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>&gt; Bebas Menentukan Rencana Perjalanan</strong>
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Jika Anda berwisata menggunakan opsi sewa kapal open trip labuan bajo bersama tamu-tamu
                                    lainnya, maka anda hanya dapat mengikuti itinerary yang sudah dibuat oleh perusahaan tour
                                    and travel. Dengan begitu, anda tidak bisa bebas berlama-lama dan memilih ke pulau mana
                                    saja anda dan rombongan ingin prioritaskan terlebih dahulu.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Sementara jika Anda memilih private boat sewa kapal di Labuan Bajo, Anda dapat menentukan
                                    mau pergi ke pulau mana terlebih dahulu. Serta berapa lama ingin menghabiskan waktu di
                                    satu destinasi wisata. Anda bisa dengan bebas memutuskan jadwal perjalanan ke destinasi
                                    wisata yang disukai.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>&gt; Lebih Hemat</strong>
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Poin yang satu ini mungkin sering tidak disadari banyak orang. Banyak dari wisatawan yang
                                    ragu-ragu memilih opsi sewa kapal di labuan bajo, karena berpikir bahwa harganya terlalu
                                    mahal. Padahal, jika dihitung dengan teliti,&nbsp;
                                    <strong>harga sewa kapal di Labuan Bajo&nbsp;</strong>per orang justru lebih disesuaikan
                                    dengan jumlah peserta beserta fasilitas dan jenis kapal.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Oleh karena itu sebaiknya pilih kapal dengan kapasitas maksimal dari jumlah rombongan
                                    yang liburan bersama Anda.
                                </p>

                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <strong>Pengalaman Sewa Kapal Phinisi Labuan Bajo</strong>
                                <p>&nbsp;</p>
                                <p>
                                    1. Mengelilingi dan menikmati keindahan menakjubkan yang tidak terlupakan seumur hidup.
                                </p>
                                <p>2. Trekking mengexplore perbukitaan Pulau Padar.</p>
                                <p>3. Melihat dari dekat habitat Komodo Dragon.</p>
                                <p>4. Snorkeling menikmati pemandangan bawah laut Taman Nasional Komodo.</p>
                                <p>5. Berenang bersama Ikan Pari Khas Indonesia Timur di Manta Point.</p>
                                <p>6. Menginjakan kaki di Pasir Putih Taka Makassar dengan ombak laut yang landai</p>
                                <p>
                                    7. Berjemur dibawah sinar matahari yang hangat di bibir pantai dengan pasir merah mudanya
                                </p>
                                <p>8. menikmati Jutaan kelelawar melintas tepat di atas kapal di Pulau Kalong</p>
                                <p>9. Nikmati sensasi Live On Board Sewa Kapal Labuan Bajo</p>
                                <p>10. Berburu Foto instagenic dengan pemandangan yang memukau</p>
                                <p>&nbsp;</p>

                                <p>
                                    Bagaimana? anda penasaran dengan destinasi wisata unggulan yang di tawarkan Sewa Kapal
                                    Labuan Bajo, rasanya sudah tidak sabar menunggu musim liburan berikutnya. Keindahan
                                    tempat-tempat wisata di Labuan Bajo Manggarai Barat Flores Nusa Tenggara Timur memang
                                    layak untuk dinikmati.
                                </p>
                                <p>&nbsp;</p>

                                <p>
                                    Selamat berlibur, ya! kami tunggu kedatangan anda di sini, untuk berlibur bersama tim
                                    kami <strong>Journey Labuan Bajo</strong> operator sewa kapal Labuan Bajo terbaik dan
                                    terpercaya.
                                </p>
                            </div>
                        </div>
                    );
                })}
            <CallAction />
            <div className="w-full flex justify-center mb-10">
                <h2>Pilihan Kapal Lain yang Mungkin Anda Minati</h2>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-10 items-start justify-center mt-2 mb-20">
                {dataBoat.map((content) => {
                    return (
                        <div
                            className={`w-full sm:w-1/2 lg:w-[30%] shadow-lg ${url === content.url ? 'hidden' : 'block'}`}
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
                                    href={`/${content.url}`}
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
            <Footer />
        </>
    );
}
