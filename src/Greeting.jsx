import { useContext } from "react";
import {UserContext} from "./App"

function Greeting() {
  const user = useContext(UserContext)
  return (
    <>
      <p className="bg-green-400 text-4xl font-bold text-center">
        Welcome to React Class {user}
      </p>
    </>
  );
}

export default Greeting;