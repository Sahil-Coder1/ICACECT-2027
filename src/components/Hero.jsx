import { Link } from "react-router-dom";
import displayImage from "../assets/integral_solar2.jpeg";

function Hero() {
  return (
    <div className="p-4 md:p-10 lg:px-4 lg:pb-0 lg:pt-0 mx-auto">
      <div className="relative">
        <img
          src={displayImage}
          alt="Integral University"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-500 rounded-3xl flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-lg md:text-2xl font-medium tracking-wide opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
            Welcome To Integral University
          </h2>

          <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-bold my-2 opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
            ICACECT-2027
          </h1>

          <p className="text-white text-xs md:text-sm lg:text-base max-w-3xl leading-relaxed  opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
            International Conference on Advancement in Computer Engineering and
            Communication Technology
          </p>
          <i className="text-slate-100 mb-4 text-xs md:text-sm lg:text-base">
            IEEE Technically Sponsored
          </i>
          {/* <a href="/registration"> */}
          <button
            className="px-6 py-2 md:px-8 md:py-3 
bg-blue-600 text-white 
border-2 border-blue-600 
rounded-full font-semibold shadow-md
transition-all duration-300 ease-in-out
hover:bg-white hover:text-blue-600 hover:font-bold"
          >
            18–19 January, 2027
          </button>
          {/* </a> */}
        </div>
      </div>
      <div className="marquee-container px-2 sm:px-4  mx-auto pt-4">
        {/* <p className="marquee-text text-sm sm:text-base">
          Conference Date May 18 & 19 January 2027 (Last day for Paper
          Submission September 15, 2026)
        </p> */}
      </div>
    </div>
  );
}

export default Hero;
