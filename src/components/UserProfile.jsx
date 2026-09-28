import { useContext } from "react";
import UserContext from "../UserContext";
function UserProfile() {
  const { name, age } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserProfile;
