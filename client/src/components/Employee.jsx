import React from 'react';
import Axios from 'axios';

function Employee({
  id,
  name,
  age,
  country,
  position,
  wage,
  newWage,
  setNewWage,
}) {
  const updateWage = (id) => {
    Axios.put('http://localhost:3000/update', { wage: newWage, id: id }).then(
      (response) => {
        alert('update');
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`);
  };

  return (
    <div className='employee'>
      <h2>
        {name} ({age})
      </h2>
      <ul>
        <li>Country: {country}</li>
        <li>Position: {position}</li>
        <li>Wage: {wage}</li>
      </ul>
      <div>
        <input
          type='number'
          placeholder=''
          onChange={(e) => setNewWage(e.target.value)}
        />
        <button
          onClick={() => {
            updateWage(id);
          }}
        >
          update
        </button>
        <button
          onClick={() => {
            deleteEmployee(id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Employee;
