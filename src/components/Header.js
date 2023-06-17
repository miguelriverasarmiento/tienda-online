import React from 'react'
import LightBlue from "../images/store.png"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <div className="flex place-content-center gap-4 md:justify-around sm:justify-around h-[100px] sm:h-[90px] md:h-[90px] items-center 
      flex-wrap box-border shadow-md bg-yellow-500">
        <div className="flex gap-1">
          <Link href="#">
            <div className='w-[40px] m-1 shadow-lg'>
              <img src={LightBlue} alt=""/>
            </div>
          </Link>
          <h1 className="text-2xl font-bold underline shadow-sm">Mg-ars store</h1>
        </div>
        <ul className="flex gap-2 text-[14px] sm:text-[16px] md:text-[16px] 
        font-bold">
          <li>
            <Link to="/" className="hover:text-sky-950">INICIO</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-sky-950">PRODUCTOS</Link>
          </li>
        </ul>
        <div className="relative cursor-pointer">
          <box-icon name="cart"></box-icon>
          <span className="absolute w-[18px] rounded-xl text-center top-1 left-6 bg-red-700 text-white">0</span>
        </div>
      </div>
    </header>
  )
}
