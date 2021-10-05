import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx';

function Main() {

	const [cartCounter, setCartCounter] = useState(0);

	const addToCardWidget = (articles) => {
		setCartCounter(cartCounter + articles)
	}

	// useEffect(() => {
	// 	console.log("se agrego un item")
	// }, [cartCounter])

	return (
		<div>
			<NavBar cartCounter={cartCounter} />
			<ItemListContainer addToCardWidget={addToCardWidget} />
		</div>
	);
}

export default Main;
