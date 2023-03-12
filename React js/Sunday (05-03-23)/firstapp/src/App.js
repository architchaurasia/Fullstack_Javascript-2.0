import { useState, createContext } from "react";
import Navbar from "./Component/Navbar";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  
  const myName = (event) => {
    setName(event.target.value)
  }

  const myColor = (event) => {
    setColor(event.target.value)
  }

  return (
    <>
     <Navbar />
     <form>
      <input type= {"text"} placeholder = "Enter User Name" value={name} onChange={myName}/>
      <input type={"text"} placeholder="Enter a Color Name" value={color} onChange={myColor}/>
     </form>
    </>
  );
}

export default App;
