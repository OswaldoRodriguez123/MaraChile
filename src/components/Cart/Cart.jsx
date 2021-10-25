import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';

function Cart() {
    const { cart, clear } = useCartContext();
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const formatCurrency = (currency) => new Intl.NumberFormat().format(currency);

    useEffect(() => {
        let total = 0;
        let quantity = 0;
        cart.forEach(item => {
            total += (item.quantity * item.price);
            quantity += item.quantity;
        })
        setTotal(total);
        setQuantity(quantity);
    }, [cart]);

    const handleClear = () => clear();

    return (
        <div className="container p-3 my-4">
            {cart.length > 0 ? (
                <div>
                    <div>
                        <h4>
                            Carro: {quantity} {quantity.length !== 1 ? 'Productos' : 'Producto'}
                            <FontAwesomeIcon icon={faTrash} className="mx-2" role="button" onClick={handleClear} />
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            {cart.map(item =>
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    formatCurrency={formatCurrency}
                                />
                            )}
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="card bg-light" style={{minHeight: '9em'}}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <h5 className="card-title">Resumen de la compra</h5>
                                            </div>
                                            <div className="col-12">
                                                <h6 className="card-subtitle">Total: {formatCurrency(total)}</h6>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
                    <div className="mx-2">No hay items disponibles</div>
                    <Link to={`/`}><button className="btn btn-dark">Volver</button></Link>
                </div>
            )}
        </div>
    )
}

export default Cart
