import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { ProductItem } from './ProductItem'

/**
 * @class This component displays the list of products
 */
export const ProductList = () => {
  
  const value = useContext(DataContext)
  const [products] = value.products
  
  return (
    <>
      <div className='grid grid-cols-1 justify-items-center mt-20 ml-2 mr-2 sm:grid-cols-2 md:grid-cols-4 gap-5'>
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
