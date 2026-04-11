import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImpDate from "../components/ImpDate";
import NavBar from "../components/NavBar";
import Objectives from "../components/Objectives";
import AboutICACECT from "./AboutICACECT";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <p className=" px-4 pt-4 mx-auto text-justify text-lg font-bold text-red-500">
        All accepted, registered and presented papers will be submitted for
        inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
        quality requirements..
      </p>
      <AboutICACECT />
      <Objectives />
      {/* <About /> */}
      {/* <ImpDate /> */}
      {/* <ImportantLinks /> */}
    </>
  );
};

export default Home;
