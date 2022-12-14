import React from "react";
import { Data } from './App';

type LineChartProps = {
  data?: Data[],  
  color?: string,
  svgHeight?: number,  
  svgWidth?: number
}

const defaultProps = {
  data: [{x: 0, y: 0}],  
  color: '#2196F3',
  svgHeight: 400,  
  svgWidth: 700
}

const LineChart = (props: LineChartProps = defaultProps) => {
  return <div data-testid = "linechart">
    <h1>{props.data?.map(({x, y}) => `{ ${x}:${y} }`).join('|')}</h1>
  </div>
}

// class LineChart extends Component {

//   getMinX() {
//     const {data} = this.props;
//     return data[0].x;
//   }
//   getMaxX() {
//     const {data} = this.props;
//     return data[data.length - 1].x;
//   }
//   // GET MAX & MIN Y
//   getMinY() {
//     const {data} = this.props;
//     return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
//   }
//   getMaxY() {
//     const {data} = this.props;
//     return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
//   }

//   getSvgX(x) {
//     const {svgWidth} = this.props;
//     return (x / this.getMaxX() * svgWidth);
//   }
//   getSvgY(y) {
//     const {svgHeight} = this.props;
//     return svgHeight - (y / this.getMaxY() * svgHeight);
//   }

//   makePath() {
//     const {data, color} = this.props;
//     let pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";pathD += data.map((point, i) => {
//       return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
//     });
//     return (
//       <path className="linechart_path" d={pathD} style={{stroke: color}} />
//     );
//   }

//   makeAxis() {
//     const minX = this.getMinX(), maxX = this.getMaxX();
//     const minY = this.getMinY(), maxY = this.getMaxY();
//     return (
//       <g className="linechart_axis">
//         <line
//           x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
//           x2={this.getSvgX(maxX)} y2={this.getSvgY(minY)} />
//         <line
//           x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
//           x2={this.getSvgX(minX)} y2={this.getSvgY(maxY)} />
//       </g>
//     );
//   }

//   render() {
//     const {svgHeight, svgWidth} = this.props;
//     return (
//       <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
//         {this.makePath()}
//         {this.makeAxis()}
//       </svg>
//     );
//   }
// }

// LineChart.defaultProps = {
//   data: [],  
//   color: '#2196F3',  
//   svgHeight: 300,  
//   svgWidth: 700
// }

export { LineChart };