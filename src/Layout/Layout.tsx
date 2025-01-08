import { Footer, Header } from "@/components";
import FloatingButton from "@/components/Zalo";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Layout;