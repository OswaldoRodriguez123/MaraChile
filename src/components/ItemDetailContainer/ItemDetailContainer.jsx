import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../data/products.json";

const ItemListContainer = ({ onAdd }) => {
    const { id } = useParams();
	const [item, setItem] = useState({});

	useEffect(() => {
		
		const getItem = new Promise((resolve, reject) => {
			const data = {
				status: 200,
				message: 'OK',
				rows: products.find(p => p.id === parseInt(id))
			}
			setTimeout(() => {
                if (data.status === 200) {
                    console.log(data);
					resolve(data.rows);
				} else {
					reject(data.message)
				}
			}, 3000);
        });
        if (item && Object.keys(item).length === 0) {
            getItem.then(data => {
				setItem(data);
			}).catch((error) => {
				console.log(error);
			});
		}
	}, [id, item, setItem]);

	const handleAdd = (item) => {
		item.stock -= item.quantity;
		setItem(item);
		onAdd(item);
	}
	
	return (
		<div className="container p-3 my-4">
			<div className="row justify-content-center">
				{Object.keys(item).length > 0 && <ItemDetail item={item} onAdd={handleAdd} />}
			</div>
		</div>
	);
};

export default ItemListContainer;
