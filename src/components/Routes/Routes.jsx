import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Routes({ onAdd }) {
    return (
        <div>
            <Switch>
				<Route exact path="/" >
					<ItemListContainer onAdd={onAdd} />
                </Route>
                <Route path="/category/:id" >
                    <ItemListContainer onAdd={onAdd} />
                </Route>
                <Route path="/item/:id" >
					<ItemDetailContainer onAdd={onAdd} />
				</Route>
			</Switch>
        </div>
    )
}

export default Routes
