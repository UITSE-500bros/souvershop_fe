import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <div className="App">
      
        <ScrollToTop />
        <MainRoute />
      
    </div>
  );
}

export default App;
