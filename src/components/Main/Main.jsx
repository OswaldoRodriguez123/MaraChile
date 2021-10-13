import React from 'react';
import NavBar from '../NavBar/NavBar';
import Routes from '../Routes/Routes';
import { useState } from 'react';

function Main() {

	const [cart, setCart] = useState([]);

	const onAdd = (item) => {
		let newCart = cart.map((currentItem) => {
			if (currentItem.id === item.id) currentItem.quantity += item.quantity;
			return {
				...currentItem
			}
		});
		!newCart.some(currentItem => currentItem.id === item.id) && newCart.push(item);
		setCart(newCart);
	}

	return (
		<div>
			<NavBar cart={cart} />
			<Routes onAdd={onAdd} />
		</div>
	);
}

export default Main;
