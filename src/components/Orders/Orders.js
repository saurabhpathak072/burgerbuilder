import React from 'react';
import Ingredients from '../Ingredients/Ingredients';

import OrderForm from './OrderForm/OrderForm';

function Orders(props) {
    let orderSummary =props.ingredientsName.map(ingredient=>{
        return(
        <p key={ingredient}>{ingredient}:{props.ingredients[ingredient]}</p>
        )
    })
    return (
        <div>
            {orderSummary}
            <OrderForm placeOrder={props.placeOrder} order={props.ingredients}/>
        </div>
    )
}

export default Orders

