import React ,{Component} from 'react';
import Header from './components/Header';
import Books from './components/Book';
import './App.css';
const App = () => {
  return (
    <div className="App">
    <Header /> 
    <Books />    
    </div>
  );
};

export default App;



