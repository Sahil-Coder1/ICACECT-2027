import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImpDate from "../components/ImpDate";
import ImportantLinks from "../components/ImportantLinks";
import NavBar from "../components/NavBar";
import Objectives from "../components/Objectives";
import AboutICCTAC from "./AboutICCTAC";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <p className="max-w-7xl px-4 pt-4 mx-auto text-justify text-lg font-bold text-red-500">
        All accepted, registered and presented papers will be submitted for
        inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
        quality requirements..
      </p>
      <AboutICCTAC />
      <Objectives />
      {/* <About /> */}
      {/* <ImpDate /> */}
      {/* <ImportantLinks /> */}
    </>
  );
};

export default Home;
