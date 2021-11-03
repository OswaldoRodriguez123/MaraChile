import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';

function Routes() {
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
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/cart" >
                    <Cart />
                </Route>
                <Route exact path="/order" >
                   <Order />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
