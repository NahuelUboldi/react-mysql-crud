import React from 'react';

function Employee({ name, age, country, position, wage }) {
  return (
    <div className='employee'>
      <h2>
        {name} ({age})
      </h2>
      <p>
        He is from {country}. His position is {position}, and have an anual wage
        of {wage}k
      </p>
    </div>
  );
}

export default Employee;
