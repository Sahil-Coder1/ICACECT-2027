import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <>
      <Header />
      {location.pathname !== "/" && <NavBar />}
      <main className="min-h-screen lg:px-8 px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
