import "./App.css";
import About from './Components/About';
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021121";
      showAlert("success", "dark mode is active");
      document.title = "WordPlay-Dark Mode";
      // setInterval(()=>{
      //   document.title="Install WordPlay Now";
      // },1500)
      // setInterval(()=>{
      //   document.title="WordPlay-Dark Mode";
      // },2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "light mode is active");
      document.title = "WordPlay-Light Mode";
    }
  };

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
        <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextBox showAlert={showAlert} mode={mode} heading="Enter text here" />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
