import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ addToCardWidget }) => {

	const [items, setItems] = useState([]);

	const getItems = new Promise((resolve, reject) => {
		const data = {
			status: 200,
			message: 'OK',
			rows: [
				{
					id: 1,
					title: "God of War",
					description: "Prueba",
					price: 35000,
					pictureUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/125FC/production/_103206257_sandwich.png",
					stock: 4
				}
			],
		}
		setTimeout(() => {
			if (data.status === 200) {
				resolve(data.rows);	
			} else {
				reject(data.message)
			}
		}, 3000);
	});

	useEffect(() => {
		if (items.length === 0) {
			getItems.then(data => {
				setItems(data);
			}).catch((error) => {
				console.log(error);
			});
		}
	}, [items])
	
	return (
		<div className="container p-3 my-4">
			<div className="row">
				{ items && <ItemList items={items} addToCardWidget={addToCardWidget} /> }
			</div>
		</div>
	);
};

export default ItemListContainer;
