import React, { useState } from "react";

const ItemCount = ({ item, item: { stock }, initial = 1, onAdd }) => {

	const [quantity, setQuantity] = useState(initial);
	
    const add = () => {
		if (quantity < stock) setQuantity(quantity + 1);
	}

	const remove = () => {
		if (quantity > 1) setQuantity(quantity - 1);
    }
    
    const addToCart = () => {
        const itemCart = { ...item, quantity }
        onAdd(itemCart);
        setQuantity(item.stock >= 1 ? 1 : 0);
    }

	return (
		<div>
            <div className="d-flex mt-2 w-auto bg-white p-2">
                <button onClick={() => remove()} className="btn col-xs-6 btn-dark">-</button>
                <span className="my-auto mx-auto">Cantidad : {quantity} </span>
                <button onClick={() => add()} className="btn col-xs-6 btn-dark float-right">+</button>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button onClick={() => addToCart()} className="btn btn-dark w-100 mt-3">Agregar al Carrito</button>
                </div>
            </div>
        </div>
	);
};

export default ItemCount;
