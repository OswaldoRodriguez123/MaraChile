import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";

const CartWidget = ({ cartCounter }) => {
	
	const cartWidgetIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	
	return (
		<div className="ps-5">
			<p>{cartWidgetIcon} {cartCounter}</p>
		</div>
	);
};

export default CartWidget;
