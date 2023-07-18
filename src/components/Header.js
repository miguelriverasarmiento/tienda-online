import React, { useContext } from 'react'
import LightBlue from "../images/store.png"
import { Link } from "react-router-dom"
import { DataContext } from '../context/DataProvider'

/**
 * @class This component has, among others, the logo that gives access to the shopping cart
 */
export const Header = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [shoppingCar] = value.shoppingCar

  /**
   * @description handles boolean values, if true displays product cart component if it is false it keeps the component closed
   */
  const toogleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header>
      <div className="grid sm:flex md:flex place-content-center justify-items-center gap-4 
      md:justify-around sm:justify-around h-[130px] sm:h-[90px] md:h-[90px] 
      flex-wrap box-border shadow-md bg-yellow-500">
        <div className="flex gap-1">
          <Link to="/">
            <div className='w-[30px] sm:w-[40px] md:w-[40px] m-1 shadow-lg'>
              <img src={LightBlue} alt=""/>
            </div>
          </Link>
          <h1 className="text-xl sm:text-2xl md:text-2xl font-bold underline shadow-sm">Mg-ars store</h1>
        </div>
        <ul className="flex gap-2 sm:py-2 text-[14px] sm:text-[16px] md:text-[16px] font-bold">
          <li>
            <Link to="/" className="hover:text-sky-900">INICIO</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-sky-900">PRODUCTOS</Link>
          </li>
        </ul>
        <div className="relative cursor-pointer sm:py-2" onClick={() => toogleMenu()}>
          <box-icon name="cart"></box-icon>
          <span className="absolute w-[18px] rounded-xl text-center top-1 left-6 bg-red-700 
          text-white">{shoppingCar.length}</span>
        </div>
      </div>
    </header>
  )
}
