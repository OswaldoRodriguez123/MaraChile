import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {

	const [quantity, setQuantity] = useState(initial);
	
    function add() {
		if (quantity < stock) setQuantity(quantity + 1);
	}

	function remove() {
		if (quantity > 1) setQuantity(quantity - 1);
	}

	return (
		<div>
            <div className="w-100 d-flex mt-2">
                <button onClick={() => remove()} className="btn col-xs-6 btn-dark mx-auto">-</button>
                <span>Cantidad : {quantity} </span>
                <button onClick={() => add()} className="btn col-xs-6 btn-dark mx-auto">+</button>
            </div>
            <div className="row">
                <button onClick={() => onAdd(quantity)} className="btn btn-dark my-3">Agregar al Carrito</button>
            </div>
        </div>
	);
};

export default ItemCount;
