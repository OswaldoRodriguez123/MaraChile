import { useState, createContext, useContext } from 'react'

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    
    const [cart, setCart] = useState([]);
    const handleAddItem = (cart) => {
        setCart(cart);
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            handleAddItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
