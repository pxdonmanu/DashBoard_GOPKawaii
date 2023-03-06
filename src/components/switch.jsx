
import React from 'react'
import { BiCalendarAlt, BiSitemap, BiMoneyWithdraw, BiFileBlank } from 'react-icons/bi'
import { Link } from 'react-router-dom'
// import Link from 'react-router-dom'

const Switch = ({Mode, Click}) => {
    return (
        <div className="switch_conteiner h-[10%] w-full mb-[2%]">
            <div className='w-[15%] h-[100%] ml-[5%] bg-[#6ED4A5] p-[.5%] rounded-[3vw] items-center content-center'>
                <button className='outline-none w-full h-full m-0 p-0 bg-trasparent' onClick={{Click}}>
                    <div className='h-full w-full bg-white rounded-[3vw] p-[5%] '> 
                        <div className={"h-[6vh] w-[3.5vw] bg-[#6ED4A5] rounded-[50%] "+ Mode}></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Switch
