import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Card} from 'react-materialize'
import {Link} from 'react-router-dom'


export default class ListItem extends Component{

    static propTypes = {
        date : PropTypes.string.isRequired,
    }

    constructor(props){
        super(props)
    };

    render(){

        //console.log(this.props.key)
        return(
             <Card title={'Fermeture le ' + this.props.date + ' - ' + this.props.start + ' à '+ this.props.end}>    
                <Link to={`/${this.props.id}`}>
                    Voir plus de détails
                </Link>
            </Card>                 
        )
    }
}