import React from 'react'
import './BurgerSpace.css'
function BurgerSpace(props) {
    let emp;
    if (props.burgerIngredients!==0){
        emp=props.burgerIngredients;
    }
    else{
         emp='My burger will be shown here';
    }
    return (
        <div className="space">
            <div className="BurgerIngredientsContainer">
          <p>Bread</p>
          <h3 className="info">{emp}</h3>
          <p>Bread</p>
          </div>
        </div>
    )
}

export default BurgerSpace
