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
					},
					{
						id: 2,
						title: "Mario Party",
						description: "Prueba",
						price: 20000,
						pictureUrl: "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/es_LA/games/switch/s/super-mario-party-switch/hero?v=2021091722",
						stock: 6
					},
					{
						id: 3,
						title: "Halo",
						description: "Prueba",
						price: 15000,
						pictureUrl: "https://compass-ssl.xbox.com/assets/8d/ac/8dac2278-aef9-4a8c-bd68-739693d639c2.jpg?n=Halo-Franchise-2020_Super-Hero-1400_1920x1080.jpg",
						stock: 2
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
