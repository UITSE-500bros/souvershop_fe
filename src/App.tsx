import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./screens/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className=" align-top justify-center text-center text-2xl ">

      </header>

      <div>
        <Home />
      </div>
    
    </>
  );
}

export default App;
