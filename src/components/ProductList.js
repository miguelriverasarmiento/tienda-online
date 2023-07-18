import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { ProductItem } from './ProductItem'

/**
 * @class This component displays the list of products
 */
export const ProductList = () => {
  
  const value = useContext(DataContext)
  const [products] = value.products

  console.log(products)
  
  return (
    <>
      <h1 className="font-bold font-serif text-center mt-20 mb-10 text-sm text-yellow-800 drop-shadow-sm 
      opacity-60">PRODUCTOS DISPONIBLES</h1>
      <div className='grid grid-cols-1 justify-items-center ml-2 mr-2 sm:grid-cols-2 md:grid-cols-4 gap-5'>
       {products.map((product) => (
        <ProductItem 
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          category={product.category}
          amount={product.amount}
        />
       ))}
       
      </div>
    </>
  )
}
