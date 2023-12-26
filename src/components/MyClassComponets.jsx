import React from "react";
class MyClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };



    // you will need to include this 2 lines if you r not using arrow function when defining your methods 
  //   this.incrimanrateCount = this.incrimanrateCount.bind(this);
  //   this.dicrimanrateCount = this.dicrimanrateCount.bind(this);
  }


  
  incrementCount = () => {
    // this.setState((prevState) => ({
    //   count: prevState.count + 1,
    // }));

    this.setState({
      count: this.state.count + 1 
    })
  };

  decrementCount = () => {
      this.setState({count: this.state.count-1})
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}
export default MyClassComponent;
