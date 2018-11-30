import * as React from "react";
import NumberDisplayer from "./NumberDisplayer";
import * as styles from './NumberPicker.css'

const numberPickerStyle: React.CSSProperties = {
  width: '150px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  border: '1px solid #EDEEF4',
  boxShadow: '0 2px 1px 0 rgba(0, 0, 0, 0.03)',
  color: '#385871',
  borderRadius: '5px'
}

const numberPickerLabel:React.CSSProperties = {
  width: '100px',
  height: '32px',
  textAlign: 'center',
  padding: '0',
  outline: 'none',
  fontFamily: 'OpenSans-Bold, sans-serif',
  color: '#385871',
  borderRadius: '5px',
  lineHeight: '30px',
 }
 const numberPickerButtons:React.CSSProperties = {
     backgroundColor: 'blueviolet',
     border: 'none',
     color: 'white',
     width: '30px',
     height: '30px',
     textAlign: 'center',
     textDecoration: 'none',
     display: 'inline-block',
     borderRadius: '50%',
     fontSize: '25px',
     paddingBottom: '5px',
     lineHeight: '25px',
     cursor: 'pointer',
     outline: 'none',
 }


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
    return <div className={styles.container}>
      <button className={styles.button} onClick={this.increaseCounter}>+</button>
      <span className={styles.label}>{this.state.counter}</span>
      <button className={styles.button} onClick={this.decreaseCounter}>-</button>
    </div>;
   }
}
