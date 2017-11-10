import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios'
import List from '../components/list'
import Button from 'react-materialize'

class SinglePage extends Component {

  constructor(){
    super();
    this.state={
      apiPosts: null,
      err : null
    }
  }

  componentWillReceiveProps(props) {
    this.getApi(props.location.pathname)
  }


  componentDidMount(){
   this.getApi(this.props.location.pathname)
  }

  getApi = (params) => {
    this.setState({
      apiPosts: null,
    })
    axios({
      method:'get',
      url:'http://localhost:1337'+params,
      responseType:'json'
    }).then(res => {
        this.setState({
          apiPosts: res.data,
        })
      }).catch(err => {
        this.setState({
          err: err
        })
      }) 
  }
 

  render() {
    
    return (
        <div>
          {!this.state.apiPosts ? (
            <div>Waiting</div>
          ):(
            <div>
            <Link to={`/${this.state.apiPosts.id-1}`}>
              <button>Previous</button>
            </Link>
            <Link to={`/${this.state.apiPosts.id+1}`}>
              <button>Next</button>
            </Link>
            <List api={this.state.apiPosts}/>
            </div>
          )}
          {this.state.err ?(
            <div>404</div>
          ):(
            <div></div>
          )}
        </div>    
    );
  }
}

export default SinglePage;
