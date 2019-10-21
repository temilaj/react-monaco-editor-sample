import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import CodeBlock from './CodeBlock';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

export default function Home() {
  return(
    <div>
      <h1>Hello, {formatName(user)}!</h1>
      <ErrorBoundary>
        <CodeBlock />
      </ErrorBoundary>
    </div>
  );
}


 Home;