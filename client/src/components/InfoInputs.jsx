import { useState } from 'react';
import Axios from 'axios';
import Employee from './Employee';

function InfoInputs() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const [newWage, setNewWage] = useState(0);

  const addEmployee = () => {
    if (name && age && country && position && wage) {
      Axios.post('http://localhost:3000/create', {
        name,
        age,
        country,
        position,
        wage,
      }).then((r) => {
        console.log('success');
      });
    } else {
      console.log('empty fields');
    }
  };
  const getEmployees = () => {
    Axios.get('http://localhost:3000/read').then((r) => {
      setEmployeeList(r.data);
    });
  };

  return (
    <section className='information'>
      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        name='name'
        id='name'
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='age'>Age: </label>
      <input
        type='number'
        name='age'
        id='age'
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor='position'>Position: </label>
      <input
        type='text'
        name='position'
        id='position'
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor='country'>Country: </label>
      <input
        type='text'
        name='country'
        id='country'
        onChange={(e) => setCountry(e.target.value)}
      />
      <label htmlFor='wage'>Wage (year): </label>
      <input
        type='number'
        name='wage'
        id='wage'
        onChange={(e) => setWage(e.target.value)}
      />
      <button onClick={addEmployee}>Add Employee</button>
      <button onClick={getEmployees}>Get Employees</button>

      {employeeList.map((employee, key) => {
        return (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            age={employee.age}
            country={employee.country}
            position={employee.position}
            wage={employee.wage}
            newWage={newWage}
            setNewWage={setNewWage}
          />
        );
      })}
    </section>
  );
}

export default InfoInputs;
