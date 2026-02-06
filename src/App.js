//import logo from './logo.svg';
import {useState} from "react";
import InspectionForm from './components/InspectionForm.js';
import PatrolForm from './components/PatrolForm.js';
import { useNavigate, Routes, Route } from "react-router-dom";
import './App.css';
import DailyActivity from "./components/DailyActivity.js";



function App() {

  const navigate = useNavigate();

  // const [currentForm, setCurrentForm] = useState(null);

  


return ( 

  
    <div className="app-background">
      <h1 className="App-header">PostGaurd Security Solutions</h1>
    <button onClick={() =>
      navigate('/patrol')}>Patrol Form</button>
    <button onClick={() =>
      navigate('/inspection')}>Inspection Form</button>

    <button onClick={() =>
      navigate('dailyactivityreport')}>Daily Activity Report</button>

      <Routes>

        <Route path= "/patrol" element={<PatrolForm />} />
          
        <Route path= "/inspection" element={<InspectionForm />} />

        <Route path="/dailyactivityreport" element={<DailyActivity />} />

      </Routes>



  {/* {currentForm === "patrol" && <PatrolForm />}
  {currentForm === "inspection" && <InspectionForm />}
     */}


</div>
      

)
}

export default App;

  

