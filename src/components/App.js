import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import TeamForm from './TeamForm'
import TeamMember from './TeamMember'


const initialTeamMembersList = [
  {
    id: uuid(),
    name: 'Eddy',
    email: 'eddysmurphy@yahoo.com',
    role: 'UX Designer',
  },
];
const initialFormValues = {
  id: uuid(),
  name: '',
  email: '',
  role: '',
}


function App() {

  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChangeHandler = evt => {
    const { name } = evt.target
    const { value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return
    }

    const newTeamMember = { ...formValues, id: uuid() }
    setTeamMembersList([...teamMembersList, newTeamMember])

    setFormValues(initialFormValues)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>

      <TeamForm
        values={formValues}
        onInputChangeHandler={onInputChangeHandler}
        onSubmit={onSubmit}
      />

      {
        teamMembersList.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
