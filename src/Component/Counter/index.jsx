import React, { Component } from "react";
export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            value :0,
            number: 0
        }
    }

    handleIncrease = () => {
        this.setState(
            (preState) =>({
                value: preState.value + 1
            })
        )
        this.props.handleIncrease()
    }

    handleDecrease = () =>{
        this.setState(
            (preState) => ({
                value: preState.value - 1
            })
        )
        this.props.handleDecrease()
    }

    static getDerivedStateFromProps(props, state){
        if(props.groupSize !== state.number){
           return{
                number: props.groupSize,
                value: 0
           } 
        }
        return null;
    }
    // componentWillUnmount(){
    //     console.log(this.state.value);
    //     this.props.onUpdateSize(this.state.value)
    // }

    render(){
        return(
            <div>
                <button onClick={this.handleDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.handleIncrease}>+</button>
            </div>
        )
    }
}