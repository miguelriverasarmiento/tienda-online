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
        const check = shoppingCar.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = products.filter(product => {
                return product.id === id
            })
            setShoppingCar([...shoppingCar, ...data])
        }else{
            alert("The product already exists in the shopping cart")
        }
    }

    const value = {
        products: [products],
        menu: [menu, setMenu],
        addShoppingCar: addShoppingCar,
        shoppingCar: [shoppingCar, setShoppingCar]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}
