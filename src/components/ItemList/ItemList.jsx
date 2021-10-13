import React from 'react';
import Item from "../Item/Item";

const ItemList = ({ items, onAdd }) => {

	return (
		items.map(item => 
			<Item
				key={item.id}
				item={item}
				onAdd={onAdd}
			/>
		)
	);
};

export default ItemList;
