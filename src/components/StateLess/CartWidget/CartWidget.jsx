import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";

const CartWidget = () => {
	const cartWidgetIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	const counter = 0;
	return (
		<div className="ps-5">
			<p>{cartWidgetIcon} {counter}</p>
		</div>
	);
};

export default CartWidget;
