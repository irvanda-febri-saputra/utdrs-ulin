import React from 'react';
import { Check, X } from 'lucide-react';


const Pendaftaran2Page = () => {
  return (
    <div className='flex flex-col items-center justify-center py-8 shadow-md'>
        <div className='bg-red-950 w-[800px] px-4 py-4 text-white text-2xl font-bold rounded-t-md shadow-md shadow-black'>
            Lengkapi Data Untuk Melakukan Pendaftaran Donor Darah
        </div>
        <form className='bg-white w-[800px] px-4 py-2 rounded-b-md pb-4 shadow-md shadow-black'>
            <div className='grid gap-6 md-6'>
                <div>
                    <label for='nama_pasien' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Nama</label>
                    <input type="text" id="first_name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukkan Nama'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Tanggal</label>
                    <input type="text" id="no_rmk" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Tanggal'></input>  
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Apakah Anda ?</label>
                </div>
                <div>
                    <table className='border-collapse border border-slate-500'>
                        <thead>
                            <tr>
                                <th className='border border-slate-600'>No</th>
                                <th className='border border-slate-600'>Pertanyaan</th>
                                <th className='border border-slate-600'>Ya</th>
                                <th className='border border-slate-600'>Tidak</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>1</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Merasa sehat hari ini ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>2</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Penyintas Covid-19 ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>3</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Sudah melakukan vaksin Covid-19 ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>4</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Mengkonsumsi obat - obatan dalam 3 hari terakhir ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>5</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Merasa pusing, sakit kepala dan demam ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>6</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Memiliki riwayat tekanan darah tinggi ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>7</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Memiliki riwayat gula darah ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>8</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Memiliki riwayat kolesterol ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>9</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Memiliki riwayat gangguan pernapasan (paru - paru) ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>10</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Memiliki riwayat penyakit jantung ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>11</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Memiliki riwayat infeksi menular lewat cairan tubuh ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>12</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Memiliki tato ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>13</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Pernah mendonorkan darah lengkap dalam 3 bulan terakhir ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>14</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Pernah mendonorkan darah plasma dalam 14 hari terakhir ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>15</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Pernah ditolak saat hendak melakukan donor darah ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <label for='no_rmk' className='block mb-2  text-sm font-bold text-gray-900 dark:text-white'>Bagi Perempuan, Apakah Anda ?</label>
                </div>
                <div>
                <table className='border-collapse border border-slate-500'>
                        <thead>
                            <tr>
                                <th className='border border-slate-600'>No</th>
                                <th className='border border-slate-600'>Pertanyaan</th>
                                <th className='border border-slate-600'>Ya</th>
                                <th className='border border-slate-600'>Tidak</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>1</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Sedang menstruasi ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>2</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Sedang hamil ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>3</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Pernah hamil ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-700 w-10 px-4'>4</td>
                                <td className='border border-slate-700 w-[650px] px-2'>Sedang menyusui ?</td>
                                <td className='border border-slate-700 w-14 px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                                <td className='border border-slate-700 w-14  px-5'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

export default Pendaftaran2Page