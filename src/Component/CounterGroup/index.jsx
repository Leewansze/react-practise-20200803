
import React, {Component} from 'react'
import Counter from "../Counter/index"
import store from "../../redux/store.js";

export default class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      total: store.getState()
    } 
  }
  onIncrement = () => {
    store.dispatch({
        type: "increment"
    });
  };

  onDecrement = () => {
      store.dispatch({
          type: "decrement"
      });
  };

  onMakeZero = () => {
    store.dispatch({
        type: 'makeZero'
    });
  };

  handleIncrease = () => {
    this.onIncrement()
    store.subscribe(() =>
        this.setState({
            total: store.getState()
        })
    );
  };

  handleDecrease = () => {
      this.onDecrement()
      store.subscribe(() =>
          this.setState({
              total: store.getState()
          })
      );
  };

  inputCount = (e) => {
      if (e.target.value.match(/[0-9]+/g)) {
          this.setState({
            size: parseInt(e.target.value),
          });
          this.onMakeZero()
      } else {
          this.setState({
            size: 0
          });
          this.onMakeZero()
      }
  };

  render() {
    const initArray = [...Array(this.state.size).keys()]
    return (
      <div>
          <label>Group size:</label>
          <input value={this.state.CounterNsizeum} onChange = {this.inputCount}/>
          <div>
            <label>TotalValue: {store.getState()}</label>
          </div>
          {
            initArray.map(key => <Counter 
              handleDecrease={this.handleDecrease} 
              handleIncrease={this.handleIncrease}
              handlekey={key}
              />)
          }
      </div>
    )
  }
}
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