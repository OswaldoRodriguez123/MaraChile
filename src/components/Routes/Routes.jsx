import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';

function Routes({ onAdd }) {
    return (
        <div>
            <Switch>
				<Route exact path="/" >
					<ItemListContainer />
                </Route>
                <Route path="/category/:id" >
                    <ItemListContainer />
                </Route>
                <Route path="/item/:id" >
					<ItemDetailContainer onAdd={onAdd} />
                </Route>
                <Route exact path="/cart" >
					<Cart />
                </Route>
			</Switch>
        </div>
    )
}

export default Routes
