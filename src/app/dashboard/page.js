import React from "react";
import Image from "next/image";
import { HeartPulse , TriangleAlert, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Music2, BookText, HeartHandshake, MessageCircle, BookUser } from "lucide-react";


const DashboardPage = () => {
  return (
    <div className="">
      <nav className="justify-between bg-red-950 shadow-md px-4 py-3 shadow-gray-950">
        <div className="flex justify-between items-center">
          <Image 
            src="/UTDRS.jpg"
            alt="ulin foto"
            width={70}
            height={50}
            className="justify-start items-start rounded-full"
          />
          <ul className="flex items-end justify-between">
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Permintaan Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Pendaftaran Donor Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Rujukan Ke PMI
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Penitipan Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Cek Golongan Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Blanko Crossmatch
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Label Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Data Pendonor
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Pemusnahan Darah
            </a>
          </ul>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-10 mb-auto">
        <h1 className="text-6xl text-red-950 font-bold ">
          STOK: 448
        </h1>
      </div>
      <div className="flex items-center justify-center px-4 gap-10 text-center text-white">
        <div className="">
          <div className="flex items-center justify-center mt-20 py-16 bg-white w-96 h-40 rounded-md font-bold shadow-md shadow-gray-950 text-red-950">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">11</h1>
                <p>Golongan Darah AB</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 py-16 bg-white w-96 h-40 rounded-md font-bold shadow-md shadow-gray-950 text-red-950">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">150</h1>
                <p>Golongan Darah B</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center mt-20 py-16 bg-white w-96 h-40 rounded-md font-bold shadow-md shadow-gray-950 text-red-950">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">70</h1>
                <p>Golongan Darah A</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 py-16 bg-white w-96 h-40 rounded-md font-bold shadow-md shadow-gray-950 text-red-950">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">217</h1>
                <p>Golongan Darah O</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10  p-4 bg-red-950 border-solid border-2  border-black w-96 text-white text-center font-semibold rounded-md shadow-md shadow-gray-950 ">
        <div className="flex flex-col items-center justify-center text-center w-full gap-4">
        <TriangleAlert size={40} className="text-yellow-600"/>
        Apabila Stok Darah Yang Ingin Anda Minta Habis Maka Silahkan Klik Rujukan Ke PMI Yang Ada Di Menu, Jika Stok Darah Yang Anda Inginkan Aman Maka Silahkan Lanjut Klik Permintaan Darah Di Menu
        </div>
      </div>
      <footer className="flex bg-red-950 mt-10">
        <div className="px-14 py-10">
          <span className="text-lg text-white font-semibold ">
            UTDRS Ulin
          </span>
          <p className="text-white text-sm mt-2">
            Jalan A. Yani Km. 2,5 No. 43 - Banjarmasin 70233
          </p>
          <p className="flex gap-2 text-white text-sm mt-2">
            <Phone size={15}/>0511-3257463
            <Phone size={15}/>0511-3257472
            <Mail size={18}/>humasrsudulinbanjarmasin@gmail.com
          </p>
        </div>
        <div className="px-4 py-10">
          <span className="text-lg text-white font-semibold">
            PENGUNJUNG SITUS
          </span>
          <p className="flex gap-2 mt-2">
            <Facebook size={30} className="border-2 rounded-full bg-white text-red-950"/>
            <Twitter size={30} className="border-2 rounded-full bg-white text-red-950"/>
            <Instagram size={30} className="border-2 rounded-full bg-white text-red-950"/>
            <Youtube size={30} className="border-2 rounded-full bg-white text-red-950"/>
            <Music2 size={30} className="border-2 rounded-full bg-white text-red-950"/>
          </p>
        </div>
        <div className="px-32 py-10">
          <p className="flex gap-2 mt-2 text-white">
           <BookText size={20}/>Pustaka
           <HeartHandshake size={20}/>Humanis
           <MessageCircle size={20}/>FAQ
           <BookUser size={20}/>Kontak Kami
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
