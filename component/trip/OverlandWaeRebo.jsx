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

const OverlandWaeRebo = () => {
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
                            Wae Rebo memang indah dan mempesona, seluruh desa diselimuti kabut, Wae Rebo layak mendapat
                            julukan “Desa di Atas Awan”. Secara geografis, desa ini terletak di atas 1.200 meter di atas
                            permukaan laut (mdpl). Wae Rebo merupakan bagian dari Desa Satar Lenda, Kecamatan Satarmese,
                            Kabupaten Flores Simangale.
                        </p>
                        <p>
                            Di sini, wisatawan berkesempatan melihat dan tinggal di Mbarunya, rumah tradisional Flores yang
                            masih eksis hingga saat ini, hanya di Desa Vaerebo. Pada 2012, Mbarunya memenangkan penghargaan
                            UNESCO.
                        </p>
                        <p>
                            Pemandangan alam pegunungan yang menghijau masih sangat asri, dikelilingi kabut, terkadang
                            tertiup angin, memperlihatkan pemandangan tujuh Mbalunya yang berdiri anggun, seperti berada di
                            negeri dongeng.
                        </p>
                        <b>Asal Usul Desa Wae Rebo</b>
                        <p>
                            Masyarakat di Desa Wae Rebo ini ternyata masih memiliki garis keturunan dari Suku Minangkabau,
                            lho! Konon dulu, ada seorang asli Minangkabau bernama Empo Maro berlayar dari Pulau Sumatera
                            hingga ke Labuan bajo. Setelah hidup berpindah-pindah dari satu daerah ke daerah lain, akhirnya
                            memutuskan untuk bermukim di Desa Adat Wae Rebo.
                        </p>
                        <b>Rumah Adat</b>
                        <p>
                            Desa ini hanya memiliki 7 rumah adat berbentuk lumbung kerucut yang disebut Mbaru Niang. Inilah
                            yang menjadi ikon utama Wae Rebo. Rumah adat Mbaru Niang tersusun mengitari batu melingkar yang
                            dinamakan compang sebagai titik pusatnya. Compang merupakan pusat aktivitas warga untuk
                            mendekatkan diri dengan alam, leluhur, dan Tuhan.
                        </p>
                        <p>
                            Arsitektur Mbaru Niang mengandung filosofi dan mencerminkan kehidupan sosial masyarakat Wae Rebo.
                            Rumah tradisional ini merupakan wujud keselarasan manusia dengan alam serta merupakan cerminan
                            fisik dari kehidupan sosial Suku Manggarai. Suku Manggarai meyakini lingkaran sebagai simbol
                            keseimbangan, sehingga pola lingkaran ini diterapkan hampir di seluruh wujud fisik desa, dari
                            bentuk kampung sampai rumah-rumahnya.
                        </p>
                        <p>
                            Mbaru Niang terdiri dari 5 lantai dengan atap daun lontar dan ditutupi oleh ijuk. Setiap lantai
                            memiliki fungsinya masing-masing, seperti tempat berkumpul, menyimpan bahan makanan, beribadah,
                            dan fungsi lainnya.
                        </p>
                        <p>
                            Mbaru Niang berfungsi sebagai tempat tinggal keluarga, masing-masing Niang terdiri dari 6 – 8
                            keluarga. Terdiri dari 5 (lima) lantai, masing-masing lantainya memiliki fungsi.
                        </p>
                        <div className="flex gap-2 ml-[5px]">
                            <p>1.</p>
                            <p>
                                Lantai pertama disebut Lutur, berfungsi untuk tempat tinggal dan berkumpul keluarga. Dibagi
                                menjadi tiga bagian, ruang terluar sebagai ruang keluarga, lalu ruang-ruang yang disekat
                                dengan papan kayu sebagai kamar-kamar keluarga yang tinggal dan dapur yang terletak di tengah
                                Lutur.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>2.</p>
                            <p>Lantai dua disebut Lobo, berfungsi untuk menyimpan bahan makanan dan barang sehari-hari.</p>
                        </div>
                        <div className="flex gap-2">
                            <p>3.</p>
                            <p>Lantai ketiga disebut Lentar, gunanya untuk menyimpan benih tanaman untuk bercocok tanam.</p>
                        </div>
                        <div className="flex gap-2">
                            <p>4.</p>
                            <p>
                                Lantai empat disebut Lempa Rea berfungsi sebagai tempat menyimpan cadangan makan untuk
                                paceklik atau saat gagal panen.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>5.</p>
                            <p>
                                Lantai kelima disebut Hekang Kode, berfungsi sebagai tempat sesajian untuk leluhur masyarakat
                                desa.
                            </p>
                        </div>
                        <p>
                            Rumah ini juga mengikuti prinsip leluhur yang sangat kuat dan tidak boleh menyentuh tanah.
                            Arsitektur bangunannya juga masih memiliki unsur Minangkabau, terlihat dari Niang Dangka atau
                            atap Mbaru Niang, yakni bertanduk rangkap dua yang dijadikan satu.
                        </p>
                        <b>Kegiatan Penduduk Desa Wae Rebo</b>
                        <p>
                            Kegiatan penduduk desa Wae Rebo adalah di sektor pertanian. Mereka menanam kopi, cengkih, dan
                            umbi-umbian. Aktivitas para wanita di Desa Adat Wae Rebo, selain memasak, mengasuh anak, menenun,
                            juga membantu kaum pria di kebun.
                        </p>
                        <p>
                            Untuk memenuhi kebutuhan air bersih, masyarakat Desa Adat Wae Rebo menggunakan mata air yang
                            berasal dari pegunungan. Sumber mata air ini dinamakan sosor, yang terbagi menjadi 2, yaitu sosor
                            pria dan sosor wanita.
                        </p>
                        <b>Cara Menuju ke Desa Wae Rebo</b>
                        <p>
                            Untuk mencapai Wae Rebo, kamu harus menempuh perjalanan sekitar 6 km dari Desa Dintor ke Desa
                            Denge dengan menggunakan motor. Perjalanan dari Denge menuju Wae Rebo, kira-kira memakan waktu
                            pendakian selama 3 jam dengan menyusuri daerah terpencil yang dikelilingi hutan lebat yang belum
                            terjamah, menyebrangi sungai serta melintasi bibir jurang.
                        </p>
                        <b>Tips Sebelum ke Desa Wae Rebo</b>
                        <div className="flex gap-2 ml-[5px]">
                            <p>1.</p>
                            <p>
                                Bawa Barang Secukupnya, belum ada jalan raya atau jalur untuk kendaraan motor dan mobil
                                menuju ke Kampung Wae Rebo Sehingga akses satu-satunya adalah jalan kaki sejauh 4 jam
                                perjalanan. Bagi Wisatawan yang terbiasa mendaki mungkin membawa barang dengan jumlah banyak
                                bukan menjadi sebuah permasalahan. Tetapi bagi Wisatawan yang tidak pernah mendaki lebih baik
                                membawa barang tidak terlalu banyak atau seperlunya saja agar tidak terlalu terbebani selama
                                perjalan, apalagi jalan hanya setapak dan agak licin. Jika Anda tidak ingin capek karena
                                mendaki dengan banyak barang bawaan, Anda bisa menyewa jasa porter sebesar Rp. 300.000 untuk
                                membawa barang Anda pulang dan pergi.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>2.</p>
                            <p>
                                Membawa Senter, selama perjalanan mungkin senter dan baterai cadangan tidak terlalu penting,
                                apalagi bagi Anda yang mulai pendakian saat pagi hari atau ketika matahari terbit. Membawa
                                senter dan baterai cadangan, jika sewaktu-waktu kabut menyelimuti pegunungan sehingga
                                menyulitkan Anda melihat rute menuju Kampung Wae Rebo. Senter juga berguna ketika malam hari
                                sesampai di Kampung Wae Rebo terutama saat Pukul 22.00 karena pada pukul tersebut listrik
                                dipadamkan untuk penghematan.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>3.</p>
                            <p>
                                Pakai Sepatu Yang Nyaman, memakai sepatu sebagai pengaman kaki sangat diperlukan untuk
                                mengamankan kaki Anda agar terhindar dari segala resiko yang membahayakan. Berbeda dengan
                                Anda yang tidak suka memakai sepatu, tidak mengapa memakai sandal tetapi diutamakan sandal
                                gunung biar tidak lepas selama perjalanan.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>4.</p>
                            <p>
                                Bawa Makanan, Minuman, dan Alat Mandi, barang yang tidak boleh Anda lupa yakni membawa
                                cemilan dan minuman karena di Kampung Wae Rebo tidak ada cemilan. Bagi Anda yang suka cemilan
                                jangan lupa membawanya, jika bisa bawa dalam jumlah banyak dapat dibagikan ke Penduduk
                                sekitar yang tinggal terutama anak-anak. Persediaan air bersih juga tidak terlalu banyak
                                sehingga bawalah minuman secukupnya untuk diri dan kerabat Anda.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>5.</p>
                            <p>
                                Bawa Uang Secukupnya, jangan lupa uang tunai harus dibawa karena di Kampung ini jauh dari ATM
                                sehingga jika Anda tidak ada uang tunai maka bersiaplah untuk meminjam uang tunai ke teman
                                Anda. Perlunya membawa uang tunai ke tempat ini untuk membeli oleh–oleh khas Kampung Wae Rebo
                                serta dan membayar tempat penginapan sebesar Rp. 350.000 per orang. Harga tersebut sudah
                                termasuk makan malam dan sarapan pagi dengan suguhan awal kopi atau teh hangat dan
                                dilanjutkan dengan makan nasi, ayam, dan sayur kemudian sebagai pencuci mulut disuguhkan
                                dengan buah pisang.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>6.</p>
                            <p>
                                Jas Hujan Untuk Berjaga, saat musim kemarau mungkin tidak perlu membawa jas hujan biar tidak
                                terlalu membebani barang bawaan, tetapi saat musim hujan seperti saat ini, alangkah baiknya
                                membawa jas hujan. Agar selama perjalanan Anda lebih aman dan tidak harus berbasah-basahan
                                dengan hujan.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>7.</p>
                            <p>
                                Mulai di Pagi Hari, tidak hanya mendaki gunung dengan ketinggian lebih dari 3.000 meter dari
                                permukaan laut harus datang lebih awal tetapi menuju ke Kampung Wae Rebo juga perlu datang
                                lebih awal atau pagi hari. Untuk mendaki ke Kampung Wae Rebo dengan ketinggian 1.100 meter
                                dari permukaan laut Anda perlu datang pagi hari biar tidak ketinggalan rombongan Wisatawan
                                yang mendaki. Biasanya satu hari sebelum keberangkatan Wisatawan akan disuruh istirahat
                                terlebih dahulu agar ada tenaga untuk mendaki ke Kampung Wae Rebo dan biar Wisatawan tidak
                                ketinggalan rombongan pendakian yang lain terutama Wisatawan yang datang sendiri atau hanya
                                berdua.
                            </p>
                        </div>
                        <p>
                            Sebelum memasuki perkampungan, tamu harus singgah di pos terakhir. Di sana, perwakilan rombongan
                            diminta membunyikan kentongan sebagai tanda tamu tiba. Dari pos tersebut terlihat jelas tujuh
                            rumah adat berbentuk kerucut. Sebelum beraktivitas di kampung, perwakilan pengunjung harus
                            mengikuti upacara Wae lu’u terlebih dulu.
                        </p>
                        <p>
                            Upacara sekitar lima menit tersebut digelar di rumah utama yang dinamakan Niang Gendang. Rumah
                            adat yang paling besar itu merupakan tempat tinggal ketua adat. Maksud upacara itu untuk memohon
                            ijin dan penghormatan kepada para leluhur Wae Rebo. Dari tujuh rumah adat, hanya dua rumah yang
                            disediakan untuk menginap para tamu.
                        </p>
                        <p>
                            Tak sulit untuk jatuh cinta pada kampung ini. Pengunjung dapat merasakan keunikan budaya, adat
                            istiadat, keramahan warganya serta kearifan lokal yang masih terasa kental di kampung ini.
                        </p>
                        <p>
                            Gimana, tertarik untuk mengunjungi Wae Rebo? Sebelum berkunjung, pastikan fisik Sobat Pesona
                            dalam kondisi fit karena untuk menuju ke sana kamu harus mendaki gunung dengan jarak tempuh 3,18
                            kilometer, disarankan juga membawa peralatan mandi, jaket, dan camilan.
                        </p>

                        <b className="pt-5 text-lg">Ketentuan Trip</b>
                        <div className="flex items-center gap-1">
                            <TiMediaPlay
                                size={20}
                                className="-mt-0.5 min-w-[20px]"
                            />
                            <p>
                                Kuota minimal keberangkatan sesuai harga diatas adalah minimal 3 orang di tanggal yang sama.
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <TiMediaPlay
                                size={20}
                                className="-mt-0.5 min-w-[20px]"
                            />
                            <p>
                                Dana akan dikembalikan 100%, jika ada pembatalan dari pihak penyelenggara, terkait kondisi
                                cuaca dilapangan.
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <TiMediaPlay
                                size={20}
                                className="-mt-0.5 min-w-[20px]"
                            />
                            <p>Pelunasan dibayarkan selambat-lambatnya 1 minggu sebelum hari keberangkatan.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <TiMediaPlay
                                size={20}
                                className="-mt-0.5 min-w-[20px]"
                            />
                            <p>
                                Tidak ada pengembalian dana jika peserta batal ikut, kecuali mencari pengganti untuk tanggal
                                yang sama.
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <TiMediaPlay
                                size={20}
                                className="-mt-0.5 min-w-[20px]"
                            />
                            <p>Peserta disarankan untuk tiba sehari sebelum tanggal keberangkatan.</p>
                        </div> */}

                        <p>
                            Paket wisata labuan bajo ke wae rebo open trip trip cocok bagi anda penikmat wisata budaya.
                            Selama berlibur di Labuan Bajo, anda wajib mengunjungi Desa adat Wae Rebo yang terletak di Desa
                            Satar Lenda, Kec. Satar Mese Barat, Kabupaten Manggarai, Provinsi Nusa Tenggara Timur.
                        </p>
                        <p>
                            Dari Kota Labuan Bajo menuju Desa Adat Wae Rebo kurang lebih membutuhkan waktu sekitar 4 jam
                            perjalanan. Dalam perjalanan tersebut anda akan melintas pemandangan alam hutan alami maupun
                            pesisir pantai yang memanjakan mata anda dalam perjalanan.
                        </p>
                        <p>
                            Anda akan kami ajak mengeksplor salah satu desa tertinggi dan terindah di Indonesia ini. Berada
                            di Ketinggian 1100 MDPL dan di juluki Negeri di atas awan, daya tarik Desa Wae Rebo ada pada
                            rumah adatnya yang begitu ikonik dengan bentuk bangunan kerucut dari atap yang dibuat menggunakan
                            daun lontar dipadu dengan pegunungan yang masih alami.
                        </p>
                        <p>
                            Di Desa adat Wae Rebo anda bisa saling berinteraksi dengan warga asli, serta mempelajari budaya
                            dan kearifan lokal setempat, ditemani secangkir kopi khas wae rebo dengan senyum keramahan warga
                            lokal wae rebo membuat anda betah berlama-lama di sana.
                        </p>
                        <p>
                            Trip ke Wae Rebo ini memudahkan bagi solo traveller yang ingin mengunjungi Desa Wae Rebo dengan
                            sistem sharing trip / bergabung dengan peserta lain. Dengan paket wisata wae rebo ini anda akan
                            menemukan pengalaman yang tidak terlupakan mengunjungi Desa yang dinobatkan sebagai Desa Warisan
                            Budaya Asia-Pasifik UNESCO dan juara I untuk Kategori Daya Tarik Wisata dalam ajang Anugerah Desa
                            Wisata Indonesia (ADWI) 2021.
                        </p>
                    </div>
                </div>

                {/* Itinerary Panel */}
                <div className={`panel ${checkActive(2, 'active')}`}>
                    <div className="flex flex-col gap-5">
                        {/* <b className="text-lg">Travel Schedule</b> */}
                        <div className="flex flex-col gap-2">
                            <b className="text-[15px]">Day 1 / TRANSFER IN - TRIP WAE REBO VILLAGE</b>
                            <p>
                                Pada Pagi hari pada pukul 06.30 WITA. Anda akan di jemput tim dari Journey Labuan Bajo di
                                Meeting Point (Hotel di Wilayah Kota Labuan Bajo). Setelah bertemu dengan tim kami yang
                                sedang bertugas untuk memulai rangkaian Paket Wisata Wae Rebo 2D1N. Setelah perkenalan
                                singkat dengan tim kami, anda kami akan ajak langsung berangkat menuju ke Desa adat Wae Rebo.
                            </p>
                            <p>
                                Dalam perjalanan tersebut anda akan melintasi naik turunnya bukit dengan pemandangan hutan
                                dan pesisir pantai yang masih alami. Setibanya di Desa Denge kita akan menyempatkan
                                beristirahat sebentar.
                            </p>
                            <p>
                                Setelah itu kita melanjutkan perjalanan, sesampainya di pos 1 anda akan kami ajak trekking
                                kurang lebih selama 2 – 3 jam perjalanan untuk tiba di perkampungan Desa Adat Wae Rebo
                                ditemani oleh tim Tour Guide dan Porter kami yang ramah.
                            </p>
                            <p>
                                Setibanya di Desa Wae Rebo anda akan mengikuti prosesi ijin bermalam di kampung adat Wae Rebo
                                oleh kepala suku. Setelah Proses ijin selesai, kemudian beristirahat dan bersantai, dengan
                                minum kopi khas wae rebo serta berinteraksi dengan penduduk lokal.
                            </p>
                            <p>
                                Malam menjelang anda kami ajak Makan malam bersama, dengan menu Tradisional khas Wae Rebo dan
                                acara bebas untuk menikmati suasana malam hari di kampung adat Wae Rebo. Bila cuaca tidak
                                berkabut, anda bisa menyaksikan milky way.
                            </p>

                            <b className="text-[15px] pt-4">Day 2 / TRIP WAE REBO VILLAGE - TRANSFER OUT</b>
                            <p>
                                Pagi menjelang, kami ucapkan selamat pagi anda akan kami ajak untuk makan pagi khas Desa Wae
                                Rebo dengan menikmati minum Kopi panas pada dengan pemandangan pagi hari, kemudian anda dapat
                                hunting / berburu foto pemandangan desa dan alam ikonik wae rebo.
                            </p>
                            <p>
                                Sambil Mengabadikan foto yang instgramable anda juga bisa bercengkerama bersama penduduk
                                lokal. Hingga waktu yang ditentukan dengan kesepakatan bersama saatnya untuk meninggalkan
                                Desa Wae Rebo.
                            </p>
                            <p>
                                Kemudian kembali untuk bertolak ke Desa Denge melanjutkan kembali perjalanan menuju destinasi
                                wisata unik yaitu Spider Web Rice Field.
                            </p>
                            <p>
                                Kemudian perjalanan menuju Kampung Ujung untuk menikmati makan malam dengan khas berbagai
                                olahan aneka sea food yang memanjakan lidah anda dan selesai bersantap malam, waktunya anda
                                akan diantar kembali menuju kembali Drop Point (Hotel di wilayah Labuan Bajo). Perjalanan
                                Open Trip Labuan Bajo berakhir mengesankan dan menyenangkan bersama kami Journey Labuan Bajo.
                            </p>

                            <b className="pt-4">Start Trip : 10.00 – 11.00 WITA</b>
                            <b>End Trip : 12.00 – 13.00 WITA</b>
                            <p className="text-sm pt-4">
                                *Itinerary dapat berubah jika terjadi FORCE MAJEURE. Dan ini bersifat tentatif atau dapat
                                berubah sewaktu-waktu (Itinerary can be change due to the weather)
                            </p>

                            <div className="flex flex-col gap-3 pt-5">
                                <b>Peralatan yang Wajib Dibawa</b>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Tas / Ransel (Day Pack)</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Baju Ganti secukupnya</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Peralatan Mandi</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Kacamata</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Scraf Leher</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Kupluk</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Sarung</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Sunblock</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Senter kecil</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Kaos Kaki dan Sepatu</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Sandal Gunung</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pt-5">
                                <b>HIMBAUAN!!</b>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Gunakan pakaian yang nyaman saat trip</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>Ikuti arahan lokal guide agar tour berjalan menyenangkan</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiMediaPlay
                                            size={20}
                                            className="-mt-0.5 min-w-[20px]"
                                        />
                                        <p>
                                            Rawat lingkungan sekitar Desa Adat Wae Rebo dengan membuang sampah pada tempatnya
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <b className="pt-5 text-lg">Detail Destination</b>
                        <Accordion
                            transition
                            transitionTimeout={200}>
                            <AccordionItem header="Desa Denge">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/desadenge.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Desa Denge"
                                    />
                                    <p>
                                        Desa Denge sebagai kampung terakhir sebelum melakukan kegiatan pendakian menuju Desa
                                        Waerebo dan selama ini telah menjadi tempat transit para wisatawan berpotensi menjadi
                                        tempat wisata baru. Desa Denge menjadi tempat istirahat yang nyaman bagi wisatawan
                                        sambil berwisata di kawasan sekitarnya. Berbagai festival atau penampilan seni budaya
                                        setempat menunjang potensi industri ekonomi kreatif yang menjadikannya daya tarik
                                        khas Desa Denge.
                                    </p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Nampe Bakok">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/nampebakok.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Nampe Bakok"
                                    />
                                    <p>Spot foto / melihat Desa Wae Rebo secara menyeluruh dari atas bukit.</p>
                                </div>
                            </AccordionItem>
                            <AccordionItem header="Desa Wae Rebo">
                                <div className="flex flex-col gap-5">
                                    <img
                                        src="https://raw.githubusercontent.com/azhardanii/journey-labuan-bajo-assets/main/desawaerebo.webp"
                                        className="rounded-lg "
                                        alt="Journey Labuan Bajo Desa Wae Rebo"
                                    />
                                    <p>
                                        Desa Adat Wae Rebo kini dikenal sebagai desa adat yang menawarkan atraksi wisata
                                        berupa kesempatan unik untuk melihat rumah–rumah adat Manggarai dan mengajak
                                        wisatawan mengikuti budaya dan kehidupan sehari-hari masyarakat setempat.
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
                                <p>Transportasi Standart Pariwisata Menyesuikan Jumlah Peserta</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Transfer in / Out Bandara atau Hotel di Labuan Bajo</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Teh dan Kopi</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Air Mineral</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Tour Guide</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Tiket Masuk Obyek Wisata</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>1x Makan Malam khas Desa Adat Wae Rebo (Day 1)</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcOk
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>1x Makan Pagi khas Desa Adat Wae Rebo (Day 2)</p>
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
                                <p>Biaya Ojek Wisata Denge</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcCancel
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Pengeluaran Pribadi</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FcCancel
                                    size={20}
                                    className="-mt-0.5 min-w-[20px]"
                                />
                                <p>Tipping Driver dan Guide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverlandWaeRebo;
