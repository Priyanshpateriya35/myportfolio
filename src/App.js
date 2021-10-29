import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Switch, Route } from "react-router-dom";
import Header from "./Containers/Header";
import Home from "./Containers/Home"
import About from "./Containers/About";
import MyService from "./Containers/MyService";
import Project from "./Containers/Project";
import Contact from "./Containers/Contact";
import "./App.css";
import Navbar from "./Containers/Navbar";
import Myskill from "./Containers/Myskill";
import Error from "./Containers/Error";

function App() {
  return (
    <>
        
       
       <Navbar />    
      <Switch>
      
       <Route exact path="/"  component={Home} />
       <Route exact path="/home"  component={Home} />
       
       <Route exact path="/header"  component={Header} />
       <Route exact path="/about" component={About} />
       <Route exact path="/myskills" component={Myskill} />
       <Route exact path="/myservices" component={MyService} />
       <Route exact path="/projects" component={Project} />
       <Route exact path="/contact" component={Contact} />
       <Route path={undefined} component={Error} />
      </Switch>
         
    </>
  );
}

export default App;
