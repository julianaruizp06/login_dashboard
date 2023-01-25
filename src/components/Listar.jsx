import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Listar = () => {

  const [cotizacionesData, setCotizacionesData] = useState([])

  console.log(cotizacionesData)

  const obtenerCotizaciones = async () => {
    await axios.get("http://localhost:3002/quotes")
        .then( res => {
          setCotizacionesData(res.data.body.products)
        })
  }

  useEffect(() => {
    obtenerCotizaciones();
  }, [])

  return (
      <>
        {cotizacionesData.length > 0 && cotizacionesData.map( producto => {
          return <p
          key={producto.id}
          >{producto.name}</p>
        })}
      </>
  )
}
