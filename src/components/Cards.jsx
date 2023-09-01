import React from 'react'

import Card from './Card'
function Cards({data}) {
    let dolarOficial = data.oficial || {}
    let dolarBlue = data.blue || {}

    let euroOficial = data.oficial_euro || {}
    let euroBlue = data.blue_euro || {}


    return (
    <div className='flex justify-center mt-10 gap-2.5 cards'>
        <div className='flex flex-col gap-2.5 animate__animated animate__fadeInLeft'>
            <Card title="Dólar Oficial" buy={dolarOficial.value_buy} sell={dolarOficial.value_sell}/>
            <Card title="Dólar Blue" buy={dolarBlue.value_buy} sell={dolarBlue.value_sell}/>
        </div>
        <div className='flex flex-col gap-2.5 animate__animated animate__fadeInRight'>
            <Card title="Euro Oficial" buy={euroOficial.value_buy} sell={euroOficial.value_sell}/>
            <Card title="Euro Blue" buy={euroBlue.value_buy}sell={euroBlue.value_sell}/>
        </div>
        
    </div>
    )
}

export default Cards