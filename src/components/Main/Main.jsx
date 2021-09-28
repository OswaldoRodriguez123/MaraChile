import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx';

function Main() {
	return (
		<div>
			<NavBar />
			<ItemListContainer greeting='Bienvenido' user='Oswaldo Rodriguez' />
		</div>
	);
}

export default Main;
