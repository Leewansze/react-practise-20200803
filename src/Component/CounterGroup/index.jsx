
import React, {Component} from 'react'
import Counter from "../Counter/index"
export default class CounterGroup extends Component{
    constructor(){
        super();
        this.state = {
            size: 6
        }
    }

    render(){
        const initArray = [...Array(this.state.size).keys()]
        return(
            <div>
                {
                    initArray.map(key => <Counter key={key}/>)
                }
            </div>
        )
    }
}