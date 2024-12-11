import { useState } from 'react'

function Person() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')

    const fullName = firstName + " " +  lastName


    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
      }


    function handleLastNameChange(e) {
        setLastName(e.target.value);
      }
  
    return (
      <>
      
        <label>
            First Name:{''}
            <input
            value={firstName}
            onChange={handleFirstNameChange}
            />
        </label><br />

        <label>
            Last Name:{''}
            <input
            value={lastName}
            onChange={handleLastNameChange}
            />
        </label> <br />

      <p>Hello {fullName}</p>

     

      </>
    );
  }
  
  export default Person