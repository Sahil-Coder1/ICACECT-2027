import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {location.pathname !== "/" && (
        <div className="lg:px-4 px-0">
          <Header />
        </div>
      )}

      {location.pathname !== "/" && (
        <div className="lg:px-4 px-0">
          <NavBar />
        </div>
      )}

      {/* {location.pathname !== "/" && (
        <div className="lg:px-4 px-0">
          <Header />
        </div>
      )} */}
      <main
        className={`flex-1 ${
          location.pathname === "/" ? "p-0" : "lg:px-8 px-4 py-4"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
