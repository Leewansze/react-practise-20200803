
import React, { Component } from 'react'
import Counter from "../Counter/index"
import store from "../../redux/store.js";
import { connect } from 'react-redux'

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  updateTotalValue = (value) => {
      this.props.changeTotalValue(value);
  }

  render() {
    const initArray = [...Array(this.props.size).keys()]

    return (
      <div>
        <label>Group size:</label>
        <input onChange={((e) => { this.props.changeSize(parseInt(e.target.value)) })} />
        <div>
          <label>TotalValue: {this.props.total}</label>
        </div>
        {
          initArray.map(key => <Counter key={key}
            onIncrementCounter={this.props.onIncrement}
            onDecreaseCounter={this.props.onDecrease}
            updateTotalValue = {this.updateTotalValue}/>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { totalValue, size } = state
  return { total: totalValue, size: size }
}


const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: "increment"}),
  onDecrease: () => dispatch({ type: "decrement"}),
  changeSize: (size) => dispatch({ type: "resize", payload: size }),
  changeTotalValue : (totalValue) => dispatch({ type: "changeTotalValue", payload: totalValue })
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);



// export default class CounterGroup extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             size: 0,
//             totalNumber: 0,
//         }
//     }

//     handleResize = (event) => {
//       var check = (event.target.value).replace(/[^0-9]/g, "")
//       this.setState({
//         size: (check) ? parseInt(check):0,
//         totalNumber:0
//       })
//     }

//     handleTotalNumberIncrease = () =>{
//       this.setState(
//         (preState) => ({
//           totalNumber : preState.totalNumber + 1
//         })
//       )
//     }

//     handleTotalNumberDecrease = () =>{
//       console.log("1111+", this.state.totalNumber)
//       this.setState(
//         (preState) => ({
//           totalNumber : preState.totalNumber - 1
//         })
//       )
//     }

//     // onUpdateSize = (preValue) => {
//     //   console.log("---"+ preValue);
//     //   this.setState(
//     //     (preState) => ({
//     //       totalNumber : preState.totalNumber - preValue
//     //     })
//     //    )
//     // }
//     render(){
//         const initArray = [...Array(this.state.size).keys()]
//         return(
//           <div>
//             <label>Group size:</label>
//             <input onBlur={this.handleResize} /><br/>
//             <label>TotalValue: {this.state.totalNumber}</label>
//               {
//                 initArray.map(key => <Counter 
//                   // handleIncrease={this.handleTotalNumberIncrease}
//                   // handleDecrease={this.handleTotalNumberDecrease}
//                   // onUpdateSize={this.onUpdateSize}
//                   handlekey={key}
//                   groupSize={this.state.size}
//                   store={this.props.store}
//                   />)
//               }
//           </div>
//         )
//     }
// }