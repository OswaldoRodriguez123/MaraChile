import React from 'react';

const ItemListContainer = ({ greeting, user }) => {
	return (
		<div>
			<h2 className='text-center p-5'>
				{greeting} {user}
			</h2>
		</div>
	);
};

export default ItemListContainer;
