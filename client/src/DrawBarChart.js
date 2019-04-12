import React, { Component } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';
import './DrawBarChart.css'

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
          fontSize={18}
          fill="#666" 
          transform="rotate(-50)">
            {payload.value}
        </text>
      </g>
    );
  }
}

export default class DrawBarChart extends Component {
  render() {

    const h4Style = {
      color: 'navy',
      textAlign: 'center',
      fontFamily: 'Space Mono'
    };

    const data = [
      {
        "Job_Satisfaction": "Somewhat dissatisfied + Extremely dissatisfied",
        "Percent": 0.19572327,
        "n": 778
      },
      {
        "Job_Satisfaction": "Neither satisfied nor dissatisfied",
        "Percent": 0.122515723,
        "n": 487
      },
      {
        "Job_Satisfaction": "Extremely satisfied + Somewhat satisfied",
        "Percent": 0.678742138,
        "n": 2698
      },
      {
        "Job_Satisfaction": "N/A",
        "Percent": 0.003018868,
        "n": 12
      }
    ]

    return (
      <div id="barplot">
        <h4 style={h4Style}>STEM Job Satisfaction</h4>
        <BarChart
          width={800}
          height={700}
          // data={this.props.data}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 200,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="Job_Satisfaction" height={60} tick={<XAxisTickLabel />} interval={0} /> */}
        <XAxis dataKey="Job_Satisfaction" height={60} tick={<XAxisTickLabel />} interval={0} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar 
            type="monotone" 
            // dataKey="med_annual_wage_2017" 
            dataKey="Percent"
            stroke="#666" 
            fill="lightblue" 
            // label={<DataPointLabel />} 
          />
        </BarChart>
      </div>
    );
  }
}