import * as React from "react";
import NumberDisplayer from "./NumberDisplayer";

export interface NumberPickerState {
  counter: number;
}

export default class NumberPicker extends React.Component<{}, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decreaseCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return <div>
      <button onClick={this.increaseCounter}>+</button>
      <span>{this.state.counter}</span>
      <button onClick={this.decreaseCounter}>-</button>
    </div>;
  }
}
