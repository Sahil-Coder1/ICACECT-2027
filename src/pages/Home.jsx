import Hero from "../components/Hero";
import Objectives from "../components/Objectives";
import AboutICACECT from "./AboutICACECT";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <div className="sticky top-0 z-50"><NavBar /></div> */}

      <p className="space-y-4 text-sm sm:text-base leading-8 lg:px-8 px-4 mt-4 lg:text-base font-bold text-red-500">
        All accepted, registered and presented papers will be submitted for
        inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and
        quality requirements.
      </p>
      <AboutICACECT />
      <Objectives />
      {/* <About /> */}
      {/* <ImpDate /> */}
      {/* <ImportantLinks /> */}
      <p className="text-sm sm:text-base lg:px-8 px-4 mb-8 lg:text-lg text-gray-700 leading-relaxed text-justify">
        The Microsoft CMT service was used for managing the peer-reviewing
        process for this conference. This service was provided for free by
        Microsoft and they bore all expenses, including costs for Azure cloud
        services as well as for software development and support.
      </p>
    </>
  );
};

export default Home;
