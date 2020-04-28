import React, { Component } from 'react';
import propTypes from 'prop-types';


export default class Ingredients extends Component {
    render() {
        return (
            <div className="container">
                <span>{this.props.name}</span>
                <button onClick={()=>this.props.add(this.props.name)}>+</button>
                <button onClick={()=>this.props.remove(this.props.name)}>-</button>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

Ingredients.propTypes ={
    name:propTypes.string,
    value:propTypes.number
}
