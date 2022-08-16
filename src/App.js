import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
// import About from './components/About'; 
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('cls2')
  // const [greenMode, setGreenMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000)
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    // setInterval(() => {
    //   document.title = 'TextUtils - mode enabled';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'TextUtils is amazing';
    // }, 1500);
    // if(mode === 'light'){
    //   setMode('dark')
    //   document.body.style.backgroundColor = "#161244"
    //   showAlert('Selected Mode is Enabled', "success")
    //   document.title = 'TextUtils - mode enabled';
    // }else if(mode === 'dark'){
    //   setMode('light')
    //   document.body.style.backgroundColor = "white"
    //   showAlert('Selected Mode is Enabled', "success")
    //   document.title = 'TextUtils - mode enabled';
    // }
  }
  // const toggleGreenMode = () => {
  //   if(greenMode === 'light' ){
  //     setGreenMode('#ADEFD1FF')
  //     document.body.style.backgroundColor = "#ADEFD1FF"
  //   }else if(greenMode ==='#ADEFD1FF'){
  //     setGreenMode('#light')
  //     document.body.style.backgroundColor = "light"
  //   }
  // }
  return(
    <>
    {/* <Router> */}
      <Navbar title="Textutils" about ="About Us"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
    {/* /users => components 1
    /users.home => components 2 
    for this => exact will use*/
  }
      {/* <Routes> 
        <Route exact path='/' element={<Textform heading="Enter the Text to Analyze"  mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
      </Routes> */}
      <Textform heading="Enter the Text to Analyze"  mode={mode} showAlert={showAlert}/>
      </div>
    {/* </Router> */}
   </>
  );
}
export default App;
