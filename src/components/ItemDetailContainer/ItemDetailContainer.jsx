import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../data/products.json";
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
    const { id } = useParams();
	const [item, setItem] = useState({});

	useEffect(() => {
		setItem({});
		const getItem = new Promise((resolve, reject) => {
			const data = {
				status: 200,
				message: 'OK',
				rows: products.find(p => p.id === parseInt(id))
			}
			setTimeout(() => {
				if (data.status === 200) {
					resolve(data.rows);
				} else {
					reject(data.message)
				}
			}, 3000);
		});
		getItem.then(data => {
			setItem(data);
		}).catch((error) => {
			console.log(error);
		});
	}, [id]);

	return (
		<div className="container p-3 my-4">
			<div className="row justify-content-center">
				{Object.keys(item).length > 0 && <ItemDetail item={item} setItem={setItem} />}
				{Object.keys(item).length === 0 && <Loading />}
			</div>
		</div>
	);
};

export default ItemDetailContainer;
