import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import MainRoute from "./routes/MainRoute";
import useAuthStore from "./stores/AuthStore";
import { ToastContainer } from "react-toastify";

function App() {
  const loadFromLocalStorage = useAuthStore((state) => state.loadFromStorage);
  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <MainRoute />
    </>
  );
}

export default App;
