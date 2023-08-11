import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { ProductItem } from './ProductItem'
import { useAuth0 } from '@auth0/auth0-react'

/**
 * @class This component displays the list of products
 */
export const ProductList = () => {
  
  const value = useContext(DataContext)
  const [products] = value.products
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div className='min-h-screen mt-10 mx-5 sm:mx-12 md:mx-20 lg:mx-28 xl:mx-40 2xl:mx-44 text-yellow-800 
    sm:text-lg md:text-lg font-extralight'>Loading...</div>;
  }
  
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
