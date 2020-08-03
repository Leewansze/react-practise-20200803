
import React, {Component} from 'react'
import Counter from "../Counter/index"
export default class CounterGroup extends Component{
    constructor(){
        super();
        this.state = {
            size: 0,
            totalNumber: 0,
        }
    }

    handleResize = (event) => {
      var check = (event.target.value).replace(/[^0-9]/g, "")
      this.setState({
        size: (check) ? parseInt(check):0,
        totalNumber:0
      })
    }

    handleTotalNumberIncrease = () =>{
      this.setState(
        (preState) => ({
          totalNumber : preState.totalNumber + 1
        })
      )
    }

    handleTotalNumberDecrease = () =>{
      this.setState(
        (preState) => ({
          totalNumber : preState.totalNumber - 1
        })
      )
    }

    // handleChangeSize = () => {
    //   this.setState({
    //     totalNumber: 0
    //   })
    // }

    render(){
        const initArray = [...Array(this.state.size).keys()]
        return(
          <div>
            <label>Group size:</label>
            <input onBlur={this.handleResize} /><br/>
            <label>TotalValue: {this.state.totalNumber}</label>
              {
                initArray.map(key => <Counter 
                  handleIncrease={this.handleTotalNumberIncrease}
                  handleDecrease={this.handleTotalNumberDecrease}
                  // handleChangeSize={this.handleChangeSize}
                  handlekey={key}
                  groupSize={this.state.size}/>)
              }
          </div>
        )
    }
}