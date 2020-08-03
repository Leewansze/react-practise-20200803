
import React, {Component} from 'react'
import Counter from "../Counter/index"
export default class CounterGroup extends Component{
    constructor(){
        super();
        this.state = {
            size: 0
        }
    }

    handleResize = (event) => {
      this.setState({
        size: (event.target.value) ? parseInt(event.target.value):0,
      })
    }

    render(){
        const initArray = [...Array(this.state.size).keys()]
        return(
            <div>
              <label>Group size:</label>
              <input onBlur={this.handleResize} />
                {
                    initArray.map(key => <Counter key={key}/>)
                }
            </div>
        )
    }
}