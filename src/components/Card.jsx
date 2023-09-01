import React from 'react'
import './cards.css'

function Card({title, buy, sell}) {
    return (
    <div className='flex w-80 h-[80px] p-[10px] items-center justify-between rounded-[10px] border-[1px] border-[#c8d1d81a] card'>
        <h3 className='text-[22px] font-bold'>{title}</h3>
        <div className=" w-10 h-10"></div>
        <div className='text-center'>
            <p className='text-sm'>Compra</p>
            <p className='text-sm'>${buy ? buy : "$----"}</p>
        </div>
        <div className='text-center'>
            <p className='text-sm'>Venta</p>
            <p className='text-sm'>${sell ? sell :"$----"}</p>
        </div>
    </div>
    )
}
export default Card