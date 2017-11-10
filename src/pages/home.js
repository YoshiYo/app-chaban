import React, { Component } from 'react';

import './../css/App.css';
import Search from '../components/search'
import List from '../components/list'
import axios from 'axios'
import {ProgressBar} from 'react-materialize'

class HomePage extends Component {

  constructor(){
    super();
    this.state = {
      apiPosts: null,
      from: null,
      to: null,
      update: null
    }
  }

  componentDidMount(){
    this.getApi()
  }

  handleChange = (type,value) =>{
      this.setState({
        [type]: value
      }, () => 
      {
        setTimeout(() => {this.getApi()}, 1000);
      })
  
    
  }

  getApi = () => {
    this.setState({
      apiPosts: null
    })
    //console.log('BEFORE CALLING API',this.state.from)
    axios({
      method:'get',
      url:'http://localhost:1337/',
      params:{
        from: this.state.from,
        to: this.state.to
      },
      responseType:'json'
    }).then(res => {
        this.setState({
          apiPosts: res.data,
      })
    }).catch(err => {
      console.log("ERROR :", err)
    })
  }

  render() {
    //console.log('Last render', this.state.apiPosts)

    return (
        <div>
          <header className="App-header">
            <h1 className="App-title">Horaires de fermeture - Pont Chaban Delmas</h1>
            <Search handleChange={this.handleChange}/>
          </header>
          <p className="App-intro">
          </p>
          {!this.state.apiPosts ? (
            <ProgressBar />
          ):(
            <List api={this.state.apiPosts}/>
          )} 
        </div>    
    );
  }
}

export default HomePage;
