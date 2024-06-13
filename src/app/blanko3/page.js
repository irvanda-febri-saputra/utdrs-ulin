import React from 'react'
import { Printer, FileInput, Trash2 } from 'lucide-react';

const Blanko3Page = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-center'>
            <h1 className='font-bold text-3xl text-red-950 px-2 py-4'>DATA PERMINTAAN DARAH</h1>
        </div>
        <div className='flex items-end justify-end px-2'>
            <button className='flex bg-blue-950 px-4 py-2 text-white font-semibold rounded-md gap-2'>
                <FileInput size={25} />Input
            </button>
        </div>
        <div className='flex flex-col items-center justify-center px-2 py-1'>
            <table className='border-collapse border-2 border-black'>
                <thead>
                    <tr className='bg-red-950 text-white'>
                        <th className='border-2 border-black px-2'>No</th>
                        <th className='border-2 border-black px-4'>Tanggal</th>
                        <th className='border-2 border-black px-4'>No RMK</th>
                        <th className='border-2 border-black px-10'>Nama Pasien</th>
                        <th className='border-2 border-black px-4'>Ruangan</th>
                        <th className='border-2 border-black px-2'>Golongan Darah</th>
                        <th className='border-2 border-black px-4'>Rhesus</th>
                        <th className='border-2 border-black px-4'>No Cross Test</th>
                        <th className='border-2 border-black px-2'>No Kantong Darah</th>
                        <th className='border-2 border-black px-1'>Jenis Darah</th>
                        <th className='border-2 border-black px-2'>Hasil Pemeriksaan</th>
                        <th className='border-2 border-black px-4'>Reaksi Transfusi</th>
                        <th className='border-2 border-black px-2'>Keterangan</th>
                        <th className='border-2 border-black px-6'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-1 border-black flex flex-col gap-1 items-center justify-center'>
                            <button className='flex bg-green-800 px-3 py-2 text-white font-semibold rounded-md gap-2'> 
                                <Printer size={25} />Print
                            </button>
                            <button className='flex bg-red-800 px-1 py-2 text-white font-semibold rounded-md gap-2'> 
                                <Trash2 size={25} />Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Blanko3Page