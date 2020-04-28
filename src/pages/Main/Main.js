import React, { Component } from 'react';
import Ingredients from './../../components/Ingredients/Ingredients';
import Header from '../../components/Header/Header';
import BurgerSpace from '../../components/BurgerSpace/BurgerSpace';
import './Main.css';
import {camelize} from './../../utility';
import Modal from './../../components/Modal/Modal';
import Axios from 'axios';
import Orders from './../../components/Orders/Orders'


export class Main extends Component {
    state = {
        ingredients:null,
        showOrder : false
    }

    // addCheeseHandler = () =>{
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Cheese:this.state.Ingredients.Cheese+1
    //         }
    //     })
    // }

    // addMeatHandler = () =>{
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Meat:this.state.Ingredients.Meat+1
    //         }
    //     })
    // }

    // addButterHandler = () =>{
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Butter:this.state.Ingredients.Butter+1
    //         }
    //     })
    // }

    // addSaladHandler = () =>{
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Salad:this.state.Ingredients.Salad+1
    //         }
    //     })
    // }


    // removeCheeseHandler = () =>{
    //     this.state.Cheese !== 0 &&
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Cheese:this.state.Ingredients.Cheese-1
    //         }
    //     })
    // }

    // removeMeatHandler = () =>{
    //     this.state.Meat !== 0 &&
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Meat:this.state.Ingredients.Meat-1
    //         }
    //     })
    // }

    // removeButterHandler = () =>{
    //     this.state.Butter !== 0 &&
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Butter:this.state.Ingredients.Butter-1
    //         }
    //     })
    // }

    // removeSaladHandler = () =>{
    //     this.state.Salad !==0 &&
    //     this.setState({
    //         Ingredients:{...this.state.Ingredients,
    //             Salad:this.state.Ingredients.Salad-1
    //         }
    //     })
    // }
    componentDidMount(){
        Axios.get('https://burger-builder-d03b8.firebaseio.com/ingredients.json')
        .then(response =>{
            this.setState({
                ingredients:response.data
            },console.log("ingredients state",this.state.ingredients));
        })
        .catch(error => {console.log(error)})
    }

    addHandler = (ingredient) =>{
        
        console.log("AddHandler",ingredient);
        let changedIngredient = ingredient.toLowerCase();
        console.log("Changed",changedIngredient);
        let newIngredients =this.state.ingredients;
        console.log("newIngredient",newIngredients[changedIngredient]);
        newIngredients[changedIngredient] = newIngredients[changedIngredient] + 1;
        console.log("NewchangedIngrdients",newIngredients[changedIngredient]);
        this.setState({
            ingredients:newIngredients
        })

    }

    removeHandler = (ingredient) =>{ 
        let changedIngredient = ingredient.toLowerCase();
        let newIngredients = this.state.ingredients;
       
        newIngredients[changedIngredient] !== 0 &&(
        newIngredients[changedIngredient]=newIngredients[changedIngredient]-1);
        this.setState({
            ingredients:newIngredients
        })
    }

    orderClickHandler =()=>{
        this.setState({
            showOrder:true
        })
    }

    placeOrderHandler =()=>{
        this.setState({
            showOrder:false
        },alert('Your order is successfully place!'));

    }

    render() {
        let orders =null;
        let ingredients=null;
        let burgerIngredients =null;
        if(this.state.ingredients !==null){

        let ingredientsName= Object.keys(this.state.ingredients);
         ingredients = ingredientsName.map((ingredient)=>{
            console.log("Ingredient",ingredient);
            return (
           
            <Ingredients
             name={ingredient}
             add={this.addHandler}
             remove={this.removeHandler}
             key={ingredient}
             value={this.state.ingredients[ingredient]}
             />

            )
        });
        let order =<Orders ingredients={this.state.ingredients} ingredientsName={ingredientsName} placeOrder={this.placeOrderHandler}/>
        
        burgerIngredients = ingredientsName.map(ingredient =>{
            let a = [];
            if(this.state.ingredients[ingredient]>0){
                for(let i=0;i<this.state.ingredients[ingredient];i++){
                a.push(<p key={"ingredient_"+i}>{ingredient}</p>)
                }
            }
            return a;
        })
     
        orders = <div>{order}</div>
        // let order = IngredientsName.map(Ingredient =>{
        //     return (
        //     <p key={Ingredient}>{Ingredient}:{this.state.Ingredients[Ingredient]}</p>
        //     )
        // })
    // let orders =<div>{order}</div>
        }
        return (
            <div>
               <Header />
               <BurgerSpace burgerIngredients={burgerIngredients}/>
               <div className="IngredientsContainer">
                  {ingredients}

               </div>
               <div className='Footer'>
                    <button onClick={this.orderClickHandler}>Order Now</button>
                </div>
                {
                   this.state.showOrder?
                   <Modal 
                    title = 'your order'
                    content={orders} />:
                    null
                }
            </div>
        )
    }
}

export default Main
