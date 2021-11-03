import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDocs } from '../../firebase';
import Loading from '../Loading/Loading';
import EmptyList from '../EmptyList/EmptyList';
import Container from '../Container/Container';
import Swal from 'sweetalert2'

const ItemDetailContainer = () => {
    const { id } = useParams();
	const [item, setItem] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const condition = ['__name__', '==', id];
		getDocs('items', condition).then(data => {
			setItem(data[0]);
			setLoading(false);
		}).catch((error) => {
			Swal.fire('Error!', error, 'error');
		});
	}, [id]);

	return (
		<Container>
			<div className="row justify-content-center">
				{!loading && Object.keys(item).length > 0 && <ItemDetail item={item} setItem={setItem} />}
				{!loading && Object.keys(item).length === 0 && <EmptyList />}
				{loading && <Loading />}
			</div>
		</Container>
	);
};

export default ItemDetailContainer;
