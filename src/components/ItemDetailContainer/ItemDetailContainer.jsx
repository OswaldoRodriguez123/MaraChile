import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useCartContext } from '../../contexts/CartContext';
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../data/products.json";
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
    const { id } = useParams();
	const [item, setItem] = useState({});
	const { cart, handleAddItem } = useCartContext();

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

	const handleAdd = (item) => {
		item.stock -= item.quantity;
		setItem(item);
		onAdd(item);
	}

	const onAdd = (item) => {
		let newCart = cart.map((currentItem) => {
			if (currentItem.id === item.id) currentItem.quantity += item.quantity;
			return {
				...currentItem
			}
		});
		!newCart.some(currentItem => currentItem.id === item.id) && newCart.push(item);
		handleAddItem(newCart);
	}
	
	return (
		<div className="container p-3 my-4">
			<div className="row justify-content-center">
				{Object.keys(item).length > 0 && <ItemDetail item={item} onAdd={handleAdd} />}
				{Object.keys(item).length === 0 && <Loading />}
			</div>
		</div>
	);
};

export default ItemDetailContainer;
