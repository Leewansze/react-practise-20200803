import React, { Component } from "react";
export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            value :0
        }
    }

    onIncrease = () => {
        this.setState(
            (preState) =>({
                value: preState.value + 1
            })
        )
    }

    onDecrease = () =>{
        this.setState(
            (preState) => ({
                value: preState.value - 1
            })
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>
        )
    }
}