import React, { useState } from 'react';
import { TiMediaPlay } from 'react-icons/ti';
// import { BsChevronDown } from 'react-icons/bs';
import { FcOk, FcCancel } from 'react-icons/fc';
// import { Accordion, AccordionItem as AccItem } from '@szhsin/react-accordion';

// const AccordionItem = ({ header, ...rest }) => (
//     <AccItem
//         {...rest}
//         header={
//             <>
//                 {header}
//                 <BsChevronDown className="chevron" />
//             </>
//         }
//         className="border-t border-[#ccc]"
//         buttonProps={{
//             className: ({ isEnter }) =>
//                 `${'cursor-pointer flex items-center w-full m-0 p-4 text-base font-medium bg-transparent border-none text-[#0f75bc] text-left'} ${
//                     isEnter && 'itemAccExpanded'
//                 }`,
//         }}
//         contentProps={{ className: 'transition-all duration-300 ease-in-out' }}
//         panelProps={{ className: 'pt-0 pb-4 px-4' }}
//     />
// );

const SailingKomodoNationalPark = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (tabIndex) => setActiveIndex(tabIndex);
    const checkActive = (tabIndex, className) => (activeIndex === tabIndex ? className : '');

    return (
        <>
            {/* Tab Header */}
            <div className="flex justify-center text-sm md:text-base gap-5 px-5 pb-8 pt-0 border-b border-[#ccc]">
                <button
                    className={`${checkActive(1, 'font-medium')} px-3 md:px-5`}
                    onClick={() => handleClick(1)}>
                    Overview
                </button>
                <button
                    className={`${checkActive(2, 'font-medium')} px-3 md:px-5`}
                    onClick={() => handleClick(2)}>
                    Itinerary
                </button>
                <button
                    className={`${checkActive(3, 'font-medium')} px-3 md:px-5`}
                    onClick={() => handleClick(3)}>
                    Facility
                </button>
            </div>

            {/* Tab Content */}
            <div className="panels p-5">
                {/* Overview Panel */}
                <div className={`panel ${checkActive(1, 'active')}`}>
                    <div className="text-justify flex flex-col gap-5">
                        <b className="text-lg">Highlight</b>
                        {/* <p>
                            Sailing Komodo Living On Boat dan Explore Labuan Bajo 4 Hari 3 Malam (4D3N), Labuan Bajo tidak
                            hanya memiliki tempat exotis untuk dikunjungi yang itu-itu saja, selain destinasi favorit
                            utamanya yaitu Taman Nasional Komodo, Pulau Padar, Pink Beach, Pulau Sebayur dan lain-lain, di
                            Labuan Bajo sendiri ada beberapa destinasi tambahan yang tidak kalah exotis dan akan membuatmu
                            terkagum-kagum.
                        </p>
                        <p>
                            JourneyLabuanBajo merekomendasikan kamu mengunjungi Goa Batu Cermin dan Bukit Cinta. selagi di
                            Labuan Bajo tidak ada ruginya kalo kamu mengeluarkan hanya sedikit buget agar bisa menambah
                            destinasi tujuan wisata kamu.
                        </p>
                        <p>
                            Pemesanan dapat langsung kamu lakukan melalui web ini atau bisa menghubungi customer service kami
                            jika mengalami kendala / kesulitan dalam pemesanan paket wisata.
                        </p> */}
                        <p>
                            Sailing Komodo 3 hari 2 malam kapal Phinisi merupakan rangkaian kegiatan mengelilingi Kepulauan
                            Komodo dengan berlayar dengan menginap di kapal Phinisi atau disebut juga Live on Board.
                        </p>
                        <p>
                            Taman Nasional Komodo mencakup 3 pulau utama, yaitu Pulau Komodo, Pulau Rinca, Pulau Padar, dan
                            banyak pulau-pulau kecil lain.
                        </p>
                        <p>
                            Setidaknya 2500 ekor komodo hidup di wilayah ini. Selain komodo, di kawasan ini kita juga dapat
                            menemukan kuda, banteng liar, rusa, babi hutan jantan, ular, kera, dan berbagai jenis burung.
                            Perairan Komodo adalah salah satu tempat menyelam terbaik di dunia karena memiliki pemandangan
                            bawah laut yang memukau. Karena letak pulau-pulaunya yang berjauhan.
                        </p>
                        <p>
                            Trip Live on Board ini memungkinkan Anda untuk mengeksplor pulau-pulau tersebut melalui open trip
                            bersama teman dan keluarga, maupun honeymoon trip dengan pasangan anda.
                        </p>

                        {/* Accordion FAQ */}
                        {/* <b className="pt-5 text-lg">FAQs</b>
                        <Accordion
                            transition
                            transitionTimeout={200}>
                            <AccordionItem
                                header="Objek Wisata Apa yang Ada di Labuan Bajo?"
                                initialEntered>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2 ml-[5px]">
                                        <p>1.</p>
                                        <p>Pulau Kelor</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>2.</p>
                                        <p>Pulau Rinca</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>3.</p>
                                        <p>Pulau Kalong</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>4.</p>
                                        <p>Pulau Padar</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>5.</p>
                                        <p>Pulau Siaba</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>6.</p>
                                        <p>Pulau Sebayur</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>7.</p>
                                        <p>Pink Kanawa</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>8.</p>
                                        <p>Manta Point</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>9.</p>
                                        <p>Taka Makassar</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>10.</p>
                                        <p>Pink Beach</p>
                                    </div>
                                </div>
                            </AccordionItem>

                            <AccordionItem header="Berapa Harga Tiket Masuk ke Labuan Bajo?">
                                Taman Nasional Komodo (TNK). Pemerintah mencanangkannya sebagai destinasi "pariwisata
                                eksklusif", dengan menaikkan harga tiket masuk dari Rp 150.000/orang menjadi Rp
                                3.750.000/orang, dan membatasi kuota kunjungan menjadi 200.000 orang per tahun.
                            </AccordionItem>

                            <AccordionItem header="Adakah Pilihan Durasi Paket Sailing Labuan Bajo?">
                                Tentu saja sudah kami siapkan, Berikut adalah pilihan durasi yang tersedia :
                                <div className="flex flex-col gap-3 pt-3">
                                    <div className="flex gap-2 ml-[5px]">
                                        <p>1.</p>
                                        <p>One Day Tour</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>2.</p>
                                        <p>2 Hari 1 Malam (2D1N)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>3.</p>
                                        <p>3 Hari 2 Malam (3D2N)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>4.</p>
                                        <p>4 Hari 3 Malam (4D3N)</p>
                                    </div>
                                </div>
                            </AccordionItem>

                            <AccordionItem header="Berapa Lama Perjalanan dari Labuan Bajo ke Pulau Padar?">
                                Dari Labuan Bajo, Pulau Padar bisa ditempuh dalam 3 jam jika memakai kapal 2 silinder, kalau
                                dengan kapal 6 silinder atau lebih tinggi, atau speedboat bisa lebih cepat lagi. Disarankan
                                berangkat pagi-pagi supaya belum terlalu panas udaranya jika ingin trekking menuju Puncak
                                Padar.
                            </AccordionItem>

                            <AccordionItem header="Berapa Lama Perjalanan dari Labuan Bajo ke Pulau Kelor?">
                                Pulau Kelor ini terletak sekitar 8 km dari Pelabuhan Labuan Bajo yang bisa ditempuh dengan
                                perjalanan laut selama kurang lebih 1 jam.
                            </AccordionItem>

                            <AccordionItem header="Berapa Lama Tracking di Pulau Kelor?">
                                Pendakian memakan waktu sekitar 30 menit tanpa bantuan tangga seperti di Pulau Padar, jalur
                                tracking dengan kemiringan 45 derajat ini menjadi pengalaman yang tidak akan kamu lupakan
                                deh! Semua lelah seolah terbayarkan saat sampai ke atas, pemandangan pesisir pantai dan laut
                                yang breathtaking ini bikin takjub!
                            </AccordionItem>

                            <AccordionItem header="Berapa Lama Perjalanan dari Pulau Komodo ke Pink Beach?">
                                Pantai Pink adalah pantai paling indah yang ada di pulau komodo. Dengan menempuh jarak
                                sekirat 45 menit menggunakan kapal dari Manta point, akhirnya rombongan saya dan teman-teman
                                sampai di Pantai Pink.
                            </AccordionItem>

                            <AccordionItem header="Berapa Lama Perjalanan dari Pulau Bali ke Manta Point?">
                                Manta Point berada di Pulau Komodo, Kabupaten Manggarai Barat, Nusa Tenggara Timur. Wisata
                                ini berada di Loh Liang, Pulau Flores, sesudah Pink Beach. Dari Pulau Bali, wisata ini dapat
                                ditempuh dengan waktu 4-6 jam menggunakan kapal ferry jarak jauh.
                            </AccordionItem>
                        </Accordion> */}
                    </div>
                </div>

                {/* Itinerary Panel */}
                <div className={`panel ${checkActive(2, 'active')}`}>
                    <div className="flex flex-col gap-5">
                        {/* <b className="text-lg">Travel Schedule</b> */}
                        <div className="flex flex-col gap-2">
                            <b className="text-[15px]">Day 1 / TRANSFER IN - HALF DAY SAILING KOMODO</b>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Labuan Bajo (start)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pulau Kelor (tracking)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pulau Manjarite (snorkeling)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pulau Kalong (enjoy the sunset)</p>
                            </div>

                            <b className="text-[15px] pt-4">Day 2 / FULL DAY SAILING KOMODO</b>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pulau Padar (Trekking)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pink Beach (enjoy on the beach)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pulau Komodo (meet with Komodo dragon)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Taka Makassar (snorkeling)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Manta Point (snorkeling)</p>
                            </div>

                            <b className="text-[15px] pt-4">Day 3 / HALF DAY SAILING KOMODO - TRANSFER OUT</b>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pulau Kanawa (Snorkeling)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Labuan bajo (end point)</p>
                            </div>

                            <b className="pt-4">Start Trip : 10.00 – 11.00 WITA</b>
                            <b>End Trip : 12.00 – 13.00 WITA</b>
                            <p className="text-sm pt-4">
                                *Itinerary dapat berubah jika terjadi FORCE MAJEURE. Dan ini bersifat tentatif atau dapat
                                berubah sewaktu-waktu (Itinerary can be change due to the weather)
                            </p>
                        </div>

                        {/* <b className="pt-5 text-lg">Detail Destination</b>
                        <Accordion
                            transition
                            transitionTimeout={200}>
                            <AccordionItem header="Pulau Kelor">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/pulaukelor.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pulau Kelor"
                                    />
                                    <p>
                                        Pulau Kelor adalah pulau kecil tidak berpenghuni yang terkenal dengan segudang
                                        keindahan bercirikan pasir putih dan deretan bukit hijau nan menawan. Aktivitas yang
                                        biasa dilakukan adalah trekking. Bukit di tengah pulau cukup menantang untuk
                                        trekking, terlihat pendek tapi membutuhkan upaya yang cukup untuk bisa mencapai
                                        puncak. Hanya dengan waktu tempuh sekitar 30 menit, jika menggunakan perahu, atau
                                        sekitar 15 menit, jika menggunakan speedboat. Dengan posisi bibir pantai yang landai,
                                        pasir putihnya yang sangat menggoda, adanya bukit terjal, membuat siapa saja tertarik
                                        dengan pemandangan tersebut. Anda yang suka tantangan adrenalin, dapat mencoba
                                        mendaki bukit dengan kemiringan sekitar 45 derajat lebih.
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Pulau Rinca">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/pulaurinca.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pulau Rinca"
                                    />
                                    <p>
                                        Pulau Rinca merupakan kawasan Taman Nasional Komodo yang dikelola oleh Pemerintah
                                        Pusat. Pulau Rinca berada di sebelah barat Pulau Flores, yang dipisahkan oleh Selat
                                        Molo. Pulau ini juga merupakan bagian dari Situs Warisan Dunia UNESCO, karena
                                        merupakan kawasan Taman Nasional Komodo bersama dengan Pulau Komodo, Pulau Padar dan
                                        Gili Motang.
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Pulau Padar">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/pulaupadar.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pulau Padar"
                                    />
                                    <p>
                                        Pulau Padar adalah pulau ketiga terbesar di kawasan Taman Nasional Komodo. Pulau
                                        Padar tidak dihuni oleh komodo. Di Pulau Padar kamu dapat menaiki bukit untuk
                                        menikmati keindahan panorama dari atas. Biru laut dan jajaran pulau di sekitarnya
                                        akan menghipnotis pengunjung. Meskipun trekking menuju bukit tertinggi akan terasa
                                        sangat melelahkan, namun pengunjung akan disuguhkan panorama perbukitan dan
                                        pemandangan yang sangat cantik dan mengabadikan momen akan menjadi kegiatan yang tak
                                        ada bosannya selama perjalanan trekking.
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Pulau Komodo">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/pulaukomodo.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pulau Komodo"
                                    />
                                    <p>
                                        Pulau Komodo adalah salah satu dari 7 Keajaiban Dunia. Salah satu destinasi utama
                                        jika kamu ke Labuan Bajo. Pulau ini termasuk salah satu kawasan Taman Nasional Komodo
                                        yang dikelola oleh Pemerintah Pusat. Di Pulau Komodo, terdapat sekitar 1300 ekor
                                        komodo yang terus berkembang biak. Komodo adalah species kadal terbesar di dunia,
                                        dengan panjang rata-rata 2-3 meter, dan berat tubuh sedikitnya 90Kg. Kamu bisa
                                        berkeliling pulau ini untuk melihat para komodo. Tapi tenang akan ada Ranger yang
                                        memimpin perjalanan kamu agar tetap aman!
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Pink Beach">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/sailingknp3.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pink Beach"
                                    />
                                    <p>
                                        Pink Beach Labuan Bajo adalah satu pantai dengan pasir paling pink dari 7 pantai
                                        lainnya yang ada di dunia. Kamu bisa berenang dengan nyaman di pantai ini ataupun
                                        bermain di pinggirannya. Jangan lupa untuk mengabadikan momen bahagia kamu disana
                                        dengan berfoto karena pantai ini sangat indah dan unik!
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Gili Lawa Darat">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/gililawadarat.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Gili Lawa Darat"
                                    />
                                    <p>
                                        Pesona alam Gili Lawa Darat sangat indah, benar-benar mempesona. Sayang banget jika
                                        sudah sampai di Pulau Komodo, tapi tidak sekalian berkunjung ke Pulau Gili Laba. Dari
                                        atas bukit kamu bisa melihat indahnya hamparan lautan Flores yang biru. Di pinggir
                                        pantai juga ada hamparan pasir putih membentang luas. Apabila datang pada musim
                                        penghujan, bukit akan ditumbuhi rumput hijau. Namun pada saat musim kemarau, rumput
                                        di area bukit sudah mengering sehingga berwarna cokelat.
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Manta Point">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/mantapoint.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pulau Padar"
                                    />
                                    <p>
                                        Manta Point adalah salah satu spot snorkeling dan diving terbaik di Labuan Bajo! Spot
                                        ini menawarkan pengalaman snorkeling yang menakjubkan dengan lanskap bawah laut yang
                                        alami. Wisata bawah laut ini juga memungkinkan pengunjung bertemu satwa langka yang
                                        hanya ada di sini, yaitu Pari Manta. Biasanya kamu juga akan bisa bertemu dengan
                                        koloni ubur-ubur yang tak kalah cantik. Siap-siap terkesima dengan kecantikan mereka!
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Pulau Kalong">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/pulaukalong.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pulau Kalong"
                                    />
                                    <p>
                                        Pulau Kalong berada tidak jauh dari Taman Nasional Komodo. Keberadaanya dianggap
                                        sebagai salah satu destinasi wisata dengan kekayaan alam terbaik di Labuan Bajo.
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Pulau Kanawa">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/pulaukanawa.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Pulau Kanawa"
                                    />
                                    <p>
                                        Pulau Kanawa merupakan sebuah pulau kecil yang terletak di perairan Taman Nasional
                                        Komodo. Berbagai macam terumbu karang mengelilingi pulau ini, ditambah pasir putih
                                        dengan air laut yang bening menjadi daya tarik. Pulau Kanawa hampir seperti private
                                        island (pulau pribadi) yang begitu mempesona. Pulau Kanawa memiliki dermaga sendiri
                                        untuk kapal wisata yang membawa para wisatawan untuk menikmati pesona dari Pulau
                                        indah yang satu ini. Berenang dan berfoto dapat menjadi kegiatan utama di destinasi
                                        ini.
                                    </p>
                                </div>
                            </AccordionItem>
                        </Accordion> */}
                    </div>
                </div>

                {/* Facility Panel */}
                <div className={`panel ${checkActive(3, 'active')}`}>
                    <div className="flex flex-col gap-3">
                        <b>Include Facility</b>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Transport Bandara – Hotel / Meeting point (2x penjemputan)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Comfort Cabin with AC (Living On Board)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Chef & Kru Kapal</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Makanan selama perjalanan di Kapal</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Air Mineral selama tour</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Perlengkapan keamanan (Life Jacket)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Perlengkapan Snorkeling</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Kopi, Teh, dan Snack</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Local guide / Tour leader</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Dokumentasi (Drone, Gopro, Camera)</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-7">
                        <b>Exclude Facility</b>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <FcCancel
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Keperluan Pribadi</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcCancel
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Transportasi dari kota asal ke meeting point (Flight tickets)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcCancel
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Untuk WNA, Tiket masuk Taman Nasional Komodo (IDR 500.000/pax)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SailingKomodoNationalPark;
