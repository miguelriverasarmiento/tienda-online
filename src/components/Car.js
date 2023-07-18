import React, { useContext } from 'react'
import ProductOne from '../images/product.jpg'
import { DataContext } from '../context/DataProvider'

/**
 * @class This component displays the list of products in the shopping cart.
 */
export const Car = () => {
  
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu

  /**
   * @description handles boolean values, if true displays product cart component if it is false it keeps the component closed
   */
  const toogleMenu = () => {
    setMenu(false);
  }

  return (
    <>
      {menu &&
        <div className='fixed top-0 left-0 w-full h-full ease-in-out duration-300 z-10 pb-20'>
          <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 w-3/5 h-4/5
          rounded-lg overflow-x-scroll ease-in-out duration-300 bg-gray-100 shadow-2xl'>
            <div className='inline-block w-[50px] h-[50px] cursor-pointer ease-in-out duration-300 m-2'
            onClick={() => toogleMenu()}>
              <box-icon name="x"></box-icon>
            </div>
              <h2 className='text-center text-xl'>Su carrito</h2>
              <div className='m-auto w-11/12 border-2 border-lime-400'>

                <div className='grid grid-cols-1 md:grid-cols-4 m-1 rounded justify-items-center bg-stone-200'>
                  <img src={ProductOne} alt=""/>
                  <div>
                    <h3 className='m-5 text-center font-medium text-base font-sans'>Guitarra electrica stratocaster</h3>
                    <p className='text-center text-xl'>$1000</p>
                  </div>
                  <div className='mt-5 cursor-pointer'>
                    <box-icon name="up-arrow" type="solid"></box-icon>
                    <p className='pb-1 text-xl font-normal text-center'>1</p>
                    <box-icon name="down-arrow" type="solid"></box-icon>
                  </div>
                  <div className='mt-8 md:mt-12 cursor-pointer'>
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 m-1 rounded justify-items-center bg-stone-200'>
                  <img src={ProductOne} alt=""/>
                  <div>
                    <h3 className='m-5 text-center font-medium text-base font-sans'>Guitarra electrica stratocaster</h3>
                    <p className='text-center text-xl'>$1000</p>
                  </div>
                  <div className='mt-5 cursor-pointer'>
                    <box-icon name="up-arrow" type="solid"></box-icon>
                    <p className='pb-1 text-xl font-normal text-center'>1</p>
                    <box-icon name="down-arrow" type="solid"></box-icon>
                  </div>
                  <div className='mt-8 md:mt-12 cursor-pointer'>
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 m-1 rounded justify-items-center bg-stone-200'>
                  <img src={ProductOne} alt=""/>
                  <div>
                    <h3 className='m-5 text-center font-medium text-base font-sans'>Guitarra electrica stratocaster</h3>
                    <p className='text-center text-xl'>$1000</p>
                  </div>
                  <div className='mt-5 cursor-pointer'>
                    <box-icon name="up-arrow" type="solid"></box-icon>
                    <p className='pb-1 text-xl font-normal text-center'>1</p>
                    <box-icon name="down-arrow" type="solid"></box-icon>
                  </div>
                  <div className='mt-8 md:mt-12 cursor-pointer'>
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
                
              </div>
              <div className='text-center mt-4'>
                <h3 className='text-xl tracking-wide font-medium'>Total: $2000</h3>
                <button className='inline-block mt-2 px-1.5 text-lg bg-stone-200 border-2 
                border-lime-300 cursor-pointer'>Pago</button>
              </div>
          </div>
        </div>
      }
    </>
  )
}
