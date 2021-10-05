import React from 'react';
import Item from "../Item/Item";

const ItemList = ({ items, addToCardWidget }) => {

	return (
		<div className="container p-3 my-4">
			<div className="row">
				{items.map(item => 
						<Item
							key={item.id}
							item={item}
							addToCardWidget={addToCardWidget}
						/>
					)
				}
			</div>
		</div>
	);
};

export default ItemList;
