import React from 'react';

function App() {
  const dataDiri = {
    nama: "Muhammad Nibras Alghifary", 
    foto: "/27. AZZAM ATMARADJA FATURROCHMAN-1.JPG", 
    kelas: "T2F",
    prodi: "Teknologi Informasi",
    domisili: "Serang, Banten, Indonesia",
    universitas: "Universitas Brawijaya",
    koneksi: "257 koneksi",
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Kolom Kiri: Profil Utama */}
          <div className="md:col-span-2">
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-4">
              {/* Gambar Sampul (Kotak Atas) */}
              <div className="h-40 bg-gradient-to-r from-slate-300 to-slate-400"></div>

              {/* Area Konten Profil (Kotak Bawah) */}
              <div className="px-8 pb-8">
                
                {/* FOTO PROFIL */}
                <div className="-mt-20">
                  <img
                    src={dataDiri.foto}
                    alt={dataDiri.nama}
                    className="w-40 h-40 rounded-full border-4 border-white shadow-sm object-cover bg-white relative z-10"
                  />
                </div>

                {/* --- BAGIAN YANG DIPERBARUI: Identitas & Universitas --- */}
                {/* Ditambah gap-6 biar ada jarak pasti antara nama dan logo */}
                <div className="mt-4 flex justify-between items-start gap-6">
                  
                  {/* Kiri: Identitas Diri (Ditambah flex-1 biar teks rapi dan bisa turun kalau kepanjangan) */}
                  <div className="flex flex-col gap-1 flex-1">
                    {/* Diubah jadi text-2xl biar ukurannya pas dan elegan */}
                    <h1 className="text-2xl font-bold text-slate-900">{dataDiri.nama}</h1>
                    <p className="text-base text-slate-800 font-medium">Mahasiswa {dataDiri.prodi} ({dataDiri.kelas})</p>
                    <p className="text-sm text-slate-500 mt-1">{dataDiri.domisili} • <span className="text-blue-600 font-semibold hover:underline cursor-pointer">Info kontak</span></p>
                    <p className="mt-2 text-sm text-blue-700 font-semibold hover:underline cursor-pointer">
                      {dataDiri.koneksi}
                    </p>
                  </div>

                  {/* Kanan: Keterangan Universitas */}
                  <div className="hidden sm:flex items-center gap-2 cursor-pointer group mt-1 shrink-0">
                    <img 
                      src="/Logo_Universitas_Brawijaya.svg-removebg-preview.png" 
                      alt="Logo UB" 
                      className="w-8 h-8 rounded-sm object-contain"
                    />
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 group-hover:underline">
                      {dataDiri.universitas}
                    </span>
                  </div>

                </div>
                {/* ------------------------------------------------------- */}

                {/* Tombol Tindakan */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <button className="bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
                    Open to
                  </button>
                  <button className="bg-white text-blue-600 font-semibold px-4 py-1.5 rounded-full border border-blue-600 hover:bg-blue-50 transition border-[1.5px]">
                    Add profile section
                  </button>
                  <button className="bg-white text-slate-600 font-semibold px-4 py-1.5 rounded-full border border-slate-400 hover:bg-slate-100 transition hover:border-slate-800 hover:text-slate-900 border-[1.5px]">
                    More
                  </button>
                </div>
              </div>
            </div>

            {/* Bagian About */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mt-4">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About</h2>
              <p className="text-sm text-slate-800 leading-relaxed text-justify">
                Halo! Saya adalah {dataDiri.nama}, seorang mahasiswa di {dataDiri.universitas}. Saya memiliki gairah yang sangat besar dalam dunia pengembangan perangkat lunak, terutama dalam Front-End Development menggunakan framework ReactJS. Saya percaya bahwa kombinasi antara dasar teori yang kuat dari bangku kuliah dan penerapan praktis melalui proyek sampingan adalah kunci untuk menjadi seorang profesional yang kompeten di industri teknologi yang dinamis ini. Saya aktif mengeksplorasi teknologi baru, mengikuti workshop, dan membangun proyek-proyek kecil untuk mengasah keterampilan coding saya. Tujuan saya ke depan adalah untuk terus belajar, berkolaborasi dengan profesional berbakat, dan pada akhirnya dapat memberikan kontribusi yang berarti dalam menciptakan solusi teknologi yang inovatif dan bermanfaat bagi masyarakat. Saya adalah individu yang cepat belajar, komunikatif, dan senang menghadapi tantangan baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;