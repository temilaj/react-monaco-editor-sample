import React from 'react';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

export default function Home () {
  return(
    <div>
      <h1>Hello, {formatName(user)}!</h1>
    </div>
  );
}


 Home;