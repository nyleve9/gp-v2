import React, { Component } from 'react';
import Tree from 'react-d3-tree';

const exTreeData = [
  {
    name: 'All Jobs',
    children: [
      {
        name: 'STEM',
        children: [
          {
            name: 'Biology',
            _collapsed: true,
            children: [
              {
                name: 'Microbiology',
              },
              {
                name: 'Ecology',
              },
            ],
          },
          {
            name: 'Mathematics',
          },
        ],
      },
      {
        name: 'Business',
      },
      {
        name: 'Library Science'
      }
    ],
  },
];

class DrawTreeChart extends Component {
  state = {  }
  render() { 
    return (  
      <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
        <Tree data={exTreeData} />
      </div>
    );
  }
}

export default DrawTreeChart;