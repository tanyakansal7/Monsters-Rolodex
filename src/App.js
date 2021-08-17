import { Component } from 'react';

import './App.css';
import React from 'react';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.components';
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    
    };
  }
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}));
  }
  handleChange=e=>{
    this.setState({searchField:e.target.value});
  }
  render(){
    const { monsters,searchField}=this.state;
    const filterdMonsters  =monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
         <SearchBox
         placeholder="search monsters"
        //  handleChange={e=>this.setState({searchField:e.target.value})}
         />
        <CardList monsters={filterdMonsters}/>
    </div>
    );
  }
}

export default App;
