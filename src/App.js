import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network request fail...")
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data)
        setLoading(false)
      })
      .catch((errr) => {
        setError(errr)
        setLoading(false)
      })
  }, []);
  if (loading) {
    return <p>loading</p>
  }
  if (error) {
    return <p>Error:{error.message}</p>
  }
  return (
    <h1>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{user.first_name}{user.last_name}</p>
              <p>Email:{user.email}</p>
            </li>
          ))
        }
      </ul>
    </h1>
  
  )

}

export default App;