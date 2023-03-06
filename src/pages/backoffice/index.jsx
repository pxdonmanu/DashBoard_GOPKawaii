import React from 'react'
import Navbar from '../../components/navbar'

const BackofficeDash = () => {
    return (
        <div className="h-screen w-screen flex">
        <Navbar/>
        <div className='flex items-center w-[85%] h-full bg-red-500'>
        Backoffice
        </div>
    </div>
    )
}

export default BackofficeDash
