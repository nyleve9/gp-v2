import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class DataPointLabel extends Component {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text 
      x={x} 
      y={y} 
      dy={-4} 
      fill={stroke} 
      fontSize={11} 
      textAnchor="middle">
        {value}
      </text>;
  }
}

class XAxisTickLabel extends Component {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text 
          x={0} 
          y={0} 
          dy={3} 
          textAnchor="end" 
          fontSize="11"
          fill="#666" 
          transform="rotate(-70)">
            {payload.value}
          </text>
      </g>
    );
  }
}

export default class DrawLineChart extends Component {
  state = {
    opacity: {
      jobs2016: 1,
      jobs2026: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;
  
    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }
  
  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;
  
    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }
  
  render() {
    const { opacity } = this.state;
    return (
      <LineChart
        width={800}
        height={700}
        data={this.props.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 200,
        }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="title" height={60} tick={<XAxisTickLabel />} interval={0}/>
        <YAxis />
        <Tooltip />
        <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
        <Line type="monotone" dataKey="jobs2016" strokeOpacity={opacity.jobs2016} stroke="#8884d8" activeDot={{ r: 8 }} label={<DataPointLabel />} />
        <Line type="monotone" dataKey="jobs2026" strokeOpacity={opacity.jobs2026} stroke="#82ca9d" />
      </LineChart>
    );
  }
}