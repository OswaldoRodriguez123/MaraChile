import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../contexts/CartContext';
import { createDoc, updateDocs } from '../../firebase';
import CartItem from '../CartItem/CartItem';
import Loading from '../Loading/Loading';

function Cart() {
    const { cart, clear } = useCartContext();
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
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

    const createOrder = async () => {
        setLoading(true);
        let data = {};
        data.buyer = { name: 'Oswaldo Rodriguez', phone: '9999999', email: 'oswaldo_rodriguez_1@hotmail.com' };
        data.total = total;
        data.items = cart.map(item => {
            return { id: item.id, name: item.title, price: (item.price * item.quantity) };
        });

        const order = await createDoc('order', data);
        if (order?.id) {
            const id = cart.map(c => c.id);
            const condition = ['__name__', 'in', id];
            const data = cart.map(item => {
                return {
                    id: item.id,
                    stock: (item.stock - item.quantity)
                }
            });
            const result = await updateDocs('items', condition, data);
            if (result) {
                alert('Muchas gracias por su compra');
                setLoading(false);
                handleClear();
                history.push('/');
            }
        }
    }

    return (
        <div className="container p-3 my-4">
            {!loading && cart.length > 0 && (
                <div>
                    <div>
                        <h4>
                            Carro: {quantity} {quantity.length !== 1 ? 'Productos' : 'Producto'}
                            <FontAwesomeIcon icon={faTrash} className="mx-2 fa-xs" role="button" onClick={handleClear} title="Limpiar el carrito" />
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
                                <div className="card bg-light" style={{ minHeight: '9em' }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <h5 className="card-title">Resumen de la compra</h5>
                                            </div>
                                            <div className="col-12">
                                                <h6 className="card-subtitle">Total: {formatCurrency(total)}</h6>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <button className="btn btn-dark" onClick={createOrder}>Terminar mi compra</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!loading && cart.length === 0 && (
                <div className="d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
                    <div className="mx-2">No hay items disponibles</div>
                    <Link to={`/`}><button className="btn btn-dark">Volver</button></Link>
                </div>
            )}
            {loading && <Loading />}
        </div>
    )
}

export default Cart
