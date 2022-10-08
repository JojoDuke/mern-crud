import './App.css';
import { useState, useEffect } from "react";
import Axios from 'axios';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  //
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((error) => console.log(error.response));
  }, []);

  //
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name,
      age: age,
      username: username,
    })
      .then((res) => {
        alert("User Created");
        setUsersList([...usersList], {
          name,
          age,
          username,
        })
      })
      .catch((error) => console.log(error.response));
  }

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

      <div>
        <input type="text" placeholder='Name...' onChange={(event) => setName(event.target.value)}/>
        <input type="text" placeholder='Age...' onChange={(event) => setAge(event.target.value)}/>
        <input type="text" placeholder='Username...' onChange={(event) => setUsername(event.target.value)}/>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
