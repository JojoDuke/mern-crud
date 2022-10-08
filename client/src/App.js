import './App.css';
import { useState, useEffect } from "react";
import Axios from 'axios';

function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    Axios.get("localhost:3001/getUsers")
      .then((res) => {
        setUsersList(res.data)
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <div className="App">
      <div className='userDisplay'>
        {
          usersList.map((user) => {
            return (
              <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
