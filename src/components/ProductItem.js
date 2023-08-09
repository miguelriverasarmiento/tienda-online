import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Link } from "react-router-dom"

/**
 * @class This component shows each product with its characteristics which arrive by props
 */
export const ProductItem = ({
    id,
    title,
    price,
    image,
    category,
    amount,
    description,
}) => {

    const value = useContext(DataContext)
    const addShoppingCar = value.addShoppingCar
    
return (
    <div className='flex flex-col shadow-md border-2 hover:border-lime-400 px-1 py-1'>
        <Link to={`/products/${id}`}>
            <div className='w-[200px] h-[200px]'>
                <img src={image} alt={title} />
            </div>
        </Link>
        <div className='bg-yellow-100 border w-[200px] h-[130px] px-2 py-1 shadow-inner'>
            <h1 className="font-semibold text-base font-sans">{title}</h1>
            <p className='text-sm font-sans'>{category}</p>
            <p className='font-mono font-bold'>${price}</p>
        </div>
        <div className='text-center'>
            <button className='font-serif w-[200px] border-2 hover:bg-slate-300 bg-orange-200 
            text-emerald-900' onClick={() => addShoppingCar(id)}>Añadir al carrito</button>
            <div className='w-[200px] bg-orange-100 border-2 hover:bg-slate-300'>
            <Link to={`/products/${id}`} className="font-serif text-emerald-900">Vista</Link>
            </div>
        </div>
    </div>
  )
}
