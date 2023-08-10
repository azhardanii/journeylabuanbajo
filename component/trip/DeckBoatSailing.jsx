import React, { useState } from 'react';
// import { TiMediaPlay } from 'react-icons/ti';
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

const DeckBoatSailing = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (tabIndex) => setActiveIndex(tabIndex);
    const checkActive = (tabIndex, className) => (activeIndex === tabIndex ? className : '');

    return (
        <>
            {/* Tab Header */}
            <div className="flex justify-center text-sm md:text-base gap-5 px-5 pb-8 pt-2 border-b border-[#ccc]">
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
                            Berlayar di sekitar Kepulauan Komodo dengan kapal dek terbuka dalam perjalanan sehari ke Taman
                            Nasional Komodo yang terdiri dari 3 pulau utama yaitu Komodo, Rinca, Padar dan masih banyak pulau
                            kecil lainnya. Setidaknya 2.500 komodo tinggal di daerah tersebut. Selain komodo, di kawasan ini
                            kita juga bisa menemukan kuda, banteng, rusa, babi hutan, ular, monyet, dan berbagai jenis
                            burung. Perairan Komodo adalah salah satu tempat menyelam terbaik di dunia karena pemandangan
                            bawah lautnya yang menakjubkan. Karena jarak antar pulaunya yang sangat jauh.
                        </p>
                        <p>
                            Full Day Trip Sailing Komodo Labuan Bajo murah ini menggunakan kapal open deck kayu dengan sistem
                            tour sharing, jadwal keberangkatan harian dan tidak ada minimal kuota. Selain terjangkau, full
                            day trip ini juga memudahkan para pelancong dengan liburan singkat menjelajahi pulau-pulau di
                            Taman Nasional Komodo Nusa Tenggara Timur.
                        </p>
                        <p>
                            Dimulai pada pagi hari tepat pukul 05:00-05:30 WITA, anda akan bertemu dan disambut oleh tim kami
                            yang bertugas di Meeting Point Dermaga Pelabuhan Bajo, untuk memulai persiapan rangkaian Full Day
                            Tour Labuan Bajo Sailing Komodo. Setelah perkenalan singkat, kami persilahkan menaiki wooden boat
                            Sailing Komodo yang sudah kami persiapkan.
                        </p>
                        <p>
                            Perjalanan menelusuri Taman Nasional Komodo, dimulai dengan mengunjungi pulau ikonik yaitu Pulau
                            Padar. Sesampainya di pulau ini, dengan ditemani dan dipandu local guide kami, anda kami ajak
                            trekking atau berjalan kaki menuju puncak bukit Pulau Padar.
                        </p>
                        <p>
                            Rasa lelahpun terbayar ketika sampai puncak bukit padar, anda akan disambut dengan pemandangan
                            pulau ala film Jurassic park, serta berlatar pemandangan lepas pantai yang biru dengan deretan
                            jajaran bukit yang menjulang, yang tentunya menjadi pengalaman yang tak terlupakan bagi anda.
                        </p>
                        <p>
                            Setelah puas berburu foto dan menikmati keindahan Pulau Padar, kita beranjak menuju destinasi
                            wisata yang ke 2 menuju Pink Beach. Pantai yang sangat terkenal dengan warna pasir merah mudanya
                            yang masih alami, dengan ombak yang landai dengan pemandangan alami yang tak kalah menakjubkan.
                        </p>
                        <p>
                            Berjalan-jalan santai sambil bermain air dengan menikmati pemandangan pasir merah mudanya membuat
                            anda fresh dari kepenatan aktifitas setiap hari yang dilalui. Jangan lupa untuk berburu foto di
                            spot destinasi instgramable ini.
                        </p>
                        <p>
                            Setelah dari Pink Beach, anda kami ajak melanjutkan perjalanan menuju salah satu 7 Keajaiban
                            Dunia yakni Pulau Rinca untuk melihat dari dekat habitat hewan Komodo. Mungkin dibenak anda
                            bertanya, kenapa tidak mengunjungi Pulau Komodo?
                        </p>
                        <p>
                            Berikut Informasi dari kami, Pulau Komodo dan Pulau Rinca memiliki kesamaan, yaitu rumah habitat
                            alami dari hewan spesies hewan Komodo. Dikarena Pulau Komodo lebih terkenal dan familiar di
                            telinga kita, sehingga Pulau Rinca tidak begitu terkenal seperti Pulau Komodo. Namun anda jangan
                            khawatir untuk kesempatan menyaksikan langsung Hewan Komodo lebih kami sarankan melihat di Pulau
                            Rinca.
                        </p>
                        <p>
                            Alasan Kenapa melihat Komodo di Pulau Rinca? Karena Pulau Komodo lokasinya begitu luas, maka
                            alternatif melihat langsung hewan Komodo, adalah di Pulau Rinca yang luas lokasi pulaunya tidak
                            begitu luas dan anda akan dengan sangat mudah menemui kadal terbesar yang merupakan satu-satunya
                            di dunia ini.
                        </p>
                        <p>
                            Dengan ditemani oleh Ranger atau Local Tour Guide Komodo/Rinca yang biasa bertugas, anda akan
                            dipandu untuk dapat melihat dari dekat, serta mengabadikan momen foto bersama Komodo.
                        </p>
                        <p>
                            Setelah selesai mengenali habitat asli Komodo dari dekat, apabila waktu mencukupi kami ajak anda
                            beranjak melanjutkan kembali perjalanan mengarungi lautan lagi, untuk mengunjungi spot destinasi
                            wisata Pulau Kelor. Berada dipulau ini anda bisa beraktifitas melakukan kegiatan snorkeling untuk
                            melihat keindahan dunia bawah lautnya.
                        </p>
                        <p>
                            Apabila anda tidak berkenan anda bisa melakukan trekking menuju bukit di Pulau Kelor yang menjadi
                            spot fotogenic, mengabadikan momen diatas bukit dengan latar belakang pemandangan pasir putih dan
                            warna pantai biru tosca khas Taman Nasional Komodo.
                        </p>
                        <p>
                            Setelah waktu yang ditentukan selanjutnya saatnya anda kembali menuju ke Drop Point menuju
                            dermaga Pelabuhan Labuan Bajo. Paket Full Day Tour Sailing Komodo Labuan Bajo berakhir dengan
                            mengesankan bersama kami. sampai jumpa di Trip berikutnya.
                        </p> */}
                        <p>
                            Sailing Komodo 1 day trip dengan menggunakan kapal open deck mengelilingi Kepulauan Komodo. Taman
                            Nasional Komodo mencakup 3 pulau utama, yaitu Pulau Komodo, Pulau Rinca, Pulau Padar, dan banyak
                            pulau-pulau kecil lain.
                        </p>
                        <p>
                            Setidaknya 2500 ekor komodo hidup di wilayah ini. Selain komodo, di kawasan ini kita juga dapat
                            menemukan kuda, banteng liar, rusa, babi hutan jantan, ular, kera, dan berbagai jenis burung.
                            Perairan Komodo adalah salah satu tempat menyelam terbaik di dunia karena memiliki pemandangan
                            bawah laut yang memukau. Karena letak pulau-pulaunya yang berjauhan.{' '}
                        </p>
                        <p>
                            1 day trip sailing Komodo ini memungkinkan Anda untuk mengeksplor pulau-pulau tersebut melalui
                            open trip bersama teman dan keluarga, maupun honeymoon trip dengan pasangan anda.
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
                        {/* <b className="text-lg">Travel Schedule</b>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>05.00-05.30 : Penjemputan di dermaga kapal Open Deck Labuan Bajo</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>05.30-08.00 : Perjalanan menuju Pulau Padar</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>08.00-10.00 : Trekking Pulau Padar, Photo Hunting, dan menikmati pemandangan</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>10.00-11.00 : Menikmati waktu di Pink Beach</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>11.00-12.00 : Explore Pulau Komodo / Pulau Rinca melihat Komodo</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>12.00-13.00 : Visit Pink Beach (swimming & photo hunting)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>14.00-15.00 : Perjalanan menuju Pulau Kelor</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>15.00-16.00 : Trekking / Snorkeling di Pulau Kelor</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <TiMediaPlay
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>16.00-18.00 : Kembali ke Pelabuhan Labuan Bajo dan trip selesai</p>
                            </div>
                        </div>

                        <b className="pt-5 text-lg">Detail Destination</b>
                        <Accordion
                            transition
                            transitionTimeout={200}>
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
                            <AccordionItem header="Pulau Kelor">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/kelor.webp"
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
                        </Accordion> */}

                        <p>
                            <b>FULLDAY SAILING KOMODO TRIP</b> Pagi hari pukul 6 pagi, kita akan bertemu di Meeting Point
                            (Pelabuhan Labuan Bajo) untuk persiapan dan menaiki kapal yang sudah kami siapkan.
                        </p>
                        <p>
                            Perjalanan anda akan dimulai dengan mengunjungi Pulau Padar. Setelah itu kita akan beranjak
                            menuju ke Pink Beach. Hingga puas, anda akan diajak melanjutkan perjalanan menuju ke salah satu
                            dari 7 Keajaiban Dunia yakni Pulau Komodo.
                        </p>
                        <p>
                            Hingga puas berkeliling melihat dan berfoto dengan Komodo ditemani oleh Ranger (Tour Guide
                            Komodo), anda akan mengarungi lautan lagi mengunjungi untuk mengunjungi Manta Point. Disini anda
                            dapat melakukan kegiatan Snorkeling bersama Manta Ray.
                        </p>
                        <p>
                            Setelahnya, anda akan diantar kembali menuju ke Drop Point (Pelabuhan Labuan Bajo). Tour Explore
                            Kepulauan Komodo selesai dengan mengesankan bersama Journey Labuan Bajo
                        </p>
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
                                <p>Antar jemput Hotel - Meeting Point (PP)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Kapal selama 1 hari (Open Deck)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Kapten kapal dan awak</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Makan siang selama perjalanan di Kapal</p>
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
                                <p>Kopi, Teh, Buah-buahan dan Snack</p>
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
                                <p>Tipping guide & kru kapal</p>
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

export default DeckBoatSailing;
