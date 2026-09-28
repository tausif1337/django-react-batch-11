import { useContext } from "react";
import UserContext from "../UserContext";
function AllUsers() {
  const { name, age } = useContext(UserContext);
  return (
    <div>
      <h1>All Users</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default AllUsers;
