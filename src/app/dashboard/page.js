import React from "react";
import Image from "next/image";
import { HeartPulse } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className=" bg-white h-screen">
      <nav className="justify-between bg-red-950 px-4 py-3">
        <div className="flex justify-between items-center">
          <Image
            src="/Ulin.png"
            alt="ulin foto"
            width={100}
            height={50}
            className="justify-start items-start"
          />
          <ul className="flex items-end justify-between gap-4">
            <a
              href="#"
              className="rounded-md px-3 py-2 font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Permintaan Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Pendaftaran Donor Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Rujukan Ke PMI
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Penitipan Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Blanko Crossmatch
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Label Darah
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 font-bold text-white hover:bg-white/50 hover:text-white"
            >
              Data Pendonor
            </a>
          </ul>
        </div>
      </nav>
      <div className="flex items-center justify-center px-4 gap-10 text-center">
        <div className="">
          <div className="flex items-center justify-center mt-20 py-16 bg-red-950 w-96 h-40 rounded-md font-bold">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">11</h1>
                <p>Golongan Darah AB</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 py-16 bg-red-950 w-96 h-40 rounded-md font-bold">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">150</h1>
                <p>Golongan Darah B</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center mt-20 py-16 bg-red-950 w-96 h-40 rounded-md font-bold">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">70</h1>
                <p>Golongan Darah A</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 py-16 bg-red-950 w-96 h-40 rounded-md font-bold">
            <HeartPulse size={80}/>
            <div>
                <h1 className="text-6xl">217</h1>
                <p>Golongan Darah O</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 border-solid border-2 border-red-950 w-96 text-black text-center">
        Apabila Stok Darah Yang Ingin Anda Minta Habis Maka Silahkan Klik Rujukan Ke PMI Yang Ada Di Menu 
      </div>
    </div>
  );
};

export default DashboardPage;
