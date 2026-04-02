import React from 'react';

import fotoSaya from './assets/foto profile.jpg';

const ProfilePage = () => {
  const userData = {
    namaLengkap: "Sultan Zaki Adi Wijaya", // Ganti dengan nama Anda
    kelas: "T2F",
    jurusan: "Teknologi Informasi",
    domisili: "Serang Banten",
    fotoProfile: fotoSaya, // Ganti dengan path foto Anda
    tentangDiri: "I am a dedicated student with a keen interest in software development, particularly modern web technologies like ReactJS and Tailwind CSS. My learning journey began with a curiosity about how an application can provide real solutions to business and societal problems. I believe that the combination of a strong business understanding and comprehensive technical skills is the key to creating impactful innovation. In addition to focusing on the technical aspects of coding, I am also actively developing soft skills such as team leadership, effective communication, and creative problem-solving. I always strive to give my best effort in every project I work on, because for me, technology is not just lines of code, but rather a bridge to realizing visions and missions into real technology solutions for everyone.."
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        
        {/* Banner Header */}
        <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-900 relative">
            <div className="absolute right-10 top-10 text-white text-right">
                <h2 className="text-3xl font-serif italic opacity-80">PROFILE SAYA</h2>
            </div>
        </div>

        {/* Profile Section */}
<div className="relative px-8 pb-8">
  
  {/* Container Avatar */}
  <div className="relative -top-16 mb-[-4rem] flex justify-center md:justify-start">
    <img 
  src={userData.fotoProfile} 
  alt="Profile" 
  // TAMBAHKAN STYLE DI BAWAH INI
  style={{ width: '160px', height: '160px', objectFit: 'cover' }}
  className="rounded-full border-4 border-white shadow-lg mx-auto md:mx-0" 
/>
  </div>

          {/* Info Utama */}
          <div className="mt-4 flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userData.namaLengkap}</h1>
              <p className="text-lg text-gray-700 mt-1">{userData.kelas} | {userData.jurusan}</p>
              <p className="text-sm text-gray-500 mt-1">{userData.domisili}</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-700 transition">Open to</button>
                <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-full font-semibold hover:bg-blue-50 transition">Add profile section</button>
                <button className="border border-gray-500 text-gray-600 px-4 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition">Resources</button>
              </div>
            </div>
            
            {/* Logo Instansi (Opsional) */}
            <div className="mt-6 md:mt-0 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">Brawijaya University</span>
                </div>
            </div>
          </div>
        </div>

        {/* Bagian About (Tentang Diri) */}
        <div className="mx-8 mb-8 p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            {userData.tentangDiri}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;