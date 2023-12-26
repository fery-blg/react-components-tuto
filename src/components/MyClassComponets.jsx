import React from "react";
import Myfuncomponents from "./Myfuncomponents";
class MyClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    // you will need to include this 2 lines if you r not using arrow function when defining your methods

    
    //   this.incrimanrateCount = this.incrimanrateCount.bind(this);
    //   this.dicrimanrateCount = this.dicrimanrateCount.bind(this);

    // even with are function you need to bind you setter if you are passing them as props
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        {this.state.count}
        <Myfuncomponents
          data={{
            setters: {
              inc: this.incrementCount,
              dec: this.decrementCount,
            },
          }}
        />
      </div>
    );
  }
}
export default MyClassComponent;
