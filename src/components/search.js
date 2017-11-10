import React, {Component} from 'react';
import SearchInput from './../components/searchInput'


export default class Search extends Component{

    constructor(props){
        super(props)
    };

    handleChange = (type, value) => {
        this.props.handleChange(type,value)
    }

    render(){
        return(
            <div>
                <SearchInput handleChange={this.handleChange} function="from"/>
                <SearchInput handleChange={this.handleChange} function="to"/>
            </div>
        )
    }
}