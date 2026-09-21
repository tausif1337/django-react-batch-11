import { createContext } from "react";
import Greeting from "./Greeting";

export const UserContext = createContext();

function App() {
  const name = "TAUSIF";

  return (
    <div>
      <UserContext.Provider value={name}>
        <Greeting />
        
      </UserContext.Provider>
    </div>
  );
}
export default App;
