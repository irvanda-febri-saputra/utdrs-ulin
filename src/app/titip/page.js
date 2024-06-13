import React from 'react';
import { Check, X } from 'lucide-react';

const TitipPage = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 shadow-md'>
        <div className='bg-red-950 w-[800px] px-4 py-4 text-white text-2xl font-bold rounded-t-md shadow-md shadow-black'>
            Lengkapi Data Untuk Melakukan Penitipan Darah
        </div>
        <form className='bg-white w-[800px] px-4 py-2 rounded-b-md pb-4 shadow-md shadow-black'>
            <div className='grid gap-6 md-6'>
                <div>
                    <label for='nama_pasien' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Nama Lengkap Pasien</label>
                    <input type="text" id="first_name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Nama Pasien'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Ruangan</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Ruangan'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Golongan Darah/Rh</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pilih Golongan Darah'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Jenis Darah/Komponen Darah</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pilih Jenis Darah'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Banyaknya darah yang dititipkan</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Banyaknya'></input>  
                </div>
                <div>               
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Tanggal/Jam Penitipan</label>
                    <div className='flex gap-4'>
                        <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Tanggal'></input>
                        <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Jam'></input>
                    </div>
                </div>
                <div className='flex items-end justify-end gap-4
                3'>
                    <div className='flex items-end justify-end'>
                        <button className='bg-red-600 px-6 py-2 text-white font-semibold rounded-md flex gap-2'>
                            <X size={25}/>Batal
                        </button>
                    </div>
                    <div className='flex items-end justify-end'>
                        <button className='bg-green-800 px-4 py-2 text-white font-semibold rounded-md flex gap-2'>
                            <Check size={25}/> Simpan
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default TitipPage