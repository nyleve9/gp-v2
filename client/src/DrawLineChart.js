import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './DrawLineChart.css';

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
      Precipitation: 1,
      Max_Temp: 1,
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

    const h4Style = {
      color: 'navy',
      textAlign: 'center',
      fontFamily: 'Space Mono',
      padding: '2em 1em 0.5em 1em'
    };

    const data = [
      {
        "Year": 1919,
        "Precipitation": 60.34,
        "Max_Temp": 98
      },
      {
        "Year": 1920,
        "Precipitation": 50.43,
        "Max_Temp": 93
      },
      {
        "Year": 1921,
        "Precipitation": 42.2,
        "Max_Temp": 98
      },
      {
        "Year": 1922,
        "Precipitation": 52.5,
        "Max_Temp": 95
      },
      {
        "Year": 1923,
        "Precipitation": 52.52,
        "Max_Temp": 94
      },
      {
        "Year": 1924,
        "Precipitation": 37.66,
        "Max_Temp": 96
      },
      {
        "Year": 1925,
        "Precipitation": 37.68,
        "Max_Temp": 104
      },
      {
        "Year": 1926,
        "Precipitation": 54.5,
        "Max_Temp": 101
      },
      {
        "Year": 1927,
        "Precipitation": 48.71,
        "Max_Temp": 98
      },
      {
        "Year": 1928,
        "Precipitation": 45.95,
        "Max_Temp": 93
      },
      {
        "Year": 1929,
        "Precipitation": 50.67,
        "Max_Temp": 95
      },
      {
        "Year": 1930,
        "Precipitation": 37.8,
        "Max_Temp": 106
      },
      {
        "Year": 1931,
        "Precipitation": 36.4,
        "Max_Temp": 100
      },
      {
        "Year": 1932,
        "Precipitation": 50.47,
        "Max_Temp": 97
      },
      {
        "Year": 1933,
        "Precipitation": 52.64,
        "Max_Temp": 99
      },
      {
        "Year": 1934,
        "Precipitation": 39.5,
        "Max_Temp": 104
      },
      {
        "Year": 1935,
        "Precipitation": 40.08,
        "Max_Temp": 102
      },
      {
        "Year": 1936,
        "Precipitation": 41.13,
        "Max_Temp": 102
      },
      {
        "Year": 1937,
        "Precipitation": 46.11,
        "Max_Temp": 98
      },
      {
        "Year": 1938,
        "Precipitation": 41.2,
        "Max_Temp": 96
      },
      {
        "Year": 1939,
        "Precipitation": 42.47,
        "Max_Temp": 99
      },
      {
        "Year": 1940,
        "Precipitation": 37.01,
        "Max_Temp": 97
      },
      {
        "Year": 1941,
        "Precipitation": 32.34,
        "Max_Temp": 99
      },
      {
        "Year": 1942,
        "Precipitation": 42.59,
        "Max_Temp": 99
      },
      {
        "Year": 1943,
        "Precipitation": 37.49,
        "Max_Temp": 104
      },
      {
        "Year": 1944,
        "Precipitation": 46.89,
        "Max_Temp": 100
      },
      {
        "Year": 1945,
        "Precipitation": 52.04,
        "Max_Temp": 99
      },
      {
        "Year": 1946,
        "Precipitation": 49.36,
        "Max_Temp": 97
      },
      {
        "Year": 1947,
        "Precipitation": 39.68,
        "Max_Temp": 102
      },
      {
        "Year": 1948,
        "Precipitation": 46.4,
        "Max_Temp": 101
      },
      {
        "Year": 1949,
        "Precipitation": 52.08,
        "Max_Temp": 96
      },
      {
        "Year": 1950,
        "Precipitation": 64.26,
        "Max_Temp": 95
      },
      {
        "Year": 1951,
        "Precipitation": 58.39,
        "Max_Temp": 101
      },
      {
        "Year": 1952,
        "Precipitation": 39.81,
        "Max_Temp": 107
      },
      {
        "Year": 1953,
        "Precipitation": 41.27,
        "Max_Temp": 102
      },
      {
        "Year": 1954,
        "Precipitation": 42.73,
        "Max_Temp": 105
      },
      {
        "Year": 1955,
        "Precipitation": 45.43,
        "Max_Temp": 98
      },
      {
        "Year": 1956,
        "Precipitation": 43.94,
        "Max_Temp": 101
      },
      {
        "Year": 1957,
        "Precipitation": 60.07,
        "Max_Temp": 96
      },
      {
        "Year": 1958,
        "Precipitation": 40.9,
        "Max_Temp": 95
      },
      {
        "Year": 1959,
        "Precipitation": 47.97,
        "Max_Temp": 96
      },
      {
        "Year": 1960,
        "Precipitation": 42.42,
        "Max_Temp": 99
      },
      {
        "Year": 1961,
        "Precipitation": 44.94,
        "Max_Temp": 94
      },
      {
        "Year": 1962,
        "Precipitation": 57.57,
        "Max_Temp": 101
      },
      {
        "Year": 1963,
        "Precipitation": 44.36,
        "Max_Temp": 96
      },
      {
        "Year": 1964,
        "Precipitation": 45.01,
        "Max_Temp": 101
      },
      {
        "Year": 1965,
        "Precipitation": 39.67,
        "Max_Temp": 98
      },
      {
        "Year": 1966,
        "Precipitation": 41.92,
        "Max_Temp": 103
      },
      {
        "Year": 1967,
        "Precipitation": 45.22,
        "Max_Temp": 95
      },
      {
        "Year": 1968,
        "Precipitation": 43.93,
        "Max_Temp": 99
      },
      {
        "Year": 1969,
        "Precipitation": 47.27,
        "Max_Temp": 100
      },
      {
        "Year": 1970,
        "Precipitation": 46.93,
        "Max_Temp": 97
      },
      {
        "Year": 1971,
        "Precipitation": 40.65,
        "Max_Temp": 98
      },
      {
        "Year": 1972,
        "Precipitation": 54.41,
        "Max_Temp": 94
      },
      {
        "Year": 1973,
        "Precipitation": 59.78,
        "Max_Temp": 96
      },
      {
        "Year": 1974,
        "Precipitation": 60.7,
        "Max_Temp": 95
      },
      {
        "Year": 1975,
        "Precipitation": 60.58,
        "Max_Temp": 94
      },
      {
        "Year": 1976,
        "Precipitation": 49.57,
        "Max_Temp": 96
      },
      {
        "Year": 1977,
        "Precipitation": 50.71,
        "Max_Temp": 99
      },
      {
        "Year": 1978,
        "Precipitation": 53.44,
        "Max_Temp": 98
      },
      {
        "Year": 1979,
        "Precipitation": 70.12,
        "Max_Temp": 95
      },
      {
        "Year": 1980,
        "Precipitation": 34.92,
        "Max_Temp": 104
      },
      {
        "Year": 1981,
        "Precipitation": 41.68,
        "Max_Temp": 96
      },
      {
        "Year": 1982,
        "Precipitation": 49.43,
        "Max_Temp": 93
      },
      {
        "Year": 1983,
        "Precipitation": 51.72,
        "Max_Temp": 101
      },
      {
        "Year": 1984,
        "Precipitation": 56.49,
        "Max_Temp": 95
      },
      {
        "Year": 1985,
        "Precipitation": 30.92,
        "Max_Temp": 98
      },
      {
        "Year": 1986,
        "Precipitation": 31.6,
        "Max_Temp": 102
      },
      {
        "Year": 1987,
        "Precipitation": 30.23,
        "Max_Temp": 99
      },
      {
        "Year": 1988,
        "Precipitation": 31.41,
        "Max_Temp": 105
      },
      {
        "Year": 1989,
        "Precipitation": 57.03,
        "Max_Temp": 96
      },
      {
        "Year": 1990,
        "Precipitation": 47.09,
        "Max_Temp": 103
      },
      {
        "Year": 1991,
        "Precipitation": 46.94,
        "Max_Temp": 100
      },
      {
        "Year": 1992,
        "Precipitation": 39.84,
        "Max_Temp": 96
      },
      {
        "Year": 1993,
        "Precipitation": 44.38,
        "Max_Temp": 99
      },
      {
        "Year": 1994,
        "Precipitation": 59.77,
        "Max_Temp": 95
      },
      {
        "Year": 1995,
        "Precipitation": 48.84,
        "Max_Temp": 99
      },
      {
        "Year": 1996,
        "Precipitation": 48.62,
        "Max_Temp": 95
      },
      {
        "Year": 1997,
        "Precipitation": 54.95,
        "Max_Temp": 99
      },
      {
        "Year": 1998,
        "Precipitation": 52.01,
        "Max_Temp": 99
      },
      {
        "Year": 1999,
        "Precipitation": 41.82,
        "Max_Temp": 101
      },
      {
        "Year": 2000,
        "Precipitation": 42.43,
        "Max_Temp": 100
      },
      {
        "Year": 2001,
        "Precipitation": 48.56,
        "Max_Temp": 95
      },
      {
        "Year": 2002,
        "Precipitation": 56.63,
        "Max_Temp": 97
      },
      {
        "Year": 2003,
        "Precipitation": 59.47,
        "Max_Temp": 94
      },
      {
        "Year": 2004,
        "Precipitation": 59.18,
        "Max_Temp": 94
      },
      {
        "Year": 2005,
        "Precipitation": 39.31,
        "Max_Temp": 98
      },
      {
        "Year": 2006,
        "Precipitation": 45.72,
        "Max_Temp": 100
      },
      {
        "Year": 2007,
        "Precipitation": 35.66,
        "Max_Temp": 106
      },
      {
        "Year": 2008,
        "Precipitation": 48.17,
        "Max_Temp": 97
      },
      {
        "Year": 2009,
        "Precipitation": 57.87,
        "Max_Temp": 95
      },
      {
        "Year": 2010,
        "Precipitation": 59.08,
        "Max_Temp": 101
      },
      {
        "Year": 2011,
        "Precipitation": 52.14,
        "Max_Temp": 102
      },
      {
        "Year": 2012,
        "Precipitation": 45.82,
        "Max_Temp": 109
      },
      {
        "Year": 2013,
        "Precipitation": 54.88,
        "Max_Temp": 97
      },
      {
        "Year": 2014,
        "Precipitation": 50.59,
        "Max_Temp": 97
      },
      {
        "Year": 2015,
        "Precipitation": 50.8,
        "Max_Temp": 97
      },
      {
        "Year": 2016,
        "Precipitation": 42.73,
        "Max_Temp": 98
      },
      {
        "Year": 2017,
        "Precipitation": 52.92,
        "Max_Temp": 98
      },
      {
        "Year": 2018,
        "Precipitation": 58.94,
        "Max_Temp": 99
      }
    ];

    return (
      <div id="lineplot">
        <h4 style={h4Style}>Nashville Precipitation and Max Temperatures</h4>
        <LineChart
          width={1000}
          height={700}
          // data={this.props.data}
          data = {data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 200,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          {/* <XAxis dataKey="Year" height={60} tick={<XAxisTickLabel />} interval={0}/> */}
          <XAxis dataKey="Year" height={60}/>
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          {/* <Line type="monotone" dataKey="jobs2016" strokeOpacity={opacity.jobs2016} stroke="#8884d8" activeDot={{ r: 8 }} label={<DataPointLabel />} />
          <Line type="monotone" dataKey="jobs2026" strokeOpacity={opacity.jobs2026} stroke="#82ca9d" /> */}
          <Line type="monotone" dataKey="Precipitation" strokeOpacity={opacity.jobs2026} stroke="#8884d8" />
          <Line type="monotone" dataKey="Max_Temp" strokeOpacity={opacity.jobs2026} stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}