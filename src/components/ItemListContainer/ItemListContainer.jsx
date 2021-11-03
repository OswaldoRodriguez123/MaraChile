import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs } from '../../firebase';
import Loading from '../Loading/Loading';
import EmptyList from '../EmptyList/EmptyList';
import Container from '../Container/Container';
import Swal from 'sweetalert2'

const ItemListContainer = () => {
	const { id } = useParams();
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let condition = null;
		if (id) condition = ['category', '==', +id];
		getDocs('items', condition).then(data => {
			setItems(data);
		}).catch((error) => {
			Swal.fire('Error!', error, 'error');
		}).finally(() => {
			setLoading(false);
		});
	}, [id]);

	return (
		<Container>
			<div className="row">
				{!loading && items && <ItemList items={items} />}
				{!loading && items.length === 0 && <EmptyList />}
				{loading && <Loading />}
			</div>
		</Container>
	);
};

export default ItemListContainer;
