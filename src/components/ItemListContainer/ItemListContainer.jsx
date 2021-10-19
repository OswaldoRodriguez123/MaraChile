import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import products from "../../data/products.json";

const ItemListContainer = () => {
	const { id } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getItems = new Promise((resolve, reject) => {
			const data = {
				status: 200,
				message: 'OK',
				rows: products
			}
			setTimeout(() => {
				if (data.status === 200) {
					resolve(data.rows);
				} else {
					reject(data.message)
				}
			}, 3000);
		});
		getItems.then(data => {
			let rows = items && id ? data.filter(i => i.category === parseInt(id)) : data;
			setItems(rows);
		}).catch((error) => {
			console.log(error);
		});
		
	}, [id, items]);

	return (
		<div className="container p-3 my-4">
			<div className="row">
				{items && <ItemList items={items} />}
			</div>
		</div>
	);
};

export default ItemListContainer;
