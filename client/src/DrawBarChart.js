import React, { Component } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';

class DataPointLabel extends Component {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text 
      x={x} 
      y={y} 
      dy={-2} 
      dx={12} 
      fill={stroke} 
      fontSize={10} 
      textAnchor="middle">
        {value}
    </text>;
  }
}

class XAxisTickLabel extends Component {
  render() {
    const {
      x, y, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text 
          x={0} 
          y={0} 
          dy={3} 
          textAnchor="end" 
          fontSize={11}
          fill="#666" 
          transform="rotate(-70)">
            {payload.value}
        </text>
      </g>
    );
  }
}

export default class DrawBarChart extends Component {
  render() {
    return (
      <BarChart
        width={800}
        height={700}
        data={this.props.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 200,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" height={60} tick={<XAxisTickLabel />} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar 
          type="monotone" 
          dataKey="med_annual_wage_2017" 
          stroke="#666" 
          fill="tan" 
          label={<DataPointLabel />} 
        />
      </BarChart>
    );
  }
}