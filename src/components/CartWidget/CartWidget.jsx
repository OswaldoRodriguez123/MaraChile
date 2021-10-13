import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";

const CartWidget = ({ cart }) => {

	const [cartCounter, setCartCounter] = useState(0);

	useEffect(() => {
		const cartCounter = cart.reduce((cartCounter, currentItem) => {
			return currentItem.quantity + cartCounter
		}, 0);
		setCartCounter(cartCounter);
	}, [cart])
	
	const cartWidgetIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	
	return (
		<div className="ps-5">
			<p>{cartWidgetIcon} {cartCounter}</p>
		</div>
	);
};

export default CartWidget;
