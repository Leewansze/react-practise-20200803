import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }
    }

    handleDecrease = () =>{
        this.setState( (prestate) => ({
            value : prestate.value - 1
        }))
        this.props.onDecreaseCounter();
    }


    handleIncrement = () =>{
        this.setState( (prestate) => ({
            value : prestate.value + 1
        }))
        this.props.onIncrementCounter();
    }
    

    componentWillUnmount (){
        const preValue = this.state.value;
        this.props.updateTotalValue(preValue);
    }

    render() {
        return (
            // <div>
            //     <button onClick={() => { this.props.onDecreaseCounter(this.props.counterId) }}>-</button>
            //     <mark>{this.props.value[this.props.counterId]}</mark>
            //     <button onClick={() => { this.props.onIncrementCounter(this.props.counterId) }}>+</button>
            // </div>
            <div>
                <button onClick={this.handleDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
    }

}


export default Counter;











    // handleIncrease = () => {
    //     this.setState(
    //         (preState) =>({
    //             value: preState.value + 1
    //         })
    //     )
    //     // this.props.handleIncrease()
    // }

    // handleDecrease = () =>{
    //     this.setState(
    //         (preState) => ({
    //             value: preState.value - 1
    //         })
    //     )
    //     this.props.handleDecrease()
    // }

    // static getDerivedStateFromProps(props, state){
    //     if(props.groupSize !== state.number){
    //        return{
    //             // number: props.groupSize,
    //             value: 0
    //        } 
    //     }
    //     return null;
    // }
    // // componentWillUnmount(){
    //     console.log(this.state.value);
    //     this.props.onUpdateSize(this.state.value)
    // }
