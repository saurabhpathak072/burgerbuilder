import React, { Component } from 'react'
import './ingredients.css'
export default class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state={
            Cheese:0,
            Meat:0,
            Butter:0,
            Salad:0,
            counter:0
        }
    }
    
    render() {
       
        return (
            <div className="ingredientcontainer">
                <table className="ingredientcontent align-middle">
                    <tr>
                        <th><h4>Cheese</h4></th>
                        <th><button  onClick={()=>this.setState({Cheese:this.state.Cheese+1})}>+</button> </th>
                        <th><button  onClick={()=>this.setState({Cheese:this.state.Cheese-1})}>-</button> </th>
                        <th><h4>{this.state.Cheese}</h4></th>
                    </tr>
                    <tr>
                        <th><h4>Meat</h4></th>
                        <td><button onClick={()=>this.setState({Meat:this.state.Meat+1})}>+</button> </td>
                        <td><button  onClick={()=>this.setState({Meat:this.state.Meat-1})}>-</button> </td>
                        <th><h4>{this.state.Meat}</h4></th>
                    </tr>
                    <tr>
                        <th><h4>Butter</h4></th>
                        <td><button onClick={()=>this.setState({Butter:this.state.Butter+1})} >+</button> </td>
                        <td><button  onClick={()=>this.setState({Butter:this.state.Butter+1})}>-</button> </td>
                        <th><h4>{this.state.Butter}</h4></th>
                    </tr>
                    <tr>
                        <th><h4>Salad</h4></th>
                        <td><button  onClick={()=>this.setState({Salad:this.state.Salad+1})}>+</button> </td>
                        <td><button  onClick={()=>this.setState({Salad:this.state.Salad+1})}>-</button> </td>
                        <th><h4>{this.state.Salad}</h4></th>
                    </tr>
                </table>
            </div>
        )
    }
}
