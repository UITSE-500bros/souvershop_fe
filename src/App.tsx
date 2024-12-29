import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import MainRoute from "./routes/MainRoute";
import useAuthStore from "./stores/AuthStore";

function App() {
  const loadFromLocalStorage = useAuthStore((state) => state.loadFromStorage);
  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);
  return (
    <>
  
      <ScrollToTop />
      <MainRoute />
    </>
  );
}

export default App;
