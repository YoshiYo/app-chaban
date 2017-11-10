import React, {Component} from 'react';
import ListItem from '../components/listItem'
import ProgressBar from 'react-materialize'

export default class List extends Component{

    constructor(props){
        super(props)
        this.state = {
            api: null
        }
    };

    getData(){
        const data = this.state.api
        //console.log('data', this.state.api)
        if(data != null){
        if(!Array.isArray(data)){
            return  <ListItem
                key={this.state.api.id}
                id={this.state.api.id}
                date={this.state.api.date}
                start={this.state.api.start}
                end={this.state.api.end}
                total={this.state.api.totale}
                reason={this.state.api.reason}
                link={this.state.api.link}
             />
        }else{
            //console.log('Deuxième partie')
            return this.state.api.map((item)=>{
                return <ListItem
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    start={item.start}
                    end={item.end}
                    total={item.totale}
                    reason={item.reason}
                    link={item.link}
                />
            })}
        }
    }

    componentDidMount(){
        
            this.setState({
                api: this.props.api
            })
            //console.log('PROPPPPPPPPS',this.props.api)   
        }

    render(){
        //console.log('Guillaume',this.props.api)
        const res = this.getData()
        //console.log('RES',res)

        return(
            <div>
                <ul>
                    {res} 
                </ul>
            </div>
        )
    }
}