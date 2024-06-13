import React from 'react'
import { Printer, FileInput, Trash2 } from 'lucide-react';

const PendonorPage = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-center'>
            <h1 className='font-bold text-3xl text-red-950 px-2 py-4'>DATA PENDONOR</h1>
        </div>
        <div className='flex items-end justify-end px-36 gap-2'>
            <button className='flex bg-blue-950 px-4 py-2 text-white font-semibold rounded-md gap-2'>
                <FileInput size={25} />Input
            </button>
            <button className='flex bg-green-800 px-4 py-2 text-white font-semibold rounded-md gap-2'> 
                <Printer size={25} />Print
            </button>
        </div>
        <div className='flex flex-col items-center justify-center px-2 py-1'>
            <table className='border-collapse border-2 border-black'>
                <thead>
                    <tr className='bg-red-950 text-white'>
                        <th className='border-2 border-black px-4 py-4'>No</th>
                        <th className='border-2 border-black px-10 py-4'>Tanggal</th>
                        <th className='border-2 border-black px-20 py-4'>Nama Pendonor</th>
                        <th className='border-2 border-black px-20 py-4'>Golongan Darah</th>
                        <th className='border-2 border-black px-20 py-4'>Kategori Donor</th>
                        <th className='border-2 border-black px-20 py-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black'></td>
                        <td className='border-2 border-black flex items-center justify-center'>
                            <button className='bg-red-800 px-4 py-2 text-white font-semibold rounded-md flex gap-2'>
                                <Trash2 size={25}/>Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PendonorPage