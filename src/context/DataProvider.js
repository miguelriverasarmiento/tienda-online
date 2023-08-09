import { useEffect, useState, createContext } from "react";
import Data from '../Data.js'

/**
 * @class The context handles global variables and methods. It will be consumed globally.
 */
export const DataContext = createContext(null);

export const DataProvider = (props) => {
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false)
    const [shoppingCar, setShoppingCar] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const productList = Data.items
        if (productList) {
        setProducts(productList)
        }else{
            setProducts([])
        }
    }, [])

    /**
     * @description Determines if the product to be added to the cart already exists or not
     * @param {number} id The id of the product to add to the shopping cart
     * @return {number}
     */
    const addShoppingCar = (id) => {
        const check = shoppingCar.every(item => item.id !== id)
        if (check) {
            const dataProduct = products.filter(prod => {
                return prod.id === id
            })
            setShoppingCar([...shoppingCar, ...dataProduct])
            
        }
    }

    useEffect(() => {
        const dataCar = JSON.parse(localStorage.getItem('dataCar'));
        if (dataCar){
            setShoppingCar(dataCar)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dataCar', JSON.stringify(shoppingCar));
    }, [shoppingCar]);

    useEffect(() => {
        const getTotal = () => {
            const res = shoppingCar.reduce((prev, item) => {
                return prev + (item.price * item.amount);
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [shoppingCar])

    const value = {
        products: [products],
        menu: [menu, setMenu],
        addShoppingCar: addShoppingCar,
        shoppingCar: [shoppingCar, setShoppingCar],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}
