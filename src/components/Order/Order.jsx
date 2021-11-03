import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Container from '../Container/Container';
import EmptyList from "../EmptyList/EmptyList";
import Loading from '../Loading/Loading';
import { useCartContext } from '../../contexts/CartContext';
import { useHistory } from "react-router-dom";
import { isValidName, isValidPhone, isValidEmail } from '../../helpers/helper';
import { createDoc, updateDocs } from '../../firebase';
import Swal from 'sweetalert2'

function Order() {
    const [loading, setLoading] = useState(false);
    const { cart, clear, getTotal } = useCartContext();
    const { total } = getTotal();
    const handleClear = () => clear();
    const history = useHistory();

    const [buyer, setBuyer] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setBuyer({
          ...buyer,
          [field]: value
        })
    }

    const REQUIRED_MESSAGE = "Este campo es requerido.";

    const findFormErrors = () => {
        const { name, email, emailConfirm, phone } = buyer
        const newErrors = {}

        if (!name || name === '') newErrors.name = REQUIRED_MESSAGE;
        else if (!isValidName(name)) newErrors.name = "El nombre es inválido";
        if (!email || email === '') newErrors.email = REQUIRED_MESSAGE;
        else if (!isValidEmail(email)) newErrors.email = "Correo electrónico inválido";
        if (!emailConfirm || emailConfirm === '') newErrors.emailConfirm = REQUIRED_MESSAGE;
        else if (email !== emailConfirm) newErrors.emailConfirm = "Correo electrónico no coincide";
        if (!phone || phone === '') newErrors.phone = REQUIRED_MESSAGE;
        else if (!isValidPhone(phone)) newErrors.phone = "El número de contacto es inválido";
    
        return newErrors
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = findFormErrors();
        setErrors(newErrors);
        if ( Object.keys(newErrors).length === 0 ) {
            createOrder();
        }
    }
    
    const createOrder = async () => {
        setLoading(true);
        let data = {};
        data.buyer = buyer;
        data.total = total;
        data.items = cart.map(item => {
            return { id: item.id, name: item.title, price: (item.price * item.quantity) };
        });

        const order = await createDoc('orders', data);
        if (order?.id) {
            const orderId = order.id;
            const itemsId = cart.map(c => c.id);
            const condition = ['__name__', 'in', itemsId];
            const data = cart.map(item => {
                return {
                    id: item.id,
                    stock: (item.stock - item.quantity)
                }
            });
            const result = await updateDocs('items', condition, data);
            if (result) {
                Swal.fire('Excelente!', `La orden fue generada exitosamente, el numero de la orden es: ${orderId}`, 'success');
                setLoading(false);
                handleClear();
                history.push('/');
            }
        }
    }

    return (
        <Container>
            {!loading && cart.length > 0 && (
                <div className="row">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                onChange={e => setField('name', e.target.value)}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su correo"
                                onChange={e => setField('email', e.target.value)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirmar Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Confirme su correo"
                                onChange={e => setField('emailConfirm', e.target.value)}
                                isInvalid={!!errors.emailConfirm}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.emailConfirm}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Ingrese su telefono"
                                onChange={e => setField('phone', e.target.value)}
                                isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.phone}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
            )}
            {!loading && cart.length === 0 && (
                <EmptyList />
            )}
            {loading && <Loading />}
        </Container>
    )
}

export default Order
