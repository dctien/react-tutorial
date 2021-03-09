// import logo from './logo.svg';
import './App.css';
import Course from './Components/Course';
// import { Gird } from 'reactstrap';

function App() {
  const items=[
    {
      name: 'ReactJS',
      time: '30h',
      free: true,
      desc: 'React is very simple'
    },
    {
      name: 'Angular',
      time: '45h',
      free: false,
    },
    {
      name: 'VueJS',
      time: '30h',
      free: true,
    },
  ];

  const elementCourse = items.map((item, index) => 
    <Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
  );

  return (
    <div className="row">
           {/* <Course name="ReactJS" time="30h" free={true}>React is very simple</Course>         
           <Course />         
           <Course />          */}
      {elementCourse}
    </div>
  );
}

export default App;
