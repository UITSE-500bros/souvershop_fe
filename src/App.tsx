import { useState } from "react";
import Home from "./screens/Home";
import { Footer } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Footer />
      </div>
    
    </>
  );
}

export default App;
