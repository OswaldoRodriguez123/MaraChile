import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ onAdd }) => {

	const [items, setItems] = useState([]);

	useEffect(() => {
		
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
						pictureUrl: "https://depor.com/resizer/CFrCLE3UtejO-rCOu0GgrBOrtLg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UFEYHNEDMJHHLEWI2OKTT2SQKM.jpg",
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
				{ items && <ItemList items={items} onAdd={onAdd} /> }
			</div>
		</div>
	);
};

export default ItemListContainer;
