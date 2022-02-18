import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');
  const  [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 2500);
  
}

const removeBodyClasses=()=>{
document.body.classList.remove('bg-light');
document.body.classList.remove('bg-dark');
document.body.classList.remove('bg-warning');
;document.body.classList.remove('bg-danger');
;document.body.classList.remove('bg-success');

}

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#1e1d1e';
    showAlert("Dark Mode has Been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode has Been enabled","success");
    }

  }
  return (
  <>
  <Router>
  <Navbar title='Text Utlis' mode={mode} toggleMode={toggleMode} about='About '/>
  <Alert  Alert={alert}  />
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route> 
          <Route exact path="/">
          <Textform showAlert={showAlert} heading='Try TextUtils -Word Counter, Character Counter,Remove extra spaces'   mode={mode}/>
          </Route>
  </Switch>
       
  
  </div>
  </Router>
  </>
  );
}

export default App;
