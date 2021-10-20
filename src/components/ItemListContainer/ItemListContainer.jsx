import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import products from "../../data/products.json";
import Loading from '../Loading/Loading';

const ItemListContainer = () => {
	const { id } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems([]);
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
			if(id) data = data.filter(i => i.category === parseInt(id));
			setItems(data);
		}).catch((error) => {
			console.log(error);
		});
		
	}, [id]);

	return (
		<div className="container p-3 my-4">
			<div className="row">
				{items && <ItemList items={items} />}
				{items.length === 0 && <Loading />}
			</div>
		</div>
	);
};

export default ItemListContainer;
