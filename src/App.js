// import logo from './logo.svg';
import './App.css';
import Course from './Components/Course';
// import { Gird } from 'reactstrap';

function App() {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-4">
           <Course />         
           <Course />         
           <Course />         
      </div>
    </div>
  );
}

export default App;
