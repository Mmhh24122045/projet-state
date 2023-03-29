import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    Person :{ 
      fullName:'hasna',
      bio: 'sssss',
      profession: 'developpment',
      
    } ,
    show : true,
      count:0,
  }
 
  // func = () =>{ this.setState({this.Person.fullName})};
  handleShow=()=>this.setState({show:!this.state.show});

componentDidMount(){
  console.log('the compenent is rendered')
}

componentDidUpdate(){
  console.log('the sate is updated')
}

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>{this.state.show ? 'Button' : 'show'}
        </button>
        <h3>{this.state.count}</h3>
        {
          this.state.show && 
  
        <div>

        <h2>FullName:{this.state.Person.fullName}</h2>
        <h2>Bio:{this.state.Person.bio}</h2>
        <img src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'/> 
        <h2>Profession:{this.state.Person.profession}</h2>

        </div>
  }
         componentDidMount() {

         setInterval(() => this.setState({count:this.state.count+1}), 1000)
    }  

      </div>
    )
  }
}

