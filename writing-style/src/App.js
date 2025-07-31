import React from 'react'
import './App.css';
import Home from "./component/Home";
import Writing from "./component/Writing";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [isDark, setIsDark] = useState(false);
  return (
    <Router>
      <div className={isDark ? "dark" : "light"}>
        <NavBar isDark={isDark} setISDark={setIsDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
