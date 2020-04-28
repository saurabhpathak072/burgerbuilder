import React, { Component } from 'react';
import './OrderForm.scss';

import Axios from 'axios';
import { element } from 'prop-types';

export class OrderForm extends Component {
    state = {
        formElements:{
            name:{
                type:'text',
                value:'',
                placeholder: 'enter your name here',
            },
            phone:{
                type:'number',
                value:'',
                placeholder:'enter your Number',
            },
            address:{
                type:'textarea',
                value:'',
                placeholder:'Delivery Address',
                style:{height:'100px'}
            }
        }
    }

    inputHandler =(event) =>{
        let formElements =this.state.formElements;
        formElements[event.target.id].value=event.target.value;
        this.setState({
            formElements:formElements
        })
    }

    placeOrderHandler=()=>{
        let order ={};
        Object.keys(this.state.formElements).map(element=>{
            return order[element] = this.state.formElements[element].value
        })
        order['order']=this.props.order;
        Axios.post('https://buildmyburger-f1671.firebaseio.com/orders.json', order)
        .then(response => console.log(response))
        .catch(error=>console.log(error));

        this.props.placeOrder(true);
    }
    
    
    render() {
        let formElements =Object.keys(this.state.formElements).map((element)=>{
            let inputElement=this.state.formElements[element];
            return(
                <input
                type={inputElement.type}
                value={inputElement.value}
                placeholder={inputElement.placeholder}
                key={element}
                style={inputElement.style}
                className='InputElement'
                id={element}
                onChange={this.inputHandler} />
            )
        })
        return (
            <div>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'white' ,padding:'10px 10px'}}>
                <h3>Please add your delivery details here.</h3>
                {formElements}
                <button onClick={this.placeOrderHandler}>Place Order</button>
            </div>  
            </div>
        )
    }
}

export default OrderForm
