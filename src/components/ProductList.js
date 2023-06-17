import React from 'react'
import Product from "../images/product.jpg"
import Product2 from "../images/product2.jpg"
import Product3 from "../images/product3.jpg"
import { Link } from "react-router-dom";

export const ProductList = () => {
  return (
    <>
      <h1 className="font-bold text-center mt-10 mb-10 text-sm text-yellow-800">PRODUCTOS</h1>
      <div className='grid grid-cols-1 justify-items-center ml-2 mr-2 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <div className='flex flex-col shadow-md border-2 hover:border-lime-400 px-1 py-1'>
          <a href="#">
            <div className='w-[200px]'>
              <img src={Product} alt=""/>
            </div>
          </a>
          <div>
            <h1 className="font-semibold text-base font-sans">Titulo</h1>
            <p className='text-sm font-sans'>Categoria</p>
            <p className='font-mono font-bold'>$1000</p>
          </div>
          <div className='text-center'>
              <button className='font-serif w-[200px] border-2 hover:bg-slate-300 bg-orange-200 text-emerald-900'>Añadir al carrito</button>
            <div className='w-[200px] bg-orange-100 border-2 hover:bg-slate-300'>
              <a href="#" className="font-serif text-emerald-900">Vista</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col shadow-md border-2 hover:border-lime-400 px-1 py-1'>
          <a href="#">
            <div className='w-[200px]'>
              <img src={Product2} alt=""/>
            </div>
          </a>
          <div>
            <h1 className="font-semibold text-base font-sans">Titulo</h1>
            <p className='text-sm font-sans'>Categoria</p>
            <p className='font-mono font-bold'>$1000</p>
          </div>
          <div className='text-center'>
              <button className='font-serif w-[200px] border-2 hover:bg-slate-300 bg-orange-200 text-emerald-900'>Añadir al carrito</button>
            <div className='w-[200px] bg-orange-100 border-2 hover:bg-slate-300'>
              <a href="#" className="font-serif text-emerald-900">Vista</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col shadow-md border-2 hover:border-lime-400 px-1 py-1'>
          <a href="#">
            <div className='w-[200px]'>
              <img src={Product3} alt=""/>
            </div>
          </a>
          <div>
            <h1 className="font-semibold text-base font-sans">Titulo</h1>
            <p className='text-sm font-sans'>Categoria</p>
            <p className='font-mono font-bold'>$1000</p>
          </div>
          <div className='text-center'>
              <button className='font-serif w-[200px] border-2 hover:bg-slate-300 bg-orange-200 text-emerald-900'>Añadir al carrito</button>
            <div className='w-[200px] bg-orange-100 border-2 hover:bg-slate-300'>
              <a href="#" className="font-serif text-emerald-900">Vista</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col shadow-md border-2 hover:border-lime-400 px-1 py-1'>
          <a href="#">
            <div className='w-[200px]'>
              <img src={Product2} alt=""/>
            </div>
          </a>
          <div>
            <h1 className="font-semibold text-base font-sans">Titulo</h1>
            <p className='text-sm font-sans'>Categoria</p>
            <p className='font-mono font-bold'>$1000</p>
          </div>
          <div className='text-center'>
              <button className='font-serif w-[200px] border-2 hover:bg-slate-300 bg-orange-200 text-emerald-900'>Añadir al carrito</button>
            <div className='w-[200px] bg-orange-100 border-2 hover:bg-slate-300'>
              <a href="#" className="font-serif text-emerald-900">Vista</a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
