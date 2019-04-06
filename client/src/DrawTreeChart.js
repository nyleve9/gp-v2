import React, { Component } from 'react';
import Tree from 'react-d3-tree';

// const exTreeData = [
//   {
//     name: 'All Jobs',
//     children: [
//       {
//         name: 'STEM',
//         children: [
//           {
//             name: 'Biology',
//             _collapsed: true,
//             children: [
//               {
//                 name: 'Microbiology',
//               },
//               {
//                 name: 'Ecology',
//               },
//             ],
//           },
//           {
//             name: 'Mathematics',
//           },
//         ],
//       },
//       {
//         name: 'Business',
//       },
//       {
//         name: 'Library Science'
//       }
//     ],
//   },
// ];


const exTreeData = 

[{"name": "STEM Jobs", "children": [{"name": "Architecture & engineering", "children": [{"name": "Engineers", "children": [{"name": "Civil engineers"}, {"name": "Computer hardware engineers"}, {"name": "Electrical & electronics engineers", "children": [{"name": "Electrical engineers"}, {"name": "Electronics engineers, except computer"}]}, {"name": "Engineers, all other"}, {"name": "Industrial engineers, including health & safety", "children": [{"name": "Health & safety engineers, except mining safety engineers & inspectors"}, {"name": "Industrial engineers"}]}, {"name": "Chemical engineers"}, {"name": "Petroleum engineers"}, {"name": "Marine engineers & naval architects"}, {"name": "Mining & geological engineers, including mining safety engineers"}, {"name": "Biomedical engineers"}, {"name": "Materials engineers"}, {"name": "Nuclear engineers"}, {"name": "Agricultural engineers"}, {"name": "Environmental engineers"}, {"name": "Aerospace engineers"}, {"name": "Mechanical engineers"}]}, {"name": "Architects, surveyors, etc", "children": [{"name": "Surveyors, cartographers, etc", "children": [{"name": "Surveyors"}, {"name": "Cartographers & photogrammetrists"}]}, {"name": "Architects, except naval", "children": [{"name": "Architects, except landscape & naval"}, {"name": "Landscape architects"}]}]}, {"name": "Drafters, engineering technicians, etc", "children": [{"name": "Surveying & mapping technicians"}, {"name": "Drafters", "children": [{"name": "Drafters, all other"}, {"name": "Electrical & electronics drafters"}, {"name": "Architectural & civil drafters"}, {"name": "Mechanical drafters"}]}, {"name": "Engineering technicians, except drafters", "children": [{"name": "Electrical & electronics engineering technicians"}, {"name": "Engineering technicians, except drafters, etc"}, {"name": "Industrial engineering technicians"}, {"name": "Aerospace engineering & operations technicians"}, {"name": "Civil engineering technicians"}, {"name": "Electro-mechanical technicians"}, {"name": "Mechanical engineering technicians"}, {"name": "Environmental engineering technicians"}]}]}]}, {"name": "Computer & mathematical", "children": [{"name": "Mathematical science", "children": [{"name": "Miscellaneous mathematical science", "children": [{"name": "Mathematical science, all other"}, {"name": "Mathematical technicians"}]}, {"name": "Operations research analysts"}, {"name": "Mathematicians"}, {"name": "Actuaries"}, {"name": "Statisticians"}]}, {"name": "Computer", "children": [{"name": "Software developers & programmers", "children": [{"name": "Software developers, applications"}, {"name": "Web developers"}, {"name": "Software developers, systems software"}, {"name": "Computer programmers"}]}, {"name": "Computer & information analysts", "children": [{"name": "Computer systems analysts"}, {"name": "Information security analysts"}]}, {"name": "Computer support specialists", "children": [{"name": "Computer network support specialists"}, {"name": "Computer user support specialists"}]}, {"name": "Computer & information research scientists"}, {"name": "Database & systems administrators & network architects", "children": [{"name": "Database administrators"}, {"name": "Computer network architects"}, {"name": "Network & computer systems administrators"}]}, {"name": "Computer, all other"}]}]}, {"name": "Life, physical, etc", "children": [{"name": "Social scientists & related workers", "children": [{"name": "Economists"}, {"name": "Survey researchers"}, {"name": "Miscellaneous social scientists & related workers", "children": [{"name": "Social scientists & related workers, all other"}, {"name": "Political scientists"}, {"name": "Anthropologists & archeologists"}, {"name": "Historians"}, {"name": "Geographers"}]}, {"name": "Sociologists"}, {"name": "Psychologists", "children": [{"name": "Industrial-organizational psychologists"}, {"name": "Clinical, counseling, etc"}, {"name": "Psychologists, all other"}]}, {"name": "Urban & regional planners"}]}, {"name": "Life, physical, & social science technicians"}, {"name": "Life scientists", "children": [{"name": "Life scientists, all other"}, {"name": "Conservation scientists & foresters", "children": [{"name": "Foresters"}, {"name": "Conservation scientists"}]}, {"name": "Medical scientists", "children": [{"name": "Medical scientists, except epidemiologists"}, {"name": "Epidemiologists"}]}, {"name": "Biological scientists", "children": [{"name": "Microbiologists"}, {"name": "Biochemists & biophysicists"}, {"name": "Zoologists & wildlife biologists"}, {"name": "Biological scientists, all other"}]}, {"name": "Agricultural & food scientists", "children": [{"name": "Food scientists & technologists"}, {"name": "Soil & plant scientists"}, {"name": "Animal scientists"}]}]}, {"name": "Life, physical, etc", "children": [{"name": "Biological technicians"}, {"name": "Chemical technicians"}, {"name": "Miscellaneous life, physical, etc", "children": [{"name": "Forensic science technicians"}, {"name": "Forest & conservation technicians"}, {"name": "Environmental science & protection technicians, including health"}, {"name": "Life, physical, & social science technicians, all other"}]}, {"name": "Agricultural & food science technicians"}, {"name": "Geological & petroleum technicians"}, {"name": "Nuclear technicians"}, {"name": "Social science research assistants"}]}, {"name": "Physical scientists", "children": [{"name": "Environmental scientists & geoscientists", "children": [{"name": "Hydrologists"}, {"name": "Environmental scientists & specialists, including health"}, {"name": "Geoscientists, except hydrologists & geographers"}]}, {"name": "Chemists & materials scientists", "children": [{"name": "Materials scientists"}, {"name": "Chemists"}]}, {"name": "Atmospheric & space scientists"}, {"name": "Astronomers & physicists", "children": [{"name": "Astronomers"}, {"name": "Physicists"}]}, {"name": "Physical scientists, all other"}]}]}]}];

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