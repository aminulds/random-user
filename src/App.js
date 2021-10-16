import { useEffect, useState } from "react";
import User from "./components/User/User";
import data from "./data/Data.json";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => setUsers(data), []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
}

export default App;
