import { useState } from 'react';

function InfoInputs() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const displayInfo = () => {
    console.log(name, age, country, position, wage);
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
        age='age'
        id='age'
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor='position'>Position: </label>
      <input
        type='text'
        position='position'
        id='position'
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor='country'>Country: </label>
      <input
        type='text'
        country='country'
        id='country'
        onChange={(e) => setCountry(e.target.value)}
      />
      <label htmlFor='wage'>Wage (year): </label>
      <input
        type='number'
        wage='wage'
        id='wage'
        onChange={(e) => setWage(e.target.value)}
      />
      <button onClick={displayInfo}>Add Employee</button>
    </section>
  );
}

export default InfoInputs;
