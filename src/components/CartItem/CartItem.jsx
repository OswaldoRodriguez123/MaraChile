import React, { useState, useEffect } from "react";
import { useCartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item: { id, title, description, price, pictureUrl, quantity }, formatCurrency}) => {

    const { removeItem } = useCartContext();
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const subtotal = quantity * price;
        setSubtotal(subtotal);
    }, [quantity, price]);

    const handleRemove = () => removeItem(id);
    
    return (
        <div className="row">
            <div className="col-12">
                <div className="card bg-light">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <img src={pictureUrl} className="img-fluid" alt="..." />
                            </div>
                            <div className="col-7">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text">{formatCurrency(price)} x {quantity} = {formatCurrency(subtotal)}</p>
                            </div>
                            <div className="col-1 d-flex  align-items-center justify-content-center">
                                <FontAwesomeIcon icon={faTrash} role="button" onClick={handleRemove} title="Eliminar producto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default CartItem;
