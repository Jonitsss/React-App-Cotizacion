import React, { useEffect, useState } from 'react'
import 'animate.css'
import Cards from './components/Cards'
import LastUpdate from './components/lastupdate'

function App() {

  const [api, setapi] = useState([])

  useEffect(()=>{
    const url = 'https://api.bluelytics.com.ar/v2/latest'
    async function fetchData(){
      let response = await fetch(url)
      let data = await response.json()
      setapi(data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <header className='h-[60px]  flex justify-center items-center border-b-[1px]'>
        <h1 className='text-[28px] font-extrabold'>Cotizacion</h1>
      </header>
      <Cards data={api}/>
      <LastUpdate data={api}/>
    </div>
  )
}

export default App