// JScript source code
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*const m1=<table><tr><th>first</th><th>Second</th></tr><tr><td>{5+10}</td><td>{3+6}</td></tr></table>
const m2=<div><h1>head1</h1><br/><h1>head2</h1></div>;

class Car extends React.Component
{
    constructor()
    {
        super();
        this.state={color:"Red", brand:"Ford"};
    }
    change=()=>{this.setState({color:"blue"});}
    render()
    {
        return <div><h1>I am a {this.props.type} {this.state.color} car of {this.state.brand} </h1> <button onClick={this.change}>Click to change color</button></div>;
     }
}             

class Newcar extends React.Component
{
    render()
    {
        return <div><Bike/><Car type="good"/><h2>I am a {this.props.size} car</h2></div>
     }
}


ReactDOM.render(<Newcar type="bad1" size="big"/>,document.getElementById('root'));*/



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
