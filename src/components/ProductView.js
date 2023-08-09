import { useEffect, useContext, useState } from 'react'
import { DataContext } from '../context/DataProvider';
import { useParams } from 'react-router-dom';

export const ProductView = () => {

    const value = useContext(DataContext)
    const [products] = value.products;
    const addShoppingCar = value.addShoppingCar
    const [details, setDetails] = useState([])
    const params = useParams();

    useEffect(() => {
        products.forEach(product => {
            if(product.id === parseInt(params.id)) {
                setDetails(product)
            }
        })
    }, [params.id, products])

    return (
    <>
    {
        <div className='flex flex-col w-[100%] box-border p-4 sm:p-8 md:p-20'>
            <h1 className='text-sm md:text-lg font-medium drop-shadow-md'>Detalles de Producto</h1>
            <h2 className='font-light text-sm md:text-base drop-shadow-md'>{details.title}</h2>
            <p className='font-light text-sm md:text-base drop-shadow-md'>${details.price}</p>
            <div className='grid'>
                <p className='font-light text-sm md:text-base'>Nuevo</p>
                
                <button className='font-serif w-[200px] mt-3 border-2 hover:bg-slate-300 bg-orange-200 
                text-emerald-900' onClick={() => addShoppingCar(details.id)}>Añadir al carrito</button>
                <div className='grid grid-rows-1 gap-4'>
                    <img src={details.image} alt={details.title} className='mt-4 shadow-lg'/>
                    
                    <div className='mt-5'>
                        <p className='font-light text-sm md:text-base md:w-[600px] lg:w-[600px]'><b className='font-medium'>Descripcion:</b> {details.description}.</p>
                    </div>
                </div>
            </div>
        </div>
    }
    </>
  )
}
