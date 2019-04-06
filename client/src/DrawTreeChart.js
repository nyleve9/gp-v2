import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import './DrawTreeChart.css';

const exTreeData = 
[{"name": "STEM Jobs","_collapsed":"true", "children": [{"name": "Architecture & engineering", "children": [{"name": "Engineers", "children": [{"name": "Civil engineers"}, {"name": "Computer hardware engineers"}, {"name": "Electrical & electronics engineers", "children": [{"name": "Electrical engineers"},  {"name": "Electronics engineers, except computer"}]}, {"name": "Engineers, all other"}, {"name": "Industrial engineers, including health & safety", "children": [{"name": "Health & safety engineers, except mining safety engineers & inspectors"}, {"name": "Industrial engineers"}]}, {"name": "Chemical engineers"}, {"name": "Petroleum engineers"}, {"name": "Marine engineers & naval architects"}, {"name": "Mining & geological engineers, including mining safety engineers"}, {"name": "Biomedical engineers"}, {"name": "Materials engineers"}, {"name": "Nuclear engineers"}, {"name": "Agricultural engineers"}, {"name": "Environmental engineers"},  {"name": "Aerospace engineers"}, {"name": "Mechanical engineers"}]}, {"name": "Architects, surveyors, etc", "children": [{"name": "Surveyors, cartographers, etc", "children": [{"name": "Surveyors"}, {"name": "Cartographers & photogrammetrists"}]}, {"name": "Architects, except naval", "children": [{"name": "Architects, except landscape & naval"},  {"name": "Landscape architects"}]}]}, {"name": "Drafters, engineering technicians, etc", "children": [{"name": "Surveying & mapping technicians"},  {"name": "Drafters", "children": [{"name": "Drafters, all other"}, {"name": "Electrical & electronics drafters"}, {"name": "Architectural & civil drafters"},  {"name": "Mechanical drafters"}]}, {"name": "Engineering technicians, except drafters", "children": [{"name": "Electrical & electronics engineering technicians"}, {"name": "Engineering technicians, except drafters, etc"}, {"name": "Industrial engineering technicians"}, {"name": "Aerospace engineering & operations technicians"}, {"name": "Civil engineering technicians"}, {"name": "Electro-mechanical technicians"},  {"name": "Mechanical engineering technicians"}, {"name": "Environmental engineering technicians"}]}]}]}, {"name": "Healthcare practitioners & technical", "children": [{"name": "Other healthcare practitioners & technical", "children": [{"name": "Miscellaneous health practitioners & technical workers", "children": [{"name": "Healthcare practitioners & technical workers, all other"},  {"name": "Athletic trainers"}, {"name": "Genetic counselors"}]},  {"name": "Occupational health & safety specialists & technicians", "children": [{"name": "Occupational health & safety technicians"}, {"name": "Occupational health & safety specialists"}]}]}, {"name": "Health diagnosing & treating practitioners", "children": [{"name": "Physician assistants"}, {"name": "Pharmacists"}, {"name": "Registered nurses"}, {"name": "Nurse practitioners"}, {"name": "Audiologists"}, {"name": "Chiropractors"}, {"name": "Therapists", "children": [{"name": "Occupational therapists"}, {"name": "Therapists, all other"}, {"name": "Respiratory therapists"}, {"name": "Physical therapists"}, {"name": "Exercise physiologists"}, {"name": "Radiation therapists"}, {"name": "Speech-language pathologists"},  {"name": "Recreational therapists"}]}, {"name": "Nurse midwives"},  {"name": "Veterinarians"}, {"name": "Optometrists"}, {"name": "Physicians & surgeons", "children": [{"name": "Surgeons"}, {"name": "Family & general practitioners"}, {"name": "Pediatricians, general"}, {"name": "Anesthesiologists"}, {"name": "Psychiatrists"}, {"name": "Obstetricians & gynecologists"}, {"name": "Internists, general"},  {"name": "Physicians & surgeons, all other"}]}, {"name": "Dentists", "children": [{"name": "Oral & maxillofacial surgeons"}, {"name": "Dentists, general"}, {"name": "Orthodontists"}, {"name": "Dentists, all other specialists"}, {"name": "Prosthodontists"}]}, {"name": "Dietitians & nutritionists"}, {"name": "Podiatrists"}, {"name": "Nurse anesthetists"}, {"name": "Health diagnosing & treating practitioners, all other"}]}, {"name": "Health technologists & technicians", "children": [{"name": "Opticians, dispensing"}, {"name": "Clinical laboratory technologists & technicians", "children": [{"name": "Medical & clinical laboratory technicians"},  {"name": "Medical & clinical laboratory technologists"}]}, {"name": "Emergency medical technicians & paramedics"}, {"name": "Licensed practical & licensed vocational nurses"}, {"name": "Miscellaneous health technologists & technicians", "children": [{"name": "Health technologists & technicians, all other"}, {"name": "Orthotists & prosthetists"},  {"name": "Hearing aid specialists"}]}, {"name": "Diagnostic related technologists & technicians", "children": [{"name": "Magnetic resonance imaging technologists"}, {"name": "Nuclear medicine technologists"}, {"name": "Cardiovascular technologists & technicians"},  {"name": "Radiologic technologists"}, {"name": "Diagnostic medical sonographers"}]}, {"name": "Health practitioner support technologists & technicians", "children": [{"name": "Dietetic technicians"}, {"name": "Ophthalmic medical technicians"}, {"name": "Pharmacy technicians"}, {"name": "Psychiatric technicians"}, {"name": "Respiratory therapy technicians"},  {"name": "Surgical technologists"}, {"name": "Veterinary technologists & technicians"}]}, {"name": "Dental hygienists"},  {"name": "Medical records & health information technicians"}]}]}, {"name": "Farming, fishing, etc", "children": [{"name": "Forest, conservation, etc", "children": [{"name": "Logging workers", "children": [{"name": "Log graders & scalers"},  {"name": "Fallers"}, {"name": "Logging equipment operators"}, {"name": "Logging workers, all other"}]}, {"name": "Forest & conservation workers"}]}, {"name": "Agricultural workers", "children": [{"name": "Miscellaneous agricultural workers", "children": [{"name": "Farmworkers & laborers, crop, etc"}, {"name": "Farmworkers, farm, etc"}, {"name": "Agricultural equipment operators"},  {"name": "Agricultural workers, all other"}]},  {"name": "Graders & sorters, agricultural products"}, {"name": "Agricultural inspectors"}, {"name": "Animal breeders"}]}, {"name": "Supervisors of farming, fishing, etc", "children": [ {"name": "First-line supervisors of farming, fishing, etc"}]}, {"name": "Fishing & hunting workers"}]}, {"name": "Education, training, etc", "children": [{"name": "Postsecondary teachers", "children": [{"name": "Math & computer teachers, postsecondary", "children": [{"name": "Computer science teachers, postsecondary"},  {"name": "Mathematical science teachers, postsecondary"}]}, {"name": "Engineering & architecture teachers, postsecondary", "children": [{"name": "Architecture teachers, postsecondary"},  {"name": "Engineering teachers, postsecondary"}]}, {"name": "Social sciences teachers, postsecondary", "children": [{"name": "Geography teachers, postsecondary"}, {"name": "Area, ethnic, etc"}, {"name": "Sociology teachers, postsecondary"}, {"name": "Political science teachers, postsecondary"}, {"name": "Anthropology & archeology teachers, postsecondary"}, {"name": "Social sciences teachers, postsecondary, etc"},  {"name": "Psychology teachers, postsecondary"}, {"name": "Economics teachers, postsecondary"}]}, {"name": "Life sciences teachers, postsecondary", "children": [{"name": "Agricultural sciences teachers, postsecondary"}, {"name": "Forestry & conservation science teachers, postsecondary"},  {"name": "Biological science teachers, postsecondary"}]}, {"name": "Health teachers, postsecondary", "children": [{"name": "Nursing instructors & teachers, postsecondary"},  {"name": "Health specialties teachers, postsecondary"}]}, {"name": "Education & library science teachers, postsecondary", "children": [{"name": "Library science teachers, postsecondary"},  {"name": "Education teachers, postsecondary"}]}, {"name": "Physical sciences teachers, postsecondary", "children": [{"name": "Atmospheric, earth, etc"}, {"name": "Environmental science teachers, postsecondary"},  {"name": "Chemistry teachers, postsecondary"}, {"name": "Physics teachers, postsecondary"}]}]}, {"name": "Preschool, primary, etc", "children": [{"name": "Secondary school teachers", "children": [{"name": "Secondary school teachers, except special ed"},  {"name": "Career education teachers, secondary school"}]}, {"name": "Special education teachers", "children": [{"name": "Special education teachers, all other"}, {"name": "Special education teachers, kindergarten & elementary school"}, {"name": "Special education teachers, preschool"}, {"name": "Special education teachers, middle school"},  {"name": "Special education teachers, secondary school"}]},  {"name": "Preschool & kindergarten teachers", "children": [ {"name": "Kindergarten teachers, except special education"}, {"name": "Preschool teachers, except special ed"}]}, {"name": "Elementary & middle school teachers", "children": [{"name": "Career education teachers, middle school"}, {"name": "Middle school teachers, except special ed"},  {"name": "Elementary school teachers, except special ed"}]}]}]}, {"name": "Computer & mathematical", "children": [{"name": "Mathematical science", "children": [{"name": "Miscellaneous mathematical science", "children": [{"name": "Mathematical science, all other"}, {"name": "Mathematical technicians"}]}, {"name": "Operations research analysts"}, {"name": "Mathematicians"},  {"name": "Actuaries"}, {"name": "Statisticians"}]}, {"name": "Computer", "children": [{"name": "Software developers & programmers", "children": [{"name": "Software developers, applications"}, {"name": "Web developers"},  {"name": "Software developers, systems software"}, {"name": "Computer programmers"}]}, {"name": "Computer & information analysts", "children": [{"name": "Computer systems analysts"}, {"name": "Information security analysts"}]}, {"name": "Computer support specialists", "children": [{"name": "Computer network support specialists"},  {"name": "Computer user support specialists"}]}, 
{"name": "Computer & information research scientists"}, {"name": "Database & systems administrators & network architects", "children": [{"name": "Database administrators"}, {"name": "Computer network architects"},  {"name": "Network & computer systems administrators"}]},  {"name": "Computer, all other"}]}]}, {"name": "Life, physical, etc", "children": [{"name": "Social scientists & related workers", "children": [{"name": "Economists"}, {"name": "Survey researchers"}, {"name": "Miscellaneous social scientists & related workers", "children": [{"name": "Social scientists & related workers, all other"}, {"name": "Political scientists"},  {"name": "Anthropologists & archeologists"}, {"name": "Historians"}, {"name": "Geographers"}]}, {"name": "Sociologists"},  {"name": "Psychologists", "children": [{"name": "Industrial-organizational psychologists"}, {"name": "Clinical, counseling, etc"}, {"name": "Psychologists, all other"}]}, {"name": "Urban & regional planners"}]}, {"name": "Life, physical, & social science technicians"}, {"name": "Life scientists", "children": [{"name": "Life scientists, all other"}, {"name": "Conservation scientists & foresters", "children": [{"name": "Foresters"}, {"name": "Conservation scientists"}]}, {"name": "Medical scientists", "children": [{"name": "Medical scientists, except epidemiologists"}, {"name": "Epidemiologists"}]}, {"name": "Biological scientists", "children": [{"name": "Microbiologists"},  {"name": "Biochemists & biophysicists"}, {"name": "Zoologists & wildlife biologists"}, {"name": "Biological scientists, all other"}]},  {"name": "Agricultural & food scientists", "children": [{"name": "Food scientists & technologists"},  {"name": "Soil & plant scientists"}, {"name": "Animal scientists"}]}]}, {"name": "Life, physical, etc", "children": [{"name": "Biological technicians"}, {"name": "Chemical technicians"}, {"name": "Miscellaneous life, physical, etc", "children": [{"name": "Forensic science technicians"}, {"name": "Forest & conservation technicians"}, {"name": "Environmental science & protection technicians, including health"},  {"name": "Life, physical, & social science technicians, all other"}]}, {"name": "Agricultural & food science technicians"}, {"name": "Geological & petroleum technicians"}, {"name": "Nuclear technicians"}, {"name": "Social science research assistants"}]}, {"name": "Physical scientists", "children": [{"name": "Environmental scientists & geoscientists", "children": [{"name": "Hydrologists"},  {"name": "Environmental scientists & specialists, including health"}, {"name": "Geoscientists, except hydrologists & geographers"}]},  {"name": "Chemists & materials scientists", "children": [{"name": "Materials scientists"},  {"name": "Chemists"}]}, {"name": "Atmospheric & space scientists"}, {"name": "Astronomers & physicists", "children": [{"name": "Astronomers"},  {"name": "Physicists"}]}, {"name": "Physical scientists, all other"}]}]}]}];


class DrawTreeChart extends Component {
  state = {  }
  render() { 
    return (  
      <div id="treeWrapper" style={{width: '300em', height: '300em'}}>
        <Tree 
          data={exTreeData} 
          translate={{x:100, y:400}}
          separation={{siblings:1, nonSiblings:1}}
          textLayout={{textAnchor: "start", x: 12, y: 0, transform: undefined }}
        />
      </div>
    );
  }
}

export default DrawTreeChart;