import React, {Component} from 'react';
import {Row, Button, Icon, Input} from 'react-materialize'


export default class SearchInput extends Component{

    constructor(props){
        super(props)

        this.state = {
            input: null
        }
    }

        handleChange_input1 = (event) =>       
            {
                //console.log(event)
                let value = event.target.value
                var date = new Date(value)
                date = date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear()
                //console.log("Date : ",date)
                this.setState({
                    input: date
                }, () => 
                {
                    return this.props.handleChange(this.props.function,this.state.input)
                })
            }


    render(){
        return(
            <div>
                <input value={this.state.inputValue} type="date" onChange={this.handleChange_input1}></input>
            </div>
        )
    }
}