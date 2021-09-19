import React, { useEffect, useState } from 'react';
import { Message } from '@routine-support/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <p>Here will be an app</p>
  );
};

export default App;
