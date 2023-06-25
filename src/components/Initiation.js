import React from 'react'
import { Link } from "react-router-dom";
import Portada from "../images/ini.jpg"

export const Initiation = () => {
  return (
    <div className='mx-5 md:mx-20'>
      <div className='xl:justify-center w-[200px] sm:w-[400px] sm:flex md:flex gap-3 mt-10'>
        <div className='text-sm px-4 py-2 border-2 border-amber-200 bg-amber-300 
        hover:bg-yellow-300 rounded-md'>
          <Link to="/">
            <h1>Iniciar sesion</h1>
          </Link>
        </div>
        <div className='text-sm px-4 py-2 border-2 border-amber-200 bg-amber-300
        hover:bg-yellow-300 rounded-md'>
          <Link to="/products" className='bg-amber-500 border-solid '>
            <h1>Registrarse</h1>
          </Link>
        </div>
      </div>
      <div className='grid grid-rows-1 gap-5 lg:justify-center'>
        <div className='mt-20 font-light'>
          <p>La música expresa lo que no puede ser dicho 
            y aquello sobre lo que es imposible permanecer en silencio.</p>
          <p>−Victor Hugo</p>
        </div>
        <div className="my-10">
          <img src={Portada} alt="inicio" />
        </div>
      </div>
    </div>
  )
}
