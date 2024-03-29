import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfsAction } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  const data = useSelector(state => state)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchSmurfsAction.fetchSmurfs())
  }, [])
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
 
}

export default App

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.