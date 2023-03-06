import React from 'react'
import { BiCalendarAlt, BiSitemap, BiMoneyWithdraw } from 'react-icons/bi'
// import Link from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex h-screen w-[15%]' >
            <div className='w-full ml-1/7 h-full flex items-center'>
                <div className="bg-green h-6/7 w-full rounded-1/7">

                    <div className="txt1 w-full h-1/5 flex items-center justify-center text-white text-4xl font-semibold">
                        DashBoard
                    </div>

                    <div className="txt2 w-full h-1/6 flex items-center justify-center text-2xl text-white text-left">
                        <BiCalendarAlt /><p className='m-1/6'>Citas</p>
                    </div>

                    <div className="txt3 w-full h-1/6 flex items-center justify-center text-2xl text-white text-left">
                        <BiSitemap /><p className='m-1/6'>Back Office</p>
                    </div>

                    <div className="txt4 w-full h-1/6 flex items-center justify-center text-2xl text-white text-left">
                        <BiMoneyWithdraw /><p className='m-1/6'>Contaduría</p>
                    </div>

                    <div className="txt5 w-full h-1/6 flex items-center justify-center text-2xl text-white 
                    text-left">
                        <p className='m-1/6'>Archivos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
