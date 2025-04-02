import { useEffect, useState } from 'react';

export const App = () => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    fetch('/api', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message ?? ''));
  }, []);

  return <h1>{message}</h1>;
};
