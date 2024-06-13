import React from 'react';
import { Check, X } from 'lucide-react';

const LabelPage = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 shadow-md'>
        <div className='bg-red-950 w-[800px] px-4 py-4 text-white text-2xl font-bold rounded-t-md shadow-md shadow-black'>
            Form Label Darah
        </div>
        <form className='bg-white w-[800px] px-4 py-2 rounded-b-md pb-4 shadow-md shadow-black'>
            <div className='grid gap-6 md-6'>
                <div>
                    <label for='nama_pasien' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>No Kantong Darah</label>
                    <input type="text" id="first_name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan No Kantong Darah'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Produk Darah</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Produk Darah'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Isi</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Isi'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Reaktif</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Reaktif'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Aftap</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Aftap'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Diolah</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Diolah'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Expired</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Expired'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>No Form</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan No Form'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Nama Pasien</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Nama Pasien'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Jenis Kelamin</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pilih Jenis Kelamin'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Umur</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Umur'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Diagnosa</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Diagnosa'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Golongan Darah</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Pilih Golongan Darah'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Rumah Sakit</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Rumah Sakit'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Bagian</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Bagian'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Layanan</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Layanan'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Kelas</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Kelas'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Terima Form</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Terima Form'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Cross Match</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Cross Match'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Jam</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Jam'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Hasil</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Hasil'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Dikerjakan Oleh</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Dikerjakan Oleh'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Dicek Oleh</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Dicek Oleh'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Keterangan Dokter</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Keterangan Dokter'></input>  
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

export default LabelPage