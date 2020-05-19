import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import TeamForm from './TeamForm'
import TeamMember from './TeamMember'


const initialTeamMembersList = [
  {
    id: uuid(),
    name: '',
    email: '',
    role: '',
  },
];
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {

  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembersList);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>

      <TeamForm 
        values
      />
    </div>
  );
}

export default App;
