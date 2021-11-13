import React from "react";
import './App.css';
import Cv from "./components/CV/Cv.jsx";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/cv" exact component={Cv} />
        </Routes>
      </Router>

      <div className="Intro">
        <h3>INTRODUCCIÒN</h3>
        <p>Lorem</p>
      </div>  
      {/* {} */}
    </div>
  );
}

export default App;
