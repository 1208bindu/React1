import React, { Component } from 'react';
import Ninjas from './Ninjas';
import Details from './Det';
import AddNinja from './add';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Riya', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshika', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ],
    details:[
      { name: 'Ria', age: 30, belt: 'black', id: 1 },
      { name: 'Yoika', age: 20, belt: 'green', id: 2 },
      { name: 'Crtal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja=(id)=>{
    let ninjas= this.state.ninjas.filter(ninja =>{
      return ninja.id!==id;
    });
    this.setState({
      ninjas:ninjas
    });

  }
  componentDidMount(){
    console.log("Component Mounted");
  }
  componentDidUpdate(prevProps, prevState)
  {
    console.log("Component updated");
    console.log(prevProps,prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <Details dets={this.state.details}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
