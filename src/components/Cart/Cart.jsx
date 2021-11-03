import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import { formatCurrency } from "../../helpers/helper";
import EmptyList from "../EmptyList/EmptyList";
import Container from '../Container/Container';
import "./Cart.css";

function Cart() {
    const { cart, clear, getTotal } = useCartContext();
    const { total, quantity } = getTotal();
    const history = useHistory();

    const handleClear = () => clear();

    const goToOrder = () => {
        history.push('/order');
    }

    return (
        <Container>
            {cart.length > 0 && (
                <div>
                    <div>
                        <h4>
                            Carro: {quantity} {quantity.length !== 1 ? 'Productos' : 'Producto'}
                            <FontAwesomeIcon icon={faTrash} className="mx-2 fa-xs" role="button" onClick={handleClear} title="Limpiar el carrito" />
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-7 col-md-8">
                            {cart.map(item =>
                                <CartItem
                                    key={item.id}
                                    item={item}
                                />
                            )}
                        </div>
                        <div className="col-5 col-md-4">
                            <div className="row">
                                <div id="cartDetail" className="card bg-light">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <h5 className="card-title">Resumen de la compra</h5>
                                            </div>
                                            <div className="col-12">
                                                <h6 className="card-subtitle">Total: {formatCurrency(total)}</h6>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <button className="btn btn-dark" onClick={goToOrder}>Terminar mi compra</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {cart.length === 0 && (
                <EmptyList />
            )}
        </Container>
    )
}

export default Cart
