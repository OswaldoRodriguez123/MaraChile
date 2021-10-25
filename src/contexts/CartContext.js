import { useState, createContext, useContext } from 'react'

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        item = { ...item, quantity }
        let newCart = cart.map((currentItem) => {
            if (currentItem.id === item.id) currentItem.quantity += item.quantity;
            return {
                ...currentItem
            }
        });
        !newCart.some(currentItem => currentItem.id === item.id) && newCart.push(item);
        setCart(newCart);
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }
    const clear = () => setCart([]);
    const isInCart = (id) => cart.some(item => item.id === id);

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
