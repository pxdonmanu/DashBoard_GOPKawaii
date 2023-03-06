import React from 'react'
import Navbar from '../../components/navbar'

const DatesDash = () => {
    return (
      <div className='w-screen h-screen flex'>
        <Navbar/>
        <div className="flex items-center w-[85%] h-full bg-red-500">
                <div className='w-full h-6/7  bg-gray-700'>
                    <div className="txt1 h-1/7 flex items-center justify-center bg-orange-300 text-green text-3xl font-semibold">Citas</div>
                    <div className="conteiner4 flex flex-row justify-around bg-slate-900 w-10/12 h-2/5 ">
                        <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales usuarios</div>
                        <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales de animales</div>
                        <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Citas totales en el día</div>
                        <div className='bg-red-400 w-1/5 rounded-1/7 h-full'>Promedio de citas en el mes</div>
                    </div>
                    <div className="graph1 flex">
                        <div>Hola</div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default DatesDash
