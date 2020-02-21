import React, {Component} from 'react';
class Counter extends Component{
constructor(){
  super();
  this.state = {
    count : 0,
  }
}
//This is where the increment goes

increment = () => {
  this.setState ({
    count: this.state.count + 1
  })
}

decrement = () => {
  this.setState ({
    count: this.state.count - 1
  })
}

clear = () => {
  this.setState ({
    count: 0
  })
}

double = () => {
  this.setState ({
    count: this.state.count + 2
  })
}
divide = () => {
    this.setState ({
    count: this.state.count - 2
    })
}


  render() {
    return (

      <div className="container">
      <div className="navbar">Counter</div>
      <div className="counter">
      <h1>{this.state.count}</h1>
      <button type = "button" onClick={this.increment}>Increment</button>
      <button type = "button" onClick={this.decrement}>Decrement</button>
      <button type = "button" onClick={this.clear}>Clear</button>
      <button type = "button" onClick={this.double}>Double Increment</button>
      <button type = "button" onClick={this.divide}>Double Decrement </button>
      </div>
      </div>



    )
  }
}


export default Counter;
