import React, { Component } from 'react';
import { LineChart } from './LineChart';
import './App.css';


interface Data {
  x: number,
  y: number
}

class App extends Component {

  createFakeData() {
    // This function creates data that doesn't look entirely random
    const data:Data[] = [];
    for (let x = 0; x <= 30; x++) {
      const random: number = Math.random();
      const temp:number = data.length > 0 ? data[data.length-1].y : 50;
      const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      data.push({x,y})
    }
    return data;
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">react svg line chart [part 1]</div>
        <LineChart data={this.createFakeData()}/>
      </div>
    )
  }
}
export { App, type Data };