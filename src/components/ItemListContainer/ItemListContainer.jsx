import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs } from '../../firebase';
import Loading from '../Loading/Loading';
import EmptyList from '../EmptyList/EmptyList';

const ItemListContainer = () => {
	const { id } = useParams();
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let condition = null;
		if (id) condition = ['category', '==', parseInt(id)];
		getDocs('items', condition).then(data => {
			setItems(data);
			setLoading(false);
		}).catch((error) => {
			console.log(error);
		});
		
	}, [id]);

	return (
		<div className="container p-3 my-4">
			<div className="row">
				{!loading && items && <ItemList items={items} />}
				{!loading && items.length === 0 && <EmptyList />}
				{loading && <Loading />}
			</div>
		</div>
	);
};

export default ItemListContainer;
