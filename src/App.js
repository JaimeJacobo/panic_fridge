import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fridge from './components/Fridge'
import './App.scss';
import Menu from './components/Menu';
import Title from './components/Title';
import ModalHungry from './components/ModalHungry';
import NavbarF from './components/NavbarF';
import {Button,Modal,Container,Card,Navbar} from 'reactstrap';


class App extends Component {
  render(){
    return(
      <div className="App">
      <NavbarF />
      <Title />
      <Fridge />
      <Menu />
      <ModalHungry />
     
    </div>
    )
  }
}


export default App 