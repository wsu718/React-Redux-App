import React from 'react';
import './App.css';
import RepoList from './components/RepoList';
import RepoForm from './components/RepoForm';

function App() {
  return (
    <div className="App">
      <h1>PACKAGE PICKER</h1>
      <h3>Compare open source packages</h3>
      <RepoForm />
      <RepoList />
    </div>
  );
}

export default App;
