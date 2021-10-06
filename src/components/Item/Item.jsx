import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({
	item: { id, title, description, price, pictureUrl, stock }, onAdd
}) => {

	return (
		<div className="col-sm-12 col-xs-12 col-md-8 col-lg-5 col-xl-4">
			<div className="card bg-light">
				<img src={pictureUrl} className="card-pictureUrl-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">Stock: {stock}</p>
					<ItemCount
						stock={stock}
						onAdd={onAdd}
					/>
				</div>
			</div>
		</div>
	);
};

export default Item;
