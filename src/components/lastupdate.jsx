import React from 'react'

function lastupdate({data}) {
    let fecha = data.last_update
    let fechaHora = new Date(fecha).toLocaleString()

    return (
    <div className='w-100% text-center pt-5 animate__animated animate__fadeInUp'>
        <p className='italic'>Last Update: <span>{fechaHora}</span></p>
    </div>
)
}

export default lastupdate